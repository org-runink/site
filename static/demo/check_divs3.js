const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
let depth = 0;
let lines = html.split('\n');

for (let i = 862; i < 1090; i++) {
  let line = lines[i];
  let opens = (line.match(/<div\b[^>]*>/g) || []).length;
  let closes = (line.match(/<\/div>/g) || []).length;
  depth += opens - closes;
  if(opens > 0 || closes > 0) {
    console.log(`Line ${i+1}: +${opens} -${closes} = depth ${depth} | ${line.trim().substring(0, 50)}`);
  }
}
