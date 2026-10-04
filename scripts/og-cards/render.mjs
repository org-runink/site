#!/usr/bin/env node
// Draw the share cards (og:image) listed in cards.json.
//
//   node scripts/og-cards/render.mjs            every card
//   node scripts/og-cards/render.mjs home tide  only the cards with these ids
//
// Each card is card.html filled from its cards.json entry, screenshotted at
// 1200x675 by headless Chrome and written as a progressive JPEG (quality 82) by
// ImageMagick. Needs google-chrome-stable (or $CHROME) and magick on PATH.
// Look at every card it writes before committing it.

import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..', '..');
const template = readFileSync(join(here, 'card.html'), 'utf8');
const cards = JSON.parse(readFileSync(join(here, 'cards.json'), 'utf8')).cards;
const chrome = process.env.CHROME || 'google-chrome-stable';
const want = process.argv.slice(2);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const fonts = pathToFileURL(join(root, 'assets', 'fonts')).href;
const work = mkdtempSync(join(tmpdir(), 'og-cards-'));

try {
  for (const card of cards) {
    if (want.length && !want.includes(card.id)) continue;
    const mark = pathToFileURL(join(root, card.mark || 'assets/images/brand/runink-dog-head.svg')).href;
    // A mark drawn in its own colours (River, TIDE) is shown as an image;
    // the one-colour dog head is a mask that takes the card's ink.
    const markEl = card.markImage ? `<img class="mark-img" src="${mark}" alt="">` : '<div class="mark"></div>';
    const html = template
      .replace('<div class="mark"></div>', markEl)
      .replaceAll('{{FONTS}}', fonts)
      .replaceAll('{{MARK}}', mark)
      .replace('{{TITLE}}', esc(card.title))
      .replace('{{SUBTITLE}}', esc(card.subtitle))
      .replace('{{HEADLINE}}', card.headline.map((l) => `<span>${esc(l)}</span>`).join(''));
    const page = join(work, `${card.id}.html`);
    const png = join(work, `${card.id}.png`);
    writeFileSync(page, html);
    execFileSync(chrome, [
      '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
      '--force-device-scale-factor=1', '--window-size=1200,675',
      '--virtual-time-budget=5000', '--allow-file-access-from-files',
      `--screenshot=${png}`, pathToFileURL(page).href,
    ], { stdio: 'ignore' });
    for (const out of card.out) {
      const dest = join(root, out);
      execFileSync('magick', [png, '-crop', '1200x675+0+0', '+repage', '-strip',
        '-interlace', 'Plane', '-sampling-factor', '4:2:0', '-quality', '82', dest]);
      console.log(`${out}\t${statSync(dest).size} bytes\t${card.headline.join(' ')}`);
    }
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}
