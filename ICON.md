# Application Icon

The desktop application requires icon files for Windows.

## Required Files

- `icon.ico` - Windows icon format (for .exe file)
- `icon.png` - PNG format (for electron-builder)

## Creating Icons

### Option 1: Use an Online Converter

1. Create or find a 256x256 pixel image
2. Go to: https://convertio.co/png-ico/
3. Upload your PNG image
4. Download the .ico file
5. Save both files in this folder

### Option 2: Use Icon Design Tools

**Free Tools:**
- [GIMP](https://www.gimp.org/) - Export as .ico
- [Paint.NET](https://www.getpaint.net/) + ICO plugin
- [Greenfish Icon Editor Pro](http://greenfishsoftware.org/)

**Online Generators:**
- https://favicon.io/favicon-generator/ (text to icon)
- https://www.favicon-generator.org/
- https://realfavicongenerator.net/

### Recommended Icon Design

**For a Teleprompter app, consider:**
- 📺 TV/monitor symbol
- ▶️ Play button
- 📜 Scroll/document
- 🎬 Clapper board
- 📝 Text lines

**Colors:**
- Primary: Blue (#4a9eff) - matches app accent
- Dark background for contrast
- Simple, recognizable at small sizes

## Icon Specifications

| Format | Size | Purpose |
|--------|------|---------|
| icon.ico | 256x256 | Windows executable icon |
| icon.png | 512x512 | Electron builder (will be resized) |

## Placeholder Icons

If you don't have custom icons yet, you can:

1. **Generate a text-based icon:**
   - Go to: https://favicon.io/favicon-generator/
   - Text: "TP" or "📺"
   - Font size: 64
   - Background: #4a9eff (blue)
   - Font: Bold
   - Download and rename to icon.png

2. **Convert to .ico:**
   - Upload icon.png to: https://convertio.co/png-ico/
   - Download as icon.ico

3. Save both files in the teleprompter folder

## Current Status

⚠️ **Icon files not included in repository**

You need to create these files before building the .exe:
1. Create icon.png (512x512 px)
2. Convert to icon.ico
3. Place both in the project root
4. Run `npm run build`

If icon files are missing, the build will use Electron's default icon.

## Quick Start (Text Icon)

For a quick placeholder:

1. Go to https://favicon.io/favicon-generator/
2. Settings:
   - Text: `TP`
   - Background: Rounded
   - Font family: Roboto
   - Font size: 64
   - Font color: #ffffff
   - Background color: #4a9eff
3. Download ZIP
4. Extract `android-chrome-512x512.png`
5. Rename to `icon.png`
6. Convert to `icon.ico` at https://convertio.co/png-ico/
7. Done!

## Attribution

If you use icon from external sources:
- Check license (most icon sites require attribution)
- Add credit in README if required
- Prefer public domain or MIT licensed icons

**Free Icon Resources:**
- https://icons8.com/ (free with attribution)
- https://www.flaticon.com/ (free with attribution)
- https://fontawesome.com/ (free icons available)
- https://thenounproject.com/ (some free icons)

## Testing Icons

After adding icons:
```bash
npm start
```

Check:
- Window title bar icon (top left)
- Taskbar icon
- Alt+Tab preview

Then build and check:
```bash
npm run build-portable
```

Check:
- .exe file icon in File Explorer
- Right-click → Properties → icon

---

Need help? Open an issue on GitHub!
