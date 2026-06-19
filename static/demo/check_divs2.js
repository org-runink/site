const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
let depth = 0;
let lines = html.split('\n');
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  let opens = (line.match(/<div\b[^>]*>/g) || []).length;
  let closes = (line.match(/<\/div>/g) || []).length;
  depth += opens - closes;
  if (depth < 0) {
     console.log(`Depth went negative at line ${i+1}: ${line.trim()}`);
     break;
  }
}
console.log("Final depth:", depth);
