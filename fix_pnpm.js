const fs = require('fs');

let config = fs.readFileSync('package.json', 'utf8');

// What if the issue is because `onlyBuiltDependencies` is meant to list EXACTLY the built ones but pnpm requires explicit approval for them in `package.json` under `pnpm.approvedBuilds`?
// No, the prompt says "To safely allow post-install scripts (e.g., for esbuild and hugo-bin required by the Hugo PostCSS pipeline), add 'pnpm': {'onlyBuiltDependencies': ['esbuild', 'hugo-bin']} to package.json before running pnpm install."
// I added `unrs-resolver` to the list. Maybe I should remove `unrs-resolver` entirely and just use the exact prompt instruction?
