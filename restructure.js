const fs = require('fs');
const path = require('path');

const indexFile = '/home/me/Documents/site/static/demo/index.html';
const appFile = '/home/me/Documents/site/static/demo/app.js';

let indexHtml = fs.readFileSync(indexFile, 'utf-8');

// 1. Remove Remediation Workflow pill
indexHtml = indexHtml.replace(
  /\<div class="screen-pill" data-screen="remediation"\>[\s\S]*?\<\/div\>/,
  ''
);

// 2. Remove Fetch Simulator Actions
indexHtml = indexHtml.replace(
  /\<div class="nav-section-title" style="margin-top: 20px;" data-translate="sidebar_actions"\>Fetch Simulator Actions\<\/div\>[\s\S]*?\<\/button\>/,
  ''
);

// 3. Add Remediations Pills
const remediationsMenu = `
        <div class="nav-section-title" style="margin-top: 20px;" data-translate="sidebar_remediations">Remediations</div>
        <div class="screen-pill" data-screen="remediation-compliance">
          <span data-translate="nav_rem_comp">Compliance Remediation</span>
          <span class="screen-pill-status"></span>
        </div>
        <div class="screen-pill" data-screen="remediation-operations">
          <span data-translate="nav_rem_ops">Logistics Remediation</span>
          <span class="screen-pill-status"></span>
        </div>
        <div class="screen-pill" data-screen="remediation-finance">
          <span data-translate="nav_rem_fin">Finance Remediation</span>
          <span class="screen-pill-status"></span>
        </div>
`;
// Insert after Screen Selector block
indexHtml = indexHtml.replace(
  /\<div class="nav-section-title" style="margin-top: 20px;" data-translate="sidebar_control"\>/,
  remediationsMenu + '\n        <div class="nav-section-title" style="margin-top: 20px;" data-translate="sidebar_control">'
);

// 4. Transform screen-remediation to the three separate screens.
// Find the screen-remediation div block
const startScreenRemediation = indexHtml.indexOf('<!-- SCREEN 3: Remediation Workflow');
const endScreenRemediation = indexHtml.indexOf('<!-- SCREEN 4: Fetch Center');

if (startScreenRemediation !== -1 && endScreenRemediation !== -1) {
  const genericScreenHtml = indexHtml.substring(startScreenRemediation, endScreenRemediation);
  
  // We'll duplicate it 3 times and remove the drop-down selector (react-module-selector)
  let complScreen = genericScreenHtml
    .replace('id="screen-remediation"', 'id="screen-remediation-compliance"')
    .replace('Remediation <span data-translate="title_workflow">Workflow</span>', 'Compliance Remediation')
    .replace(/\<div style="display:flex; justify-content:flex-end; padding:10px 20px;"\>[\s\S]*?id="react-module-selector"[\s\S]*?\<\/div\>/, '');

  let opsScreen = genericScreenHtml
    .replace('id="screen-remediation"', 'id="screen-remediation-operations"')
    .replace('Remediation <span data-translate="title_workflow">Workflow</span>', 'Logistics Remediation')
    .replace(/\<div style="display:flex; justify-content:flex-end; padding:10px 20px;"\>[\s\S]*?id="react-module-selector"[\s\S]*?\<\/div\>/, '');

  let finScreen = genericScreenHtml
    .replace('id="screen-remediation"', 'id="screen-remediation-finance"')
    .replace('Remediation <span data-translate="title_workflow">Workflow</span>', 'Finance Remediation')
    .replace(/\<div style="display:flex; justify-content:flex-end; padding:10px 20px;"\>[\s\S]*?id="react-module-selector"[\s\S]*?\<\/div\>/, '');

  const newScreens = complScreen + '\n' + opsScreen + '\n' + finScreen + '\n';
  
  indexHtml = indexHtml.substring(0, startScreenRemediation) + newScreens + indexHtml.substring(endScreenRemediation);
}

// 5. Change react-console-overlay to be a floating centered dialog
indexHtml = indexHtml.replace(
  /id="react-console-overlay" class="voip-call-overlay" style="display:none; flex-direction:column; padding: 20px; background-color: rgba\(10, 5, 4, 0\.98\); z-index: 1010; overflow:hidden;"/,
  'id="react-console-overlay" class="voip-call-overlay" style="display:none; flex-direction:column; padding: 20px; background-color: rgba(15, 8, 6, 0.98); z-index: 2000; overflow:hidden; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80%; max-width: 800px; height: 80%; max-height: 600px; border-radius: 12px; border: 1px solid rgba(236, 91, 19, 0.4); box-shadow: 0 20px 60px rgba(0,0,0,0.8);"'
);

fs.writeFileSync(indexFile, indexHtml);
console.log('index.html updated successfully.');

let appJs = fs.readFileSync(appFile, 'utf-8');

// Update appJs logic
appJs = appJs.replace(
  /function navigateToScreen\(screenId\) \{/,
  `function navigateToScreen(screenId) {
    if (screenId.startsWith('remediation-')) {
        // Automatically set the target module for the remediation screen logic based on the suffix
        const modId = screenId.split('-')[1];
        let targetModule = 'Compliance';
        if (modId === 'operations') targetModule = 'Operations';
        if (modId === 'finance') targetModule = 'Finance';
        
        const sel = document.getElementById('react-module-selector');
        if(sel) { sel.value = targetModule; }
        
        // Also call populate to ensure UI matches the hidden state
        if (typeof populateReactUI === 'function') {
            populateReactUI(targetModule);
        }
    }`
);

fs.writeFileSync(appFile, appJs);
console.log('app.js updated successfully.');

