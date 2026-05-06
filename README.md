# Teleprompter Application

A professional teleprompter application available as both a web app and native Windows desktop application. Perfect for video recording, presentations, and public speaking.

## 🎯 Two Versions Available

**🌐 Web Version** - Runs in your browser (Chrome/Edge)
- Single HTML file
- Works on any OS
- Quick and portable

**🖥️ Desktop App** - Native Windows application
- Standalone .exe
- No browser UI
- True always-on-top Picture-in-Picture
- Professional appearance

See [BUILD.md](BUILD.md) for desktop app build instructions.

## Features

- **Picture-in-Picture Support** - Detach the teleprompter into a separate window that can be resized and positioned anywhere on screen
- **Multiple File Formats** - Support for .txt, .md (Markdown), and .docx files
- **Flexible Input** - Drag-and-drop files, browse for files, or paste text directly
- **Customizable Appearance**:
  - Adjustable scroll speed (1-10)
  - Configurable line width (40-100 characters)
  - Font size control (16-72px)
  - Multiple font families (Roboto, Open Sans, Merriweather, Lora, PT Serif, Arial, Georgia, Courier New)
  - Custom font color
  - Dark/Light theme toggle
- **Smart Scrolling**:
  - Auto-scroll with adjustable speed
  - Hold SPACEBAR for 2x speed
  - Automatic pause when manually scrolling
- **Persistent Settings** - Your preferences are saved and restored automatically

## Quick Start

**Just want to run it?** Double-click `Teleprompter.bat` or `index.html`

**Want to put it on your desktop?** See **[SETUP.md](SETUP.md)** for:
- Creating a desktop shortcut
- Converting to a standalone .exe file
- Sharing with friends
- Distribution instructions

## Requirements

- **Chromium-based browser** (Chrome, Edge, Brave, etc.) - required for Picture-in-Picture functionality
- Windows 10/11 (though the application will work on any OS with a compatible browser)

## Installation

### Web Version (Easy)

No installation required:

1. Download the files or clone this repository
2. Double-click `Teleprompter.bat` for the best experience
3. Or open `index.html` directly in your browser

### Desktop App (Professional)

For the standalone .exe application:

1. **Download pre-built** (recommended):
   - Go to [Releases](https://github.com/konradschrein-star/Teleprompter/releases)
   - Download `Teleprompter-Portable.exe`
   - Run it - no installation needed!

2. **Build from source**:
   - See [BUILD.md](BUILD.md) for instructions
   - Requires Node.js
   - Creates a standalone .exe file

**For detailed setup and sharing instructions, see [SETUP.md](SETUP.md)**

## Usage

### Loading Content

**Option 1: Drag and Drop**
- Drag a .txt, .md, or .docx file directly onto the drop zone

**Option 2: Browse for File**
- Click the drop zone
- Select your file from the file browser

**Option 3: Paste Text**
- Copy your script to clipboard
- Paste into the text area below the drop zone

### Playback Controls

- **SPACEBAR** - Press to start/stop scrolling
- **HOLD SPACEBAR** - Hold to scroll at 2x speed while playing
- **Mouse Wheel** - Scroll manually (auto-pause)

### Picture-in-Picture Mode

1. Load your script
2. Adjust settings to your preference
3. Click "Open Picture-in-Picture"
4. Resize and position the PiP window as needed
5. Control playback using spacebar in either window

The PiP window:
- Can be resized to very small dimensions
- Can be dragged anywhere on screen
- Stays on top of other windows
- Syncs scroll position with main window
- Inherits all styling settings

### Recommended Settings

**For video recording:**
- Font Size: 40-48px
- Line Width: 60ch
- Dark theme
- Position PiP near camera

**For presentations:**
- Font Size: 32-40px
- Line Width: 70ch
- Light or Dark theme (match venue lighting)
- Position PiP on secondary monitor or corner of screen

## Tips

- **Rehearse first** - Practice with your script to find the ideal speed
- **Use the PiP resize** - Make the window just large enough to be readable
- **Position strategically** - Place the PiP window near where you'll be looking (camera lens, audience, etc.)
- **Adjust brightness** - Use font color to adjust visibility in different lighting conditions
- **Break text into paragraphs** - Makes it easier to find your place if you pause

## Browser Compatibility

| Feature | Chrome/Edge | Firefox | Safari |
|---------|-------------|---------|--------|
| Basic teleprompter | ✅ | ✅ | ✅ |
| File loading | ✅ | ✅ | ✅ |
| DOCX support | ✅ | ✅ | ✅ |
| Picture-in-Picture | ✅ | ❌ | ❌ |

**Note:** Picture-in-Picture (the main feature) only works in Chromium-based browsers (Chrome, Edge, Brave, Opera).

## Keyboard Shortcuts

- `SPACEBAR` - Toggle play/pause (or 2x speed when held)

## Privacy

All data processing happens locally in your browser. No files are uploaded to any server. Your settings are stored only in your browser's localStorage.

## License

Apache License 2.0 - See LICENSE file for details

## Troubleshooting

**"Picture-in-Picture is not supported"**
- Make sure you're using Chrome, Edge, or another Chromium-based browser
- Update your browser to the latest version

**DOCX file won't load**
- Ensure the file is a valid .docx file
- Try converting to .txt if problems persist
- Check the browser console for error messages

**Scrolling is too fast/slow**
- Adjust the Speed slider
- Remember you can hold SPACEBAR for 2x speed temporarily

**Text is hard to read in PiP**
- Increase the font size before opening PiP
- Adjust font color for better contrast
- Try a different font family
- Make the PiP window larger

**Settings don't persist**
- Check if your browser allows localStorage
- Ensure you're not in private/incognito mode

## Contributing

Found a bug or have a feature request? Please open an issue on GitHub.

## Version

1.0.0 - Initial release
