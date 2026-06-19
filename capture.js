const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  // Set a large desktop viewport for high-res screenshots
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
  
  console.log("Loading demo page...");
  await page.goto('file:///home/me/Documents/site/static/demo/index.html', { waitUntil: 'networkidle0' });

  // 1. Actionable Twin (Default Screen)
  console.log("Capturing Actionable Twin...");
  await page.screenshot({ path: '/home/me/.gemini/antigravity/brain/b9235bbd-8ed1-48bc-a4a7-46b63c04e745/screenshot_1_actionable_twin.png' });

  // 2. Fetch Center
  console.log("Triggering Fetch Simulation...");
  await page.click('#btn-trigger-fetch');
  // Wait 6 seconds for the simulation to process a bit
  await new Promise(r => setTimeout(r, 6000));
  console.log("Capturing Fetch Center...");
  await page.screenshot({ path: '/home/me/.gemini/antigravity/brain/b9235bbd-8ed1-48bc-a4a7-46b63c04e745/screenshot_2_fetch_center.png' });

  // 3. Rules Recon
  console.log("Opening Rules Recon...");
  await page.click('[data-screen="rules-recon"]');
  await new Promise(r => setTimeout(r, 1000));
  console.log("Capturing Rules Recon...");
  await page.screenshot({ path: '/home/me/.gemini/antigravity/brain/b9235bbd-8ed1-48bc-a4a7-46b63c04e745/screenshot_3_rules_recon.png' });

  // 4a. Compliance Remediation
  console.log("Opening Compliance Remediation...");
  await page.click('[data-screen="remediation-compliance"]');
  await new Promise(r => setTimeout(r, 1000));
  console.log("Capturing Compliance Remediation...");
  await page.screenshot({ path: '/home/me/.gemini/antigravity/brain/b9235bbd-8ed1-48bc-a4a7-46b63c04e745/screenshot_4a_compliance.png' });

  // 4b. Finance Remediation
  console.log("Opening Finance Remediation...");
  await page.click('[data-screen="remediation-finance"]');
  await new Promise(r => setTimeout(r, 1000));
  console.log("Capturing Finance Remediation...");
  await page.screenshot({ path: '/home/me/.gemini/antigravity/brain/b9235bbd-8ed1-48bc-a4a7-46b63c04e745/screenshot_4b_finance.png' });

  // 4c. Operations Remediation
  console.log("Opening Operations Remediation...");
  await page.click('[data-screen="remediation-operations"]');
  await new Promise(r => setTimeout(r, 1000));
  console.log("Capturing Operations Remediation...");
  await page.screenshot({ path: '/home/me/.gemini/antigravity/brain/b9235bbd-8ed1-48bc-a4a7-46b63c04e745/screenshot_4c_operations.png' });

  // 5. Hypothesis Lab
  console.log("Opening Hypothesis Lab...");
  await page.click('[data-screen="hypothesis-lab"]');
  await new Promise(r => setTimeout(r, 1000));
  console.log("Capturing Hypothesis Lab...");
  await page.screenshot({ path: '/home/me/.gemini/antigravity/brain/b9235bbd-8ed1-48bc-a4a7-46b63c04e745/screenshot_5_hypothesis.png' });

  console.log("All screenshots captured successfully.");
  await browser.close();
})();
