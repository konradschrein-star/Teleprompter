# Quick Start: Build Your Desktop App

## Get the .exe in 3 Steps

### Step 1: Install Node.js (One-time setup)

**If you don't have Node.js:**
1. Go to https://nodejs.org/
2. Download the "LTS" version (recommended)
3. Run the installer (click "Next" through everything)
4. **Restart your computer**

**Check if installed:**
Open Command Prompt and type:
```bash
node --version
```
You should see something like `v20.x.x`

### Step 2: Install Dependencies (One-time setup)

Open Command Prompt **in this folder** and run:

```bash
npm install
```

⏳ This takes 5-10 minutes and downloads ~200 MB.
You only do this once!

### Step 3: Build the .exe

Run this command:

```bash
npm run build-portable
```

⏳ Takes 2-5 minutes

**Done!** Your .exe is ready at:
```
dist/Teleprompter-Portable.exe
```

## What You Get

- ✅ **Teleprompter-Portable.exe** (~100 MB)
- ✅ Works without installation
- ✅ No browser required
- ✅ Can be shared with friends
- ✅ Put it on your desktop!

## Testing Before Building

Want to see how it looks before building?

```bash
npm start
```

This opens the app in development mode.
Press `Ctrl+C` to stop.

## Next Steps

1. ✅ Copy `Teleprompter-Portable.exe` to your Desktop
2. ✅ Double-click to run
3. ✅ Share with friends!

## Troubleshooting

**"npm is not recognized"**
→ Install Node.js (Step 1)

**"Build failed"**
→ Make sure you ran `npm install` first (Step 2)

**"Antivirus blocked the .exe"**
→ Normal for new builds. Add an exception.

**Need the icon?**
→ See [ICON.md](ICON.md) for creating custom icons

## Full Documentation

- **[BUILD.md](BUILD.md)** - Complete build guide
- **[README.md](README.md)** - Full feature documentation
- **[SETUP.md](SETUP.md)** - Sharing & distribution guide

---

**That's it!** Three commands and you have a desktop app. 🎉
