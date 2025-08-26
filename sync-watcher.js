const fs = require('fs');
const path = require('path');

console.log('🔄 Starting file sync watcher...');
console.log('📁 Watching: bpij-poster.html → index.html');

// Initial sync
syncFiles();

// Watch for changes
fs.watchFile('bpij-poster.html', (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
        console.log('🔄 Change detected in bpij-poster.html');
        syncFiles();
    }
});

function syncFiles() {
    try {
        fs.copyFileSync('bpij-poster.html', 'index.html');
        console.log('✅ Synced bpij-poster.html → index.html');
    } catch (error) {
        console.error('❌ Sync failed:', error.message);
    }
}

console.log('👀 Watching for changes... (Press Ctrl+C to stop)');