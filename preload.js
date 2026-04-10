const { contextBridge, ipcRenderer, webUtils } = require("electron");
const { pathToFileURL } = require("url");

contextBridge.exposeInMainWorld("playerAPI", {
  // Correct version: use Boolean to ensure safety
  setMiniMode: (enabled) => ipcRenderer.invoke("player:set-mini-mode", Boolean(enabled)),
  getHardwareId: () => ipcRenderer.invoke("player:get-hwid"),
  getAppVersion: () => ipcRenderer.invoke("app:get-version"),
  getAppInfo: () => ipcRenderer.invoke("app:get-info"),
  checkForUpdates: () => ipcRenderer.invoke("app:check-for-updates"),
  
  // Update Notification Bridge
  onUpdateMessage: (callback) => ipcRenderer.on('update-message', (_event, value) => callback(value)),
  onDebugLog: (callback) => ipcRenderer.on("debug-log", (_event, payload) => callback(payload)),
  
  // File Association Bridge
  onOpenFile: (cb) => ipcRenderer.on("open-file", (event, filePath) => cb(filePath)),

  // Settings Bridge
  installDiscord: () => ipcRenderer.invoke("system:install-discord"),
  installYtDlp: () => ipcRenderer.invoke("system:install-ytdlp"),
  openDefaultAppsSettings: () => ipcRenderer.invoke("system:open-default-apps-settings"),
  openSettings: () => ipcRenderer.send("open-settings"),
  sendReady: () => ipcRenderer.send("app-ready"),
  updateRPC: (activity) => ipcRenderer.send("rpc:update", activity),
  reconnectRPC: () => ipcRenderer.invoke("rpc:reconnect"),
  onRPCStatus: (cb) => ipcRenderer.on("rpc-status", (event, status) => cb(status)),
  getPathForFile: (file) => webUtils.getPathForFile(file),
  toFileUrl: (filePath) => pathToFileURL(String(filePath || "")).toString(),
  readBinaryFile: (filePath) => ipcRenderer.invoke("file:read-binary", filePath),
  readTextFile: (filePath) => ipcRenderer.invoke("file:read-text", filePath),
  writeTextFile: (filePath, content) => ipcRenderer.invoke("file:write-text", { filePath, content }),
  getFileStats: (filePath) => ipcRenderer.invoke("file:get-stats", filePath),
  findAdjacentSubtitle: (filePath) => ipcRenderer.invoke("file:find-adjacent-subtitle", filePath),
  findAdjacentLyrics: (filePath) => ipcRenderer.invoke("file:find-adjacent-lyrics", filePath),
  findAdjacentArtwork: (filePath) => ipcRenderer.invoke("file:find-adjacent-artwork", filePath),
  fetchArtwork: (query) => ipcRenderer.invoke("media:fetch-artwork", query),
  cacheArtwork: (cacheKey, remoteUrl) => ipcRenderer.invoke("media:cache-artwork", { cacheKey, remoteUrl }),
  saveFile: (content, name) => ipcRenderer.invoke("dialog:save-file", { content, name }),
  openFile: (filters) => ipcRenderer.invoke("dialog:open-file", { filters }),
  
  // Persistent Config (user.bin)
  readConfig: () => ipcRenderer.invoke("user:config-read"),
  updateConfig: (data) => ipcRenderer.invoke("user:config-write", data)
});
