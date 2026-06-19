const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  const htmlPath = 'file://' + path.resolve('static/demo/index.html');
  await page.goto(htmlPath, { waitUntil: 'networkidle2' });

  // Click the "What is Runink FACE" button
  await page.click('#btn-show-slides');
  await new Promise(r => setTimeout(r, 1000)); // wait for transition
  
  await page.screenshot({ path: '/home/me/.gemini/antigravity/brain/b9235bbd-8ed1-48bc-a4a7-46b63c04e745/scratch/pitch_deck_fixed.png', fullPage: true });

  await browser.close();
  console.log("Screenshot taken: pitch_deck_fixed.png");
})();
