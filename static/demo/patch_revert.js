const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The marker was:
//             </div> <!-- Close Top Dashboard Stats Grid -->
// We need to insert the 3 divs before it.

html = html.replace(
  /            <\/div> <!-- Close Top Dashboard Stats Grid -->/g,
  `              
                </div>
              </div>
            </div>
            </div> <!-- Close Top Dashboard Stats Grid -->`
);

fs.writeFileSync('index.html', html);
console.log("Reverted extra divs.");
