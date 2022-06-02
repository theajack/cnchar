const https = require('https');

console.log('Purge docs CDN...');

https.get('https://purge.jsdelivr.net/gh/theajack/cnchar@gh-pages', () => {
    
});