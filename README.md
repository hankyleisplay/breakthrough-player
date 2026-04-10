# hankyledevteam Player+ (Windows EXE)

Electron-based desktop media player that can be packaged as Windows `.exe`.

## Requirements

- Windows 10/11
- Node.js 18+

## Build

```powershell
npm install
npm run dist
```

Output folder:

- `release/`
- Installer: `hankyledevteam Player+ Setup *.exe`
- Portable: `hankyledevteam Player+ *.exe`

## Run in Development

```powershell
npm start
```

## Features

- Video/audio playback with playlist
- Animated cover area for audio mode
- Real-time spectrum visualizer
- Playlist right-click menu (play/rename/remove/reorder)
- Mini player mode (compact UI + always-on-top window in Electron)
- Keyboard shortcuts
- Subtitle support (`.srt` / `.vtt`) (Pro)
- Resume playback memory by filename
- Theme switch (Dark / Light)
- EQ controls and presets (Pro)
- Fullscreen / loop / shuffle / mute
- In-app product key activation (`HLP-XXXX-XXXX-XXXX`)
- In-app Legal & Copyright modal
- Ability to clear Pro license inside activation dialog
- First-launch welcome message

## Commercial Files

- `PRODUCT_PAGE.md`: sales page copy
- `PRICING.md`: pricing package and offer structure
- `EULA.md`: End User License Agreement draft
- `PRIVACY_POLICY.md`: privacy policy draft

## License Key Generation

Build `generate-license-key.exe`:

```powershell
npm run build:keygen
```

Or via PowerShell helper:

```powershell
.\tools\build-keygen.ps1
```

In app, copy the target machine HWID from `Activate Pro` dialog.

Then run exe (1 key for specific HWID):

```powershell
.\tools\generate-license-key.exe <HWID>
```

Generate 50 keys for specific HWID:

```powershell
.\tools\generate-license-key.exe <HWID> 50
```

It writes results to `generated-keys-<HWID>.txt` in your current folder.

You can still run JS directly if needed:

```powershell
node .\tools\generate-license-key.js <HWID> 50
```

## Main Files

- `main.js`: Electron main process
- `index.html` / `style.css` / `script.js`: renderer UI and player logic
- `tools/generate-license-key.js`: local key generator source
- `tools/build-keygen.ps1`: helper script to build keygen exe
- `package.json`: build and dependency config
