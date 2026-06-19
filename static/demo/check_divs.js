const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
let depth = 0;
let lines = html.split('\n');
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  let opens = (line.match(/<div\b[^>]*>/g) || []).length;
  let closes = (line.match(/<\/div>/g) || []).length;
  depth += opens - closes;
}
console.log("Final depth:", depth);
