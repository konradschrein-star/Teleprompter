# Building the Teleprompter Desktop Application

This guide explains how to build the standalone Windows executable (.exe) from source.

## What You Get

The desktop application version:
- ✅ **No browser UI** - Runs as a native Windows app
- ✅ **True Picture-in-Picture** - Separate always-on-top window
- ✅ **Standalone .exe** - No browser required
- ✅ **Smaller PiP window** - Can be resized very small
- ✅ **Professional appearance** - Looks like a real desktop app

## Prerequisites

You only need to build once. After building, you can share the .exe with anyone.

**Required:**
- [Node.js](https://nodejs.org/) (v18 or later)
- Windows 10/11

**Installation:**
1. Download Node.js from: https://nodejs.org/
2. Run the installer (choose "Recommended for Most Users")
3. Restart your computer

## Quick Build Instructions

### Step 1: Install Dependencies

Open Command Prompt or PowerShell in the teleprompter folder and run:

```bash
npm install
```

This downloads Electron and the build tools (~200 MB). **This only needs to be done once.**

### Step 2: Build the Executable

Choose one of these options:

**Option A: Portable .exe (Recommended for sharing)**
```bash
npm run build-portable
```

This creates a single .exe file that can run without installation.
Output: `dist/Teleprompter-Portable.exe` (~100 MB)

**Option B: Installer .exe (For permanent installation)**
```bash
npm run build
```

This creates an installer that users run once to install the app.
Output: `dist/Teleprompter Setup 1.0.0.exe`

### Step 3: Find Your Executable

Look in the `dist/` folder:
- `Teleprompter-Portable.exe` - Ready to run, no installation
- `Teleprompter Setup 1.0.0.exe` - Installer version

## Testing Before Building

Want to test the app before building?

```bash
npm start
```

This opens the application in development mode. Press `Ctrl+C` to stop.

## Distribution Options

### For Personal Use
- Use the portable .exe
- Copy to your Desktop
- Create a shortcut wherever you want

### For Sharing with Friends
1. **Just the .exe:**
   - Share `Teleprompter-Portable.exe`
   - No other files needed
   - ~100 MB file size
   - Runs immediately, no installation

2. **Installer version:**
   - Share `Teleprompter Setup 1.0.0.exe`
   - User runs it once to install
   - Creates Start Menu entry and desktop shortcut
   - Can be uninstalled normally

### On GitHub Releases
1. Go to: https://github.com/konradschrein-star/Teleprompter/releases
2. Click "Create a new release"
3. Tag: `v1.0.0`
4. Upload the .exe file(s)
5. Add release notes (see below)
6. Publish

**Suggested Release Notes:**
```markdown
## Teleprompter v1.0 - Desktop Application

### Downloads
- **Teleprompter-Portable.exe** - Portable version (no installation required)
- **Teleprompter Setup 1.0.0.exe** - Installer version

### Features
- 🖥️ Native Windows desktop application
- 📺 Always-on-top Picture-in-Picture window
- 📁 Supports .txt, .md, and .docx files
- ⚙️ Fully customizable appearance
- 🎮 Simple spacebar controls
- 💾 Automatic settings save
- 🆓 100% free and open source

### Installation
**Portable Version:**
1. Download Teleprompter-Portable.exe
2. Run it - that's it!

**Installer Version:**
1. Download Teleprompter Setup 1.0.0.exe
2. Run the installer
3. Follow the prompts

### Requirements
- Windows 10 or later
- ~150 MB disk space

### Notes
- No internet connection required
- All files processed locally
- No data collection or tracking
- Open source (Apache 2.0)
```

## File Sizes

| File | Size | Description |
|------|------|-------------|
| Source (HTML/JS/CSS) | < 1 MB | Original web version |
| node_modules/ | ~200 MB | Development dependencies (not distributed) |
| Portable .exe | ~100 MB | Standalone executable |
| Installer .exe | ~100 MB | Installation package |

## Customization

### Change App Icon
1. Replace `icon.ico` with your custom icon (256x256 recommended)
2. Replace `icon.png` with the same icon in PNG format
3. Rebuild

### Change App Name
Edit `package.json`:
```json
"productName": "Your App Name"
```

### Change Version Number
Edit `package.json`:
```json
"version": "1.0.1"
```

## Troubleshooting

**"npm is not recognized"**
- Install Node.js: https://nodejs.org/
- Restart your terminal/computer
- Try again

**"Error: ENOENT: no such file or directory"**
- Make sure you're in the correct folder
- Check that all source files exist (index.html, electron-main.js, etc.)

**Build takes a long time**
- First build takes 5-10 minutes (downloads and compiles)
- Subsequent builds are faster (2-3 minutes)

**Antivirus blocks the .exe**
- This is normal for newly built executables
- Add an exception in your antivirus
- Or build with code-signing certificate (advanced)

**"Cannot find module 'electron'"**
- Run `npm install` again
- Delete `node_modules` folder and run `npm install`

## Advanced Options

### Build for Multiple Platforms
```bash
# Windows only (default)
npm run build

# Windows + Mac + Linux
npx electron-builder --win --mac --linux
```

### Clean Build
```bash
# Remove previous builds
rm -rf dist/

# Rebuild
npm run build
```

### Development Mode
```bash
# Run with DevTools open
npm start
```

Press `Ctrl+Shift+I` in the app to open DevTools.

## Technical Details

**Built with:**
- Electron 28.0.0
- electron-builder 24.9.1
- Pure HTML/CSS/JavaScript (no frameworks)

**Architecture:**
- Main Process: `electron-main.js` (manages windows)
- Renderer Process: `index.html` (UI)
- Preload Script: `preload.js` (security bridge)

**Package Contents:**
- Application code (HTML/JS/CSS)
- Electron runtime (Chromium + Node.js)
- Native modules (OS integration)

## Support

**Build Issues:**
- Check Node.js version: `node --version` (should be v18+)
- Clear cache: `npm cache clean --force`
- Reinstall: `rm -rf node_modules && npm install`

**Runtime Issues:**
- Check Windows version (Windows 10+)
- Update graphics drivers
- Try portable version instead of installer

**Questions:**
- Open an issue: https://github.com/konradschrein-star/Teleprompter/issues
- Check existing issues first

## Next Steps

After building:
1. ✅ Test the .exe thoroughly
2. ✅ Create a GitHub release
3. ✅ Share with friends!
4. ✅ Collect feedback
5. ✅ Iterate and improve

## Alternative: Use Pre-Built Releases

Don't want to build yourself?
- Download from: https://github.com/konradschrein-star/Teleprompter/releases
- Look for the latest release
- Download the .exe file
- Run it!

---

**License:** Apache 2.0
**GitHub:** https://github.com/konradschrein-star/Teleprompter
