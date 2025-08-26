# PNG Export Guide - Battery Powered Instruments Poster

This guide explains how to generate Instagram-ready PNG graphics from the HTML poster and how the export system was set up.

## 🚀 Quick Start - Generating PNGs

### Prerequisites
- Node.js installed on your system
- Git repository cloned locally

### Step 1: Install Dependencies
```bash
# Install Playwright and dependencies
npm install

# Install Chromium browser for screenshot generation
npm run install-browser
```

### Step 2: Generate PNGs
```bash
# Generate both Instagram Story/Reel and Feed versions
npm run export
```

### Output
The script generates two files in the `/screenshots` directory:
- `bpij-poster-[timestamp].png` - **1080x1920px** (Instagram Stories/Reels - 9:16 ratio)
- `bpij-poster-square-[timestamp].png` - **1080x1080px** (Instagram Feed - 1:1 ratio)

## 📱 Instagram Specifications

### Story/Reel Format (9:16)
- **Dimensions**: 1080 x 1920 pixels
- **Aspect Ratio**: 9:16
- **Use Cases**: Instagram Stories, Reels, TikTok
- **File**: `bpij-poster-[timestamp].png`

### Feed Format (1:1)
- **Dimensions**: 1080 x 1080 pixels
- **Aspect Ratio**: 1:1 (Square)
- **Use Cases**: Instagram Feed posts, Facebook posts
- **File**: `bpij-poster-square-[timestamp].png`

## 🛠️ How the Export System Works

### Dual Styling Architecture

The poster uses two completely separate styling systems:

#### 1. Responsive Web Styles (Default)
```css
/* Normal responsive styles for web viewing */
.poster {
    width: calc(100vh * 0.5625);
    height: 100vh;
    /* Scales with viewport */
}

h1 {
    font-size: calc(4vh + 1vw);
    /* Responsive typography */
}
```

#### 2. Export-Only Styles (Screenshot Mode)
```css
/* Fixed dimensions only during export */
.export-mode .poster {
    width: 1080px !important;
    height: 1920px !important;
    /* Fixed Instagram dimensions */
}

.export-mode h1 {
    font-size: 72px;
    /* Fixed sizes for consistent output */
}
```

### The Export Process

1. **Launch Browser**: Playwright opens headless Chromium
2. **Load HTML**: Navigates to the poster file
3. **Apply Export Mode**: Adds `.export-mode` class via JavaScript
4. **Set Viewport**: 1080x1920px for Instagram dimensions
5. **Wait for Render**: Ensures all styles are applied
6. **Screenshot**: Captures the poster element as PNG
7. **Generate Square**: Repeats process for 1080x1080px version
8. **Save Files**: Timestamped files in `/screenshots` directory

### Height Budget Management

The export system ensures all content fits within Instagram's height limits:

```css
/* Available height: 1920px total */
.export-mode .poster {
    height: 1920px;
    padding: 40px 50px; /* 80px total padding */
}

.export-mode .content {
    height: 1840px; /* 1920px - 80px padding */
    justify-content: space-between; /* Even distribution */
}
```

**Content Distribution**:
- Presenter section: ~120px
- Main title: ~180px  
- Logo: ~200px
- Info block: ~280px
- Gear section: ~280px
- Footer: ~200px
- CTA button: ~100px
- Gaps: ~15px between sections

### Flexible vs. Fixed Elements

```css
/* Elements that can compress if needed */
.export-mode .info-block,
.export-mode .gear-section,
.export-mode .footer {
    flex-shrink: 1;
}

/* Elements that maintain fixed size */
.export-mode .presenter,
.export-mode h1,
.export-mode .cta {
    flex-shrink: 0;
}
```

## 📁 File Structure

```
battery-powered-instruments/
├── bpij-poster.html          # Main responsive poster
├── index.html                # Homepage (same as above)
├── bpij_graphic.png          # Logo image
├── export-poster.js          # Screenshot generation script
├── package.json              # Dependencies and scripts
└── screenshots/              # Generated PNG exports
    ├── bpij-poster-[timestamp].png       # 9:16 format
    └── bpij-poster-square-[timestamp].png # 1:1 format
```

## 🔧 Technical Implementation Details

### Dependencies
```json
{
  "dependencies": {
    "playwright": "^1.48.0"
  }
}
```

### Export Script (`export-poster.js`)
- Uses Playwright's Chromium browser
- Headless operation (no visible browser window)
- Automatic screenshot of specific DOM element
- Timestamped file naming to prevent overwrites
- Error handling and progress feedback
- Cross-platform compatibility (Windows, Mac, Linux)

### CSS Strategy
- **Isolation**: Export styles only apply when `.export-mode` class is present
- **Specificity**: Export styles use higher specificity to override responsive styles
- **Fallback**: If export fails, responsive styles remain unaffected
- **Performance**: No impact on web performance (styles only load during export)

## 🎨 Customizing the Export

### Changing Dimensions
To modify export dimensions, update the script:

```javascript
// In export-poster.js
await page.setViewportSize({
    width: 1080,  // Change width
    height: 1920  // Change height
});
```

### Adjusting Content Sizing
Modify export-mode styles in `bpij-poster.html`:

```css
.export-mode h1 {
    font-size: 72px; /* Adjust title size */
}

.export-mode .info-line {
    font-size: 28px; /* Adjust info text size */
}
```

### Adding New Export Formats
Add additional screenshot calls in `export-poster.js`:

```javascript
// Example: Add landscape format
await page.setViewportSize({ width: 1920, height: 1080 });
await poster.screenshot({
    path: path.join(__dirname, 'screenshots', `landscape-${timestamp}.png`),
    type: 'png'
});
```

## 🐛 Troubleshooting

### Common Issues

**Error: "Chromium not found"**
```bash
npx playwright install chromium
```

**Export appears cut off**
- Check that all content fits within 1840px height budget
- Adjust font sizes in `.export-mode` styles
- Verify flexbox distribution is working

**Fonts look different in export**
- Ensure web fonts are loaded before screenshot
- Add `await page.waitForLoadState('networkidle')` in script
- Use system fonts for consistency

**Links not working in PNG**
- PNGs are static images - links only work in HTML version
- Consider adding QR codes for important links in export version

### Debug Mode
To see the browser during export (helpful for debugging):

```javascript
// In export-poster.js, change:
const browser = await chromium.launch({
    headless: false  // Set to false to see browser
});
```

## 📈 Best Practices

1. **Test Both Versions**: Always check both responsive web and export versions after changes
2. **Consistent Updates**: Update both `bpij-poster.html` and `index.html` when making changes
3. **Version Control**: Commit generated PNGs to track export history
4. **Quality Check**: Verify text readability at actual Instagram sizes
5. **Backup Exports**: Keep previous versions for comparison and rollback

## 🔄 Updating the Poster

### Automated Sync Options

**Option 1: Manual Sync (Quick)**
```bash
npm run sync              # Copy bpij-poster.html → index.html
npm run export-all        # Sync + Export in one command
```

**Option 2: Auto-Sync Watcher (Development)**
```bash
npm run watch             # Watches for changes and auto-syncs
```

**Option 3: Git Pre-commit Hook (Advanced)**
```bash
# Install the pre-commit hook (one-time setup)
cp pre-commit-hook.sh .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

### Workflow

When making content changes:

1. **Edit** `bpij-poster.html` only
2. **Sync** using `npm run sync` or let watcher handle it
3. **Test** in browser for responsive behavior
4. **Export** with `npm run export-all` 
5. **Commit** all changes including new screenshots
6. **Push** to repository

The sync system ensures both web and social media versions stay synchronized automatically.

---

*This export system provides a seamless workflow for maintaining both responsive web design and pixel-perfect social media graphics from a single HTML source.*