# Battery Powered Instruments Jam Session Poster

Interactive HTML poster for the Battery Powered Instruments Jam Session at CymaSpace's Woodstock Café.

## Features

- **Responsive Design**: Automatically adapts to any screen size while maintaining 9:16 aspect ratio
- **Instagram-Ready Export**: Generate PNG images at 1080x1920px (Stories/Reels) and 1080x1080px (Feed)
- **Modern CSS**: Uses viewport units and calc() for fluid scaling
- **Export Script**: Automated screenshot generation using Playwright

## Files

- `bpij-poster.html` - Main poster HTML with responsive design
- `bpij_graphic.png` - Logo graphic
- `export-poster.js` - Node.js script for PNG export
- `screenshots/` - Directory for exported images

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Chromium browser for Playwright:
```bash
npm run install-browser
```

## Usage

### View in Browser
Simply open `bpij-poster.html` in any web browser. The poster will automatically scale to fit your viewport.

### Export for Social Media
Run the export script to generate Instagram-ready PNG images:

```bash
npm run export
```

Or directly:

```bash
node export-poster.js
```

This will create two files in the `screenshots/` directory:
- `bpij-poster-[timestamp].png` - 1080x1920px (Instagram Stories/Reels)
- `bpij-poster-square-[timestamp].png` - 1080x1080px (Instagram Feed)

## Design Specifications

### Instagram Dimensions
- **Stories/Reels**: 1080x1920px (9:16 aspect ratio)
- **Feed Square**: 1080x1080px (1:1 aspect ratio)
- **Feed Portrait**: 1080x1350px (4:5 aspect ratio)

### Color Scheme
- Primary: `#00E5FF` (Cyan)
- Background: `#0f0f0f` (Near black)
- Text: `#ffffff` (White)
- Secondary: `#e0e0e0` (Light gray)

## Event Details

- **What**: Battery Powered Instruments Jam Session
- **When**: Wednesdays at noon (90 minutes)
- **Where**: Woodstock Café (owned by CymaSpace)
- **Cost**: Sliding scale $10 (Free for Patreon members)
- **Bring**: Battery-powered gear and headphones

## Development

The poster uses two display modes:
1. **Responsive Mode**: Default view that scales with viewport
2. **Export Mode**: Fixed dimensions for screenshot capture (activated by `.export-mode` class)

### Customization

To modify the poster content, edit the HTML structure in `bpij-poster.html`. The CSS uses:
- Viewport units (vh/vw) for responsive scaling
- Fixed pixel values in `.export-mode` for consistent social media output
- CSS Grid and Flexbox for layout

## License

MIT