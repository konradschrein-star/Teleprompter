# Teleprompter - Setup & Sharing Guide

## 🚀 Quick Start (For You)

### Option 1: Double-Click to Run
1. Double-click `Teleprompter.bat` - That's it! The teleprompter will open in Chrome/Edge app mode
2. Create a desktop shortcut:
   - Right-click `Teleprompter.bat`
   - Select "Send to" → "Desktop (create shortcut)"
   - Optionally: Right-click the shortcut → Properties → "Change Icon" to customize

### Option 2: Create a Standalone Executable (.exe)
If you want a proper .exe file instead of a .bat file:

**Using Bat to Exe Converter (Recommended):**
1. Download "Bat to Exe Converter" from: http://bat2exe.net/
2. Open the converter
3. Select `Teleprompter.bat` as input
4. Choose output location (e.g., your Desktop)
5. Click "Convert"
6. You now have `Teleprompter.exe`!

**Alternative - Using PS2EXE (PowerShell):**
1. Open PowerShell as Administrator
2. Run: `Install-Module -Name ps2exe`
3. Navigate to the teleprompter folder
4. Run: `Invoke-ps2exe .\Teleprompter.bat .\Teleprompter.exe`

### Option 3: Direct HTML
- Simply double-click `index.html` to open in your default browser
- Note: Use Chrome or Edge for Picture-in-Picture support

---

## 📤 Sharing with Friends

### Method 1: GitHub Link (Easiest)
Share this link: **https://github.com/konradschrein-star/Teleprompter**

Your friends can:
1. Click the green "Code" button
2. Select "Download ZIP"
3. Extract the ZIP file
4. Double-click `Teleprompter.bat` or `index.html`

### Method 2: Direct Download Link
Create a release on GitHub:
1. Go to: https://github.com/konradschrein-star/Teleprompter/releases
2. Click "Create a new release"
3. Tag version: `v1.0.0`
4. Release title: `Teleprompter v1.0 - Initial Release`
5. Add description (see below)
6. Attach the .exe file if you created one
7. Click "Publish release"

**Suggested Release Description:**
```
# Teleprompter v1.0

A free, portable teleprompter for video recording and presentations!

## ✨ Features
- 📺 Picture-in-Picture mode - overlay while recording
- 📁 Supports .txt, .md, and .docx files
- ⚙️ Fully customizable (fonts, colors, speed, size)
- 🎮 Simple controls - just press SPACEBAR
- 💾 Saves your settings automatically
- 🆓 100% free and open source

## 📥 Installation
1. Download the ZIP file below
2. Extract it anywhere on your computer
3. Double-click `Teleprompter.bat` or `index.html`
4. That's it! No installation needed.

## 💡 Requirements
- Windows 10/11
- Chrome or Edge browser (for Picture-in-Picture)

## 📖 Usage
1. Load your script (drag-drop or paste)
2. Adjust settings (speed, font size, etc.)
3. Press SPACEBAR to start scrolling
4. Click "Open Picture-in-Picture" for overlay mode

Full instructions in README.md

Enjoy! 🎬
```

### Method 3: Zip File Package
1. Create a folder called `Teleprompter-v1.0`
2. Copy these files into it:
   - `index.html`
   - `Teleprompter.bat`
   - `README.md`
   - `SETUP.md` (this file)
   - `LICENSE`
   - `Teleprompter.exe` (if you created it)
3. Right-click the folder → "Send to" → "Compressed (zipped) folder"
4. Share the ZIP file via email, cloud storage, or USB drive

---

## 🎯 For Your Friends - Quick Instructions

**"How to Use" (include this in your share message):**

```
Hi! 👋

I'm sharing a free teleprompter app with you. Here's how to use it:

SETUP (One-time):
1. Extract the ZIP file
2. Double-click "Teleprompter.bat" (or "index.html")
3. Bookmark it or create a desktop shortcut

USAGE:
1. Drag your script file into the app (or paste text)
2. Adjust the speed and font size to your liking
3. Press SPACEBAR to start/stop scrolling
4. Hold SPACEBAR for 2x speed
5. Click "Open Picture-in-Picture" to overlay it while recording

TIPS:
- Position the PiP window near your camera lens
- Practice a few times to find the right speed
- Use dark mode for recording, light mode for presentations
- The app saves your settings automatically

Requirements: Windows + Chrome or Edge browser

Questions? Check the README.md file or reply to this message!
```

---

## 🔧 Troubleshooting

**"The .bat file doesn't work"**
- Make sure Chrome or Edge is installed
- Try double-clicking `index.html` directly instead

**"Picture-in-Picture doesn't work"**
- You must use Chrome or Edge (not Firefox or Safari)
- Make sure your browser is up to date

**"Where are my files?"**
- Nothing is uploaded! All files stay on your computer
- The app only reads files you explicitly load

**"Can I use this commercially?"**
- Yes! It's Apache 2.0 licensed - free for any use
- You can modify, distribute, and even sell it

---

## 📋 What Friends Need to Know

### Minimum Requirements
- **OS:** Windows 10/11 (or any OS with a modern browser)
- **Browser:** Chrome or Microsoft Edge (for PiP feature)
- **Disk Space:** < 1 MB
- **Internet:** Not required (runs 100% offline after download)

### What's Included
- ✅ Complete teleprompter application (single HTML file)
- ✅ Batch launcher for easy startup
- ✅ Full documentation (README)
- ✅ Apache 2.0 open source license
- ✅ No ads, no tracking, no registration

### Privacy & Security
- 🔒 Runs entirely on your computer (no cloud/server)
- 🔒 No data collection or tracking
- 🔒 No internet connection required
- 🔒 Open source - inspect the code yourself!

---

## 🎁 Sharing on Social Media

**Short Link Description:**
```
🎬 Free Teleprompter App for Windows

Perfect for:
- YouTube/TikTok creators
- Presentations & speeches
- Virtual meetings
- Acting/rehearsals

Features:
✅ Picture-in-Picture overlay
✅ Customizable fonts & colors
✅ Auto-scroll with speed control
✅ Supports .txt, .md, .docx files
✅ 100% free & open source

Download: https://github.com/konradschrein-star/Teleprompter
```

---

## 📝 Version History

### v1.0.0 (Initial Release)
- Complete teleprompter functionality
- Picture-in-Picture support
- Multiple file format support (.txt, .md, .docx)
- Customizable appearance
- Auto-scroll with keyboard controls
- Settings persistence
- Dark/Light themes

---

## 🙏 Credits

Created with Claude Code
Licensed under Apache 2.0
Contributions welcome!

GitHub: https://github.com/konradschrein-star/Teleprompter
