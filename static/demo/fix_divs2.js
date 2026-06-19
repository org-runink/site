const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
let lines = html.split('\n');

// The extra div is around line 1085. Let's find the screen-maturity
let index = lines.findIndex(l => l.includes('screen-maturity'));
if (index > -1) {
   // Look backwards for an extra </div>
   console.log("Found screen-maturity at line " + (index+1));
   console.log(lines[index-4]);
   console.log(lines[index-3]);
   console.log(lines[index-2]);
   console.log(lines[index-1]);
   
   // If it's a </div>, let's remove it
   if (lines[index-3].trim() === '</div>') {
      lines.splice(index-3, 1);
      fs.writeFileSync('index.html', lines.join('\n'));
      console.log("Removed extra </div> before screen-maturity.");
   }
}
