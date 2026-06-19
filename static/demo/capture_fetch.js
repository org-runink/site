const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,800']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  const fileUrl = 'file://' + path.resolve('index.html');
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  // Navigate to Fetch Center
  await page.evaluate(() => {
    document.querySelector('[data-screen="fetch"]').click();
  });
  await new Promise(r => setTimeout(r, 1000));

  // Click the first history item
  await page.evaluate(() => {
    const histItem = document.querySelector('#execution-history-list .list-item-wrapper');
    if (histItem) histItem.click();
  });
  await new Promise(r => setTimeout(r, 1000));

  await page.screenshot({ path: 'fetch_popup.png' });
  await browser.close();
})();
