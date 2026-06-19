const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
let lines = html.split('\n');

// We want to delete lines 266 and 267 (index 265 and 266)
// Let's verify what they are first:
console.log("Line 265:", lines[264]);
console.log("Line 266:", lines[265]);
console.log("Line 267:", lines[266]);
console.log("Line 268:", lines[267]);

lines.splice(265, 2); // Remove 2 lines starting at index 265

fs.writeFileSync('index.html', lines.join('\n'));
console.log("Removed extra divs.");
