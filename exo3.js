const fs = require('fs');

const [node, path, filePath] = process.argv;

const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

console.log(lines.length - 1);
