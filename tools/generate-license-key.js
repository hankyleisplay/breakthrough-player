const fs = require("fs");
const path = require("path");
const readline = require("readline");

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

function generateKey(hwidRaw) {
  const hwid = normalizeHwid(hwidRaw);
  if (!hwid) {
    throw new Error("Invalid HWID. Expected a 32-character hexadecimal like MachineGuid.");
  }

  const a = randomChunk(4);
  const b = randomChunk(4);
  const checksum = computeLicenseChecksum(`${a}${b}${hwid}`);
  return `HLP-${a}-${b}-${checksum}`;
}

function parseArgs() {
  const hwid = process.argv[2];
  const countRaw = process.argv[3] || "1";
  const count = Number(countRaw);

  if (!hwid) return null;

  if (!Number.isFinite(count) || count <= 0) {
    throw new Error("Count must be a positive number.");
  }

  return {
    hwid,
    count: Math.floor(count)
  };
}

function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function getInputFromUser() {
  console.log("hankyledevteam Player+ License Key Generator v1.2.6");
  console.log("-----------------------------------------------");

  const hwid = (await ask("Enter HWID (example: D49E1E79-8B06-4441-9FB1-81D331464DD2): ")).trim();
  const countRaw = (await ask("How many keys to generate? (default 1): ")).trim() || "1";
  const count = Number(countRaw);

  if (!hwid) {
    throw new Error("HWID is required.");
  }

  if (!Number.isFinite(count) || count <= 0) {
    throw new Error("Count must be a positive number.");
  }

  return {
    hwid,
    count: Math.floor(count)
  };
}

function getOutputBaseDir() {
  const isPackagedExe = process.execPath.toLowerCase().endsWith(".exe");
  return isPackagedExe ? path.dirname(process.execPath) : process.cwd();
}

async function waitForExit() {
  if (!process.stdin.isTTY) return;
  await ask("\nPress Enter to exit...");
}

async function run() {
  try {
    const parsed = parseArgs();
    const { hwid, count } = parsed || (await getInputFromUser());
    const keys = [];

    for (let i = 0; i < count; i += 1) {
      keys.push(generateKey(hwid));
    }

    console.log(`\nGenerated ${keys.length} key(s) for HWID ${hwid}:\n`);
    for (const key of keys) {
      console.log(key);
    }

    const outputPath = path.join(getOutputBaseDir(), `generated-keys-${normalizeHwid(hwid)}.txt`);
    fs.writeFileSync(outputPath, `${keys.join("\n")}\n`, "utf8");
    console.log(`\nSaved to: ${outputPath}`);

    if (!parsed) {
      await waitForExit();
    }
  } catch (error) {
    console.error(`\nError: ${error.message}`);
    await waitForExit();
    process.exitCode = 1;
  }
}

run();
