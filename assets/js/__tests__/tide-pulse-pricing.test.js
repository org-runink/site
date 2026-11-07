/**
 * Runink TIDE and Runink PULSE pricing pages (price book 2026-11-06): the cards in
 * four languages agree with data/pricing.json, the services answer follows the
 * same rule as FACE's, and the voice-agent section quotes only vendor prices that
 * were read on the vendor's own page, each with its link and the date it was read.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..', '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const data = JSON.parse(read('data/pricing.json'));
const LANGS = ['en', 'fr', 'es', 'pt'];
const file = (base, l) => `content/products/${base}${l === 'en' ? '' : '.' + l}.md`;
// Front-matter comment lines ("# ...") are notes for editors, never rendered.
const body = (src) => src.replace(/^#.*$/gm, '');
const dollars = (cents) => String(cents / 100);
const cardPrices = (src) => ({
  monthly: [...src.matchAll(/"price_monthly": "([^"]+)"/g)].map((m) => m[1]),
  yearly: [...src.matchAll(/"price_yearly": "([^"]+)"/g)].map((m) => m[1]),
});
// A number as the page prints it in any of the four languages: 1.5, 1,5; 0.12, 0,12.
const num = (s) => new RegExp(String(s).replace('.', '[.,]'));

describe('the data holds the price book of 2026-11-06', () => {
  test('TIDE', () => {
    expect(data.tide.lite.seatYearlyCents).toBe(8500);
    expect(data.tide.lite.seatMonthlyCents).toBe(9900);
    expect(data.tide.dedicated.firstNodeMonthlyCents).toBe(27900);
    expect(data.tide.dedicated.extraNodeMonthlyCents).toBe(16900);
    expect(data.tide.dedicated.runnerFeeBps).toBe(150);
    expect(data.tide.units.overageCentsPer100).toBe(12);
    expect(data.tide.units.prepaidMonthOffPct).toBe(5);
    expect(data.tide.units.prepaidYearOffPct).toBe(10);
  });
  test('PULSE', () => {
    expect(data.pulse.lite.seatYearlyCents).toBe(5500);
    expect(data.pulse.lite.seatMonthlyCents).toBe(6500);
    expect(data.pulse.dedicated.seatYearlyCents).toBe(10900);
    expect(data.pulse.lite.fastTasksPerSeatPerDay).toBe(10);
  });
});

describe.each(LANGS)('TIDE pricing, %s', (l) => {
  const src = read(file('tide-pricing', l));
  const t = data.tide;
  test('the cards agree with data/pricing.json', () => {
    const p = cardPrices(src);
    expect(p.monthly[0]).toBe(dollars(t.lite.seatMonthlyCents));
    expect(p.yearly[0]).toBe(dollars(t.lite.seatYearlyCents));
    expect(p.monthly[1]).toBe(dollars(t.dedicated.firstNodeMonthlyCents));
    expect(p.yearly[1]).toBe(dollars(t.dedicated.firstNodeMonthlyCents));
    expect(src).toContain(dollars(t.dedicated.extraNodeMonthlyCents));
    expect(src).toMatch(num(t.dedicated.runnerFeeBps / 100));
    expect(src).toMatch(num(t.units.overageCentsPer100 / 100));
    expect(src).toMatch(/18[ ,.  ]?000/);
    expect(src).toMatch(/\b900\b/);
  });
  test('no superseded TIDE price survives', () => {
    expect(body(src)).not.toMatch(/\$\s?(75|89|249|149)\b|\b(75|89|249|149) \$|0[.,]10\b|20\s?%|\b16\s?%/);
  });
});

describe.each(LANGS)('PULSE pricing, %s', (l) => {
  const src = read(file('pulse-pricing', l));
  const p = data.pulse;
  test('the cards agree with data/pricing.json', () => {
    const c = cardPrices(src);
    expect(c.monthly[0]).toBe(dollars(p.lite.seatMonthlyCents));
    expect(c.yearly[0]).toBe(dollars(p.lite.seatYearlyCents));
    expect(c.monthly[1]).toBe(dollars(p.dedicated.seatYearlyCents));
    expect(c.yearly[1]).toBe(dollars(p.dedicated.seatYearlyCents));
    expect(src).toMatch(new RegExp(`\\b${p.lite.fastTasksPerSeatPerDay}\\b`));
  });
  test('no superseded PULSE price survives', () => {
    expect(body(src)).not.toMatch(/\$\s?(49|59|99)\b|\b(49|59|99) \$/);
  });
});

test('the PULSE product page states the same seat prices', () => {
  const src = read('content/products/pulse.md');
  const p = data.pulse;
  expect(src).toContain(`$${dollars(p.lite.seatMonthlyCents)} a seat a month, or $${dollars(p.lite.seatYearlyCents)} a seat a month on an annual plan`);
  expect(src).toContain(`Dedicated is $${dollars(p.dedicated.seatYearlyCents)} a seat a month`);
  expect(src).toContain('/products/pulse-pricing/');
  expect(src).not.toMatch(/\$(49|59|99)\b/);
});

// The services answer: the same rule as FACE's page (pricing-estimator.test.js).
describe('the services FAQ', () => {
  const UPON = { en: /Upon request/, fr: /sur demande/i, es: /bajo petición/i, pt: /sob consulta/i };
  const servicesAnswer = (src) => {
    const m = src.match(/"question": "[^"]*\b(services|servicios|serviços)\b[^"]*",\s*"answer": "((?:[^"\\]|\\.)*)"/);
    return m ? m[2] : null;
  };
  test.each(['tide-pricing', 'pulse-pricing'].flatMap((b) => LANGS.map((l) => [b, l])))('%s %s', (base, l) => {
    const a = servicesAnswer(read(file(base, l)));
    expect(a).not.toBeNull();
    expect(a).toMatch(/\$\s?200\b|\b200 \$/);
    expect(a).toMatch(/€\s?200\b|\b200 €/);
    expect(a).toMatch(/\b50\b/);
    expect(a).toMatch(UPON[l]);
    expect(a).toMatch(/audit|auditoría|auditoria/i);
    expect(a).toMatch(/pilot|piloto/i);
    expect(a).not.toMatch(/\$\s?1[59]0\b|\b1[59]0 \$|15[,. ]?000|22[,. ]?500|7[,. ]?500|10[,. ]?000|20[,. ]?000|30[,. ]?000|\b900\b|\+\s?1[05]\s?%/);
  });
});

// Every vendor price on these pages was read on the vendor's own pricing page on
// 2026-11-06. A vendor or a figure not in this table may not appear; a vendor
// that is named must be linked to its own page; the read date must be stated.
const VENDORS = {
  'Retell AI': { url: 'https://www.retellai.com/pricing', figures: ['0.07', '0.31', '0.015'] },
  'Bland AI': { url: 'https://www.bland.ai/pricing', figures: ['0.14', '0.12', '299'] },
  Vapi: { url: 'https://vapi.ai/pricing', figures: ['0.05', '82', '129'] },
  ElevenLabs: { url: 'https://elevenlabs.io/pricing/api', figures: ['0.08'] },
  Twilio: { url: 'https://www.twilio.com/en-us/voice/pricing/us', figures: ['0.014', '1.15'] },
};
const UNCONFIRMED = /Synthflow|Air AI|Amazon Connect|Amazon Lex|Dialogflow|Conversational Agents|Realtime API|gpt-live/i;
const READ_ON = { en: /6 November 2026/, fr: /6 novembre 2026/, es: /6 de noviembre de 2026/, pt: /6 de novembro de 2026/ };
const voiceSection = (src) => {
  const m = src.match(/\n## [^\n]*(voice|vocaux|voz)[^\n]*\n([\s\S]*?)\{\{< faq >\}\}/i);
  return m ? m[2] : null;
};

describe.each(['tide-pricing', 'pulse-pricing'].flatMap((b) => LANGS.map((l) => [b, l])))('voice section, %s %s', (base, l) => {
  const v = voiceSection(read(file(base, l)));
  test('exists', () => expect(v).not.toBeNull());
  test('states the date the prices were read', () => expect(v).toMatch(READ_ON[l]));
  test('every vendor named is linked to its own pricing page, with its figures', () => {
    let named = 0;
    for (const [name, { url, figures }] of Object.entries(VENDORS)) {
      if (!v.includes(name)) continue;
      named++;
      expect([name, v.includes(`[${name}](${url})`)]).toEqual([name, true]);
    }
    expect(named).toBeGreaterThanOrEqual(3);
  });
  test('every per-minute or per-month decimal figure is a confirmed vendor price, or the phone-line sum', () => {
    const allowed = new Set(Object.values(VENDORS).flatMap((x) => x.figures).concat(['13.75']));
    const found = [...v.matchAll(/\b(0[.,]\d{2,3}|\d+[.,]\d{2})\b/g)].map((m) => m[1].replace(',', '.'));
    expect(found.length).toBeGreaterThan(0);
    expect(found.filter((x) => !allowed.has(x))).toEqual([]);
  });
  test('no vendor whose price was not confirmed', () => expect(v).not.toMatch(UNCONFIRMED));
  test('no margin language', () => expect(v).not.toMatch(/margin|marge|margen|75\s*%|90\s*%/i));
});

describe.each(LANGS)('TIDE sovereign voice carries no number, %s', (l) => {
  test('the last paragraph of the voice section has no figure', () => {
    const v = voiceSection(read(file('tide-pricing', l))).trim();
    const last = v.split(/\n\s*\n/).pop();
    expect(last).toMatch(/Enterprise/);
    expect(last).not.toMatch(/\d/);
  });
});

describe('the checks above can fail', () => {
  test('a stale price is caught', () => {
    expect('"price_monthly": "89"').toMatch(/\$\s?(75|89|249|149)\b|"89"/);
  });
  test('an unlinked vendor is caught', () => {
    const v = 'Retell AI lists $0.07, read on 6 November 2026.';
    expect(v.includes(`[Retell AI](${VENDORS['Retell AI'].url})`)).toBe(false);
  });
  test('an unconfirmed vendor is caught', () => expect('Synthflow').toMatch(UNCONFIRMED));
});
