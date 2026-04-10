const crypto = require("crypto");
const express = require("express");

const app = express();
app.use(express.json({ limit: "256kb" }));

const PORT = Number(process.env.PORT) || 8080;
const TRIAL_DAYS = Number(process.env.TRIAL_DAYS) > 0 ? Number(process.env.TRIAL_DAYS) : 30;
const API_KEY = String(process.env.LICENSE_API_KEY || "");

const devices = new Map();
const licenses = new Map();

function nowIso() {
  return new Date().toISOString();
}

function addDays(date, days) {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}

function createDeviceId(seed = "") {
  return crypto.createHash("sha256").update(`${seed}:${Date.now()}:${Math.random()}`).digest("hex");
}

function getDaysLeft(isoString) {
  if (!isoString) return 0;
  const end = new Date(isoString);
  const diff = end.getTime() - Date.now();
  return diff > 0 ? Math.ceil(diff / (24 * 60 * 60 * 1000)) : 0;
}

function requireApiKey(req, res, next) {
  if (!API_KEY) return next();
  const candidate = req.header("x-api-key");
  if (candidate !== API_KEY) {
    return res.status(401).json({ ok: false, error: "unauthorized" });
  }
  next();
}

function normalizeLicenseKey(raw) {
  return String(raw || "").trim().toUpperCase();
}

function getStatusForDevice(device) {
  if (!device) {
    return {
      tier: "free",
      trialStartedAt: null,
      trialEndsAt: null,
      daysLeft: 0,
      features: {}
    };
  }

  if (device.licenseKey) {
    return {
      tier: "pro",
      trialStartedAt: device.trialStartedAt,
      trialEndsAt: device.trialEndsAt,
      daysLeft: 0,
      features: {
        effects: true,
        lyrics: true,
        normalize: true,
        exportPlaylist: true,
        subtitles: true,
        miniMode: true
      }
    };
  }

  const daysLeft = getDaysLeft(device.trialEndsAt);
  if (daysLeft > 0) {
    return {
      tier: "trial",
      trialStartedAt: device.trialStartedAt,
      trialEndsAt: device.trialEndsAt,
      daysLeft,
      features: {
        effects: true,
        lyrics: true,
        normalize: true,
        exportPlaylist: true,
        subtitles: true,
        miniMode: true
      }
    };
  }

  return {
    tier: "free",
    trialStartedAt: device.trialStartedAt,
    trialEndsAt: device.trialEndsAt,
    daysLeft: 0,
    features: {
      effects: false,
      lyrics: false,
      normalize: false,
      exportPlaylist: false,
      subtitles: false,
      miniMode: false
    }
  };
}

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "license-api",
    now: nowIso(),
    storage: "memory"
  });
});

app.post("/auth/device", requireApiKey, (req, res) => {
  const fingerprint = String(req.body && req.body.fingerprint || "");
  const requestedId = String(req.body && req.body.deviceId || "").trim();
  const deviceId = requestedId || createDeviceId(fingerprint);

  const existing = devices.get(deviceId);
  if (existing) {
    existing.lastSeenAt = nowIso();
    devices.set(deviceId, existing);
    return res.json({ ok: true, deviceId, existed: true });
  }

  devices.set(deviceId, {
    deviceId,
    fingerprint,
    createdAt: nowIso(),
    lastSeenAt: nowIso(),
    trialStartedAt: null,
    trialEndsAt: null,
    licenseKey: null
  });

  res.status(201).json({ ok: true, deviceId, existed: false });
});

app.post("/trial/start", requireApiKey, (req, res) => {
  const deviceId = String(req.body && req.body.deviceId || "").trim();
  if (!deviceId) {
    return res.status(400).json({ ok: false, error: "deviceId required" });
  }

  const device = devices.get(deviceId);
  if (!device) {
    return res.status(404).json({ ok: false, error: "device not found" });
  }

  if (!device.trialStartedAt) {
    const startedAt = new Date();
    device.trialStartedAt = startedAt.toISOString();
    device.trialEndsAt = addDays(startedAt, TRIAL_DAYS).toISOString();
    device.lastSeenAt = nowIso();
    devices.set(deviceId, device);
  }

  res.json({
    ok: true,
    deviceId,
    ...getStatusForDevice(device)
  });
});

app.post("/license/status", requireApiKey, (req, res) => {
  const deviceId = String(req.body && req.body.deviceId || "").trim();
  if (!deviceId) {
    return res.status(400).json({ ok: false, error: "deviceId required" });
  }

  const device = devices.get(deviceId);
  if (!device) {
    return res.status(404).json({ ok: false, error: "device not found" });
  }

  device.lastSeenAt = nowIso();
  devices.set(deviceId, device);

  res.json({
    ok: true,
    deviceId,
    ...getStatusForDevice(device)
  });
});

app.post("/license/activate", requireApiKey, (req, res) => {
  const deviceId = String(req.body && req.body.deviceId || "").trim();
  const licenseKey = normalizeLicenseKey(req.body && req.body.licenseKey);

  if (!deviceId || !licenseKey) {
    return res.status(400).json({ ok: false, error: "deviceId and licenseKey required" });
  }

  const device = devices.get(deviceId);
  if (!device) {
    return res.status(404).json({ ok: false, error: "device not found" });
  }

  let record = licenses.get(licenseKey);
  if (!record) {
    record = {
      licenseKey,
      status: "active",
      devices: []
    };
  }

  if (!record.devices.includes(deviceId)) {
    record.devices.push(deviceId);
  }

  device.licenseKey = licenseKey;
  device.lastSeenAt = nowIso();
  devices.set(deviceId, device);
  licenses.set(licenseKey, record);

  res.json({
    ok: true,
    deviceId,
    ...getStatusForDevice(device)
  });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ ok: false, error: "internal error" });
});

app.listen(PORT, () => {
  console.log(`license-api listening on ${PORT}`);
});
