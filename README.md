# breakthrough player+ (Windows EXE)

Electron-based desktop media player that can be packaged as a Windows `.exe`. A premium media experience built for performance and stunning aesthetics.

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
- Installer: `breakthroughplayer-setup-*.exe`
- Portable: `breakthroughplayer-*.exe`

## Features

- **Ambilight & Visuals**: Stunning Ambilight effects that automatically adapt to your performance mode (Eco/Balanced/Quality) to save GPU resources.
- **Real-time Audio Engine**: High-performance real-time spectrum visualizer, 3D Spatial Surround, and Smart Gain Guard.
- **Discord Rich Presence**: Integrated Discord RPC that intelligently reconnects without crashing.
- **Seamless Updates**: Built-in auto data migration ensures your playlists, settings, and Pro licenses are preserved across major version updates and rebranding.
- **Playlist & File Management**: Playlist right-click menu (play/rename/remove/reorder) and adjacent subtitle/lyric auto-loading.
- **Mini Player Mode**: Compact UI with an always-on-top window.
- **Hardware Bound Licensing**: Secure offline and online HWID-based Pro activation system.
- **Resume playback**: Automatic playback memory by filename.
- **In-app AI Auto Repair**: Instantly diagnose and fix media decoding errors.

## ⚖️ Semi-Open Source License Model

**breakthrough player+** operates under a **Semi-Open Source (Source-Available) / Freemium** model. We believe in transparency and community, which is why our client-side source code is open for you to review, learn from, and audit.

- **Free Version**: You can use the core media playback features, playlist management, and basic visualizers entirely for free.
- **Pro Features**: Advanced features (such as 3D Spatial Surround, Late Night Mode, Ambilight, and Subtitle Sync) require a **Pro License Key**.

> [!IMPORTANT]  
> While the code is visible, modifying the source code to bypass the HWID-bound license verification is strictly prohibited under our End User License Agreement (EULA). Please support the development by purchasing a legitimate Pro license.

### Activating Pro
1. Download and open the application.
2. Click on the **Activate Pro** button in the top menu.
3. Copy your unique **HWID**.
4. Purchase a key from our [Product Page](./PRODUCT_PAGE.md).
5. Enter your `HLP-XXXX-XXXX-XXXX` key to permanently unlock Pro features for your device.

## 🏗️ Architecture Overview

- `main.js`: Electron main process handling Discord RPC, seamless data migration, and IPC bridges.
- `index.html` / `style.css` / `script.js`: The frontend Renderer UI, featuring a modern glassmorphic design system and the core playback logic.

---
*For commercial inquiries, please refer to our [EULA](./EULA.md) and [Privacy Policy](./PRIVACY_POLICY.md).*
