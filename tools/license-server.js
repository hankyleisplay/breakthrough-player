const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.LICENSE_SERVER_PORT || 8787);
const ADMIN_TOKEN = String(process.env.LICENSE_ADMIN_TOKEN || "change-me-now");
const DB_PATH = path.join(__dirname, "license-db.json");

function randomChunk(length) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < length; i += 1) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

function computeLicenseChecksum(payload) {
  let total = 0;
  for (let i = 0; i < payload.length; i += 1) {
    total = (total + payload.charCodeAt(i) * (i + 17)) % 1679616;
  }
  return total.toString(36).toUpperCase().padStart(4, "0");
}

function normalizeHwid(raw) {
  const hwid = String(raw || "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");

  if (!/^[A-Z0-9]{32}$/.test(hwid)) return "";
  return hwid;
}

function normalizeKey(raw) {
  return String(raw || "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "");
}

function createKey(hwidRaw) {
  const hwid = normalizeHwid(hwidRaw);
  if (!hwid) throw new Error("Invalid HWID format");

  const p1 = randomChunk(4);
  const p2 = randomChunk(4);
  const p3 = computeLicenseChecksum(`${p1}${p2}${hwid}`);
  return `HLP-${p1}-${p2}-${p3}`;
}

function verifyKeyForHwid(keyRaw, hwidRaw) {
  const key = normalizeKey(keyRaw);
  const hwid = normalizeHwid(hwidRaw);

  if (!/^HLP-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(key)) return false;
  if (!hwid) return false;

  const parts = key.split("-");
  const payload = `${parts[1]}${parts[2]}${hwid}`;
  return parts[3] === computeLicenseChecksum(payload);
}

function loadDb() {
  if (!fs.existsSync(DB_PATH)) {
    return { licenses: {}, issuedCount: 0 };
  }

  try {
    const data = JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
    return {
      licenses: data.licenses && typeof data.licenses === "object" ? data.licenses : {},
      issuedCount: Number.isFinite(data.issuedCount) ? data.issuedCount : 0
    };
  } catch {
    return { licenses: {}, issuedCount: 0 };
  }
}

function saveDb(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf8");
}

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, X-Admin-Token",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1024 * 1024) {
        reject(new Error("Body too large"));
      }
    });
    req.on("end", () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
}

function requireAdmin(req, res) {
  const token = String(req.headers["x-admin-token"] || "");
  if (!token || token !== ADMIN_TOKEN) {
    sendJson(res, 401, { ok: false, error: "Unauthorized" });
    return false;
  }
  return true;
}

function sanitizeLicenseView(record) {
  return {
    key: record.key,
    hwid: record.hwid,
    status: record.status,
    plan: record.plan,
    customerEmail: record.customerEmail,
    orderId: record.orderId,
    note: record.note,
    createdAt: record.createdAt,
    activatedAt: record.activatedAt,
    lastValidatedAt: record.lastValidatedAt,
    revokedAt: record.revokedAt,
    revokeReason: record.revokeReason
  };
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);

  if (req.method === "OPTIONS") {
    sendJson(res, 200, { ok: true });
    return;
  }

  if (req.method === "GET" && url.pathname === "/health") {
    sendJson(res, 200, { ok: true, service: "hankyledevteam-license-server" });
    return;
  }

  if (req.method === "POST" && url.pathname === "/create-license") {
    if (!requireAdmin(req, res)) return;

    try {
      const body = await readBody(req);
      const hwid = normalizeHwid(body.hwid);
      if (!hwid) {
        sendJson(res, 400, { ok: false, error: "Invalid HWID" });
        return;
      }

      const db = loadDb();
      const key = createKey(hwid);
      const now = new Date().toISOString();
      const record = {
        key,
        hwid,
        status: "issued",
        plan: String(body.plan || "pro").toLowerCase(),
        customerEmail: String(body.customerEmail || "").trim(),
        orderId: String(body.orderId || "").trim(),
        note: String(body.note || "").trim(),
        createdAt: now,
        activatedAt: null,
        lastValidatedAt: null,
        revokedAt: null,
        revokeReason: null
      };

      db.licenses[key] = record;
      db.issuedCount += 1;
      saveDb(db);

      sendJson(res, 200, { ok: true, license: sanitizeLicenseView(record) });
    } catch (err) {
      sendJson(res, 400, { ok: false, error: err.message || "Create failed" });
    }
    return;
  }

  if (req.method === "POST" && url.pathname === "/activate-license") {
    try {
      const body = await readBody(req);
      const key = normalizeKey(body.key);
      const hwid = normalizeHwid(body.hwid);

      if (!key || !hwid) {
        sendJson(res, 400, { ok: false, error: "key and hwid are required" });
        return;
      }

      const db = loadDb();
      const record = db.licenses[key];
      if (!record) {
        sendJson(res, 404, { ok: false, error: "License not found" });
        return;
      }

      if (record.status === "revoked") {
        sendJson(res, 403, { ok: false, error: "License revoked" });
        return;
      }

      if (record.hwid !== hwid) {
        sendJson(res, 403, { ok: false, error: "HWID mismatch" });
        return;
      }

      if (!verifyKeyForHwid(key, hwid)) {
        sendJson(res, 403, { ok: false, error: "Invalid key signature" });
        return;
      }

      const now = new Date().toISOString();
      if (!record.activatedAt) {
        record.activatedAt = now;
        record.status = "active";
      }
      record.lastValidatedAt = now;
      db.licenses[key] = record;
      saveDb(db);

      sendJson(res, 200, {
        ok: true,
        status: record.status,
        plan: record.plan,
        license: sanitizeLicenseView(record)
      });
    } catch (err) {
      sendJson(res, 400, { ok: false, error: err.message || "Activate failed" });
    }
    return;
  }

  if (req.method === "POST" && url.pathname === "/revoke-license") {
    if (!requireAdmin(req, res)) return;

    try {
      const body = await readBody(req);
      const key = normalizeKey(body.key);
      if (!key) {
        sendJson(res, 400, { ok: false, error: "key is required" });
        return;
      }

      const db = loadDb();
      const record = db.licenses[key];
      if (!record) {
        sendJson(res, 404, { ok: false, error: "License not found" });
        return;
      }

      record.status = "revoked";
      record.revokedAt = new Date().toISOString();
      record.revokeReason = String(body.reason || "manual revoke");
      db.licenses[key] = record;
      saveDb(db);

      sendJson(res, 200, { ok: true, license: sanitizeLicenseView(record) });
    } catch (err) {
      sendJson(res, 400, { ok: false, error: err.message || "Revoke failed" });
    }
    return;
  }

  if (req.method === "GET" && url.pathname === "/licenses") {
    if (!requireAdmin(req, res)) return;

    const db = loadDb();
    const list = Object.values(db.licenses)
      .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
      .map(sanitizeLicenseView);

    sendJson(res, 200, { ok: true, issuedCount: db.issuedCount, licenses: list });
    return;
  }

  sendJson(res, 404, { ok: false, error: "Not found" });
});

server.listen(PORT, () => {
  console.log(`License server running on http://127.0.0.1:${PORT}`);
  if (ADMIN_TOKEN === "change-me-now") {
    console.log("Warning: set LICENSE_ADMIN_TOKEN before production use.");
  }
});
