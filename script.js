const media = document.getElementById("media");
const mediaInput = document.getElementById("mediaInput");
const folderInput = document.getElementById("folderInput");
const subtitleInput = document.getElementById("subtitleInput");
const subtitlePickerLabel = document.getElementById("subtitlePickerLabel");
const playerPanel = document.getElementById("playerPanel");
const audioView = document.getElementById("audioView");
const emptyState = document.getElementById("emptyState");
const playlistEl = document.getElementById("playlist");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const miniBtn = document.getElementById("miniBtn");
const muteBtn = document.getElementById("muteBtn");
const pipBtn = document.getElementById("pipBtn");
const loopBtn = document.getElementById("loopBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const seek = document.getElementById("seek");
const volume = document.getElementById("volume");
const timeLabel = document.getElementById("timeLabel");
const statusLabel = document.getElementById("statusLabel");
const subtitleStatus = document.getElementById("subtitleStatus");
const sleepStatus = document.getElementById("sleepStatus");
const addMediaBtn = document.getElementById("addMediaBtn");
const brandKicker = document.getElementById("brandKicker");
const appTitle = document.getElementById("appTitle");
const appVersionLabel = document.getElementById("appVersionLabel");
const editionBadge = document.getElementById("editionBadge");
const playlistSearchInput = document.getElementById("playlistSearchInput");
const playlistCountLabel = document.getElementById("playlistCountLabel");
const favoritesOnlyBtn = document.getElementById("favoritesOnlyBtn");
const sortFavoritesBtn = document.getElementById("sortFavoritesBtn");
const recentHistoryEl = document.getElementById("recentHistory");
const mediaInfoFormat = document.getElementById("mediaInfoFormat");
const mediaInfoResolution = document.getElementById("mediaInfoResolution");
const mediaInfoDuration = document.getElementById("mediaInfoDuration");
const mediaInfoDetails = document.getElementById("mediaInfoDetails");
const mediaInfoSource = document.getElementById("mediaInfoSource");

// Custom Select Proxies (IDs in HTML are now cs-ID)
const speed = document.getElementById("cs-speed");
const themeSelect = document.getElementById("cs-themeSelect");
const performanceModeSelect = document.getElementById("cs-performanceModeSelect");
const themePresetSelect = document.getElementById("cs-themePreset");
const playbackHue = document.getElementById("playbackHue");
const playbackIntensity = document.getElementById("playbackIntensity");
const playbackFxResetBtn = document.getElementById("playbackFxResetBtn");
const aspectRatioSelect = document.getElementById("cs-aspectRatio");
const eqPreset = document.getElementById("cs-eqPreset");
const sleepTimerSelect = document.getElementById("cs-sleepTimer");

const screenshotBtn = document.getElementById("screenshotBtn");
const effectsBtn = document.getElementById("effectsBtn");

const effectsModal = document.getElementById("effectsModal");
const fxBrightness = document.getElementById("fxBrightness");
const fxContrast = document.getElementById("fxContrast");
const fxSaturate = document.getElementById("fxSaturate");
const fxHue = document.getElementById("fxHue");
const fxBrightnessVal = document.getElementById("fxBrightnessVal");
const fxContrastVal = document.getElementById("fxContrastVal");
const fxSaturateVal = document.getElementById("fxSaturateVal");
const fxHueVal = document.getElementById("fxHueVal");
const fxAmbilight = document.getElementById("fxAmbilight");
const fxResetBtn = document.getElementById("fxResetBtn");
const fxCloseBtn = document.getElementById("fxCloseBtn");
const fxSurround = document.getElementById("fxSurround");
const fxSurroundDepth = document.getElementById("fxSurroundDepth");
const fxSurroundDepthVal = document.getElementById("fxSurroundDepthVal");
const fxLateNight = document.getElementById("fxLateNight");
const fxSmartGain = document.getElementById("fxSmartGain");
const clearPlaylistBtn = document.getElementById("clearPlaylistBtn");

const subSyncMinus = document.getElementById("subSyncMinus");
const subSyncPlus = document.getElementById("subSyncPlus");
const subOffsetVal = document.getElementById("subOffsetVal");

const abBtnA = document.getElementById("abBtnA");
const abBtnB = document.getElementById("abBtnB");
const abBtnReset = document.getElementById("abBtnReset");
const proEqGrid = document.getElementById("proEqGrid");

const importPlaylistBtn = document.getElementById("importPlaylistBtn");
const exportPlaylistBtn = document.getElementById("exportPlaylistBtn");

const ambilightCanvas = document.getElementById("ambilightCanvas");
const ambilightCtx = ambilightCanvas.getContext("2d", { willReadFrequently: true });
const mediaContainer = document.querySelector(".media-container") || playerPanel;

const activateBtn = document.getElementById("activateBtn");
const debugConsoleBtn = document.getElementById("debugConsoleBtn");
const checkUpdatesBtn = document.getElementById("checkUpdatesBtn");
const reconnectRpcBtn = document.getElementById("reconnectRpcBtn");
const aiRepairBtn = document.getElementById("aiRepairBtn");
const installYtDlpBtn = document.getElementById("installYtDlpBtn");
const setDefaultPlayerBtn = document.getElementById("setDefaultPlayerBtn");
const discordInstallBtnManual = document.getElementById("discordInstallBtnManual");
const legalBtn = document.getElementById("legalBtn");
const licenseBadge = document.getElementById("licenseBadge");

// NEW: Additional Feature Elements
const visualizerModeSelect = document.getElementById("cs-visualizerMode");
const lyricsBtn = document.getElementById("lyricsBtn");
const zenBtn = document.getElementById("zenBtn");
const lyricsOverlay = document.getElementById("lyricsOverlay");
const lyricsContent = document.getElementById("lyricsContent");
const osd = document.getElementById("osd");

let activeVisualizerMode = "bars"; // bars, wave, circular, particles
let isZenMode = false;
let isLyricsOpen = false;
let currentLyrics = []; // {time, text}
let osdTimeout = null;
const licenseModal = document.getElementById("licenseModal");
const licenseTitle = document.getElementById("licenseTitle");
const licenseHint = document.getElementById("licenseHint");
const hwidValue = document.getElementById("hwidValue");
const copyHwidBtn = document.getElementById("copyHwidBtn");
const licenseKeyInput = document.getElementById("licenseKeyInput");
const licenseApplyBtn = document.getElementById("licenseApplyBtn");
const licenseClearBtn = document.getElementById("licenseClearBtn");
const licenseCloseBtn = document.getElementById("licenseCloseBtn");

const eqResetBtn = document.getElementById("eqResetBtn");

const coverCard = document.getElementById("coverCard");
const coverDisc = coverCard.querySelector(".cover-disc");
const coverTitle = document.getElementById("coverTitle");
const coverSubtitle = document.getElementById("coverSubtitle");
const waveCanvas = document.getElementById("waveCanvas");
const waveCtx = waveCanvas.getContext("2d", { alpha: true });
const spectrumCanvas = document.getElementById("spectrumCanvas");
const spectrumCtx = spectrumCanvas.getContext("2d", { alpha: true });
const lyricsPanel = document.getElementById("lyricsPanel");
const lyricsStatus = document.getElementById("lyricsStatus");
const lyricsLine = document.getElementById("lyricsLine");
const lyricsSearchInput = document.getElementById("lyricsSearchInput");
const lyricsSearchBtn = document.getElementById("lyricsSearchBtn");
const lyricsResultsSelect = document.getElementById("cs-lyricsResults");
const lyricsApplyBtn = document.getElementById("lyricsApplyBtn");
const lyricsSaveBtn = document.getElementById("lyricsSaveBtn");
const normalizeBtn = document.getElementById("normalizeBtn");
const gainReductionStatus = document.getElementById("gainReductionStatus");

const playlistMenu = document.getElementById("playlistMenu");
const favoriteTrackAction = document.getElementById("favoriteTrackAction");
const legalModal = document.getElementById("legalModal");
const legalCloseBtn = document.getElementById("legalCloseBtn");
const welcomeModal = document.getElementById("welcomeModal");
const welcomeCloseBtn = document.getElementById("welcomeCloseBtn");
const licenseMessage = document.getElementById("licenseMessage");
const docModal = document.getElementById("docModal");
const docTitle = document.getElementById("docTitle");
const docContent = document.getElementById("docContent");
const docCloseBtn = document.getElementById("docCloseBtn");
const debugModal = document.getElementById("debugModal");
const debugConsole = document.getElementById("debugConsole");
const debugCloseBtn = document.getElementById("debugCloseBtn");
const debugClearBtn = document.getElementById("debugClearBtn");
let updateToastHideTimer = null;

// Global Application Configuration (Managed via user.bin)
let appConfig = {
  welcomeSeen: false,
  discordOnboardingDone: false,
  resumeMap: {},
  theme: "dark",
  performanceMode: "auto",
  miniMode: false,
  licenseKey: "",
  fallbackHardwareId: "",
  favorites: [],
  recentHistory: [],
  artworkCache: {},
  playbackFx: {
    hue: 205,
    intensity: 1
  },
  themePreset: "neon",
  lyricsOffsets: {},
  autoNormalize: false,
  trial: {
    startedAt: "",
    durationDays: 30
  },
  crashRecovery: {
    session: null
  }
};

const STORAGE_KEYS = {
  resumeMap: "hankyPlayerResumeMap",
  theme: "hankyPlayerTheme",
  performanceMode: "hankyPlayerPerformanceMode",
  miniMode: "hankyPlayerMiniMode",
  licenseKey: "hankyPlayerLicenseKey",
  discordOnboarding: "discordOnboardingDone"
};

const ICONS = {
  play: "&#9654;",
  pause: "&#10074;&#10074;",
  prev: "&#9198;",
  next: "&#9197;",
  fullscreen: "&#9974;",
  exitFullscreen: "&#10006;",
  mini: "&#9723;",
  miniOn: "&#9633;",
  volumeOn: "&#128266;",
  volumeOff: "&#128263;",
  loop: "&#128257;",
  shuffle: "&#128256;"
};

const playlist = [];
let currentIndex = -1;
let shuffleMode = false;
let loopMode = false;
let miniMode = false;
let isProUser = false;
let currentHardwareId = "";
let pendingResumeTime = null;
let subtitleBlobUrl = null;
let subtitleTrackElement = null;
let lastResumeWrite = 0;
let spectrumAnimationId = null;
let ambilightAnimationId = null;
let isAmbilightOn = false;
let library = [];
let freqDataArray = null;
let timeDataArray = null;
let waveformPulse = 0;
let lastFrameTime = 0;
let menuTargetIndex = -1;
let discordStatus = false;
let draggedIndex = -1;
let lastMediaErrorKind = "";
let autoRepairRunning = false;
let playbackEnergyLevel = 0;
let crashSnapshotTimer = null;
let currentLrcEntries = [];
let currentLrcPath = "";
let currentLrcIndex = -1;
let lyricsOffsetSeconds = 0;
let lyricSearchResults = [];
let queue = [];
let autoNormalizeEnabled = false;
let rollingEnergy = 0;
let gainMonitorTimer = null;
let sleepTimerId = null;
let sleepDeadline = null;
let sleepMode = "off";
let sleepIntervalId = null;
let playlistFilterQuery = "";
let favoritesOnly = false;
const debugBuffer = [];
let currentMediaStats = null;
let appRuntimeInfo = {
  version: "",
  name: "breakthrough player+",
  isDemo: false,
  previousRunCrashed: false
};
const TRIAL_DURATION_DAYS = 30;

let performanceMode = "auto";
let activePerformanceProfile = {
  maxFps: 45,
  fftSize: 1024,
  smoothing: 0.78,
  renderScale: 0.92,
  idlePoints: 140,
  spectrumBars: 56,
  glow: true
};

let resumeMap = {};

async function saveAppConfig() {
  if (window.playerAPI && window.playerAPI.updateConfig) {
    await window.playerAPI.updateConfig(appConfig);
  }
}

async function loadAppConfig() {
  if (!(window.playerAPI && window.playerAPI.readConfig)) return;

  const savedConfig = await window.playerAPI.readConfig();
  if (savedConfig) {
    appConfig = { ...appConfig, ...savedConfig };
    appConfig.playbackFx = normalizePlaybackFx(appConfig.playbackFx);
    appConfig.themePreset = Object.prototype.hasOwnProperty.call(THEME_PRESETS, appConfig.themePreset) ? appConfig.themePreset : "neon";
    if (!appConfig.lyricsOffsets || typeof appConfig.lyricsOffsets !== "object") {
      appConfig.lyricsOffsets = {};
    }
    appConfig.autoNormalize = Boolean(appConfig.autoNormalize);
    if (!appConfig.trial || typeof appConfig.trial !== "object") {
      appConfig.trial = { startedAt: "", durationDays: TRIAL_DURATION_DAYS };
    } else {
      appConfig.trial.startedAt = typeof appConfig.trial.startedAt === "string" ? appConfig.trial.startedAt : "";
      appConfig.trial.durationDays = Number(appConfig.trial.durationDays) > 0 ? Number(appConfig.trial.durationDays) : TRIAL_DURATION_DAYS;
    }
    if (!appConfig.crashRecovery || typeof appConfig.crashRecovery !== "object") {
      appConfig.crashRecovery = { session: null };
    } else if (!Object.prototype.hasOwnProperty.call(appConfig.crashRecovery, "session")) {
      appConfig.crashRecovery.session = null;
    }
    return;
  }

  appConfig.theme = localStorage.getItem(STORAGE_KEYS.theme) || "dark";
  appConfig.performanceMode = localStorage.getItem(STORAGE_KEYS.performanceMode) || "auto";
  appConfig.licenseKey = localStorage.getItem(STORAGE_KEYS.licenseKey) || "";
  appConfig.discordOnboardingDone = localStorage.getItem(STORAGE_KEYS.discordOnboarding) === "true";
  appConfig.welcomeSeen = localStorage.getItem("hankyPlayerWelcomeSeen") === "true";

  try {
    const resMap = JSON.parse(localStorage.getItem(STORAGE_KEYS.resumeMap) || "{}");
    if (resMap) appConfig.resumeMap = resMap;
  } catch (e) {}

  await saveAppConfig();
}

function isDemoBuild() {
  return Boolean(appRuntimeInfo.isDemo);
}

function updateVersionLabel() {
  if (!appVersionLabel) return;
  if (appRuntimeInfo.version) {
    appVersionLabel.textContent = `Version ${appRuntimeInfo.version}${isDemoBuild() ? " Demo" : ""}`;
  } else {
    appVersionLabel.textContent = "Version unavailable";
  }
}

function applyEditionState() {
  const demo = isDemoBuild();
  document.documentElement.setAttribute("data-edition", demo ? "demo" : "standard");

  if (brandKicker) {
    brandKicker.textContent = demo ? "Desktop Media Player Demo" : "Desktop Media Player";
  }
  if (appTitle) {
    appTitle.textContent = appRuntimeInfo.name || (demo ? "breakthrough player+ Demo" : "breakthrough player+");
  }
  if (editionBadge) {
    editionBadge.classList.toggle("hidden", !demo);
  }
  if (checkUpdatesBtn) {
    checkUpdatesBtn.disabled = demo;
    checkUpdatesBtn.title = demo ? "Demo build does not support auto-update." : "Check for updates now";
  }
}

function applyDemoLiteMode() {
  if (!isDemoBuild()) return;

  const hideElement = (el) => {
    if (!el) return;
    el.classList.add("hidden");
  };

  const hideClosest = (el, selector) => {
    if (!el) return;
    const target = el.closest(selector);
    if (target) target.classList.add("hidden");
  };

  [
    subtitlePickerLabel,
    pipBtn,
    screenshotBtn,
    effectsBtn,
    loopBtn,
    shuffleBtn,
    abBtnA,
    abBtnB,
    abBtnReset,
    subSyncMinus,
    subSyncPlus,
    subOffsetVal,
    lyricsPanel,
    normalizeBtn,
    gainReductionStatus,
    reconnectRpcBtn,
    aiRepairBtn,
    installYtDlpBtn,
    setDefaultPlayerBtn,
    discordInstallBtnManual,
    debugConsoleBtn,
    checkUpdatesBtn,
    activateBtn,
    favoritesOnlyBtn,
    sortFavoritesBtn,
    importPlaylistBtn,
    exportPlaylistBtn,
    eqResetBtn,
    proEqGrid
  ].forEach(hideElement);

  hideClosest(eqPreset, ".eq-section");
  hideClosest(sleepTimerSelect, ".control-inline");

  if (subtitleInput) subtitleInput.disabled = true;
}

function syncLicenseModalMode() {
  const demo = isDemoBuild();
  if (licenseTitle) {
    licenseTitle.textContent = demo ? "Demo Build" : "Activate Pro";
  }
  if (hwidValue && hwidValue.parentElement) {
    hwidValue.parentElement.classList.toggle("hidden", demo);
  }
  if (licenseKeyInput) {
    licenseKeyInput.classList.toggle("hidden", demo);
  }
  if (licenseApplyBtn) {
    licenseApplyBtn.classList.toggle("hidden", demo);
  }
  if (licenseClearBtn) {
    licenseClearBtn.classList.toggle("hidden", demo);
  }
  if (licenseCloseBtn) {
    licenseCloseBtn.textContent = demo ? "Close" : "Cancel";
  }
}

let audioContext = null;
let sourceNode = null;
let preampNode = null;
let bassFilter = null;
let midFilter = null;
let trebleFilter = null;
let analyserNode = null;
let compressorNode = null;
let eqFilters = []; // 10 bands
let isSurroundOn = false;
let isLateNightOn = false;
let isSmartGainOn = false;
let surroundDryGain = null;
let surroundWetGain = null;
let surroundSplitter = null;
let surroundMerger = null;
let surroundDelayLeft = null;
let surroundDelayRight = null;
let surroundCrossGainLeft = null;
let surroundCrossGainRight = null;
let outputGainNode = null;

let timeA = null;
let timeB = null;
let abActive = false;
let subtitleOffset = 0;
const EQ_BANDS = ["31", "62", "125", "250", "500", "1k", "2k", "4k", "8k", "16k"];

const eqPresets = {
  flat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  bassBoost: [8, 6, 4, 1, 0, 0, 0, 1, 2, 2],
  vocal: [-2, -2, 0, 2, 4, 6, 5, 3, 2, 1],
  trebleBoost: [-2, -3, -2, 0, 1, 3, 5, 7, 9, 10]
};

const performanceProfiles = {
  quality: { maxFps: 60, fftSize: 2048, smoothing: 0.82, renderScale: 1, idlePoints: 180, spectrumBars: 70, glow: true },
  balanced: { maxFps: 45, fftSize: 1024, smoothing: 0.78, renderScale: 0.92, idlePoints: 140, spectrumBars: 56, glow: true },
  eco: { maxFps: 30, fftSize: 512, smoothing: 0.72, renderScale: 0.76, idlePoints: 96, spectrumBars: 40, glow: false }
};

function setIcon(button, html) {
  button.innerHTML = html;
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "00:00";
  const sec = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  const min = Math.floor((seconds / 60) % 60)
    .toString()
    .padStart(2, "0");
  const hour = Math.floor(seconds / 3600);
  if (hour > 0) return `${hour}:${min}:${sec}`;
  return `${min}:${sec}`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function normalizePlaybackFx(raw) {
  const safe = raw && typeof raw === "object" ? raw : {};
  return {
    hue: clamp(Number(safe.hue) || 205, 170, 340),
    intensity: clamp(Number(safe.intensity) || 1, 0.2, 1.6)
  };
}

function getFileNameFromPath(filePath) {
  return String(filePath || "").split(/[\\/]/).pop() || filePath;
}

function getMediaTypeFromPath(filePath) {
  const ext = String(filePath || "").toLowerCase().split(".").pop();
  const mimeMap = {
    mp3: "audio/mpeg",
    wav: "audio/wav",
    flac: "audio/flac",
    m4a: "audio/mp4",
    aac: "audio/aac",
    ogg: "audio/ogg",
    opus: "audio/ogg",
    wma: "audio/x-ms-wma",
    aiff: "audio/aiff",
    alac: "audio/mp4",
    mp4: "video/mp4",
    m4v: "video/mp4",
    mov: "video/quicktime",
    webm: "video/webm",
    mkv: "video/x-matroska",
    avi: "video/x-msvideo",
    wmv: "video/x-ms-wmv",
    mpeg: "video/mpeg",
    mpg: "video/mpeg",
    ts: "video/mp2t",
    "3gp": "video/3gpp"
  };
  return mimeMap[ext] || "application/octet-stream";
}

function getPlayableUrlFromPath(filePath) {
  if (window.playerAPI && typeof window.playerAPI.toFileUrl === "function") {
    return window.playerAPI.toFileUrl(filePath);
  }
  return `file:///${String(filePath || "").replace(/\\/g, "/")}`;
}

function base64ToUint8Array(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function ensureTrackPlayableUrl(track) {
  if (!track) return "";
  if (!track.path) return track.url || "";
  if (track.url && track.url.startsWith("blob:")) return track.url;

  if (!(window.playerAPI && typeof window.playerAPI.readBinaryFile === "function")) {
    return track.url || getPlayableUrlFromPath(track.path);
  }

  const base64 = await window.playerAPI.readBinaryFile(track.path);
  const bytes = base64ToUint8Array(base64);
  const blob = new Blob([bytes], { type: track.file && track.file.type ? track.file.type : "application/octet-stream" });
  const blobUrl = URL.createObjectURL(blob);

  if (track.url && track.url.startsWith("blob:")) {
    URL.revokeObjectURL(track.url);
  }

  track.url = blobUrl;
  return blobUrl;
}

async function initApp() {
  // 1. Load config from user.bin
  await loadAppConfig();

  if (window.playerAPI && typeof window.playerAPI.getAppInfo === "function") {
    try {
      const info = await window.playerAPI.getAppInfo();
      appRuntimeInfo = { ...appRuntimeInfo, ...info };
    } catch {
      appRuntimeInfo.version = "";
    }
  } else if (window.playerAPI && typeof window.playerAPI.getAppVersion === "function") {
    try {
      appRuntimeInfo.version = await window.playerAPI.getAppVersion();
    } catch {
      appRuntimeInfo.version = "";
    }
  }
  updateVersionLabel();
  applyEditionState();
  applyDemoLiteMode();
  document.title = appRuntimeInfo.name || document.title;

  // 2. Load HWID and License
  await loadHardwareId();
  initLicense();
  
  // 3. Initialize UI states from config
  setTheme(appConfig.theme);
  applyThemePreset(appConfig.themePreset || "neon");
  setPerformanceMode(appConfig.performanceMode);
  setMiniMode(appConfig.miniMode, true);
  applyPlaybackFxSettings(appConfig.playbackFx || {});
  setAutoNormalize(appConfig.autoNormalize, true);
  renderLyricsResults([]);
  
  setIcon(playBtn, ICONS.play);
  setIcon(prevBtn, ICONS.prev);
  setIcon(nextBtn, ICONS.next);
  setIcon(fullscreenBtn, ICONS.fullscreen);
  setIcon(miniBtn, ICONS.mini);
  setIcon(muteBtn, ICONS.volumeOn);
  setIcon(loopBtn, ICONS.loop);
  setIcon(shuffleBtn, ICONS.shuffle);
  
  updateEqLabels();
  updateStatus();
  initWelcomeModal();
  initHotkeys();
  
  resizeCanvas(waveCanvas, 320, 110);
  resizeCanvas(spectrumCanvas, 320, 80);
  startSpectrumLoop();
  
  applyLicenseState();
  renderRecentHistory();
  clearLyricsState();

  if (appRuntimeInfo.previousRunCrashed && appConfig.crashRecovery && appConfig.crashRecovery.session) {
    const shouldRestore = window.confirm("Detected an unexpected previous shutdown. Restore your last playback session?");
    if (shouldRestore) {
      restoreCrashRecoverySession(appConfig.crashRecovery.session);
    }
  }
  
  // 4. Onboarding
  initDiscordOnboarding();
  
  localStorage.removeItem("player_playlist_meta");

  // 6. Mandatory EQ Locking Enforcement
  updateEqControlStates();
  updateFavoritesOnlyButton();
}

function hashColorFromText(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);
  return `linear-gradient(160deg, hsl(${hue} 85% 62%), hsl(${(hue + 78) % 360} 80% 48%))`;
}

function normalizeLicenseKey(raw) {
  return String(raw || "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "");
}

function computeLicenseChecksum(payload) {
  let total = 0;
  for (let i = 0; i < payload.length; i += 1) {
    total = (total + payload.charCodeAt(i) * (i + 17)) % 1679616;
  }
  return total.toString(36).toUpperCase().padStart(4, "0");
}

function normalizeHardwareId(rawHwid) {
  const hwid = String(rawHwid || "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");

  if (!/^[A-Z0-9]{32}$/.test(hwid)) return "";
  return hwid;
}

function validateLicenseKey(rawKey, rawHwid) {
  const key = normalizeLicenseKey(rawKey);
  const hwid = normalizeHardwareId(rawHwid);

  if (!/^HLP-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(key)) return false;
  if (!hwid) return false;

  const parts = key.split("-");
  const payload = `${parts[1]}${parts[2]}${hwid}`;
  const checksum = computeLicenseChecksum(payload);
  return parts[3] === checksum;
}

function getTrialDurationDays() {
  const days = Number(appConfig.trial && appConfig.trial.durationDays);
  return Number.isFinite(days) && days > 0 ? Math.floor(days) : TRIAL_DURATION_DAYS;
}

function getTrialStartedAtDate() {
  const raw = appConfig.trial && appConfig.trial.startedAt;
  if (!raw) return null;
  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function getTrialEndAtDate() {
  const startedAt = getTrialStartedAtDate();
  if (!startedAt) return null;
  return new Date(startedAt.getTime() + getTrialDurationDays() * 24 * 60 * 60 * 1000);
}

function getTrialDaysLeft() {
  const endAt = getTrialEndAtDate();
  if (!endAt) return 0;
  const diff = endAt.getTime() - Date.now();
  return diff > 0 ? Math.ceil(diff / (24 * 60 * 60 * 1000)) : 0;
}

function isTrialActive() {
  return getTrialDaysLeft() > 0;
}

function hasProAccess() {
  return isProUser || isTrialActive();
}

function ensureTrialStarted() {
  if (isDemoBuild()) return false;
  if (isProUser) return false;
  if (getTrialStartedAtDate()) return false;
  appConfig.trial = appConfig.trial || {};
  appConfig.trial.startedAt = new Date().toISOString();
  appConfig.trial.durationDays = getTrialDurationDays();
  saveAppConfig();
  return true;
}

function getLicenseTier() {
  if (isDemoBuild()) return "demo";
  if (isProUser) return "pro";
  if (isTrialActive()) return "trial";
  return "free";
}

function getTrialStatusLabel() {
  const daysLeft = getTrialDaysLeft();
  if (daysLeft <= 0) return "Trial expired";
  return `Trial: ${daysLeft} day${daysLeft === 1 ? "" : "s"} left`;
}

function updateCover(fileName = "No track selected") {
  coverTitle.textContent = fileName;
  const filteredCount = playlist.filter((item) => matchesCurrentPlaylistFilter(item)).length;
  coverSubtitle.textContent = filteredCount === playlist.length
    ? `Playlist items: ${playlist.length}`
    : `Playlist items: ${filteredCount}/${playlist.length}`;
  coverDisc.style.background = hashColorFromText(fileName);
}

function getTrackFavoriteKey(track) {
  if (!track) return "";
  return track.path || [track.displayName, track.artist, track.file && track.file.name].filter(Boolean).join("|");
}

function getTrackIdentityKey(track) {
  if (!track) return "";
  return track.path || [track.file && track.file.name, track.file && track.file.size, track.displayName].filter(Boolean).join("|");
}

function getTrackArtworkCacheKey(track) {
  return getTrackIdentityKey(track);
}

function resolveFilePathFromFile(file) {
  if (!file || !(window.playerAPI && window.playerAPI.getPathForFile)) return "";
  try {
    return window.playerAPI.getPathForFile(file) || "";
  } catch {
    return "";
  }
}

function isFavoriteTrack(track) {
  const key = getTrackFavoriteKey(track);
  return Boolean(key) && (appConfig.favorites || []).includes(key);
}

function isTrackInPlaylist(track) {
  const key = getTrackIdentityKey(track);
  return Boolean(key) && playlist.some((item) => getTrackIdentityKey(item) === key);
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) return "-";
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }
  return `${value.toFixed(value >= 10 || unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

function rememberRecentTrack(track) {
  const key = getTrackIdentityKey(track);
  if (!key) return;
  const nextHistory = [
    {
      key,
      displayName: track.displayName || (track.file && track.file.name) || "Unknown media",
      source: track.path || "",
      playedAt: new Date().toISOString()
    },
    ...(appConfig.recentHistory || []).filter((entry) => entry.key !== key)
  ].slice(0, 12);
  appConfig.recentHistory = nextHistory;
  saveAppConfig();
  renderRecentHistory();
}

function renderRecentHistory() {
  if (!recentHistoryEl) return;
  recentHistoryEl.innerHTML = "";
  const entries = appConfig.recentHistory || [];

  if (entries.length === 0) {
    const li = document.createElement("li");
    li.className = "playlist-empty";
    li.textContent = "No recent tracks yet.";
    recentHistoryEl.appendChild(li);
    return;
  }

  entries.forEach((entry) => {
    const li = document.createElement("li");
    const meta = document.createElement("div");
    meta.className = "recent-entry-meta";

    const title = document.createElement("span");
    title.className = "recent-entry-title";
    title.textContent = entry.displayName;

    const subtitle = document.createElement("span");
    subtitle.className = "recent-entry-subtitle";
    subtitle.textContent = entry.source
      ? `${entry.source} • ${new Date(entry.playedAt).toLocaleString()}`
      : new Date(entry.playedAt).toLocaleString();

    meta.append(title, subtitle);
    li.append(meta);
    recentHistoryEl.appendChild(li);
  });
}

function matchesPlaylistFilter(item) {
  if (!playlistFilterQuery) return true;
  const haystack = [
    item.displayName,
    item.artist,
    item.path,
    item.file && item.file.name
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(playlistFilterQuery);
}

function matchesCurrentPlaylistFilter(item) {
  if (favoritesOnly && !isFavoriteTrack(item)) return false;
  return matchesPlaylistFilter(item);
}

function updatePlaylistSummary() {
  const visibleCount = playlist.filter((item) => matchesCurrentPlaylistFilter(item)).length;
  if (playlist.length === 0) {
    playlistCountLabel.textContent = "Drag to reorder";
    return;
  }
  if (playlistFilterQuery || favoritesOnly) {
    playlistCountLabel.textContent = favoritesOnly
      ? `Showing ${visibleCount} favorite tracks`
      : `Showing ${visibleCount} of ${playlist.length}`;
    return;
  }
  playlistCountLabel.textContent = `${playlist.length} items ready`;
}

function updateFavoritesOnlyButton() {
  favoritesOnlyBtn.classList.toggle("active", favoritesOnly);
  favoritesOnlyBtn.textContent = favoritesOnly ? "Favorites On" : "Favorites";
}

function toggleFavoriteTrack(index) {
  const track = playlist[index];
  if (!track) return;
  const key = getTrackFavoriteKey(track);
  if (!key) return;

  const favorites = new Set(appConfig.favorites || []);
  if (favorites.has(key)) favorites.delete(key);
  else favorites.add(key);

  appConfig.favorites = [...favorites];
  saveAppConfig();
  renderPlaylist();
}

function setFavoritesOnly(value) {
  favoritesOnly = Boolean(value);
  updateFavoritesOnlyButton();
  renderPlaylist();
}

function updateMediaInfo(track = null) {
  if (!track) {
    mediaInfoFormat.textContent = "No media";
    mediaInfoResolution.textContent = "-";
    mediaInfoDuration.textContent = "00:00";
    mediaInfoDetails.textContent = "-";
    mediaInfoSource.textContent = "Library idle";
    return;
  }

  const type = track.file && track.file.type ? track.file.type : getMediaTypeFromPath(track.path || track.url || "");
  const friendlyFormat = type && type !== "application/octet-stream" ? type : "Unknown format";
  const resolution = media.videoWidth && media.videoHeight ? `${media.videoWidth} x ${media.videoHeight}` : "Audio only";
  const source = track.path ? getFileNameFromPath(track.path) : (track.artist || "Local library");
  const ext = (track.file && track.file.name ? track.file.name : track.displayName || source).split(".").pop();
  const inferredSize = currentMediaStats && currentMediaStats.size ? currentMediaStats.size : track.file && track.file.size;
  const statsDetail = inferredSize ? formatBytes(inferredSize) : "Size unavailable";
  const detailParts = [
    ext ? ext.toUpperCase() : "",
    statsDetail,
    media.paused ? "Paused" : "Ready"
  ].filter(Boolean);

  mediaInfoFormat.textContent = friendlyFormat;
  mediaInfoResolution.textContent = resolution;
  mediaInfoDuration.textContent = formatTime(media.duration);
  mediaInfoDetails.textContent = detailParts.join(" | ");
  mediaInfoSource.textContent = source;
}

function resizeCanvas(canvas, minWidth, minHeight) {
  const ratio = (window.devicePixelRatio || 1) * activePerformanceProfile.renderScale;
  const displayWidth = Math.max(minWidth, canvas.clientWidth);
  const displayHeight = Math.max(minHeight, canvas.clientHeight);
  const width = Math.floor(displayWidth * ratio);
  const height = Math.floor(displayHeight * ratio);
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
}

function getVisualizerPalette() {
  const computed = getComputedStyle(document.documentElement);
  const line = computed.getPropertyValue("--viz-line").trim() || "#57e0ff";
  const glow = computed.getPropertyValue("--viz-glow").trim() || "rgba(87, 224, 255, 0.34)";
  return { line, glow };
}

function drawIdleVisualizers() {
  resizeCanvas(waveCanvas, 320, 110);
  resizeCanvas(spectrumCanvas, 320, 80);

  const waveWidth = waveCanvas.width;
  const waveHeight = waveCanvas.height;
  const barWidth = spectrumCanvas.width;
  const barHeight = spectrumCanvas.height;
  const t = performance.now() * 0.0024;
  const palette = getVisualizerPalette();

  waveCtx.clearRect(0, 0, waveWidth, waveHeight);
  waveCtx.lineWidth = Math.max(2, waveHeight * 0.012);
  waveCtx.strokeStyle = palette.line;
  waveCtx.shadowColor = palette.glow;
  waveCtx.shadowBlur = activePerformanceProfile.glow ? 20 : 0;
  waveCtx.beginPath();

  const waveCenter = waveHeight * 0.5;
  const amplitude = waveHeight * 0.09;
  const points = activePerformanceProfile.idlePoints;
  for (let i = 0; i <= points; i += 1) {
    const x = (i / points) * waveWidth;
    const y = waveCenter + Math.sin(i * 0.22 + t) * amplitude;
    if (i === 0) waveCtx.moveTo(x, y);
    else waveCtx.lineTo(x, y);
  }
  waveCtx.stroke();
  waveCtx.shadowBlur = 0;

  spectrumCtx.clearRect(0, 0, barWidth, barHeight);
  const bars = 48;
  const unit = barWidth / bars;

  for (let i = 0; i < bars; i += 1) {
    const pulse = (Math.sin(i * 0.34 + t * 1.2) + 1) * 0.5;
    const value = 0.1 + pulse * 0.22;
    const h = value * barHeight;
    const x = i * unit + unit * 0.18;
    const y = barHeight - h;
    spectrumCtx.fillStyle = palette.glow;
    spectrumCtx.fillRect(x, y, unit * 0.64, h);
  }
}

function drawWaveform(timeData, energy) {
  const width = waveCanvas.width;
  const height = waveCanvas.height;
  const palette = getVisualizerPalette();
  const center = height * 0.5;

  waveCtx.clearRect(0, 0, width, height);

  const glowRadius = (activePerformanceProfile.glow ? 16 : 0) + waveformPulse * (activePerformanceProfile.glow ? 32 : 8);
  const glow = waveCtx.createRadialGradient(width * 0.5, center, 0, width * 0.5, center, width * 0.44);
  glow.addColorStop(0, palette.glow);
  glow.addColorStop(1, "rgba(0,0,0,0)");
  waveCtx.fillStyle = glow;
  waveCtx.globalAlpha = 0.38 + waveformPulse * 0.25;
  waveCtx.fillRect(0, 0, width, height);
  waveCtx.globalAlpha = 1;

  waveCtx.lineWidth = Math.max(2, height * 0.013);
  waveCtx.strokeStyle = palette.line;
  waveCtx.shadowColor = palette.glow;
  waveCtx.shadowBlur = activePerformanceProfile.glow ? glowRadius : 0;
  waveCtx.beginPath();

  const sliceWidth = width / (timeData.length - 1);
  const ampGain = 0.42 + waveformPulse * 0.85;

  for (let i = 0; i < timeData.length; i += 1) {
    const normalized = (timeData[i] - 128) / 128;
    const y = center + normalized * (height * ampGain * 0.46);
    const x = i * sliceWidth;

    if (i === 0) waveCtx.moveTo(x, y);
    else waveCtx.lineTo(x, y);
  }

  waveCtx.stroke();
  waveCtx.shadowBlur = 0;

  waveformPulse = waveformPulse * 0.82 + clamp(energy, 0, 1) * 0.18;
}

function drawSpectrumBars(freqData) {
  const width = spectrumCanvas.width;
  const height = spectrumCanvas.height;
  const bars = activePerformanceProfile.spectrumBars;
  const step = Math.max(1, Math.floor(freqData.length / bars));
  const barWidth = width / bars;

  spectrumCtx.clearRect(0, 0, width, height);

  for (let i = 0; i < bars; i += 1) {
    const value = freqData[i * step] / 255;
    const eased = Math.pow(value, 1.4);
    const h = Math.max(3, eased * height * 0.95);
    const x = i * barWidth + barWidth * 0.16;
    const y = height - h;
    const hue = 180 + Math.round(i * 0.9);
    spectrumCtx.fillStyle = `hsla(${hue} 88% 60% / 0.82)`;
    spectrumCtx.fillRect(x, y, barWidth * 0.68, h);
  }
}

function startSpectrumLoop() {
  if (spectrumAnimationId) return;

  const draw = (timestamp) => {
    const frameMs = 1000 / activePerformanceProfile.maxFps;
    if (timestamp - lastFrameTime < frameMs) {
      spectrumAnimationId = requestAnimationFrame(draw);
      return;
    }
    lastFrameTime = timestamp;

    if (!analyserNode) {
      drawIdleVisualizers();
      spectrumAnimationId = requestAnimationFrame(draw);
      return;
    }

    resizeCanvas(waveCanvas, 320, 110);
    resizeCanvas(spectrumCanvas, 320, 80);

    if (!freqDataArray || freqDataArray.length !== analyserNode.frequencyBinCount) {
      freqDataArray = new Uint8Array(analyserNode.frequencyBinCount);
    }
    if (!timeDataArray || timeDataArray.length !== analyserNode.fftSize) {
      timeDataArray = new Uint8Array(analyserNode.fftSize);
    }

    analyserNode.getByteFrequencyData(freqDataArray);
    analyserNode.getByteTimeDomainData(timeDataArray);

    let energy = 0;
    for (let i = 0; i < freqDataArray.length; i++) energy += freqDataArray[i];
    energy = energy / (freqDataArray.length * 255);
    document.documentElement.style.setProperty("--playback-energy", energy.toFixed(3));
    rollingEnergy = rollingEnergy * 0.92 + energy * 0.08;

    if (autoNormalizeEnabled && preampNode) {
      const target = 0.2;
      const error = target - rollingEnergy;
      const nextGain = clamp(preampNode.gain.value + error * 0.06, 0.72, 1.35);
      preampNode.gain.setTargetAtTime(nextGain, audioContext ? audioContext.currentTime : 0, 0.08);
    }

    if (gainReductionStatus && compressorNode) {
      const reductionDb = Number(compressorNode.reduction || 0);
      gainReductionStatus.textContent = `Gain Reduction: ${Math.abs(reductionDb).toFixed(1)} dB`;
    }

    if (activeVisualizerMode === "bars") {
      drawSpectrumBars(freqDataArray);
      drawWaveform(timeDataArray, energy);
    } else if (activeVisualizerMode === "wave") {
      drawWaveform(timeDataArray, energy);
      drawSpectrumBars(freqDataArray);
    } else if (activeVisualizerMode === "circular") {
      drawCircularVisualizer(freqDataArray, energy);
    } else if (activeVisualizerMode === "particles") {
      drawParticlesVisualizer(freqDataArray, energy);
    }

    if (isLyricsOpen) {
      updateLyricsSync(media.currentTime);
    }

    spectrumAnimationId = requestAnimationFrame(draw);
  };

  spectrumAnimationId = requestAnimationFrame(draw);
}

function stopSpectrumLoop() {
  if (spectrumAnimationId) {
    cancelAnimationFrame(spectrumAnimationId);
    spectrumAnimationId = null;
  }
}

function updateTimeLabel() {
  timeLabel.textContent = `${formatTime(media.currentTime)} / ${formatTime(media.duration)}`;
}

async function persistResumeMap() {
  appConfig.resumeMap = resumeMap;
  await saveAppConfig();
}

function saveResumePoint(force = false) {
  if (currentIndex < 0 || !playlist[currentIndex]) return;
  if (!Number.isFinite(media.duration) || media.duration <= 0) return;

  const now = Date.now();
  if (!force && now - lastResumeWrite < 3000) return;
  lastResumeWrite = now;

  const key = playlist[currentIndex].file.name;
  if (media.currentTime >= media.duration - 2) {
    resumeMap[key] = 0;
  } else {
    resumeMap[key] = Math.floor(media.currentTime);
  }

  persistResumeMap();
  scheduleCrashRecoverySnapshot(300);
}

function openLicenseModal(reason = "Enter your product key to unlock Pro features.") {
  syncLicenseModalMode();
  if (isDemoBuild()) {
    licenseHint.textContent = "This demo build does not allow Pro activation. Use the full edition to unlock Pro features.";
    licenseMessage.textContent = "Status: demo edition";
    licenseModal.classList.remove("hidden");
    return;
  }
  licenseHint.textContent = reason;
  licenseMessage.textContent = isProUser
    ? "Status: paid Pro active"
    : (isTrialActive() ? `Status: ${getTrialStatusLabel()}` : (getTrialStartedAtDate() ? "Status: trial expired" : "Status: waiting for key"));
  licenseModal.classList.remove("hidden");
  setTimeout(() => {
    licenseKeyInput.focus();
    licenseKeyInput.select();
  }, 0);
}

function requireProAccess(reason = "This is a Pro feature.") {
  if (hasProAccess()) return true;
  openLicenseModal(reason);
  return false;
}

function closeLicenseModal() {
  licenseModal.classList.add("hidden");
}

function openLegalModal() {
  legalModal.classList.remove("hidden");
}

function closeLegalModal() {
  legalModal.classList.add("hidden");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderInlineMarkdown(text) {
  let html = escapeHtml(text);
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  return html;
}

function renderMarkdownToHtml(markdown) {
  const lines = String(markdown || "").replace(/\r/g, "").split("\n");
  const html = [];
  let inList = false;
  let inOrderedList = false;
  let inCodeBlock = false;
  let codeBuffer = [];
  let paragraphBuffer = [];

  function flushParagraph() {
    if (paragraphBuffer.length === 0) return;
    html.push(`<p>${renderInlineMarkdown(paragraphBuffer.join(" "))}</p>`);
    paragraphBuffer = [];
  }

  function flushList() {
    if (inList) {
      html.push("</ul>");
      inList = false;
    }
    if (inOrderedList) {
      html.push("</ol>");
      inOrderedList = false;
    }
  }

  function flushCodeBlock() {
    if (!inCodeBlock) return;
    html.push(`<pre><code>${escapeHtml(codeBuffer.join("\n"))}</code></pre>`);
    inCodeBlock = false;
    codeBuffer = [];
  }

  lines.forEach((line) => {
    if (line.trim().startsWith("```")) {
      flushParagraph();
      flushList();
      if (inCodeBlock) {
        flushCodeBlock();
      } else {
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      return;
    }

    const trimmed = line.trim();
    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    const headingMatch = trimmed.match(/^(#{1,3})\s+(.*)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      const level = headingMatch[1].length;
      html.push(`<h${level}>${renderInlineMarkdown(headingMatch[2])}</h${level}>`);
      return;
    }

    const unorderedMatch = trimmed.match(/^[-*]\s+(.*)$/);
    if (unorderedMatch) {
      flushParagraph();
      if (inOrderedList) {
        html.push("</ol>");
        inOrderedList = false;
      }
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${renderInlineMarkdown(unorderedMatch[1])}</li>`);
      return;
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      flushParagraph();
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      if (!inOrderedList) {
        html.push("<ol>");
        inOrderedList = true;
      }
      html.push(`<li>${renderInlineMarkdown(orderedMatch[1])}</li>`);
      return;
    }

    if (trimmed.startsWith(">")) {
      flushParagraph();
      flushList();
      html.push(`<blockquote>${renderInlineMarkdown(trimmed.replace(/^>\s?/, ""))}</blockquote>`);
      return;
    }

    paragraphBuffer.push(trimmed);
  });

  flushParagraph();
  flushList();
  flushCodeBlock();
  return html.join("");
}

async function openMarkdownDoc(path, title) {
  docTitle.textContent = title || "Document";
  docContent.innerHTML = "<p>Loading...</p>";
  docModal.classList.remove("hidden");

  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    docContent.innerHTML = renderMarkdownToHtml(markdown);
  } catch (err) {
    docContent.innerHTML = `<p>Failed to load document.</p><pre><code>${escapeHtml(err.message || String(err))}</code></pre>`;
  }
}

function closeDocModal() {
  docModal.classList.add("hidden");
}

function maskMiddle(value, visibleStart = 4, visibleEnd = 4, mask = "****") {
  const text = String(value || "");
  if (!text) return text;
  if (text.length <= visibleStart + visibleEnd) return mask;
  return `${text.slice(0, visibleStart)}${mask}${text.slice(-visibleEnd)}`;
}

function sanitizeDebugString(value) {
  let text = String(value ?? "");
  if (!text) return text;

  text = text.replace(/\bHLP-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}\b/g, (match) => {
    const parts = match.split("-");
    return `${parts[0]}-****-****-${parts[3]}`;
  });

  text = text.replace(/\b[A-Z0-9]{32}\b/g, (match) => maskMiddle(match, 4, 4));
  text = text.replace(/\bBearer\s+([A-Za-z0-9\-._~+/]+=*)/gi, (_match, token) => `Bearer ${maskMiddle(token, 3, 3)}`);
  text = text.replace(/([?&](?:token|access_token|refresh_token|api_key|apikey|key|signature|sig|auth|authorization)=)([^&\s]+)/gi, (_match, prefix) => `${prefix}[redacted]`);
  text = text.replace(/(["'\s]|^)(token|access_token|refresh_token|api_key|apikey|key|signature|sig|auth|authorization|licenseKey|hwid)\s*[:=]\s*([^\s,"'}\]]+)/gi, (_match, lead, key) => `${lead}${key}=[redacted]`);
  text = text.replace(/[A-Z]:\\Users\\[^\\]+/gi, (match) => match.replace(/\\Users\\[^\\]+/i, "\\Users\\[redacted]"));

  return text;
}

function sanitizeDebugValue(value, seen = new WeakSet()) {
  if (value == null) return value;
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return sanitizeDebugString(value);
  }
  if (value instanceof Error) {
    return {
      name: value.name,
      message: sanitizeDebugString(value.message),
      stack: sanitizeDebugString(value.stack || "")
    };
  }
  if (Array.isArray(value)) {
    return value.map((item) => sanitizeDebugValue(item, seen));
  }
  if (typeof value === "object") {
    if (seen.has(value)) return "[circular]";
    seen.add(value);
    const next = {};
    Object.entries(value).forEach(([key, entry]) => {
      if (/^(licenseKey|hwid|hardwareId|token|accessToken|refreshToken|authorization|auth|apiKey|signature|sig)$/i.test(key)) {
        next[key] = "[redacted]";
        return;
      }
      next[key] = sanitizeDebugValue(entry, seen);
    });
    seen.delete(value);
    return next;
  }
  return sanitizeDebugString(String(value));
}

function formatDebugData(value) {
  const sanitized = sanitizeDebugValue(value);
  if (sanitized === undefined) return "";
  if (typeof sanitized === "string") return sanitized;
  try {
    return JSON.stringify(sanitized);
  } catch (_error) {
    return "[unserializable]";
  }
}

function pushDebugLog(message, data) {
  const safeMessage = sanitizeDebugString(message);
  const safeData = data !== undefined ? formatDebugData(data) : "";
  const line = `[${new Date().toLocaleTimeString()}] ${safeMessage}${safeData ? ` ${safeData}` : ""}`;
  debugBuffer.push(line);
  if (debugBuffer.length > 400) debugBuffer.shift();
  if (debugConsole) {
    debugConsole.textContent = debugBuffer.join("\n");
    debugConsole.scrollTop = debugConsole.scrollHeight;
  }
}

function openDebugModal() {
  debugModal.classList.remove("hidden");
}

function closeDebugModal() {
  debugModal.classList.add("hidden");
}

function applyLicenseState() {
  const demo = isDemoBuild();
  const tier = getLicenseTier();
  const trialDaysLeft = getTrialDaysLeft();
  document.documentElement.setAttribute("data-license", tier);
  if (demo) {
    licenseBadge.textContent = "Edition: Demo";
  } else if (tier === "pro") {
    licenseBadge.textContent = "License: Pro";
  } else if (tier === "trial") {
    licenseBadge.textContent = getTrialStatusLabel();
  } else {
    licenseBadge.textContent = getTrialStartedAtDate() ? "License: Free (Trial Ended)" : "License: Free";
  }
  activateBtn.textContent = demo ? "Demo Build" : (tier === "pro" ? "Pro Active" : (tier === "trial" ? `Trial ${trialDaysLeft}d` : "Activate Pro"));
  activateBtn.classList.toggle("active", !demo && tier !== "free");
  activateBtn.classList.toggle("demo-disabled", demo);
  activateBtn.disabled = demo;
  activateBtn.title = demo
    ? "Demo build cannot activate Pro licenses."
    : (tier === "trial" ? `30-day Pro trial active, ${trialDaysLeft} day${trialDaysLeft === 1 ? "" : "s"} left.` : "Activate Pro");
  syncLicenseModalMode();

  const disablePro = demo || !hasProAccess();

  // Features that REQUIRE Pro
  [
    miniBtn, screenshotBtn, effectsBtn, fxSurround, fxSurroundDepth, fxLateNight,
    fxSmartGain, aspectRatioSelect, abBtnA, abBtnB, abBtnReset,
    subSyncMinus, subSyncPlus, normalizeBtn,
    lyricsSearchBtn, lyricsApplyBtn, lyricsSaveBtn, lyricsSearchInput
  ].forEach((el) => {
    if (el) {
        el.disabled = disablePro;
        el.classList.toggle("pro-locked", disablePro);
    }
  });

  EQ_BANDS.forEach((b) => {
    const el = document.getElementById(`eq_${b}`);
    if (el) {
        el.disabled = false;
        el.parentElement.classList.remove("pro-locked");
    }
  });

  [eqPreset, eqResetBtn].forEach(el => {
    if (el) {
        el.disabled = false;
        el.classList.remove("pro-locked");
    }
  });

  subtitleInput.disabled = disablePro;
  subtitlePickerLabel.classList.toggle("pro-locked", disablePro);
  subtitlePickerLabel.title = disablePro ? (demo ? "Demo build: Subtitle/Lyrics disabled" : "Pro feature: Subtitle/Lyrics") : "Add Subtitle/Lyrics";

  if (disablePro) {
    if (miniMode) setMiniMode(false, true);
    if (fxSmartGain) fxSmartGain.checked = false;
    if (autoNormalizeEnabled) setAutoNormalize(false, true);
    applyDynamicsProcessing();
    abActive = false;
    updateAbUI();
    if (lyricsStatus) lyricsStatus.textContent = "Lyrics: Pro only";
  }
}

function activateLicense() {
  if (isDemoBuild()) {
    openLicenseModal();
    return;
  }
  const key = normalizeLicenseKey(licenseKeyInput.value);

  if (!normalizeHardwareId(currentHardwareId)) {
    licenseMessage.textContent = "Status: HWID unavailable. Cannot activate.";
    return;
  }

  if (!validateLicenseKey(key, currentHardwareId)) {
    if (hasProAccess()) {
      licenseMessage.textContent = "Status: invalid key for this HWID. Current license stays Pro.";
    } else {
      appConfig.licenseKey = "";
      saveAppConfig();
      isProUser = false;
      applyLicenseState();
      licenseMessage.textContent = "Status: invalid key (not activated).";
    }
    return;
  }

  isProUser = true;
  appConfig.licenseKey = key;
  saveAppConfig();
  licenseMessage.textContent = "Status: activated";
  applyLicenseState();
  setTimeout(() => {
    closeLicenseModal();
  }, 400);
}

function clearLicense() {
  if (isDemoBuild()) {
    closeLicenseModal();
    return;
  }
  appConfig.licenseKey = "";
  saveAppConfig();
  isProUser = false;
  applyLicenseState();
  licenseMessage.textContent = isTrialActive() ? `Status: reverted to ${getTrialStatusLabel()}` : "Status: Pro license cleared";
}

function getFallbackHardwareId() {
  let saved = appConfig.fallbackHardwareId;
  if (saved && normalizeHardwareId(saved)) return saved;

  const chars = "ABCDEF0123456789";
  let out = "";
  for (let i = 0; i < 32; i += 1) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  saved = `${out.slice(0,8)}-${out.slice(8,12)}-${out.slice(12,16)}-${out.slice(16,20)}-${out.slice(20,32)}`;
  appConfig.fallbackHardwareId = saved;
  saveAppConfig();
  return saved;
}

async function loadHardwareId() {
  try {
    if (window.playerAPI && typeof window.playerAPI.getHardwareId === "function") {
      const hwid = await window.playerAPI.getHardwareId();
      currentHardwareId = hwid || "";
    }
  } catch {
    currentHardwareId = "";
  }

  if (!normalizeHardwareId(currentHardwareId)) {
    currentHardwareId = getFallbackHardwareId();
  }

  hwidValue.textContent = `HWID: ${currentHardwareId}`;
}

function initLicense() {
  if (isDemoBuild()) {
    licenseKeyInput.value = "";
    isProUser = false;
    applyLicenseState();
    return;
  }
  ensureTrialStarted();
  const saved = appConfig.licenseKey;
  licenseKeyInput.value = saved || "";
  isProUser = validateLicenseKey(saved, currentHardwareId);
  applyLicenseState();
}

function renderPlaylist() {
  playlistEl.innerHTML = "";
  const visibleItems = playlist
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => matchesCurrentPlaylistFilter(item));

  visibleItems.forEach(({ item, index }) => {
    const li = document.createElement("li");
    li.textContent = item.displayName || item.file.name;
    li.dataset.index = String(index);
    li.draggable = true;
    if (index === currentIndex) li.classList.add("active");
    if (isFavoriteTrack(item)) li.classList.add("favorite");

    li.addEventListener("click", () => loadTrack(index, true));
    li.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      menuTargetIndex = index;
      showPlaylistMenu(event.clientX, event.clientY);
    });
    li.addEventListener("dragstart", (event) => {
      draggedIndex = index;
      li.classList.add("dragging");
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", String(index));
      }
    });
    li.addEventListener("dragend", () => {
      draggedIndex = -1;
      li.classList.remove("dragging");
      clearPlaylistDragState();
    });
    li.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (draggedIndex === -1 || draggedIndex === index) return;
      li.classList.add("drag-over");
    });
    li.addEventListener("dragleave", () => {
      li.classList.remove("drag-over");
    });
    li.addEventListener("drop", (event) => {
      event.preventDefault();
      li.classList.remove("drag-over");
      reorderPlaylist(draggedIndex, index);
    });

    playlistEl.appendChild(li);
  });

  if (visibleItems.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "playlist-empty";
    emptyItem.textContent = playlist.length === 0
      ? "Playlist is empty."
      : favoritesOnly
        ? "No favorite tracks match the current view."
        : "No playlist items match your search.";
    playlistEl.appendChild(emptyItem);
  }

  updatePlaylistSummary();
  updateCover(currentIndex >= 0 && playlist[currentIndex] ? playlist[currentIndex].displayName : "No track selected");
  scheduleCrashRecoverySnapshot();
}

function clearPlaylistDragState() {
  playlistEl.querySelectorAll(".drag-over").forEach((el) => el.classList.remove("drag-over"));
}

function reorderPlaylist(fromIndex, toIndex) {
  if (fromIndex < 0 || toIndex < 0 || fromIndex >= playlist.length || toIndex >= playlist.length || fromIndex === toIndex) return;

  const [item] = playlist.splice(fromIndex, 1);
  playlist.splice(toIndex, 0, item);

  if (currentIndex === fromIndex) {
    currentIndex = toIndex;
  } else if (fromIndex < currentIndex && toIndex >= currentIndex) {
    currentIndex -= 1;
  } else if (fromIndex > currentIndex && toIndex <= currentIndex) {
    currentIndex += 1;
  }

  renderPlaylist();
  updateStatus();
}

function showPlaylistMenu(x, y) {
  if (menuTargetIndex >= 0 && playlist[menuTargetIndex] && favoriteTrackAction) {
    favoriteTrackAction.textContent = isFavoriteTrack(playlist[menuTargetIndex]) ? "Remove favorite" : "Add to favorites";
  }
  playlistMenu.classList.remove("hidden");
  
  const menuWidth = playlistMenu.offsetWidth || 150;
  const menuHeight = playlistMenu.offsetHeight || 200;
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;

  let finalX = x;
  let finalY = y;

  if (x + menuWidth > winWidth) {
    finalX = winWidth - menuWidth - 10;
  }
  if (y + menuHeight > winHeight) {
    finalY = winHeight - menuHeight - 10;
  }

  playlistMenu.style.left = `${Math.max(5, finalX)}px`;
  playlistMenu.style.top = `${Math.max(5, finalY)}px`;
}

function hidePlaylistMenu() {
  playlistMenu.classList.add("hidden");
  menuTargetIndex = -1;
}

function removeTrack(index) {
  if (index < 0 || index >= playlist.length) return;

  const [item] = playlist.splice(index, 1);
  if (item && item.url && item.url.startsWith("blob:")) URL.revokeObjectURL(item.url);

  if (playlist.length === 0) {
    currentIndex = -1;
    media.removeAttribute("src");
    media.load();
    emptyState.style.display = "block";
    media.style.display = "none";
    audioView.style.display = "none";
    clearLyricsState();
  } else if (index === currentIndex) {
    const next = Math.min(index, playlist.length - 1);
    loadTrack(next, true);
  } else if (index < currentIndex) {
    currentIndex -= 1;
  }

  renderPlaylist();
  updateStatus();
}

function moveTrack(index, direction) {
  const target = index + direction;
  if (index < 0 || index >= playlist.length || target < 0 || target >= playlist.length) return;

  const temp = playlist[index];
  playlist[index] = playlist[target];
  playlist[target] = temp;

  if (currentIndex === index) currentIndex = target;
  else if (currentIndex === target) currentIndex = index;

  renderPlaylist();
  updateStatus();
}

function queueTrackNext(index) {
  if (index < 0 || index >= playlist.length) return;
  queue = queue.filter((item) => item !== index);
  queue.unshift(index);
  updateStatus(" | Queued next");
}

function renameTrack(index) {
  if (index < 0 || index >= playlist.length) return;
  const current = playlist[index].displayName;
  const renamed = window.prompt("Rename track", current);
  if (!renamed) return;
  playlist[index].displayName = renamed.trim() || current;
  renderPlaylist();
  updateStatus();
}

function setMediaMode(file) {
  const mediaType = file && file.type ? file.type : "";
  const isVideo = mediaType.startsWith("video/");
  emptyState.style.display = "none";
  if (pipBtn) {
    const pipSupported = Boolean(document.pictureInPictureEnabled && !media.disablePictureInPicture);
    pipBtn.disabled = !isVideo || !pipSupported;
    pipBtn.title = !isVideo
      ? "PiP is only available for video"
      : !pipSupported
        ? "Picture-in-Picture is not available on this system"
        : "Picture-in-Picture";
  }

  if (isVideo) {
    media.style.display = "block";
    media.style.visibility = "visible";
    media.style.opacity = "1";
    media.style.pointerEvents = "auto";
    audioView.style.display = "none";
    
    requestAnimationFrame(() => {
        media.style.width = "99%";
        requestAnimationFrame(() => {
            media.style.width = "100%";
        });
    });
  } else {
    media.style.display = "none";
    audioView.style.display = "flex";
    coverDisc.classList.toggle("spin", !media.paused);
  }
}

function initAudioGraph() {
  if (audioContext) return;

  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  audioContext = new AudioCtx();
  sourceNode = audioContext.createMediaElementSource(media);

  preampNode = audioContext.createGain();
  bassFilter = audioContext.createBiquadFilter();
  midFilter = audioContext.createBiquadFilter();
  trebleFilter = audioContext.createBiquadFilter();
  analyserNode = audioContext.createAnalyser();

  bassFilter.type = "lowshelf";
  bassFilter.frequency.value = 200;

  midFilter.type = "peaking";
  midFilter.frequency.value = 1200;
  midFilter.Q.value = 1;

  trebleFilter.type = "highshelf";
  trebleFilter.frequency.value = 4500;

  compressorNode = audioContext.createDynamicsCompressor();
  compressorNode.attack.value = 0.003;
  compressorNode.release.value = 0.25;
  outputGainNode = audioContext.createGain();
  surroundDryGain = audioContext.createGain();
  surroundWetGain = audioContext.createGain();
  surroundSplitter = audioContext.createChannelSplitter(2);
  surroundMerger = audioContext.createChannelMerger(2);
  surroundDelayLeft = audioContext.createDelay(0.05);
  surroundDelayRight = audioContext.createDelay(0.05);
  surroundCrossGainLeft = audioContext.createGain();
  surroundCrossGainRight = audioContext.createGain();

  surroundDelayLeft.delayTime.value = 0.012;
  surroundDelayRight.delayTime.value = 0.016;
  surroundCrossGainLeft.gain.value = 0;
  surroundCrossGainRight.gain.value = 0;
  surroundWetGain.gain.value = 0;
  surroundDryGain.gain.value = 1;

  // 10-Band EQ Init
  const frequencies = [31, 62, 125, 250, 500, 1000, 2000, 4000, 8000, 16000];
  eqFilters = frequencies.map(freq => {
    const f = audioContext.createBiquadFilter();
    f.type = "peaking";
    f.frequency.value = freq;
    f.Q.value = 1;
    f.gain.value = 0;
    return f;
  });

  sourceNode.connect(preampNode);
  preampNode.connect(bassFilter);
  bassFilter.connect(midFilter);
  midFilter.connect(trebleFilter);
  
  // Connect 10-band chain
  let lastNode = trebleFilter;
  eqFilters.forEach(f => {
    lastNode.connect(f);
    lastNode = f;
  });

  lastNode.connect(surroundDryGain);
  lastNode.connect(surroundSplitter);
  surroundDryGain.connect(compressorNode);
  surroundSplitter.connect(surroundDelayLeft, 0);
  surroundSplitter.connect(surroundDelayRight, 1);
  surroundDelayLeft.connect(surroundCrossGainLeft);
  surroundDelayRight.connect(surroundCrossGainRight);
  surroundCrossGainLeft.connect(surroundMerger, 0, 1);
  surroundCrossGainRight.connect(surroundMerger, 0, 0);
  surroundMerger.connect(surroundWetGain);
  surroundWetGain.connect(compressorNode);
  compressorNode.connect(outputGainNode);
  outputGainNode.connect(analyserNode);
  analyserNode.connect(audioContext.destination);

  applySpatialAudio();
  applyDynamicsProcessing();
  applyEqFromUI();
  updateAbUI();
  applyPerformanceProfile();
  startSpectrumLoop();
}

function updateEqLabels() {
  EQ_BANDS.forEach((band) => {
    const input = document.getElementById(`eq_${band}`);
    if (input) input.title = `${band}: ${input.value} dB`;
  });
}

function applyEqFromUI() {
  updateEqLabels();
  if (!audioContext) return;

  preampNode.gain.value = 1;
  bassFilter.gain.value = 0;
  midFilter.gain.value = 0;
  trebleFilter.gain.value = 0;

  EQ_BANDS.forEach((band, i) => {
    const el = document.getElementById(`eq_${band}`);
    if (el && eqFilters[i]) {
      eqFilters[i].gain.value = Number(el.value);
    }
  });
}

function applyPreset(name) {
  const preset = eqPresets[name];
  if (!preset) return;

  EQ_BANDS.forEach((b, i) => {
    const el = document.getElementById(`eq_${b}`);
    if (el) el.value = String(preset[i] ?? 0);
  });

  applyEqFromUI();
}

function resetAllEQ() {
    setCustomSelectValue(eqPreset, "flat");

    EQ_BANDS.forEach(b => {
        const el = document.getElementById(`eq_${b}`);
        if (el) el.value = "0";
    });
    
    applyEqFromUI();
}

function updateFXLabels() {
  fxBrightnessVal.textContent = Number(fxBrightness.value).toFixed(2);
  fxContrastVal.textContent = Number(fxContrast.value).toFixed(2);
  fxSaturateVal.textContent = Number(fxSaturate.value).toFixed(1);
  fxHueVal.textContent = `${fxHue.value}deg`;
}

function applyFX() {
  updateFXLabels();
  const filters = `
    brightness(${fxBrightness.value})
    contrast(${fxContrast.value})
    saturate(${fxSaturate.value})
    hue-rotate(${fxHue.value}deg)
  `;
  media.style.filter = filters;
}

function resetFX() {
  fxBrightness.value = 1;
  fxContrast.value = 1;
  fxSaturate.value = 1;
  fxHue.value = 0;
  fxSurround.checked = false;
  fxSurroundDepth.value = 4;
  fxAmbilight.checked = false;
  isAmbilightOn = false;
  stopAmbilightLoop();
  applyFX();
  applySpatialAudio();
}

function applySpatialAudio() {
    const depth = Number(fxSurroundDepth.value);
    fxSurroundDepthVal.textContent = depth.toFixed(1);

    if (!audioContext || !surroundDryGain || !surroundWetGain || !surroundCrossGainLeft || !surroundCrossGainRight) return;

    isSurroundOn = fxSurround.checked;

    if (!isSurroundOn) {
        surroundDryGain.gain.setTargetAtTime(1, audioContext.currentTime, 0.08);
        surroundWetGain.gain.setTargetAtTime(0, audioContext.currentTime, 0.08);
        surroundCrossGainLeft.gain.setTargetAtTime(0, audioContext.currentTime, 0.08);
        surroundCrossGainRight.gain.setTargetAtTime(0, audioContext.currentTime, 0.08);
        return;
    }

    // Keep the original stereo image dominant and blend in a light Haas-style crossfeed.
    // Tuned to be audible without hollowing out the center image.
    const normalizedDepth = clamp(depth / 10, 0, 1);
    const wetAmount = 0.14 + normalizedDepth * 0.2;
    const dryAmount = 0.94 - normalizedDepth * 0.16;
    const leftDelay = 0.012 + normalizedDepth * 0.014;
    const rightDelay = 0.016 + normalizedDepth * 0.016;

    surroundDelayLeft.delayTime.setTargetAtTime(leftDelay, audioContext.currentTime, 0.08);
    surroundDelayRight.delayTime.setTargetAtTime(rightDelay, audioContext.currentTime, 0.08);
    surroundCrossGainLeft.gain.setTargetAtTime(wetAmount, audioContext.currentTime, 0.08);
    surroundCrossGainRight.gain.setTargetAtTime(wetAmount * 0.96, audioContext.currentTime, 0.08);
    surroundDryGain.gain.setTargetAtTime(dryAmount, audioContext.currentTime, 0.08);
    surroundWetGain.gain.setTargetAtTime(wetAmount * 0.95, audioContext.currentTime, 0.08);
}

function applyDynamicsProcessing() {
  if (!audioContext || !compressorNode || !outputGainNode) return;
  isLateNightOn = Boolean(fxLateNight && fxLateNight.checked);
  isSmartGainOn = Boolean(fxSmartGain && fxSmartGain.checked);

  if (isLateNightOn) {
    compressorNode.threshold.setTargetAtTime(-30, audioContext.currentTime, 0.08);
    compressorNode.knee.setTargetAtTime(24, audioContext.currentTime, 0.08);
    compressorNode.ratio.setTargetAtTime(8, audioContext.currentTime, 0.08);
    compressorNode.attack.setTargetAtTime(0.004, audioContext.currentTime, 0.08);
    compressorNode.release.setTargetAtTime(0.18, audioContext.currentTime, 0.08);
    outputGainNode.gain.setTargetAtTime(1.12, audioContext.currentTime, 0.08);
    return;
  }

  if (isSmartGainOn) {
    compressorNode.threshold.setTargetAtTime(-18, audioContext.currentTime, 0.08);
    compressorNode.knee.setTargetAtTime(18, audioContext.currentTime, 0.08);
    compressorNode.ratio.setTargetAtTime(12, audioContext.currentTime, 0.08);
    compressorNode.attack.setTargetAtTime(0.002, audioContext.currentTime, 0.08);
    compressorNode.release.setTargetAtTime(0.12, audioContext.currentTime, 0.08);
    outputGainNode.gain.setTargetAtTime(0.92, audioContext.currentTime, 0.08);
    return;
  }

  compressorNode.threshold.setTargetAtTime(0, audioContext.currentTime, 0.08);
  compressorNode.knee.setTargetAtTime(0, audioContext.currentTime, 0.08);
  compressorNode.ratio.setTargetAtTime(1, audioContext.currentTime, 0.08);
  compressorNode.attack.setTargetAtTime(0.003, audioContext.currentTime, 0.08);
  compressorNode.release.setTargetAtTime(0.25, audioContext.currentTime, 0.08);
  outputGainNode.gain.setTargetAtTime(1, audioContext.currentTime, 0.08);
}

function applyAspectRatio() {
  const val = getCustomSelectValue(aspectRatioSelect, "original");
  media.style.objectFit = "contain";
  media.style.transform = "none";
  media.style.width = "100%";
  media.style.height = "100%";

  if (val === "16-9") {
    media.style.aspectRatio = "16/9";
    media.style.objectFit = "fill";
  } else if (val === "4-3") {
    media.style.aspectRatio = "4/3";
    media.style.objectFit = "fill";
  } else if (val === "fill") {
    media.style.objectFit = "cover";
  } else {
    media.style.aspectRatio = "auto";
  }
}

function updateAbUI() {
    abBtnA.classList.toggle("active", timeA !== null);
    abBtnB.classList.toggle("active", timeB !== null);
    abBtnReset.classList.toggle("active", abActive);
    abBtnReset.textContent = abActive ? "AB ON" : "Off";
}

function adjustSubtitleOffset(val) {
    subtitleOffset += val;
    subOffsetVal.textContent = `(${subtitleOffset.toFixed(1)}s)`;
    
    const track = media.textTracks[0];
    if (track && track.cues) {
        for (let i = 0; i < track.cues.length; i++) {
            track.cues[i].startTime += val;
            track.cues[i].endTime += val;
        }
    }
}

async function takeScreenshot() {
  if (!media || media.readyState < 2) return;
  
  const canvas = document.createElement("canvas");
  canvas.width = media.videoWidth;
  canvas.height = media.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(media, 0, 0, canvas.width, canvas.height);
  
  const dataUrl = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = `PlayerPlus_Screenshot_${Date.now()}.png`;
  link.click();
}

async function togglePiP() {
  try {
    if (!document.pictureInPictureEnabled || media.disablePictureInPicture) {
      updateStatus(" | PiP not supported");
      return;
    }
    if (media.style.display !== "block") {
      updateStatus(" | PiP requires video");
      return;
    }
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else if (media.readyState >= 2) {
      await media.requestPictureInPicture();
    } else {
      updateStatus(" | Video not ready for PiP");
    }
  } catch (err) {
    console.error("PiP error:", err);
    updateStatus(" | PiP failed");
  }
}

function startAmbilightLoop() {
  if (!isAmbilightOn || ambilightAnimationId) return;
  ambilightAnimationId = setInterval(updateAmbilight, 100);
}

function stopAmbilightLoop() {
  if (ambilightAnimationId) {
    clearInterval(ambilightAnimationId);
    ambilightAnimationId = null;
  }
  if (mediaContainer) {
    mediaContainer.classList.remove("ambilight-active");
  }
}

function updateAmbilight() {
  if (!isAmbilightOn || !ambilightCtx || media.paused || media.ended || media.readyState < 2) return;
  if (activePerformanceProfile === performanceProfiles.eco) return;
  
  if (media.videoWidth > 0) {
    ambilightCtx.drawImage(media, 0, 0, 10, 10);
    const data = ambilightCtx.getImageData(0, 0, 10, 10).data;
    
    let r = 0, g = 0, b = 0;
    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i+1];
      b += data[i+2];
    }
    
    const count = data.length / 4;
    const avgR = Math.round(r / count);
    const avgG = Math.round(g / count);
    const avgB = Math.round(b / count);
    
    if (mediaContainer) {
      mediaContainer.style.setProperty("--glow-color", `rgba(${avgR}, ${avgG}, ${avgB}, 0.6)`);
      mediaContainer.classList.add("ambilight-active");
    }
  } else {
    if (mediaContainer) {
      mediaContainer.classList.remove("ambilight-active");
    }
  }
}

function updateStatus(extra = "") {
  const discordIndicator = discordStatus ? " | Discord: 🟢" : " | Discord: 🔴";
  const sleepIndicator = sleepMode === "end"
    ? " | Sleep: End"
    : sleepDeadline
      ? ` | Sleep: ${formatSleepRemaining(sleepDeadline - Date.now())}`
      : "";
  
  if (currentIndex === -1 || !playlist[currentIndex]) {
    statusLabel.textContent = `Not playing${discordIndicator}${sleepIndicator}`;
    return;
  }

  const mode = [];
  if (shuffleMode) mode.push("Shuffle");
  if (loopMode) mode.push("Loop");
  if (miniMode) mode.push("Mini");
  if (isDemoBuild()) mode.push("Demo");
  if (isProUser) mode.push("Pro");
  else if (isTrialActive()) mode.push(`Trial:${getTrialDaysLeft()}d`);
  if (queue.length > 0) mode.push(`Queue:${queue.length}`);
  const suffix = mode.length > 0 ? ` (${mode.join("+")})` : "";
  statusLabel.textContent = `${playlist[currentIndex].displayName}${suffix}${discordIndicator}${sleepIndicator}${extra}`;
}

function setPlaybackVisualState(isPlaying) {
  document.body.classList.toggle("is-playing", Boolean(isPlaying));
  if (!isPlaying) {
    setPlaybackEnergyLevel(0);
  }
}

function setPlaybackEnergyLevel(value) {
  playbackEnergyLevel = clamp(value, 0, 1);
  document.documentElement.style.setProperty("--playback-energy", playbackEnergyLevel.toFixed(3));
}

function applyPlaybackFxSettings(next, persist = false) {
  const normalized = normalizePlaybackFx(next);
  appConfig.playbackFx = normalized;
  if (playbackHue) playbackHue.value = String(normalized.hue);
  if (playbackIntensity) playbackIntensity.value = String(normalized.intensity);
  document.documentElement.style.setProperty("--playback-hue", String(normalized.hue));
  document.documentElement.style.setProperty("--playback-intensity", normalized.intensity.toFixed(2));
  if (persist) saveAppConfig();
}

function showToastMessage(message, autoHideMs = 5000) {
  if (!updateToast) return;
  if (updateToastHideTimer) {
    clearTimeout(updateToastHideTimer);
    updateToastHideTimer = null;
  }
  updateToast.textContent = message;
  updateToast.classList.remove("hidden");
  if (autoHideMs > 0) {
    updateToastHideTimer = setTimeout(() => {
      if (updateToast) updateToast.classList.add("hidden");
      updateToastHideTimer = null;
    }, autoHideMs);
  }
}

const THEME_PRESETS = {
  neon: {
    accent: "#5fd0ff",
    accentStrong: "#20a8dc",
    accentWarm: "#7ff0bf",
    vizLine: "#6ad8ff"
  },
  minimal: {
    accent: "#8fb6d8",
    accentStrong: "#6d93b5",
    accentWarm: "#9fc7c0",
    vizLine: "#9cc1e1"
  },
  warm: {
    accent: "#ffba63",
    accentStrong: "#e28a34",
    accentWarm: "#ffd98d",
    vizLine: "#ffcd85"
  }
};

function applyThemePreset(name, persist = false) {
  const next = Object.prototype.hasOwnProperty.call(THEME_PRESETS, name) ? name : "neon";
  const palette = THEME_PRESETS[next];
  document.documentElement.style.setProperty("--accent", palette.accent);
  document.documentElement.style.setProperty("--accent-strong", palette.accentStrong);
  document.documentElement.style.setProperty("--accent-warm", palette.accentWarm);
  document.documentElement.style.setProperty("--viz-line", palette.vizLine);
  setCustomSelectValue(themePresetSelect, next);
  appConfig.themePreset = next;
  if (persist) saveAppConfig();
}

function renderLyricsResults(results) {
  lyricSearchResults = Array.isArray(results) ? results : [];
  if (!lyricsResultsSelect) return;
  const trigger = lyricsResultsSelect.querySelector(".select-trigger");
  const optionsContainer = lyricsResultsSelect.querySelector(".select-options");
  if (!trigger || !optionsContainer) return;
  optionsContainer.innerHTML = "";
  if (lyricSearchResults.length === 0) {
    trigger.textContent = "No results";
    lyricsResultsSelect.dataset.value = "0";
    return;
  }
  lyricSearchResults.forEach((item, idx) => {
    const option = document.createElement("div");
    option.className = "option";
    option.dataset.value = String(idx);
    option.textContent = `${item.artistName || "Unknown"} - ${item.trackName || "Unknown"}${item.syncedLyrics ? " (synced)" : ""}`;
    option.addEventListener("click", (event) => {
      event.stopPropagation();
      setCustomSelectValue(lyricsResultsSelect, String(idx));
      lyricsResultsSelect.classList.remove("open");
      optionsContainer.classList.add("hidden");
      lyricsResultsSelect.dispatchEvent(new CustomEvent("change", { detail: { value: String(idx) } }));
    });
    optionsContainer.appendChild(option);
  });
  setCustomSelectValue(lyricsResultsSelect, "0");
}

function setAutoNormalize(enabled, init = false) {
  autoNormalizeEnabled = Boolean(enabled);
  appConfig.autoNormalize = autoNormalizeEnabled;
  if (normalizeBtn) {
    normalizeBtn.textContent = autoNormalizeEnabled ? "Normalize: On" : "Normalize: Off";
    normalizeBtn.classList.toggle("active", autoNormalizeEnabled);
  }
  if (!init) saveAppConfig();
}

function dedupePlaylistByIdentity() {
  const seen = new Set();
  const next = [];
  let removed = 0;
  let nextCurrentIndex = currentIndex;
  playlist.forEach((track, index) => {
    const key = getTrackIdentityKey(track);
    if (key && seen.has(key)) {
      removed += 1;
      if (index < currentIndex) nextCurrentIndex -= 1;
      return;
    }
    if (key) seen.add(key);
    next.push(track);
  });
  if (removed > 0) {
    playlist.length = 0;
    playlist.push(...next);
    if (playlist.length === 0) nextCurrentIndex = -1;
    currentIndex = clamp(nextCurrentIndex, -1, playlist.length - 1);
  }
  return removed;
}

function ensureSelectDefaults() {
  const defaults = [
    [themeSelect, "dark"],
    [themePresetSelect, "neon"],
    [performanceModeSelect, "auto"],
    [sleepTimerSelect, "off"],
    [speed, "1"],
    [aspectRatioSelect, "original"],
    [eqPreset, "flat"]
  ];
  let repaired = 0;
  defaults.forEach(([el, fallback]) => {
    if (!el) return;
    const value = getCustomSelectValue(el, "");
    if (!value) {
      setCustomSelectValue(el, fallback);
      repaired += 1;
    }
  });
  return repaired;
}

async function runAutoRepair(reason = "manual") {
  if (autoRepairRunning) return;
  autoRepairRunning = true;
  showToastMessage("AI Auto Repair started...", 0);
  if (aiRepairBtn) {
    aiRepairBtn.disabled = true;
    aiRepairBtn.textContent = "Repairing...";
  }

  const fixes = [];

  try {
    const repairedSelects = ensureSelectDefaults();
    if (repairedSelects > 0) fixes.push(`selects:${repairedSelects}`);

    const removedDupes = dedupePlaylistByIdentity();
    if (removedDupes > 0) {
      fixes.push(`duplicates:${removedDupes}`);
      renderPlaylist();
    }

    if (currentIndex >= playlist.length) {
      currentIndex = playlist.length > 0 ? playlist.length - 1 : -1;
      fixes.push("index:normalized");
    }

    if (isAmbilightOn && !mediaContainer) {
      isAmbilightOn = false;
      if (fxAmbilight) fxAmbilight.checked = false;
      stopAmbilightLoop();
      fixes.push("ambilight:disabled");
    }

    if (lastMediaErrorKind && playlist.length > 1) {
      const nextIndex = getNextIndex();
      if (nextIndex >= 0 && nextIndex !== currentIndex) {
        await loadTrack(nextIndex, true);
        fixes.push("media:error-recovered-next-track");
      }
    }

    if (audioContext && audioContext.state === "suspended") {
      await audioContext.resume().catch(() => {});
      if (audioContext.state === "running") fixes.push("audio:resumed");
    }

    if (window.playerAPI && typeof window.playerAPI.reconnectRPC === "function") {
      await window.playerAPI.reconnectRPC().catch(() => {});
      fixes.push("rpc:reconnect-requested");
    }

    applyPerformanceProfile();
    updateMediaInfo(playlist[currentIndex] || null);
    const resultText = fixes.length > 0 ? fixes.join(", ") : "no issue found";
    updateStatus(` | AI Repair: ${resultText}`);
    showToastMessage(`AI Auto Repair complete: ${resultText}`, 6000);
    pushDebugLog("AI auto repair complete", { reason, fixes, lastMediaErrorKind });
    lastMediaErrorKind = "";
  } catch (error) {
    const message = error && error.message ? error.message : String(error);
    pushDebugLog("AI auto repair failed", message);
    updateStatus(" | AI Repair failed");
    showToastMessage(`AI Auto Repair failed: ${message}`, 7000);
  } finally {
    autoRepairRunning = false;
    if (aiRepairBtn) {
      aiRepairBtn.textContent = "AI Auto Repair";
      aiRepairBtn.disabled = false;
    }
  }
}

function setTheme(theme) {
  const value = "dark";
  document.documentElement.setAttribute("data-theme", value);
  setCustomSelectValue(themeSelect, value);
  appConfig.theme = value;
  saveAppConfig();
}

function detectAutoPerformanceMode() {
  const memory = Number(navigator.deviceMemory || 0);
  const cores = Number(navigator.hardwareConcurrency || 0);

  if ((memory > 0 && memory <= 4) || (cores > 0 && cores <= 4)) {
    return "eco";
  }
  return "balanced";
}

function applyPerformanceProfile() {
  const mode = performanceMode === "auto" ? detectAutoPerformanceMode() : performanceMode;
  activePerformanceProfile = performanceProfiles[mode] || performanceProfiles.balanced;

  if (analyserNode) {
    analyserNode.fftSize = activePerformanceProfile.fftSize;
    analyserNode.smoothingTimeConstant = activePerformanceProfile.smoothing;
    freqDataArray = null;
    timeDataArray = null;
  }

  lastFrameTime = 0;
  resizeCanvas(waveCanvas, 320, 110);
  resizeCanvas(spectrumCanvas, 320, 80);
}

function setPerformanceMode(mode) {
  const next = ["auto", "balanced", "eco", "quality"].includes(mode) ? mode : "auto";
  performanceMode = next;
  setCustomSelectValue(performanceModeSelect, next);
  appConfig.performanceMode = next;
  saveAppConfig();
  applyPerformanceProfile();
}

function removeSubtitleTrack() {
  if (subtitleTrackElement) {
    subtitleTrackElement.remove();
    subtitleTrackElement = null;
  }
  if (subtitleBlobUrl) {
    URL.revokeObjectURL(subtitleBlobUrl);
    subtitleBlobUrl = null;
  }
}

function srtToVtt(text) {
  const normalized = text.replace(/\r+/g, "").trim();
  const lines = normalized.split("\n");
  const converted = lines.map((line) => {
    if (line.includes("-->") && line.includes(",")) {
      return line.replace(/(\d{2}:\d{2}:\d{2}),(\d{3})/g, "$1.$2");
    }
    return line;
  });
  return `WEBVTT\n\n${converted.join("\n")}`;
}

function clearLyricsState() {
  currentLrcEntries = [];
  currentLrcPath = "";
  currentLrcIndex = -1;
  lyricsOffsetSeconds = 0;
  if (lyricsStatus) lyricsStatus.textContent = "Lyrics: none";
  if (lyricsLine) lyricsLine.textContent = "-";
  if (subOffsetVal) subOffsetVal.textContent = "(0.0s)";
  if (subtitleStatus) subtitleStatus.textContent = subtitleTrackElement ? `Subtitle: ${subtitleTrackElement.label || "loaded"}` : "Subtitle: none";
  if (lyricsPanel) lyricsPanel.classList.remove("active");
}

function parseLrc(content) {
  const lines = String(content || "").replace(/\r/g, "").split("\n");
  const entries = [];
  const timeRegex = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
  let offsetMs = 0;

  lines.forEach((rawLine) => {
    if (!rawLine) return;
    const offsetMatch = rawLine.match(/^\[offset:([+-]?\d+)\]/i);
    if (offsetMatch) {
      offsetMs = Number(offsetMatch[1]) || 0;
      return;
    }
    const text = rawLine.replace(timeRegex, "").trim();
    const matches = [...rawLine.matchAll(timeRegex)];
    if (matches.length === 0 || !text) return;
    matches.forEach((m) => {
      const min = Number(m[1]) || 0;
      const sec = Number(m[2]) || 0;
      const fracRaw = m[3] || "0";
      const frac = Number(fracRaw.padEnd(3, "0").slice(0, 3)) || 0;
      const time = min * 60 + sec + frac / 1000 + offsetMs / 1000;
      entries.push({ time, text });
    });
  });

  entries.sort((a, b) => a.time - b.time);
  return entries;
}

function parseTrackQueryParts(query) {
  const raw = String(query || "").trim();
  if (!raw) return { artist: "", track: "" };
  const byDash = raw.split(/\s[-|]\s/);
  if (byDash.length >= 2) {
    return {
      artist: byDash[0].trim(),
      track: byDash.slice(1).join(" - ").trim()
    };
  }
  return { artist: "", track: raw };
}

function formatSyncedLyricsForSave(item) {
  if (item && item.syncedLyrics) return String(item.syncedLyrics).trim();
  if (!(item && item.plainLyrics)) return "";
  return `[00:00.000] ${String(item.plainLyrics).replace(/\r/g, "").split("\n").join(" / ")}`;
}

function setLyricsFromLrcString(lrcText, label = "Online lyrics") {
  const parsed = parseLrc(lrcText);
  if (parsed.length === 0) return false;
  currentLrcEntries = parsed;
  currentLrcPath = "";
  currentLrcIndex = -1;
  if (lyricsStatus) lyricsStatus.textContent = `Lyrics: ${label}`;
  if (subtitleStatus) subtitleStatus.textContent = "Sync target: Lyrics";
  if (lyricsLine) lyricsLine.textContent = "...";
  applyLyricsOffsetForCurrentTrack();
  return true;
}

async function searchLyricsFromLrclib(query) {
  const { artist, track } = parseTrackQueryParts(query);
  const params = new URLSearchParams();
  if (artist) params.set("artist_name", artist);
  if (track) params.set("track_name", track);
  if (!artist && !track) params.set("q", String(query || "").trim());
  const url = `https://lrclib.net/api/search?${params.toString()}`;

  const response = await fetch(url, {
    headers: { Accept: "application/json" }
  });
  if (!response.ok) {
    throw new Error(`lrclib HTTP ${response.status}`);
  }

  const items = await response.json();
  if (!Array.isArray(items) || items.length === 0) return [];
  return items
    .filter((item) => item && (item.syncedLyrics || item.plainLyrics))
    .slice(0, 20);
}

async function runLyricsSearch(query) {
  const q = String(query || "").trim();
  if (!q) return;
  if (lyricsSearchBtn) {
    lyricsSearchBtn.disabled = true;
    lyricsSearchBtn.textContent = "Searching...";
  }
  if (lyricsStatus) lyricsStatus.textContent = "Lyrics: searching lrclib...";

  try {
    const results = await searchLyricsFromLrclib(q);
    renderLyricsResults(results);
    if (!results || results.length === 0) {
      if (lyricsStatus) lyricsStatus.textContent = "Lyrics: no result";
      showToastMessage("No lyrics found from lrclib.", 3200);
      return;
    }
    if (lyricsStatus) lyricsStatus.textContent = `Lyrics: ${results.length} result(s)`;
    showToastMessage(`Found ${results.length} lyrics result(s).`, 2800);
  } catch (error) {
    if (lyricsStatus) lyricsStatus.textContent = "Lyrics: lrclib search failed";
    showToastMessage(`Lyrics search failed: ${error.message || String(error)}`, 4800);
  } finally {
    if (lyricsSearchBtn) {
      lyricsSearchBtn.disabled = false;
      lyricsSearchBtn.textContent = "Search Lyrics";
    }
  }
}

function applyLyricResultByIndex(index) {
  const item = lyricSearchResults[index];
  if (!item) return false;
  const sourceLabel = `${item.artistName || "Unknown"} - ${item.trackName || "Unknown"}`;
  if (item.syncedLyrics && setLyricsFromLrcString(item.syncedLyrics, `${sourceLabel} (lrclib)`)) {
    showToastMessage("Synced lyrics loaded from lrclib.", 2800);
    return true;
  }
  if (item.plainLyrics) {
    currentLrcEntries = [{ time: 0, text: item.plainLyrics.replace(/\n+/g, " / ") }];
    currentLrcPath = "";
    currentLrcIndex = -1;
    if (lyricsStatus) lyricsStatus.textContent = `Lyrics: ${sourceLabel} (plain)`;
    if (lyricsLine) lyricsLine.textContent = currentLrcEntries[0].text;
    if (lyricsPanel) lyricsPanel.classList.add("active");
    showToastMessage("Plain lyrics loaded from lrclib.", 2800);
    return true;
  }
  return false;
}

async function saveSelectedLyricsAsLrc() {
  const selectedIndex = lyricsResultsSelect ? Number(getCustomSelectValue(lyricsResultsSelect, "0")) : 0;
  const item = lyricSearchResults[selectedIndex];
  if (!item) {
    showToastMessage("No lyric result selected.", 2600);
    return;
  }
  if (currentIndex < 0 || !playlist[currentIndex] || !playlist[currentIndex].path) {
    showToastMessage("Play a local track first to save adjacent LRC.", 3200);
    return;
  }
  if (!(window.playerAPI && window.playerAPI.writeTextFile)) {
    showToastMessage("Save LRC is unavailable.", 3200);
    return;
  }
  const sourcePath = playlist[currentIndex].path;
  const targetPath = sourcePath.replace(/\.[^.]+$/, ".lrc");
  const content = formatSyncedLyricsForSave(item);
  if (!content) {
    showToastMessage("Selected result has no lyrics text.", 3200);
    return;
  }
  try {
    await window.playerAPI.writeTextFile(targetPath, content);
    showToastMessage(`LRC saved to: ${targetPath}`, 4200);
  } catch {
    showToastMessage("Failed to save LRC file.", 3200);
  }
}

function updateLrcLine() {
  if (!lyricsLine || currentLrcEntries.length === 0) return;
  const now = (media.currentTime || 0) + lyricsOffsetSeconds;
  let nextIndex = -1;
  for (let i = 0; i < currentLrcEntries.length; i += 1) {
    if (now >= currentLrcEntries[i].time) nextIndex = i;
    else break;
  }
  if (nextIndex !== currentLrcIndex) {
    currentLrcIndex = nextIndex;
    lyricsLine.textContent = nextIndex >= 0 ? currentLrcEntries[nextIndex].text : "...";
    if (lyricsPanel) lyricsPanel.classList.toggle("active", nextIndex >= 0);
  }
}

function adjustLyricsOffset(delta) {
  lyricsOffsetSeconds = clamp(lyricsOffsetSeconds + delta, -15, 15);
  if (subOffsetVal) subOffsetVal.textContent = `(${lyricsOffsetSeconds.toFixed(1)}s)`;
  persistLyricsOffsetForCurrentTrack();
  updateLrcLine();
}

function getLyricsOffsetKeyForCurrentTrack() {
  if (currentIndex < 0 || !playlist[currentIndex]) return "";
  return getTrackIdentityKey(playlist[currentIndex]);
}

function applyLyricsOffsetForCurrentTrack() {
  const key = getLyricsOffsetKeyForCurrentTrack();
  const stored = key && appConfig.lyricsOffsets ? Number(appConfig.lyricsOffsets[key]) : 0;
  lyricsOffsetSeconds = Number.isFinite(stored) ? clamp(stored, -15, 15) : 0;
  if (subOffsetVal) subOffsetVal.textContent = `(${lyricsOffsetSeconds.toFixed(1)}s)`;
}

function persistLyricsOffsetForCurrentTrack() {
  const key = getLyricsOffsetKeyForCurrentTrack();
  if (!key) return;
  appConfig.lyricsOffsets = appConfig.lyricsOffsets || {};
  appConfig.lyricsOffsets[key] = Number(lyricsOffsetSeconds.toFixed(2));
  saveAppConfig();
}

async function tryAutoLoadLrc(track) {
  clearLyricsState();
  if (!track || !track.path || !(window.playerAPI && window.playerAPI.findAdjacentLyrics)) return;
  try {
    const lrcPath = await window.playerAPI.findAdjacentLyrics(track.path);
    if (!lrcPath) return;
    const rawText = await window.playerAPI.readTextFile(lrcPath);
    const parsed = parseLrc(rawText);
    if (parsed.length === 0) return;
    currentLrcEntries = parsed;
    currentLrcPath = lrcPath;
    currentLrcIndex = -1;
    if (lyricsStatus) lyricsStatus.textContent = `Lyrics: ${getFileNameFromPath(lrcPath)}`;
    if (subtitleStatus) subtitleStatus.textContent = "Sync target: Lyrics";
    if (lyricsLine) lyricsLine.textContent = "...";
    applyLyricsOffsetForCurrentTrack();
  } catch {
    if (lyricsStatus) lyricsStatus.textContent = "Lyrics: load failed";
  }
}

async function loadSubtitleFile(file) {
  if (!file) return;
  if (!hasProAccess()) {
    openLicenseModal("Subtitles are available in Pro.");
    return;
  }

  const name = file.name.toLowerCase();
  const text = await file.text();
  const content = name.endsWith(".srt") ? srtToVtt(text) : text;

  removeSubtitleTrack();

  const blob = new Blob([content], { type: "text/vtt" });
  subtitleBlobUrl = URL.createObjectURL(blob);

  subtitleTrackElement = document.createElement("track");
  subtitleTrackElement.kind = "subtitles";
  subtitleTrackElement.label = file.name;
  subtitleTrackElement.srclang = "en";
  subtitleTrackElement.src = subtitleBlobUrl;
  subtitleTrackElement.default = true;

  media.appendChild(subtitleTrackElement);
  subtitleTrackElement.track.mode = "showing";
  subtitleStatus.textContent = `Subtitle: ${file.name}`;
}

async function tryAutoLoadSubtitle(track) {
  if (!hasProAccess() || !track || !track.path || !(window.playerAPI && window.playerAPI.findAdjacentSubtitle)) return;
  try {
    const subtitlePath = await window.playerAPI.findAdjacentSubtitle(track.path);
    if (!subtitlePath) return;
    const rawText = await window.playerAPI.readTextFile(subtitlePath);
    const lowerPath = subtitlePath.toLowerCase();
    const content = lowerPath.endsWith(".srt") ? srtToVtt(rawText) : rawText;

    removeSubtitleTrack();
    const blob = new Blob([content], { type: "text/vtt" });
    subtitleBlobUrl = URL.createObjectURL(blob);

    subtitleTrackElement = document.createElement("track");
    subtitleTrackElement.kind = "subtitles";
    subtitleTrackElement.label = getFileNameFromPath(subtitlePath);
    subtitleTrackElement.srclang = "en";
    subtitleTrackElement.src = subtitleBlobUrl;
    subtitleTrackElement.default = true;
    media.appendChild(subtitleTrackElement);
    subtitleTrackElement.track.mode = "showing";
    subtitleStatus.textContent = `Subtitle: ${getFileNameFromPath(subtitlePath)} (auto)`;
  } catch {
    subtitleStatus.textContent = "Subtitle: auto-load failed";
  }
}

async function tryAutoLoadArtwork(track) {
  if (!track || track.cover) return;
  const mediaType = track.file && track.file.type ? track.file.type : getMediaTypeFromPath(track.path || track.url || "");
  if (mediaType.startsWith("video/")) return;
  const artworkCacheKey = getTrackArtworkCacheKey(track);

  if (track.path && window.playerAPI && window.playerAPI.findAdjacentArtwork) {
    try {
      const artworkPath = await window.playerAPI.findAdjacentArtwork(track.path);
      if (artworkPath) {
        track.cover = window.playerAPI.toFileUrl(artworkPath);
        return;
      }
    } catch {}
  }

  const cachedArtworkPath = artworkCacheKey && appConfig.artworkCache ? appConfig.artworkCache[artworkCacheKey] : "";
  if (cachedArtworkPath && window.playerAPI && window.playerAPI.toFileUrl) {
    track.cover = window.playerAPI.toFileUrl(cachedArtworkPath);
    return;
  }

  if (!(window.playerAPI && window.playerAPI.fetchArtwork)) return;
  try {
    const query = [track.artist && track.artist !== "Local File" ? track.artist : "", track.displayName]
      .filter(Boolean)
      .join(" ")
      .replace(/\.[a-z0-9]{2,5}$/i, "")
      .trim();
    if (!query) return;
    const remoteArtwork = await window.playerAPI.fetchArtwork(query);
    if (remoteArtwork) {
      if (window.playerAPI && window.playerAPI.cacheArtwork && artworkCacheKey) {
        const cachedPath = await window.playerAPI.cacheArtwork(artworkCacheKey, remoteArtwork);
        if (cachedPath) {
          appConfig.artworkCache[artworkCacheKey] = cachedPath;
          await saveAppConfig();
          track.cover = window.playerAPI.toFileUrl(cachedPath);
          return;
        }
      }
      track.cover = remoteArtwork;
    }
  } catch {}
}

async function loadTrackStats(track) {
  currentMediaStats = null;
  if (!track || !track.path || !(window.playerAPI && window.playerAPI.getFileStats)) return;
  try {
    currentMediaStats = await window.playerAPI.getFileStats(track.path);
  } catch {
    currentMediaStats = null;
  }
}

function refreshCoverArt(track) {
  if (!track) return;
  if (track.cover) {
    coverDisc.style.backgroundImage = `url('${track.cover}')`;
    coverDisc.style.backgroundSize = "cover";
  } else {
    coverDisc.style.backgroundImage = "none";
  }
}

function sortPlaylistFavoritesFirst() {
  if (playlist.length < 2) return;
  const currentTrack = currentIndex >= 0 ? playlist[currentIndex] : null;
  playlist.sort((a, b) => {
    const favoriteDelta = Number(isFavoriteTrack(b)) - Number(isFavoriteTrack(a));
    if (favoriteDelta !== 0) return favoriteDelta;
    return (a.displayName || "").localeCompare(b.displayName || "", undefined, { sensitivity: "base", numeric: true });
  });
  currentIndex = currentTrack ? playlist.findIndex((item) => getTrackIdentityKey(item) === getTrackIdentityKey(currentTrack)) : currentIndex;
  renderPlaylist();
  updateStatus();
}

async function loadTrack(index, autoplay = false) {
  if (index < 0 || index >= playlist.length) return;

  currentIndex = index;
  applyLyricsOffsetForCurrentTrack();
  const track = playlist[index];
  const { file, displayName, artist } = track;
  const trackFile = file || {
    name: displayName || "Unknown media",
    type: getMediaTypeFromPath(track.path || track.url || "")
  };
  const playableUrl = await ensureTrackPlayableUrl(track);

  if (!playableUrl) {
    pushDebugLog("Track has no playable URL", { index, displayName, path: track.path });
    updateStatus(" | Media path unavailable");
    return;
  }

  setMediaMode(trackFile);
  await loadTrackStats(track);
  media.src = playableUrl;
  media.load();
  renderPlaylist();

  const saved = Number(resumeMap[trackFile.name] || 0);
  pendingResumeTime = Number.isFinite(saved) && saved > 2 ? saved : null;

  updateStatus(artist ? ` - ${artist}` : "");
  updateCover(displayName);
  updateMediaInfo(track);
  rememberRecentTrack(track);
  refreshCoverArt(track);

  if (autoplay) {
    initAudioGraph();
    if (audioContext && audioContext.state === "suspended") {
      audioContext.resume().catch(() => {});
    }
    media.play().catch(() => {});
    
    updateDiscordRPC();
    
    requestAnimationFrame(() => {
        media.style.width = "99.9%";
        requestAnimationFrame(() => {
            media.style.width = "100%";
        });
    });
  }

  tryAutoLoadArtwork(track).then(() => {
    if (playlist[currentIndex] === track) {
      refreshCoverArt(track);
    }
  }).catch(() => {});
  tryAutoLoadSubtitle(track);
  tryAutoLoadLrc(track);
}

function addFiles(files) {
  const supported = [...files]
    .filter((file) => file.type.startsWith("audio/") || file.type.startsWith("video/"))
    .sort((a, b) => {
      const pathA = a.webkitRelativePath || a.name;
      const pathB = b.webkitRelativePath || b.name;
      return pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: "base" });
    });

  let addedCount = 0;
  supported.forEach((file) => {
    const filePath = resolveFilePathFromFile(file);
    const track = {
      file, 
      url: URL.createObjectURL(file), 
      displayName: file.name,
      artist: "Local File",
      path: filePath
    };
    if (isTrackInPlaylist(track)) {
      URL.revokeObjectURL(track.url);
      return;
    }
    playlist.push(track);
    addedCount += 1;
  });

  renderPlaylist();
  if (supported.length !== addedCount) {
    updateStatus(` | Added ${addedCount}, skipped ${supported.length - addedCount} duplicates`);
  }

  if (currentIndex === -1 && playlist.length > 0) {
    loadTrack(0);
  }
}

async function handleAuxiliaryTextFile(file) {
  if (!file) return false;
  const lower = String(file.name || "").toLowerCase();
  if (lower.endsWith(".lrc")) {
    const text = await file.text();
    const ok = setLyricsFromLrcString(text, `${file.name} (dropped)`);
    if (ok) showToastMessage("Dropped LRC applied.", 2200);
    return ok;
  }
  if (lower.endsWith(".srt") || lower.endsWith(".vtt")) {
    await loadSubtitleFile(file);
    return true;
  }
  return false;
}

async function handleDroppedFiles(fileList) {
  const files = [...(fileList || [])];
  if (files.length === 0) return;
  const mediaFiles = files.filter((file) => file.type.startsWith("audio/") || file.type.startsWith("video/"));
  const auxFiles = files.filter((file) => !mediaFiles.includes(file));
  if (mediaFiles.length > 0) addFiles(mediaFiles);
  for (const aux of auxFiles) {
    try {
      const handled = await handleAuxiliaryTextFile(aux);
      if (handled) break;
    } catch {}
  }
}

function addFilePaths(paths, autoplay = true) {
  const entries = [...new Set((paths || []).filter(Boolean))];
  if (entries.length === 0) return;

  let addedCount = 0;
  entries.forEach((filePath) => {
    const track = {
      displayName: getFileNameFromPath(filePath),
      artist: "Local File",
      path: filePath,
      url: getPlayableUrlFromPath(filePath),
      file: { name: getFileNameFromPath(filePath), type: getMediaTypeFromPath(filePath) }
    };
    if (isTrackInPlaylist(track)) return;
    playlist.push(track);
    addedCount += 1;
  });

  renderPlaylist();
  if (addedCount !== entries.length) {
    updateStatus(` | Added ${addedCount}, skipped ${entries.length - addedCount} duplicates`);
  } else {
    updateStatus();
  }

  if (autoplay && addedCount > 0) {
    loadTrack(Math.max(0, playlist.length - addedCount), true);
  }

  scheduleCrashRecoverySnapshot();
}

function createCrashRecoverySession() {
  const recoverablePlaylist = playlist
    .filter((track) => track && track.path)
    .map((track) => ({
      path: track.path,
      displayName: track.displayName || getFileNameFromPath(track.path),
      artist: track.artist || "Local File"
    }));

  if (recoverablePlaylist.length === 0) return null;

  return {
    playlist: recoverablePlaylist,
    currentIndex: clamp(currentIndex, 0, recoverablePlaylist.length - 1),
    currentTime: Number.isFinite(media.currentTime) ? media.currentTime : 0,
    wasPlaying: !media.paused,
    capturedAt: new Date().toISOString()
  };
}

function scheduleCrashRecoverySnapshot(delay = 450) {
  if (crashSnapshotTimer) {
    clearTimeout(crashSnapshotTimer);
  }
  crashSnapshotTimer = setTimeout(async () => {
    crashSnapshotTimer = null;
    appConfig.crashRecovery = appConfig.crashRecovery || { session: null };
    appConfig.crashRecovery.session = createCrashRecoverySession();
    await saveAppConfig();
  }, delay);
}

async function clearCrashRecoverySession() {
  if (crashSnapshotTimer) {
    clearTimeout(crashSnapshotTimer);
    crashSnapshotTimer = null;
  }
  appConfig.crashRecovery = appConfig.crashRecovery || { session: null };
  appConfig.crashRecovery.session = null;
  await saveAppConfig();
}

function restoreCrashRecoverySession(session) {
  if (!session || !Array.isArray(session.playlist) || session.playlist.length === 0) return;
  const restorePaths = session.playlist.map((item) => item.path).filter(Boolean);
  if (restorePaths.length === 0) return;

  addFilePaths(restorePaths, false);
  const nextIndex = clamp(Number(session.currentIndex) || 0, 0, playlist.length - 1);
  const nextTime = clamp(Number(session.currentTime) || 0, 0, Number.MAX_SAFE_INTEGER);
  const resumePlay = Boolean(session.wasPlaying);

  if (nextIndex >= 0 && playlist[nextIndex]) {
    loadTrack(nextIndex, resumePlay).then(() => {
      const applyRestoreTime = () => {
        if (Number.isFinite(media.duration) && media.duration > 0) {
          media.currentTime = clamp(nextTime, 0, Math.max(0, media.duration - 0.2));
        } else {
          media.currentTime = nextTime;
        }
      };

      if (media.readyState >= 1) {
        applyRestoreTime();
      } else {
        media.addEventListener("loadedmetadata", applyRestoreTime, { once: true });
      }
    }).catch(() => {});
  }

  updateStatus(" | Crash session restored");
  showToastMessage("Recovered previous session after crash.", 5200);
}

function clearSleepTimerState() {
  if (sleepTimerId) {
    clearTimeout(sleepTimerId);
    sleepTimerId = null;
  }
  if (sleepIntervalId) {
    clearInterval(sleepIntervalId);
    sleepIntervalId = null;
  }
  sleepDeadline = null;
  sleepMode = "off";
  sleepStatus.textContent = "Sleep: Off";
  setCustomSelectValue(sleepTimerSelect, "off");
}

function formatSleepRemaining(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function updateSleepStatus() {
  if (sleepMode === "end") {
    sleepStatus.textContent = "Sleep: After current track";
    updateStatus();
    return;
  }
  if (!sleepDeadline) {
    sleepStatus.textContent = "Sleep: Off";
    updateStatus();
    return;
  }
  sleepStatus.textContent = `Sleep: ${formatSleepRemaining(sleepDeadline - Date.now())}`;
  updateStatus();
}

function executeSleepTimer() {
  if (sleepIntervalId) {
    clearInterval(sleepIntervalId);
    sleepIntervalId = null;
  }
  sleepTimerId = null;
  sleepDeadline = null;
  sleepMode = "off";
  if (!media.paused) media.pause();
  sleepStatus.textContent = "Sleep: Triggered";
  setCustomSelectValue(sleepTimerSelect, "off");
  updateStatus(" | Sleep timer");
}

function setSleepTimer(value) {
  if (sleepTimerId) {
    clearTimeout(sleepTimerId);
    sleepTimerId = null;
  }
  if (sleepIntervalId) {
    clearInterval(sleepIntervalId);
    sleepIntervalId = null;
  }

  if (value === "off") {
    clearSleepTimerState();
    return;
  }

  sleepMode = value;
  if (value === "end") {
    sleepDeadline = null;
    sleepStatus.textContent = "Sleep: After current track";
    return;
  }

  const minutes = Number(value);
  if (!Number.isFinite(minutes) || minutes <= 0) {
    clearSleepTimerState();
    return;
  }

  sleepDeadline = Date.now() + minutes * 60 * 1000;
  sleepTimerId = setTimeout(executeSleepTimer, minutes * 60 * 1000);
  updateSleepStatus();
  sleepIntervalId = setInterval(updateSleepStatus, 1000);
}

async function exportPlaylist() {
  if (!hasProAccess()) return openLicenseModal("Export Playlist is a Pro feature.");
  if (playlist.length === 0) return;

  const data = playlist.map(item => {
    let filePath = "";
    if (item.file && window.playerAPI && window.playerAPI.getPathForFile) {
        try {
            filePath = window.playerAPI.getPathForFile(item.file);
        } catch (e) {}
    }
    return {
      displayName: item.displayName,
      artist: item.artist,
      path: filePath || item.path || ""
    };
  });

  const json = JSON.stringify(data, null, 2);
  const success = await window.playerAPI.saveFile(json, "PlayerPlus_Playlist.json");
  if (success) {
      alert("Playlist exported successfully!");
  }
}

async function importPlaylist() {
  if (!hasProAccess()) return openLicenseModal("Import Playlist is a Pro feature.");
  const content = await window.playerAPI.openFile([{ name: "JSON", extensions: ["json"] }]);
  if (!content) return;

  try {
    const data = JSON.parse(content);
    if (!Array.isArray(data)) return;

    let addedCount = 0;
    data.forEach(item => {
      const displayName = item.displayName || getFileNameFromPath(item.path || "");
      const track = {
        displayName,
        artist: item.artist,
        path: item.path,
        url: item.path ? getPlayableUrlFromPath(item.path) : "",
        file: {
          name: displayName || "Imported media",
          type: getMediaTypeFromPath(item.path || "")
        }
      };
      if (isTrackInPlaylist(track)) return;
      playlist.push(track);
      addedCount += 1;
    });

    renderPlaylist();
    if (addedCount !== data.length) {
      updateStatus(` | Imported ${addedCount}, skipped ${data.length - addedCount} duplicates`);
    }
    if (currentIndex === -1 && playlist.length > 0) loadTrack(0);
  } catch (e) {
    alert("Failed to parse playlist file.");
  }
}

function getNextIndex() {
  if (playlist.length === 0) return -1;

  if (queue.length > 0) {
    const nextQueued = queue.shift();
    if (Number.isInteger(nextQueued) && nextQueued >= 0 && nextQueued < playlist.length) {
      return nextQueued;
    }
  }

  if (shuffleMode && playlist.length > 1) {
    let next = currentIndex;
    while (next === currentIndex) {
      next = Math.floor(Math.random() * playlist.length);
    }
    return next;
  }

  return currentIndex >= playlist.length - 1 ? 0 : currentIndex + 1;
}

function getPrevIndex() {
  if (playlist.length === 0) return -1;

  if (shuffleMode && playlist.length > 1) {
    let prev = currentIndex;
    while (prev === currentIndex) {
      prev = Math.floor(Math.random() * playlist.length);
    }
    return prev;
  }

  return currentIndex <= 0 ? playlist.length - 1 : currentIndex - 1;
}

function togglePlayPause() {
  if (!media.src && playlist.length > 0) {
    loadTrack(0, true);
    return;
  }

  initAudioGraph();
  if (audioContext && audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }

  if (media.paused) {
    media.play().catch(() => {});
  } else {
    media.pause();
  }
}

function toggleFullscreen() {
  const target = media.style.display === "block" ? media : playerPanel;
  if (!document.fullscreenElement) {
    target.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

function setMiniMode(nextMode, force = false) {
  if (nextMode && !hasProAccess()) {
    if (!force) {
      openLicenseModal("Mini player mode is a Pro feature.");
    }
    nextMode = false;
  }

  miniMode = Boolean(nextMode);
  document.body.classList.toggle("mini-mode", miniMode);
  miniBtn.classList.toggle("active", miniMode);
  setIcon(miniBtn, miniMode ? ICONS.miniOn : ICONS.mini);
  appConfig.miniMode = miniMode;
  saveAppConfig();

  if (window.playerAPI && typeof window.playerAPI.setMiniMode === "function") {
    window.playerAPI.setMiniMode(miniMode);
  }

  updateStatus();
}

function initWelcomeModal() {
  if (!appConfig.welcomeSeen) {
    welcomeModal.classList.remove("hidden");
  }

  welcomeCloseBtn.addEventListener("click", async () => {
    appConfig.welcomeSeen = true;
    await saveAppConfig();
    welcomeModal.classList.add("hidden");
  });
}

function initHotkeys() {
  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const tag = target && target.tagName ? target.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || tag === "select" || tag === "button") return;

    const key = event.key.toLowerCase();

    if (key === " ") {
      event.preventDefault();
      togglePlayPause();
      return;
    }

    if (key === "arrowright") {
      media.currentTime = clamp(media.currentTime + 5, 0, Number.isFinite(media.duration) ? media.duration : media.currentTime + 5);
      return;
    }

    if (key === "arrowleft") {
      media.currentTime = clamp(media.currentTime - 5, 0, Number.isFinite(media.duration) ? media.duration : media.currentTime);
      return;
    }

    if (key === "arrowup") {
      media.volume = clamp(media.volume + 0.05, 0, 1);
      volume.value = media.volume.toFixed(2);
      return;
    }

    if (key === "arrowdown") {
      media.volume = clamp(media.volume - 0.05, 0, 1);
      volume.value = media.volume.toFixed(2);
      return;
    }

    if (key === "f") {
      toggleFullscreen();
      return;
    }

    if (key === "m") {
      muteBtn.click();
      return;
    }

    if (key === "n") {
      nextBtn.click();
      return;
    }

    if (key === "p") {
      prevBtn.click();
    }
  });
}

// Ensure Ambilight listener exists in the main listener section
fxAmbilight.addEventListener("change", () => {
  if (!hasProAccess()) {
    fxAmbilight.checked = false;
    return openLicenseModal("Ambilight Glow is a Pro feature.");
  }
  isAmbilightOn = fxAmbilight.checked;
  if (isAmbilightOn) {
    startAmbilightLoop();
  } else {
    stopAmbilightLoop();
  }
});

mediaInput.addEventListener("change", (e) => {
  addFiles(e.target.files || []);
  mediaInput.value = "";
});

window.addEventListener("dragover", (event) => {
  event.preventDefault();
});

window.addEventListener("drop", (event) => {
  event.preventDefault();
  handleDroppedFiles(event.dataTransfer && event.dataTransfer.files);
});

folderInput.addEventListener("change", (e) => {
  addFiles(e.target.files || []);
  folderInput.value = "";
});

if (window.playerAPI && window.playerAPI.onOpenFile) {
  window.playerAPI.onOpenFile((filePaths) => {
    const paths = Array.isArray(filePaths) ? filePaths : [filePaths];
    pushDebugLog("Renderer received open-file", paths);
    addFilePaths(paths, true);
  });
}

if (window.playerAPI && window.playerAPI.sendReady) {
  pushDebugLog("Renderer sending app-ready");
  window.playerAPI.sendReady();
}

if (window.playerAPI && window.playerAPI.onDebugLog) {
  window.playerAPI.onDebugLog((payload) => {
    pushDebugLog(payload.message || "debug-log", payload.data);
  });
}

subtitlePickerLabel.addEventListener("click", (event) => {
  if (!hasProAccess()) {
    event.preventDefault();
    return openLicenseModal("Subtitles are available in Pro.");
  }
  // No need to call click() manually, label[for] does it
});

fxBrightness.addEventListener("input", () => {
  fxBrightnessVal.textContent = fxBrightness.value;
  applyFX();
});

fxContrast.addEventListener("input", () => {
  fxContrastVal.textContent = fxContrast.value;
  applyFX();
});

fxSaturate.addEventListener("input", () => {
  fxSaturateVal.textContent = fxSaturate.value;
  applyFX();
});

fxHue.addEventListener("input", () => {
  fxHueVal.textContent = fxHue.value + "deg";
  applyFX();
});

effectsBtn.addEventListener("click", () => {
  if (!hasProAccess()) {
    return openLicenseModal("Video Effects are a Pro feature.");
  }
  effectsModal.classList.remove("hidden");
});

fxCloseBtn.addEventListener("click", () => {
  effectsModal.classList.add("hidden");
});

screenshotBtn.addEventListener("click", () => {
  if (!hasProAccess()) {
    return openLicenseModal("Screenshot is a Pro feature.");
  }
  takeScreenshot();
});

pipBtn.addEventListener("click", () => {
  if (!hasProAccess()) {
    return openLicenseModal("PiP is a Pro feature.");
  }
  togglePiP();
});

subtitleInput.addEventListener("change", async (e) => {
  try {
    const file = (e.target.files || [])[0];
    if (!file) return;
    if (file.name.toLowerCase().endsWith(".lrc")) {
      const content = await file.text();
      const ok = setLyricsFromLrcString(content, `${file.name} (local)`);
      if (ok) {
        showToastMessage("Local LRC imported.", 2800);
      } else {
        showToastMessage("Invalid LRC format.", 3200);
      }
      return;
    }
    await loadSubtitleFile(file);
  } catch {
    subtitleStatus.textContent = "Subtitle/Lyrics: failed to load";
  } finally {
    subtitleInput.value = "";
  }
});

activateBtn.addEventListener("click", () => {
  if (hasProAccess()) {
    licenseMessage.textContent = isProUser ? "Status: this copy is already Pro" : `Status: ${getTrialStatusLabel()}`;
  }
  openLicenseModal();
});

debugConsoleBtn.addEventListener("click", () => {
  openDebugModal();
});

debugCloseBtn.addEventListener("click", () => {
  closeDebugModal();
});

debugClearBtn.addEventListener("click", () => {
  debugBuffer.length = 0;
  if (debugConsole) debugConsole.textContent = "";
});

setDefaultPlayerBtn.addEventListener("click", async () => {
  const originalText = setDefaultPlayerBtn.textContent;
  setDefaultPlayerBtn.disabled = true;
  setDefaultPlayerBtn.textContent = "Opening Windows...";

  try {
    await window.playerAPI.openDefaultAppsSettings();
    setDefaultPlayerBtn.textContent = "Choose Player+";
  } catch {
    setDefaultPlayerBtn.textContent = "Open Failed";
  }

  setTimeout(() => {
    setDefaultPlayerBtn.textContent = originalText;
    setDefaultPlayerBtn.disabled = false;
  }, 2500);
});

discordInstallBtnManual.addEventListener("click", async () => {
  const originalText = discordInstallBtnManual.textContent;
  discordInstallBtnManual.disabled = true;
  discordInstallBtnManual.textContent = "Opening PowerShell...";

  try {
    await window.playerAPI.installDiscord();
    discordInstallBtnManual.textContent = "PowerShell Opened";
    setTimeout(() => {
      discordInstallBtnManual.textContent = originalText;
      discordInstallBtnManual.disabled = false;
    }, 2500);
  } catch (err) {
    discordInstallBtnManual.textContent = "Install Failed";
    setTimeout(() => {
      discordInstallBtnManual.textContent = originalText;
      discordInstallBtnManual.disabled = false;
    }, 2500);
  }
});

installYtDlpBtn.addEventListener("click", async () => {
  const originalText = installYtDlpBtn.textContent;
  installYtDlpBtn.disabled = true;
  installYtDlpBtn.textContent = "Opening PowerShell...";

  try {
    await window.playerAPI.installYtDlp();
    installYtDlpBtn.textContent = "PowerShell Opened";
  } catch {
    installYtDlpBtn.textContent = "Install Failed";
  } finally {
    setTimeout(() => {
      installYtDlpBtn.textContent = originalText;
      installYtDlpBtn.disabled = false;
    }, 2500);
  }
});

checkUpdatesBtn.addEventListener("click", async () => {
  const originalText = checkUpdatesBtn.textContent;
  checkUpdatesBtn.disabled = true;
  checkUpdatesBtn.textContent = "Checking...";
  try {
    await window.playerAPI.checkForUpdates();
  } finally {
    setTimeout(() => {
      checkUpdatesBtn.textContent = originalText;
      checkUpdatesBtn.disabled = false;
    }, 1800);
  }
});

reconnectRpcBtn.addEventListener("click", async () => {
  const originalText = reconnectRpcBtn.textContent;
  reconnectRpcBtn.disabled = true;
  reconnectRpcBtn.textContent = "Reconnecting...";
  try {
    await window.playerAPI.reconnectRPC();
  } finally {
    setTimeout(() => {
      reconnectRpcBtn.textContent = originalText;
      reconnectRpcBtn.disabled = false;
    }, 1800);
  }
});

if (aiRepairBtn) {
  aiRepairBtn.addEventListener("click", () => {
    runAutoRepair("manual");
  });
}

legalBtn.addEventListener("click", () => {
  openLegalModal();
});

document.querySelectorAll("[data-doc]").forEach((el) => {
  el.addEventListener("click", () => {
    openMarkdownDoc(el.dataset.doc, el.dataset.docTitle || "Document");
  });
});

docCloseBtn.addEventListener("click", () => {
  closeDocModal();
});

licenseApplyBtn.addEventListener("click", () => {
  activateLicense();
});

copyHwidBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(currentHardwareId);
    licenseMessage.textContent = "Status: HWID copied";
  } catch {
    licenseMessage.textContent = "Status: failed to copy HWID";
  }
});

licenseCloseBtn.addEventListener("click", () => {
  closeLicenseModal();
});

licenseClearBtn.addEventListener("click", () => {
  clearLicense();
});

legalCloseBtn.addEventListener("click", () => {
  closeLegalModal();
});

// Removed duplicate click trigger for Add Media as label for="..." handles it natively
// addMediaBtn.addEventListener("click", () => mediaInput.click()); // Redundant and causes double dialog
// subtitleInput has label too, no need for manual trigger

licenseKeyInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    activateLicense();
  }
});

themeSelect.addEventListener("change", (e) => {
  setTheme(e.detail.value);
});

themePresetSelect.addEventListener("change", (e) => {
  applyThemePreset(e.detail.value, true);
});

if (playbackHue) {
  playbackHue.addEventListener("input", () => {
    applyPlaybackFxSettings(
      {
        ...appConfig.playbackFx,
        hue: Number(playbackHue.value)
      },
      true
    );
  });
}

if (playbackIntensity) {
  playbackIntensity.addEventListener("input", () => {
    applyPlaybackFxSettings(
      {
        ...appConfig.playbackFx,
        intensity: Number(playbackIntensity.value)
      },
      true
    );
  });
}

if (playbackFxResetBtn) {
  playbackFxResetBtn.addEventListener("click", () => {
    applyPlaybackFxSettings({ hue: 205, intensity: 1 }, true);
    showToastMessage("Playback FX colors reset", 2600);
  });
}

if (lyricsSearchBtn) {
  lyricsSearchBtn.addEventListener("click", () => {
    if (!requireProAccess("Lyrics search is a Pro feature.")) return;
    const fallbackTrackName =
      currentIndex >= 0 && playlist[currentIndex]
        ? `${playlist[currentIndex].artist || ""} - ${playlist[currentIndex].displayName || ""}`.trim()
        : "";
    const query = (lyricsSearchInput && lyricsSearchInput.value) || fallbackTrackName;
    runLyricsSearch(query);
  });
}

if (lyricsApplyBtn) {
  lyricsApplyBtn.addEventListener("click", () => {
    if (!requireProAccess("Applying online lyrics is a Pro feature.")) return;
    const index = lyricsResultsSelect ? Number(getCustomSelectValue(lyricsResultsSelect, "0")) : 0;
    applyLyricResultByIndex(index);
  });
}

if (lyricsSaveBtn) {
  lyricsSaveBtn.addEventListener("click", () => {
    if (!requireProAccess("Saving lyrics as LRC is a Pro feature.")) return;
    saveSelectedLyricsAsLrc();
  });
}

if (lyricsSearchInput) {
  lyricsSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      lyricsSearchBtn && lyricsSearchBtn.click();
    }
  });
}

if (normalizeBtn) {
  normalizeBtn.addEventListener("click", () => {
    if (!requireProAccess("Auto Normalize is a Pro feature.")) return;
    setAutoNormalize(!autoNormalizeEnabled);
    showToastMessage(autoNormalizeEnabled ? "Normalize enabled." : "Normalize disabled.", 2200);
  });
}

performanceModeSelect.addEventListener("change", (e) => {
  setPerformanceMode(e.detail.value);
});

sleepTimerSelect.addEventListener("change", (e) => {
  setSleepTimer(e.detail.value);
  updateStatus();
});

playBtn.addEventListener("click", () => {
  togglePlayPause();
});

prevBtn.addEventListener("click", () => {
  const prevIndex = getPrevIndex();
  if (prevIndex >= 0) loadTrack(prevIndex, true);
});

nextBtn.addEventListener("click", () => {
  const nextIndex = getNextIndex();
  if (nextIndex >= 0) loadTrack(nextIndex, true);
});

fullscreenBtn.addEventListener("click", () => {
  toggleFullscreen();
});

miniBtn.addEventListener("click", () => {
  setMiniMode(!miniMode);
});

document.addEventListener("fullscreenchange", () => {
  fullscreenBtn.classList.toggle("active", Boolean(document.fullscreenElement));
  setIcon(fullscreenBtn, document.fullscreenElement ? ICONS.exitFullscreen : ICONS.fullscreen);
});

muteBtn.addEventListener("click", () => {
  media.muted = !media.muted;
  muteBtn.classList.toggle("active", media.muted);
  setIcon(muteBtn, media.muted ? ICONS.volumeOff : ICONS.volumeOn);
});

loopBtn.addEventListener("click", () => {
  loopMode = !loopMode;
  loopBtn.classList.toggle("active", loopMode);
  updateStatus();
});

shuffleBtn.addEventListener("click", () => {
  shuffleMode = !shuffleMode;
  shuffleBtn.classList.toggle("active", shuffleMode);
  updateStatus();
});

playlistMenu.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) return;

  const action = target.dataset.action;
  const index = menuTargetIndex;
  hidePlaylistMenu();

  if (index < 0) return;

  if (action === "play") {
    loadTrack(index, true);
    return;
  }
  if (action === "favorite") {
    toggleFavoriteTrack(index);
    return;
  }
  if (action === "queueNext") {
    queueTrackNext(index);
    return;
  }
  if (action === "rename") {
    renameTrack(index);
    return;
  }
  if (action === "remove") {
    removeTrack(index);
    return;
  }
  if (action === "up") {
    moveTrack(index, -1);
    return;
  }
  if (action === "down") {
    moveTrack(index, 1);
  }
});

document.addEventListener("click", (event) => {
  if (!playlistMenu.classList.contains("hidden")) hidePlaylistMenu();

  if (event.target === legalModal) {
    closeLegalModal();
  }

  if (event.target === docModal) {
    closeDocModal();
  }

  if (event.target === debugModal) {
    closeDebugModal();
  }

  if (event.target === licenseModal) {
    closeLicenseModal();
  }
});

document.addEventListener("scroll", () => {
  if (!playlistMenu.classList.contains("hidden")) hidePlaylistMenu();
});

media.addEventListener("play", () => {
  setIcon(playBtn, ICONS.pause);
  coverDisc.classList.add("spin");
  setPlaybackVisualState(true);
  updateStatus();
  startSpectrumLoop();
  if (isAmbilightOn) startAmbilightLoop();
});

media.addEventListener("pause", () => {
  setIcon(playBtn, ICONS.play);
  coverDisc.classList.remove("spin");
  setPlaybackVisualState(false);
  saveResumePoint(true);
});

media.addEventListener("ended", () => {
  setPlaybackVisualState(false);
  saveResumePoint(true);

  if (sleepMode === "end") {
    executeSleepTimer();
    return;
  }

  if (playlist.length === 0) return;

  if (currentIndex >= 0 && playlist[currentIndex]) {
    resumeMap[playlist[currentIndex].file.name] = 0;
    persistResumeMap();
  }

  if (loopMode) {
    loadTrack(currentIndex, true);
    return;
  }

  const nextIndex = getNextIndex();
  if (nextIndex >= 0) loadTrack(nextIndex, true);
});

media.addEventListener("timeupdate", () => {
  if (Number.isFinite(media.duration) && media.duration > 0) {
    seek.value = ((media.currentTime / media.duration) * 100).toString();
  } else {
    seek.value = "0";
  }
  updateTimeLabel();
  updateLrcLine();
  saveResumePoint();
});

media.addEventListener("loadedmetadata", () => {
  if (pendingResumeTime && Number.isFinite(media.duration) && pendingResumeTime < media.duration - 2) {
    media.currentTime = pendingResumeTime;
    updateStatus(` (resumed at ${formatTime(pendingResumeTime)})`);
  }
  pendingResumeTime = null;
  updateTimeLabel();
  updateMediaInfo(playlist[currentIndex] || null);
});

seek.addEventListener("input", () => {
  if (!Number.isFinite(media.duration)) return;
  const percent = Number(seek.value) / 100;
  media.currentTime = percent * media.duration;
});

volume.addEventListener("input", () => {
  media.volume = Number(volume.value);
  if (!media.muted) {
    setIcon(muteBtn, Number(volume.value) === 0 ? ICONS.volumeOff : ICONS.volumeOn);
  }
});

speed.addEventListener("change", (e) => {
  media.playbackRate = Number(e.detail.value);
});

EQ_BANDS.forEach((band) => {
  const slider = document.getElementById(`eq_${band}`);
  if (!slider) return;
  slider.addEventListener("input", () => {
    setCustomSelectValue(eqPreset, "flat");
    applyEqFromUI();
  });
});

eqPreset.addEventListener("change", (e) => {
  applyPreset(e.detail.value);
  applyFX();
});

fxSurround.addEventListener("change", () => {
  if (!hasProAccess()) {
    fxSurround.checked = false;
    return openLicenseModal("3D Spatial Surround is a Pro feature.");
  }
  applySpatialAudio();
});

fxSurroundDepth.addEventListener("input", () => {
  applySpatialAudio();
});

fxLateNight.addEventListener("change", () => {
  if (!hasProAccess()) {
    fxLateNight.checked = false;
    return openLicenseModal("Late Night Mode is a Pro feature.");
  }
  applyDynamicsProcessing();
});

if (fxSmartGain) {
  fxSmartGain.addEventListener("change", () => {
    if (!hasProAccess()) {
      fxSmartGain.checked = false;
      applyDynamicsProcessing();
      return openLicenseModal("Smart Gain Guard is a Pro feature.");
    }
    applyDynamicsProcessing();
    updateStatus(fxSmartGain.checked ? " | Smart Gain ON" : " | Smart Gain OFF");
  });
}

aspectRatioSelect.addEventListener("change", (e) => {
  if (!hasProAccess()) {
    // Reset visual selection if not pro
    setCustomSelectValue(aspectRatioSelect, "original");
    return openLicenseModal("Custom Aspect Ratio is a Pro feature.");
  }
  applyAspectRatio();
});

clearPlaylistBtn.addEventListener("click", () => {
  playlist.forEach(item => {
    if (item.url && item.url.startsWith("blob:")) URL.revokeObjectURL(item.url);
  });
  playlist.length = 0;
  currentIndex = -1;
  currentMediaStats = null;
  media.removeAttribute("src");
  media.load();
  clearLyricsState();
  renderPlaylist();
  updateMediaInfo(null);
  updateStatus();
});

playlistSearchInput.addEventListener("input", (event) => {
  playlistFilterQuery = String(event.target.value || "").trim().toLowerCase();
  renderPlaylist();
});

favoritesOnlyBtn.addEventListener("click", () => {
  setFavoritesOnly(!favoritesOnly);
});

sortFavoritesBtn.addEventListener("click", () => {
  sortPlaylistFavoritesFirst();
});

importPlaylistBtn.addEventListener("click", importPlaylist);
exportPlaylistBtn.addEventListener("click", exportPlaylist);

function updateEqControlStates() {
  if (proEqGrid) {
    proEqGrid.classList.remove("hidden", "eq-group-disabled");
  }
  applyEqFromUI();
}

eqResetBtn.addEventListener("click", resetAllEQ);
fxResetBtn.addEventListener("click", () => {
  resetFX();
  resetAllEQ();
});

// A-B Repeat Listeners
abBtnA.addEventListener("click", () => {
    timeA = media.currentTime;
    if (timeB !== null && timeA >= timeB) timeB = null;
    updateAbUI();
});

abBtnB.addEventListener("click", () => {
    if (timeA === null) return;
    timeB = media.currentTime;
    if (timeB <= timeA) {
        timeB = null;
        return;
    }
    abActive = true;
    updateAbUI();
});

abBtnReset.addEventListener("click", () => {
    timeA = null;
    timeB = null;
    abActive = false;
    updateAbUI();
});

// Subtitle Sync Listeners
subSyncMinus.addEventListener("click", () => {
  if (currentLrcEntries.length > 0) {
    adjustLyricsOffset(-0.5);
    return;
  }
  adjustSubtitleOffset(-0.5);
});
subSyncPlus.addEventListener("click", () => {
  if (currentLrcEntries.length > 0) {
    adjustLyricsOffset(0.5);
    return;
  }
  adjustSubtitleOffset(0.5);
});

media.addEventListener("timeupdate", () => {
    if (abActive && timeA !== null && timeB !== null) {
        if (media.currentTime >= timeB) {
            media.currentTime = timeA;
        }
    }
});

window.addEventListener("resize", () => {
  resizeCanvas(waveCanvas, 320, 110);
  resizeCanvas(spectrumCanvas, 320, 80);
});

window.addEventListener("beforeunload", () => {
  setPlaybackVisualState(false);
  saveResumePoint(true);
  stopSpectrumLoop();
  removeSubtitleTrack();
  clearSleepTimerState();
  playlist.forEach((item) => URL.revokeObjectURL(item.url));
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopSpectrumLoop();
    return;
  }
  startSpectrumLoop();
});

media.addEventListener("error", () => {
  lastMediaErrorKind = media.src.startsWith("http") ? "stream" : "local";
  if (media.src.startsWith("http")) {
    const errorMsg = "Stream Load Failed (possible Geo-block or URL expire)";
    console.error(errorMsg, media.error);
    pushDebugLog("Media error", { src: media.currentSrc, error: media.error && media.error.code, kind: "stream" });
    emptyState.textContent = "This stream could not be loaded. The URL may have expired or may be blocked.";
    emptyState.style.display = "block";
    media.style.display = "none";
    audioView.style.display = "none";
    updateStatus(" | Stream load failed");
    setTimeout(() => runAutoRepair("media-error-stream"), 250);
    return;
  }
  console.error("Media load failed", media.currentSrc, media.error);
  pushDebugLog("Media error", { src: media.currentSrc, error: media.error && media.error.code, kind: "local" });
  pushDebugLog("Decode hint", "Likely unsupported codec/container combination for Electron media playback.");
  emptyState.textContent = "This media file could not be decoded. The container may be MP4, but the video or audio codec inside is not supported by this player.";
  emptyState.style.display = "block";
  media.style.display = "none";
  audioView.style.display = "none";
  updateMediaInfo(playlist[currentIndex] || null);
  updateStatus(" | Unsupported or corrupted media");
  setTimeout(() => runAutoRepair("media-error-local"), 250);
});

function updateDiscordRPC() {
  if (!window.playerAPI || !window.playerAPI.updateRPC) return;

  if (currentIndex === -1 || !playlist[currentIndex]) {
    window.playerAPI.updateRPC({
      details: "Idle",
      state: "Browsing Library",
      isPro: hasProAccess()
    });
    return;
  }

  const track = playlist[currentIndex];
  const isPaused = media.paused;
  const details = isPaused ? `Paused: ${track.displayName}` : `Playing: ${track.displayName}`;
  const state = track.artist ? `by ${track.artist}` : "Media Player+";
  
  // Calculate end timestamp for "Time Remaining" if playing
  let endTimestamp = null;
  if (!isPaused && media.duration > 0) {
    const remaining = (media.duration - media.currentTime) * 1000;
    endTimestamp = Date.now() + remaining;
  }

  window.playerAPI.updateRPC({
    details,
    state,
    endTimestamp,
    isPro: hasProAccess()
  });
}

// Update RPC on state changes
media.addEventListener("play", updateDiscordRPC);
media.addEventListener("pause", updateDiscordRPC);
media.addEventListener("ended", updateDiscordRPC);

// Discord Status Listener
if (window.playerAPI && window.playerAPI.onRPCStatus) {
  window.playerAPI.onRPCStatus((status) => {
    discordStatus = status;
    updateStatus();
    if (status) {
      updateDiscordRPC();
    }
  });
}

const updateToast = document.getElementById("updateToast");
if (window.playerAPI && window.playerAPI.onUpdateMessage) {
  window.playerAPI.onUpdateMessage((msg) => {
    if (updateToastHideTimer) {
      clearTimeout(updateToastHideTimer);
      updateToastHideTimer = null;
    }

    if (msg) {
      updateStatus(` | ${msg}`);
      if (updateToast) {
        updateToast.textContent = msg;
        updateToast.classList.remove("hidden");
      }

      const shouldAutoHide = msg === "You're up to date." || msg.startsWith("Update check starts");
      if (shouldAutoHide) {
        updateToastHideTimer = setTimeout(() => {
          updateStatus();
          if (updateToast) {
            updateToast.classList.add("hidden");
          }
          updateToastHideTimer = null;
        }, 5000);
      }
    } else {
      updateStatus(); // Clear if empty
      if (updateToast) {
        updateToast.classList.add("hidden");
      }
    }
  });
}

function initCustomSelects() {
  const selects = document.querySelectorAll(".custom-select");

  selects.forEach((select) => {
    const trigger = select.querySelector(".select-trigger");
    const optionsContainer = select.querySelector(".select-options");
    const options = select.querySelectorAll(".option");

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      if (select.disabled || trigger.disabled || select.classList.contains("pro-locked")) {
        return;
      }
      const isOpen = select.classList.contains("open");

      // Close all other open dropdowns and reset their parent's z-index
      document.querySelectorAll(".custom-select").forEach((others) => {
        others.classList.remove("open");
        const otherOptions = others.querySelector(".select-options");
        if (otherOptions) otherOptions.classList.add("hidden");
        // Reset parent z-index
        const parentSection = others.closest(".top-bar, .player-panel, .fx-card, .controls");
        if (parentSection) parentSection.style.zIndex = "";
      });

      if (!isOpen) {
        select.classList.add("open");
        optionsContainer.classList.remove("hidden");
        // Elevate parent section z-index to super-high when open
        const parentSection = select.closest(".top-bar, .player-panel, .fx-card, .controls");
        if (parentSection) parentSection.style.zIndex = "10000";
      }
    });

    options.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.stopPropagation();
        if (select.disabled || trigger.disabled || select.classList.contains("pro-locked")) {
          return;
        }
        const value = option.dataset.value;
        const text = option.textContent;

        trigger.textContent = text;
        options.forEach((o) => o.classList.remove("selected"));
        option.classList.add("selected");

        select.dataset.value = value;
        select.classList.remove("open");
        optionsContainer.classList.add("hidden");

        // Dispatch custom change event so existing listeners work
        select.dispatchEvent(new CustomEvent("change", { detail: { value } }));
      });
    });
  });

  // Global click listener to close dropdowns when clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".custom-select").forEach((s) => {
      s.classList.remove("open");
      const opts = s.querySelector(".select-options");
      if (opts) opts.classList.add("hidden");
      // Reset parent z-index
      const parentSection = s.closest(".top-bar, .player-panel, .fx-card, .controls");
      if (parentSection) parentSection.style.zIndex = "";
    });
  });
}

function setCustomSelectValue(el, value) {
  if (!el) return;
  const option = el.querySelector(`.option[data-value="${value}"]`);
  if (option) {
    const trigger = el.querySelector(".select-trigger");
    if (trigger) trigger.textContent = option.textContent;
    el.querySelectorAll(".option").forEach((o) => o.classList.remove("selected"));
    option.classList.add("selected");
    el.dataset.value = value;
  }
}

function getCustomSelectValue(el, fallback = "") {
  if (!el) return fallback;
  return el.dataset.value || fallback;
}
// Initialize Custom Dropdowns immediately
initCustomSelects();

// Discord Onboarding Logic
function initDiscordOnboarding() {
  const isFirstRun = !appConfig.discordOnboardingDone;
  const modal = document.getElementById("discordModal");
  const installBtn = document.getElementById("discordInstallBtn");
  const skipBtn = document.getElementById("discordSkipBtn");

  if (isFirstRun && modal && installBtn && skipBtn) {
    // Show after a short delay for better impact
    setTimeout(() => {
      modal.classList.remove("hidden");
    }, 1500);

    installBtn.addEventListener("click", async () => {
      installBtn.disabled = true;
      installBtn.textContent = "Installing (UAC maybe required)...";
      
      try {
        await window.playerAPI.installDiscord();
        installBtn.textContent = "Installation Started!";
        setTimeout(async () => {
          modal.classList.add("hidden");
          appConfig.discordOnboardingDone = true;
          await saveAppConfig();
        }, 3000);
      } catch (err) {
        console.error("Installation failed:", err);
        installBtn.textContent = "Failed. Try standard download?";
        installBtn.disabled = false;
      }
    });

    skipBtn.addEventListener("click", async () => {
      modal.classList.add("hidden");
      appConfig.discordOnboardingDone = true;
      await saveAppConfig();
    });
  }
}

// Start Application
initApp();

// --- NEW FEATURES LOGIC ---

function showOSD(text) {
  if (osdTimeout) clearTimeout(osdTimeout);
  osd.textContent = text;
  osd.classList.remove("hidden");
  osdTimeout = setTimeout(() => {
    osd.classList.add("hidden");
  }, 1200);
}

function toggleZenMode() {
  isZenMode = !isZenMode;
  document.body.classList.toggle("zen-mode", isZenMode);
  zenBtn.classList.toggle("active", isZenMode);
  showOSD(isZenMode ? "Zen Mode On" : "Zen Mode Off");
}

function toggleLyrics() {
  if (!isPro && !isDemoBuild) {
    showLicenseModal("Lyrics Display is a Pro Feature", "Please activate Pro to enjoy synchronized lyrics.");
    return;
  }
  isLyricsOpen = !isLyricsOpen;
  lyricsOverlay.classList.toggle("hidden", !isLyricsOpen);
  lyricsBtn.classList.toggle("active", isLyricsOpen);
  if (isLyricsOpen) {
    showOSD("Lyrics Enabled");
    renderLyrics();
  }
}

function parseLRC(lrcText) {
  const lines = lrcText.split("\n");
  const result = [];
  const timeReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/g;
  lines.forEach(line => {
    const match = timeReg.exec(line);
    if (match) {
      const min = parseInt(match[1]);
      const sec = parseInt(match[2]);
      const ms = parseInt(match[3]);
      const time = min * 60 + sec + ms / (match[3].length === 3 ? 1000 : 100);
      const text = line.replace(timeReg, "").trim();
      if (text) result.push({ time, text });
    }
    timeReg.lastIndex = 0;
  });
  return result.sort((a, b) => a.time - b.time);
}

function renderLyrics() {
  lyricsContent.innerHTML = "";
  if (currentLyrics.length === 0) {
    lyricsContent.innerHTML = "<p>No lyrics found for this track.</p>";
    return;
  }
  currentLyrics.forEach((lyric, index) => {
    const p = document.createElement("p");
    p.textContent = lyric.text;
    p.id = `lyric-line-${index}`;
    p.onclick = () => {
      media.currentTime = lyric.time;
    };
    lyricsContent.appendChild(p);
  });
}

function updateLyricsSync(currentTime) {
  let activeIndex = -1;
  for (let i = 0; i < currentLyrics.length; i++) {
    if (currentTime >= currentLyrics[i].time) {
      activeIndex = i;
    } else {
      break;
    }
  }
  if (activeIndex !== -1) {
    const activeEl = document.getElementById(`lyric-line-${activeIndex}`);
    if (activeEl && !activeEl.classList.contains("active")) {
      const prevActive = lyricsContent.querySelector(".active");
      if (prevActive) prevActive.classList.remove("active");
      activeEl.classList.add("active");
      activeEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}

function drawCircularVisualizer(freqData, energy) {
  const width = waveCanvas.width;
  const height = waveCanvas.height;
  const palette = getVisualizerPalette();
  const centerX = width * 0.5;
  const centerY = height * 0.5;
  const baseRadius = Math.min(width, height) * 0.2 + energy * 40;

  waveCtx.clearRect(0, 0, width, height);
  spectrumCtx.clearRect(0, 0, spectrumCanvas.width, spectrumCanvas.height);

  waveCtx.beginPath();
  waveCtx.arc(centerX, centerY, baseRadius, 0, Math.PI * 2);
  waveCtx.strokeStyle = palette.line;
  waveCtx.lineWidth = 4;
  waveCtx.stroke();

  const bars = 120;
  const step = Math.floor(freqData.length / bars);
  
  for (let i = 0; i < bars; i++) {
    const angle = (i / bars) * Math.PI * 2;
    const value = freqData[i * step] / 255;
    const h = value * 100 * (0.8 + energy);
    
    const x1 = centerX + Math.cos(angle) * baseRadius;
    const y1 = centerY + Math.sin(angle) * baseRadius;
    const x2 = centerX + Math.cos(angle) * (baseRadius + h);
    const y2 = centerY + Math.sin(angle) * (baseRadius + h);
    
    waveCtx.beginPath();
    waveCtx.moveTo(x1, y1);
    waveCtx.lineTo(x2, y2);
    waveCtx.strokeStyle = `hsla(${180 + i * 2}, 90%, 60%, 0.8)`;
    waveCtx.lineWidth = 3;
    waveCtx.stroke();
  }
}

function drawParticlesVisualizer(freqData, energy) {
  const width = waveCanvas.width;
  const height = waveCanvas.height;
  
  waveCtx.fillStyle = "rgba(0, 0, 0, 0.1)";
  waveCtx.fillRect(0, 0, width, height);
  spectrumCtx.clearRect(0, 0, spectrumCanvas.width, spectrumCanvas.height);

  const particles = 60;
  for (let i = 0; i < particles; i++) {
    const value = freqData[i * 10] / 255;
    const x = (i / particles) * width;
    const y = height - value * height * (0.5 + energy);
    
    waveCtx.beginPath();
    waveCtx.arc(x, y, 2 + value * 10, 0, Math.PI * 2);
    waveCtx.fillStyle = `hsla(${200 + value * 100}, 100%, 70%, ${0.2 + value})`;
    waveCtx.fill();
  }
}

zenBtn.addEventListener("click", toggleZenMode);
lyricsBtn.addEventListener("click", toggleLyrics);
visualizerModeSelect.addEventListener("change", (e) => {
  const mode = e.detail ? e.detail.value : (e.target.getAttribute("data-value") || e.target.value);
  if ((mode === "circular" || mode === "particles") && !isPro && !isDemoBuild) {
    showLicenseModal("Premium Visualizer", "This visualizer mode requires a Pro License.");
    return;
  }
  activeVisualizerMode = mode;
  showOSD(`Visualizer: ${mode}`);
});

volume.addEventListener("input", (e) => {
  const val = parseFloat(e.target.value);
  if (val > 1.0 && !isPro && !isDemoBuild) {
    e.target.value = 1.0;
    showLicenseModal("Volume Boost Locked", "Volume boost above 100% requires a Pro License.");
    return;
  }
  media.volume = Math.min(val, 1.0);
  showOSD(`Volume: ${Math.round(val * 100)}%`);
});

window.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
  if (e.key === "z" || e.key === "Z") toggleZenMode();
  if (e.key === "l" || e.key === "L") toggleLyrics();
});
