const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
let depth = 0;
let lines = html.split('\n');

let currentScreen = null;
let screenStartDepth = 0;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  let opens = (line.match(/<div\b[^>]*>/g) || []).length;
  let closes = (line.match(/<\/div>/g) || []).length;
  
  if (line.includes('id="screen-') && line.includes('class="screen-view')) {
    currentScreen = line.trim();
    screenStartDepth = depth;
    console.log(`\nFound screen: ${currentScreen} at line ${i+1}. Starting depth: ${depth}`);
  }
  
  depth += opens - closes;
  
  if (currentScreen && depth === screenStartDepth && closes > 0) {
    console.log(`Screen ${currentScreen} closed at line ${i+1}. Depth: ${depth}`);
    currentScreen = null;
  }
}
console.log("\nFinal depth:", depth);
