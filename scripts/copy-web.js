const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const source = path.join(root, 'index.html');
const targetDir = path.join(root, 'www');
if (!fs.existsSync(source)) throw new Error('index.html is missing');
fs.mkdirSync(targetDir, { recursive: true });
fs.copyFileSync(source, path.join(targetDir, 'index.html'));
console.log('Copied index.html into www/');
