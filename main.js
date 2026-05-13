const { app, BrowserWindow, ipcMain, dialog, shell, protocol, net } = require("electron");
const { autoUpdater } = require("electron-updater");
const DiscordRPC = require("discord-rpc");
const path = require("path");
const os = require("os");
const { pathToFileURL } = require("url");
const fsSync = require("fs");
const fs = require("fs").promises;
const crypto = require("crypto");
const { exec, spawn } = require("child_process");
const appPackage = require("./package.json");
const isDemoBuild = Boolean(appPackage.demoBuild);
const APP_DATA_DIR_NAME = isDemoBuild ? "breakthroughplayer-demo" : "breakthroughplayer";

// Data migration for v1.3.5 -> v1.4.1 (Renamed app)
try {
  const oldDirName = isDemoBuild ? "breakthroughplayer-demo" : "breakthroughplayer";
  const newDirName = APP_DATA_DIR_NAME;
  
  // Migrate Roaming AppData (userData)
  const ROAMING = app.getPath("appData");
  const oldRoaming = path.join(ROAMING, oldDirName);
  const newRoaming = path.join(ROAMING, newDirName);
  if (fsSync.existsSync(oldRoaming) && !fsSync.existsSync(path.join(newRoaming, "user.bin"))) {
    fsSync.cpSync(oldRoaming, newRoaming, { recursive: true, force: true });
  }

  // Migrate Local AppData (sessionData)
  const LOCAL = process.env.LOCALAPPDATA || path.join(os.homedir(), "AppData", "Local");
  const oldLocal = path.join(LOCAL, oldDirName);
  const newLocal = path.join(LOCAL, newDirName);
  if (fsSync.existsSync(oldLocal) && !fsSync.existsSync(path.join(newLocal, "SessionData", "Local Storage", "leveldb"))) {
    fsSync.cpSync(oldLocal, newLocal, { recursive: true, force: true });
  }
} catch (err) {
  console.error("Migration error:", err);
}


const LOCAL_APP_DATA = process.env.LOCALAPPDATA || path.join(os.homedir(), "AppData", "Local");
const SESSION_DATA_DIR = path.join(LOCAL_APP_DATA, APP_DATA_DIR_NAME, "SessionData");
fsSync.mkdirSync(SESSION_DATA_DIR, { recursive: true });
app.setPath("sessionData", SESSION_DATA_DIR);
app.commandLine.appendSwitch("disk-cache-dir", SESSION_DATA_DIR);

const CONFIG_FILE = path.join(app.getPath("userData"), "user.bin");
const ARTWORK_CACHE_DIR = path.join(app.getPath("userData"), "artwork-cache");
const APP_STATE_FILE = path.join(app.getPath("userData"), "app-state.json");
fsSync.mkdirSync(ARTWORK_CACHE_DIR, { recursive: true });

let previousRunCrashed = false;
try {
  const rawState = fsSync.readFileSync(APP_STATE_FILE, "utf-8");
  const parsed = JSON.parse(rawState);
  previousRunCrashed = Boolean(parsed && parsed.running);
} catch {}

function writeAppState(state) {
  try {
    fsSync.writeFileSync(APP_STATE_FILE, JSON.stringify(state), "utf-8");
  } catch {}
}

// Helper: Secure (Hex) Config Read/Write
async function readUserConfig() {
  try {
    const raw = await fs.readFile(CONFIG_FILE, "utf-8");
    const json = Buffer.from(raw, "hex").toString("utf-8");
    return JSON.parse(json);
  } catch (err) {
    return null; // File missing or corrupt
  }
}

async function writeUserConfig(data) {
  try {
    const json = JSON.stringify(data);
    const hex = Buffer.from(json, "utf-8").toString("hex");
    await fs.writeFile(CONFIG_FILE, hex, "utf-8");
    return true;
  } catch (err) {
    return false;
  }
}

let mainWindow;
let normalBounds = null;
let pendingOpenFiles = [];
let rendererReady = false;
let updateHandlersBound = false;
let startupUpdateCheckTimer = null;

function getAppInfo() {
  return {
    version: app.getVersion(),
    name: app.getName(),
    isDemo: isDemoBuild,
    previousRunCrashed
  };
}

function sendUpdateMessage(message) {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  mainWindow.webContents.send("update-message", message);
}

function sendDebugLog(message, data) {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  mainWindow.webContents.send("debug-log", {
    time: new Date().toISOString(),
    message,
    data
  });
}

function resolvePlayerFileUrl(requestUrl) {
  const encodedPath = requestUrl.replace("player-file:///", "");
  const decodedPath = decodeURIComponent(encodedPath);
  const normalizedPath = process.platform === "win32"
    ? decodedPath.replace(/\//g, "\\")
    : decodedPath;
  return pathToFileURL(normalizedPath).toString();
}

function getSubtitleCandidates(filePath) {
  const parsed = path.parse(filePath);
  return [
    path.join(parsed.dir, `${parsed.name}.srt`),
    path.join(parsed.dir, `${parsed.name}.vtt`),
    path.join(parsed.dir, `${parsed.name}.ass`)
  ];
}

function getLyricsCandidates(filePath) {
  const parsed = path.parse(filePath);
  return [path.join(parsed.dir, `${parsed.name}.lrc`)];
}

function getArtworkCandidates(filePath) {
  const parsed = path.parse(filePath);
  return [
    path.join(parsed.dir, `${parsed.name}.jpg`),
    path.join(parsed.dir, `${parsed.name}.jpeg`),
    path.join(parsed.dir, `${parsed.name}.png`),
    path.join(parsed.dir, `${parsed.name}.webp`),
    path.join(parsed.dir, "cover.jpg"),
    path.join(parsed.dir, "cover.png"),
    path.join(parsed.dir, "folder.jpg"),
    path.join(parsed.dir, "folder.png"),
    path.join(parsed.dir, "front.jpg"),
    path.join(parsed.dir, "front.png")
  ];
}

function normalizeArtworkQuery(text) {
  return String(text || "")
    .replace(/\.[a-z0-9]{2,5}$/i, "")
    .replace(/[\[\(].*?[\]\)]/g, " ")
    .replace(/\b(official|audio|video|lyrics|mv|hd|4k)\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreArtworkCandidate(query, entry) {
  const normalizedQuery = normalizeArtworkQuery(query).toLowerCase();
  const normalizedTitle = normalizeArtworkQuery(entry && entry.title).toLowerCase();
  if (!normalizedTitle) return 0;

  let score = 0;
  if (normalizedTitle === normalizedQuery) score += 12;
  if (normalizedTitle.includes(normalizedQuery)) score += 8;

  const tokens = normalizedQuery.split(" ").filter(Boolean);
  score += tokens.filter((token) => normalizedTitle.includes(token)).length * 2;

  if (entry && entry.thumbnail) score += 4;
  if (Array.isArray(entry && entry.thumbnails) && entry.thumbnails.length > 0) score += 3;
  return score;
}

function runYtDlpJson(query) {
  return new Promise((resolve, reject) => {
    const child = exec(
      `yt-dlp --dump-single-json --skip-download --no-playlist ${JSON.stringify(`ytsearch5:${normalizeArtworkQuery(query)}`)}`,
      { windowsHide: true, timeout: 15000, maxBuffer: 1024 * 1024 * 4 },
      (error, stdout) => {
        if (error) {
          reject(error);
          return;
        }
        try {
          resolve(JSON.parse(stdout));
        } catch (parseError) {
          reject(parseError);
        }
      }
    );

    child.on("error", reject);
  });
}

function getExtensionFromContentType(contentType = "") {
  const normalized = String(contentType).toLowerCase();
  if (normalized.includes("jpeg")) return ".jpg";
  if (normalized.includes("png")) return ".png";
  if (normalized.includes("webp")) return ".webp";
  if (normalized.includes("gif")) return ".gif";
  return ".jpg";
}

async function cacheRemoteArtwork(cacheKey, remoteUrl) {
  const response = await net.fetch(remoteUrl);
  if (!response.ok) {
    throw new Error(`Artwork download failed: HTTP ${response.status}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const extFromUrl = path.extname(new URL(remoteUrl).pathname || "");
  const ext = extFromUrl && extFromUrl.length <= 6 ? extFromUrl : getExtensionFromContentType(response.headers.get("content-type"));
  const safeKey = crypto.createHash("sha1").update(String(cacheKey || remoteUrl)).digest("hex");
  const targetPath = path.join(ARTWORK_CACHE_DIR, `${safeKey}${ext}`);
  await fs.writeFile(targetPath, buffer);
  return targetPath;
}

function getMediaArgs(argv = []) {
  return argv
    .filter((arg) => typeof arg === "string" && arg && !arg.startsWith("--"))
    .map((arg) => String(arg).replace(/^"+|"+$/g, ""))
    .filter((arg) => {
      try {
        const resolved = path.resolve(arg);
        if (!fsSync.existsSync(resolved)) return false;
        const stat = fsSync.statSync(resolved);
        if (!stat.isFile()) return false;
        return /\.(mp3|wav|flac|m4a|aac|ogg|opus|wma|aiff|alac|mp4|mkv|avi|mov|webm|wmv|m4v|mpeg|mpg|3gp|ts)$/i.test(resolved);
      } catch {
        return false;
      }
    });
}

function flushPendingOpenFiles() {
  if (!mainWindow || mainWindow.isDestroyed() || !rendererReady || pendingOpenFiles.length === 0) return;
  sendDebugLog("Flushing pending open files", pendingOpenFiles);
  mainWindow.webContents.send("open-file", pendingOpenFiles);
  pendingOpenFiles = [];
}

function bindAutoUpdaterEvents() {
  if (updateHandlersBound) return;
  updateHandlersBound = true;

  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = true;

  autoUpdater.on("checking-for-update", () => {
    sendDebugLog("Auto update", "Checking for updates");
    sendUpdateMessage("Checking for updates...");
  });

  autoUpdater.on("update-available", (info) => {
    sendDebugLog("Auto update", { status: "available", version: info && info.version });
    sendUpdateMessage(`Update available: ${info && info.version ? info.version : "new version"}. Downloading...`);
  });

  autoUpdater.on("update-not-available", () => {
    sendDebugLog("Auto update", "No update available");
    sendUpdateMessage("You're up to date.");
  });

  autoUpdater.on("download-progress", (progress) => {
    const percent = Math.round(progress.percent || 0);
    sendDebugLog("Auto update", { status: "downloading", percent });
    sendUpdateMessage(`Downloading update... ${percent}%`);
  });

  autoUpdater.on("update-downloaded", async (info) => {
    sendDebugLog("Auto update", { status: "downloaded", version: info && info.version });
    sendUpdateMessage(`Update ${info && info.version ? info.version : ""} downloaded. Restarting to install...`);

    if (!mainWindow || mainWindow.isDestroyed()) {
      setTimeout(() => autoUpdater.quitAndInstall(false, true), 1500);
      return;
    }

    const result = await dialog.showMessageBox(mainWindow, {
      type: "info",
      buttons: ["Restart Now", "Later"],
      defaultId: 0,
      cancelId: 1,
      title: "Update Ready",
      message: `Version ${info && info.version ? info.version : "update"} has been downloaded.`,
      detail: "Restart the app now to install the update."
    });

    if (result.response === 0) {
      setTimeout(() => autoUpdater.quitAndInstall(false, true), 300);
    } else {
      sendUpdateMessage("Update downloaded. Restart the app when ready to install.");
    }
  });

  autoUpdater.on("error", (error) => {
    const message = error && error.message ? error.message : String(error || "Unknown update error");
    sendDebugLog("Auto update error", message);
    sendUpdateMessage(`Update failed: ${message}`);
  });
}

function scheduleStartupUpdateCheck() {
  if (isDemoBuild) return;
  if (!app.isPackaged) return;
  if (startupUpdateCheckTimer) clearTimeout(startupUpdateCheckTimer);

  sendDebugLog("Auto update", "Startup check scheduled");
  sendUpdateMessage("Update check starts in a few seconds...");

  startupUpdateCheckTimer = setTimeout(() => {
    startupUpdateCheckTimer = null;
    autoUpdater.checkForUpdates().catch((error) => {
      const message = error && error.message ? error.message : String(error);
      sendDebugLog("Auto update check failed", message);
      sendUpdateMessage(`Update failed: ${message}`);
    });
  }, 5000);
}

async function runManualUpdateCheck() {
  if (isDemoBuild) {
    sendUpdateMessage("Demo build does not support auto-update.");
    return { ok: false, reason: "demo-build" };
  }
  if (!app.isPackaged) {
    sendUpdateMessage("Manual update checks work in packaged builds only.");
    return { ok: false, reason: "not-packaged" };
  }

  sendDebugLog("Auto update", "Manual check requested");
  sendUpdateMessage("Checking for updates...");
  await autoUpdater.checkForUpdates();
  return { ok: true };
}

function reconnectDiscordRPC() {
  sendDebugLog("Discord RPC", "Manual reconnect requested");
  rpcActive = false;
  rpcConnecting = false;
  sendRpcStatus(false);
  if (rpcRetryTimeout) {
    clearTimeout(rpcRetryTimeout);
    rpcRetryTimeout = null;
  }
  tryRpcLogin();
  return true;
}

const singleInstanceLock = app.requestSingleInstanceLock();
if (!singleInstanceLock) {
  app.quit();
} else {
  pendingOpenFiles = getMediaArgs(process.argv.slice(1));
}

// Register custom protocol for local files
protocol.registerSchemesAsPrivileged([
  { scheme: "player-file", privileges: { bypassCSP: true, stream: true, secure: true, supportFetchAPI: true } }
]);

// Discord RPC Configuration
const clientId = "1488153939546210385"; // Player+ dedicated ID
let rpc = null;
let rpcActive = false;
let rpcRetryTimeout = null;
let rpcConnecting = false;
let rpcRetryDelay = 5000;
let lastRpcActivity = {
  details: "Waiting for media...",
  state: "Idle",
  endTimestamp: null,
  isPro: false
};

function sendRpcStatus(status) {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send("rpc-status", status);
  }
}

function createRpcClient() {
  const client = new DiscordRPC.Client({ transport: "ipc" });

  client.on("ready", () => {
    rpc = client;
    rpcActive = true;
    rpcConnecting = false;
    rpcRetryDelay = 5000;
    if (rpcRetryTimeout) {
      clearTimeout(rpcRetryTimeout);
      rpcRetryTimeout = null;
    }
    sendDebugLog("Discord RPC", "Connected");
    sendRpcStatus(true);
    applyRpcActivity(lastRpcActivity);
  });

  client.on("disconnected", () => {
    if (rpc === client) {
      rpcActive = false;
      rpcConnecting = false;
      sendDebugLog("Discord RPC", "Disconnected");
      sendRpcStatus(false);
      scheduleRpcRetry();
    }
  });

  return client;
}

process.on("unhandledRejection", (reason, promise) => {
  if (reason && reason.message && reason.message.includes("reading 'write'")) {
    console.warn("Ignored discord-rpc unhandled rejection (IPC pipe broken)");
    return;
  }
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

async function applyRpcActivity(activity) {
  if (!rpcActive || !rpc) return;
  try {
    const payload = {
      details: String(activity.details || "Waiting for media...").slice(0, 128),
      state: ((activity.isPro ? "[Pro Edition] " : "") + String(activity.state || "Idle")).slice(0, 128),
      largeImageKey: "app_icon_large",
      largeImageText: "breakthrough player+",
      smallImageKey: activity.isPro ? "pro_badge" : "free_badge",
      smallImageText: activity.isPro ? "Pro Active" : "Free Version",
      instance: false
    };
    if (activity.endTimestamp) payload.endTimestamp = activity.endTimestamp;
    await rpc.setActivity(payload).catch((err) => {
      throw err;
    });
  } catch (err) {
    sendDebugLog("Discord RPC setActivity failed", err && err.message ? err.message : String(err));
    rpcActive = false;
    rpcConnecting = false;
    sendRpcStatus(false);
    scheduleRpcRetry();
  }
}

async function setActivity(details, state, endTimestamp, isPro) {
  lastRpcActivity = { details, state, endTimestamp, isPro };
  if (rpcActive) {
    await applyRpcActivity(lastRpcActivity);
    return;
  }
  scheduleRpcRetry(1000);
}

function initRPC() {
  DiscordRPC.register(clientId);
  tryRpcLogin();
}

function tryRpcLogin() {
  if (rpcActive || rpcConnecting) return;
  rpcConnecting = true;

  if (rpc) {
    try {
      rpc.removeAllListeners();
      rpc.destroy();
    } catch {}
  }

  rpc = createRpcClient();
  rpc.login({ clientId }).catch((error) => {
    rpcConnecting = false;
    rpcActive = false;
    sendRpcStatus(false);
    sendDebugLog("Discord RPC login failed", error && error.message ? error.message : String(error));
    scheduleRpcRetry();
  });
}

function scheduleRpcRetry(delay = rpcRetryDelay) {
  if (rpcActive || rpcConnecting) return;
  if (rpcRetryTimeout) clearTimeout(rpcRetryTimeout);
  rpcRetryTimeout = setTimeout(() => {
    rpcRetryTimeout = null;
    tryRpcLogin();
  }, delay);
  rpcRetryDelay = Math.min(Math.max(delay * 1.6, 5000), 30000);
}

function computeHardwareId() {
  return new Promise((resolve) => {
    if (process.platform !== 'win32') return resolve('NOT-WINDOWS');
    const cmd64 = 'reg query HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid /reg:64';
    exec(cmd64, (err, stdout) => {
      let match = stdout ? stdout.match(/MachineGuid\s+REG_SZ\s+([a-fA-F0-9-]+)/i) : null;
      if (match && match[1]) return resolve(match[1].toUpperCase());
      const cmd32 = 'reg query HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid /reg:32';
      exec(cmd32, (err2, stdout2) => {
        let match2 = stdout2 ? stdout2.match(/MachineGuid\s+REG_SZ\s+([a-fA-F0-9-]+)/i) : null;
        if (match2 && match2[1]) return resolve(match2[1].toUpperCase());
        const psCmd = `powershell -NoProfile -ExecutionPolicy Bypass -Command "(Get-ItemProperty -Path 'HKLM:\\SOFTWARE\\Microsoft\\Cryptography').MachineGuid"`;
        exec(psCmd, (err3, stdout3) => {
          let guidRes = stdout3 ? stdout3.trim() : "";
          if (guidRes && guidRes.length > 20) return resolve(guidRes.toUpperCase());
          const fallback = `${os.hostname()}-${os.userInfo().username}`;
          resolve(crypto.createHash("md5").update(fallback).digest("hex").toUpperCase());
        });
      });
    });
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1120,
    height: 740,
    minWidth: 900,
    minHeight: 620,
    show: false,
    opacity: 0,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
      webSecurity: false,
      autoplayPolicy: "no-user-gesture-required",
      nodeIntegrationInSubFrames: true
    }
  });
  mainWindow.loadFile(path.join(__dirname, "index.html"));
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
    let opacity = 0;
    const timer = setInterval(() => {
      if (!mainWindow || mainWindow.isDestroyed()) {
        clearInterval(timer);
        return;
      }
      opacity = Math.min(opacity + 0.12, 1);
      mainWindow.setOpacity(opacity);
      if (opacity >= 1) clearInterval(timer);
    }, 16);
  });
  mainWindow.webContents.on("did-start-loading", () => {
    rendererReady = false;
  });
}

function setMiniMode(enabled) {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  if (enabled) {
    if (!normalBounds) normalBounds = mainWindow.getBounds();
    mainWindow.setAlwaysOnTop(true, "screen-saver");
    mainWindow.setResizable(false);
    mainWindow.setMinimumSize(560, 360);
    mainWindow.setSize(620, 420, true);
    mainWindow.center();
    return;
  }
  mainWindow.setAlwaysOnTop(false);
  mainWindow.setResizable(true);
  mainWindow.setMinimumSize(900, 620);
  if (normalBounds) {
    mainWindow.setBounds(normalBounds, true);
    normalBounds = null;
  }
}

// IPC Handlers
ipcMain.handle("user:config-read", async () => await readUserConfig());
ipcMain.handle("user:config-write", async (_event, data) => await writeUserConfig(data));

ipcMain.handle("system:install-discord", () => {
    return new Promise((resolve, reject) => {
        try {
            const installer = spawn(
                "cmd.exe",
                ["/c", "start", "powershell.exe", "-NoExit", "-ExecutionPolicy", "Bypass", "-Command", "winget install -e --id Discord.Discord"],
                {
                    detached: true,
                    stdio: "ignore",
                    windowsHide: false
                }
            );
            installer.unref();
            resolve("PowerShell launched");
        } catch (err) {
            reject(err.message);
        }
    });
});

ipcMain.handle("system:install-ytdlp", () => {
    return new Promise((resolve, reject) => {
        try {
            const installer = spawn(
                "cmd.exe",
                ["/c", "start", "powershell.exe", "-NoExit", "-ExecutionPolicy", "Bypass", "-Command", "winget install -e --id yt-dlp.yt-dlp"],
                {
                    detached: true,
                    stdio: "ignore",
                    windowsHide: false
                }
            );
            installer.unref();
            resolve("PowerShell launched");
        } catch (err) {
            reject(err.message);
        }
    });
});

ipcMain.handle("system:open-default-apps-settings", async () => {
    await shell.openExternal("ms-settings:defaultapps");
    return true;
});

ipcMain.handle("player:set-mini-mode", (_event, enabled) => setMiniMode(Boolean(enabled)));
ipcMain.handle("player:get-hwid", async () => await computeHardwareId());
ipcMain.handle("app:get-version", () => app.getVersion());
ipcMain.handle("app:get-info", () => getAppInfo());
ipcMain.handle("app:check-for-updates", async () => await runManualUpdateCheck());
ipcMain.handle("rpc:reconnect", () => reconnectDiscordRPC());
ipcMain.on("rpc:update", (event, data) => setActivity(data.details, data.state, data.endTimestamp, data.isPro));
ipcMain.on("app-ready", () => {
    if (!mainWindow) return;
    rendererReady = true;
    sendDebugLog("Renderer reported app-ready", { pendingOpenFiles });
    mainWindow.webContents.send("rpc-status", rpcActive);
    flushPendingOpenFiles();
});

// File System IPC for Playlist
ipcMain.handle("dialog:save-file", async (event, { content, name }) => {
    const { filePath } = await dialog.showSaveDialog(mainWindow, {
        title: "Export Playlist",
        defaultPath: path.join(app.getPath("documents"), name),
        filters: [{ name: "Playlist JSON", extensions: ["json"] }]
    });
    if (filePath) {
        await fs.writeFile(filePath, content, "utf-8");
        return true;
    }
    return false;
});

ipcMain.handle("dialog:open-file", async (event, { filters }) => {
    const { filePaths } = await dialog.showOpenDialog(mainWindow, {
        title: "Import Playlist",
        properties: ["openFile"],
        filters: filters
    });
    if (filePaths && filePaths.length > 0) {
        const content = await fs.readFile(filePaths[0], "utf-8");
        return content;
    }
    return null;
});

ipcMain.handle("file:read-binary", async (_event, filePath) => {
    const data = await fs.readFile(filePath);
    return data.toString("base64");
});

ipcMain.handle("file:read-text", async (_event, filePath) => {
    return await fs.readFile(filePath, "utf-8");
});

ipcMain.handle("file:write-text", async (_event, { filePath, content }) => {
    if (!filePath) return false;
    await fs.writeFile(filePath, String(content || ""), "utf-8");
    return true;
});

ipcMain.handle("file:get-stats", async (_event, filePath) => {
    const stats = await fs.stat(filePath);
    return {
        size: stats.size,
        modifiedAt: stats.mtime.toISOString()
    };
});

ipcMain.handle("file:find-adjacent-subtitle", async (_event, filePath) => {
    for (const candidate of getSubtitleCandidates(filePath)) {
        try {
            const stats = await fs.stat(candidate);
            if (stats.isFile()) return candidate;
        } catch {}
    }
    return null;
});

ipcMain.handle("file:find-adjacent-lyrics", async (_event, filePath) => {
    for (const candidate of getLyricsCandidates(filePath)) {
        try {
            const stats = await fs.stat(candidate);
            if (stats.isFile()) return candidate;
        } catch {}
    }
    return null;
});

ipcMain.handle("file:find-adjacent-artwork", async (_event, filePath) => {
    for (const candidate of getArtworkCandidates(filePath)) {
        try {
            const stats = await fs.stat(candidate);
            if (stats.isFile()) return candidate;
        } catch {}
    }
    return null;
});

ipcMain.handle("media:fetch-artwork", async (_event, query) => {
    const normalizedQuery = String(query || "").trim();
    if (!normalizedQuery) return null;
    try {
        const data = await runYtDlpJson(normalizedQuery);
        const entries = Array.isArray(data.entries) && data.entries.length > 0 ? data.entries : [data];
        const bestEntry = entries
            .map((entry) => ({ entry, score: scoreArtworkCandidate(normalizedQuery, entry) }))
            .sort((a, b) => b.score - a.score)[0];
        const selected = bestEntry ? bestEntry.entry : null;
        if (selected && selected.thumbnail) return selected.thumbnail;
        if (selected && Array.isArray(selected.thumbnails) && selected.thumbnails.length > 0) {
            const last = selected.thumbnails[selected.thumbnails.length - 1];
            return last && last.url ? last.url : null;
        }
        return null;
    } catch (error) {
        sendDebugLog("yt-dlp artwork fetch failed", error && error.message ? error.message : String(error));
        return null;
    }
});

ipcMain.handle("media:cache-artwork", async (_event, { cacheKey, remoteUrl }) => {
    if (!cacheKey || !remoteUrl) return null;
    try {
        const savedPath = await cacheRemoteArtwork(cacheKey, remoteUrl);
        return savedPath;
    } catch (error) {
        sendDebugLog("artwork cache failed", error && error.message ? error.message : String(error));
        return null;
    }
});

// App Lifetime
app.whenReady().then(() => {
  writeAppState({
    running: true,
    startedAt: new Date().toISOString()
  });

  // Protocol handler
  protocol.handle("player-file", (request) => {
    try {
      const fileUrl = resolvePlayerFileUrl(request.url);
      sendDebugLog("Resolving player-file request", { requestUrl: request.url, fileUrl });
      return net.fetch(fileUrl);
    } catch (err) {
      sendDebugLog("player-file resolution failed", { requestUrl: request.url, error: err.message });
      throw err;
    }
  });

  createWindow();
  sendDebugLog("App ready", { argv: process.argv, pendingOpenFiles, appInfo: getAppInfo() });
  initRPC();
  bindAutoUpdaterEvents();
  try {
    scheduleStartupUpdateCheck();
  } catch (e) {}
});

app.on("second-instance", (_event, argv) => {
  const files = getMediaArgs(argv.slice(1));
  sendDebugLog("Second instance received", { argv, files });
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
    if (files.length > 0) {
      pendingOpenFiles = [...pendingOpenFiles, ...files];
      flushPendingOpenFiles();
    }
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("before-quit", () => {
    writeAppState({
        running: false,
        lastExitAt: new Date().toISOString()
    });
    if (rpc) {
        try {
            if (rpcActive) rpc.clearActivity();
            rpc.destroy();
        } catch {}
    }
});
