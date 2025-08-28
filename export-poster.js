const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function exportPoster() {
    console.log('🚀 Starting poster export...');
    
    // Launch browser
    const browser = await chromium.launch({
        headless: true // Set to false if you want to see the browser
    });
    
    try {
        // Create a new page
        const page = await browser.newPage();
        
        // Set viewport to Instagram story/reel dimensions
        await page.setViewportSize({
            width: 1080,
            height: 1920
        });
        
        // Get the absolute path to the HTML file
        const htmlPath = path.join(__dirname, 'bpij-poster.html');
        const fileUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;
        
        console.log('📄 Loading HTML from:', fileUrl);
        
        // Navigate to the HTML file
        await page.goto(fileUrl, { 
            waitUntil: 'networkidle' 
        });
        
        // Add export-mode class to the poster for fixed dimensions
        await page.evaluate(() => {
            const poster = document.querySelector('.poster');
            if (poster) {
                poster.classList.add('export-mode');
            }
        });
        
        // Wait a moment for styles to apply
        await page.waitForTimeout(1000);
        
        // Generate timestamp for unique filename
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        const filename = `bpij-poster-${timestamp}.png`;
        const outputPath = path.join(__dirname, 'screenshots', filename);
        
        // Ensure screenshots directory exists
        const screenshotsDir = path.join(__dirname, 'screenshots');
        if (!fs.existsSync(screenshotsDir)) {
            fs.mkdirSync(screenshotsDir, { recursive: true });
        }
        
        // Take screenshot of the poster element
        const poster = await page.locator('.poster');
        await poster.screenshot({
            path: outputPath,
            type: 'png'
        });
        
        console.log('✅ Screenshot saved to:', outputPath);
        console.log('📐 Dimensions: 1080x1920px (Instagram Story/Reel)');
        
    } catch (error) {
        console.error('❌ Error during export:', error);
    } finally {
        // Close browser
        await browser.close();
        console.log('🎉 Export complete!');
    }
}

// Run the export
exportPoster().catch(console.error);