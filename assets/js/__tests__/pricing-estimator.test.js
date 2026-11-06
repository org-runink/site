/**
 * @jest-environment jsdom
 *
 * The pricing estimator: the arithmetic, the one-place-for-prices guarantee, the
 * four languages, and the rule that no cost, margin, partner share, hardware,
 * onboarding or consulting figure can reach the page.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..', '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const rules = (() => {
  const d = JSON.parse(read('data/pricing.json'));
  return { currency: d.currency, lite: d.lite, dedicated: d.dedicated, units: d.units, outcome: d.outcome };
})();

const est = require('../pricing-estimator.js');

const LANGS = { en: 'content/pricing.md', fr: 'content/pricing.fr.md', es: 'content/pricing.es.md', pt: 'content/pricing.pt.md' };

function estimatorCopy(file) {
  const src = read(file);
  const m = src.match(/\{\{< pricing-estimator >\}\}\s*([\s\S]*?)\s*\{\{< \/pricing-estimator >\}\}/);
  if (!m) throw new Error(file + ' has no pricing-estimator block');
  return JSON.parse(m[1]).copy;
}

const base = { seats: 5, cycle: 'yearly', units: 0, unitsPay: 'payg', runnerCost: 0, claims: 0, orders: 0, orderAvg: 0, ratePct: 3 };
const line = (res, id) => res.lines.find((l) => l.id === id);

describe('who lands on which licence', () => {
  test('1 to 9 people are Lite, 10 and over are Dedicated, premises is Enterprise', () => {
    expect(est.compute(rules, { ...base, seats: 1 }).tier).toBe('lite');
    expect(est.compute(rules, { ...base, seats: 9 }).tier).toBe('lite');
    expect(est.compute(rules, { ...base, seats: 10 }).tier).toBe('dedicated');
    expect(est.compute(rules, { ...base, seats: 4, premises: true }).tier).toBe('enterprise');
  });
  test('Enterprise is priced with you: no figure is produced', () => {
    const r = est.compute(rules, { ...base, seats: 50, premises: true, claims: 1000, orders: 5, orderAvg: 1000 });
    expect(r.lines).toEqual([]);
    expect(r.monthlyCents).toBe(0);
    expect(r.yearlyCents).toBe(0);
  });
});

describe('seats', () => {
  test('Lite yearly is $85 a person, monthly $99', () => {
    expect(est.compute(rules, { ...base, seats: 5, cycle: 'yearly' }).monthlyCents).toBe(5 * 8500);
    expect(est.compute(rules, { ...base, seats: 5, cycle: 'monthly' }).monthlyCents).toBe(5 * 9900);
  });
  test('a yearly figure is twelve monthly ones', () => {
    const r = est.compute(rules, { ...base, seats: 3 });
    expect(r.yearlyCents).toBe(r.monthlyCents * 12);
  });
  test('Dedicated is $165 a person on a yearly contract whatever cycle is asked', () => {
    expect(est.compute(rules, { ...base, seats: 10, cycle: 'monthly' }).monthlyCents).toBe(10 * 16500);
  });
  test('nonsense input is clamped, never NaN', () => {
    const r = est.compute(rules, { ...base, seats: 'abc', units: -5, claims: 'x', orders: -2, orderAvg: 'y' });
    expect(Number.isFinite(r.monthlyCents)).toBe(true);
    expect(r.seats).toBe(1);
  });
});

describe('units', () => {
  // 5 people include 5 x 18,000 = 90,000 units.
  test('within the allowance costs nothing extra', () => {
    expect(line(est.compute(rules, { ...base, units: 90000 }), 'units_within').cents).toBe(0);
  });
  test('as you go is $0.12 per started block of 100', () => {
    expect(line(est.compute(rules, { ...base, units: 100000 }), 'units_payg').cents).toBe(100 * 12);
    expect(line(est.compute(rules, { ...base, units: 90001 }), 'units_payg').cents).toBe(12);
  });
  test('bought ahead is 5% less for a month and 10% less for a year', () => {
    expect(line(est.compute(rules, { ...base, units: 100000, unitsPay: 'month' }), 'units_month').cents).toBe(1140);
    expect(line(est.compute(rules, { ...base, units: 100000, unitsPay: 'year' }), 'units_year').cents).toBe(1080);
  });
});

describe('Dedicated runner fee', () => {
  test('is 1.5% of the runners cloud cost, and the cloud cost itself is not in the total', () => {
    const r = est.compute(rules, { ...base, seats: 10, runnerCost: 5000 });
    expect(line(r, 'runner').cents).toBe(7500); // 1.5% of $5,000
    expect(line(r, 'runner_cloud').info).toBe(true);
    expect(r.monthlyCents).toBe(10 * 16500 + 7500);
  });
  test('no runner fee on Lite', () => {
    expect(line(est.compute(rules, { ...base, runnerCost: 5000 }), 'runner')).toBeUndefined();
  });
});

describe('outcome fees', () => {
  test('claims recovery is 20%', () => {
    expect(line(est.compute(rules, { ...base, claims: 500 }), 'claims').cents).toBe(10000);
  });
  test('a $10,000 order at 1% is $100, uncapped', () => {
    expect(est.provisioningFeeCents(rules, 1000000, 100)).toBe(10000);
  });
  test('a $10,000 order at 3% is $300 before the cap and $150 after it', () => {
    expect(est.provisioningFeeCents(rules, 1000000, 300)).toBe(15000);
  });
  test('the cap is $150 per order: $5,000 at 3% is exactly $150, a larger order stays there', () => {
    expect(est.provisioningFeeCents(rules, 500000, 300)).toBe(15000);
    expect(est.provisioningFeeCents(rules, 5000000, 300)).toBe(15000);
  });
  test('below the cap nothing changes: $1,000 at 2% is $20', () => {
    expect(est.provisioningFeeCents(rules, 100000, 200)).toBe(2000);
  });
  test('the rate is held to 1%..3%', () => {
    expect(est.provisioningFeeCents(rules, 100000, 50)).toBe(1000);
    expect(est.provisioningFeeCents(rules, 100000, 500)).toBe(3000);
  });
  test('the cap applies per order, not to the month', () => {
    const r = est.compute(rules, { ...base, orders: 4, orderAvg: 10000, ratePct: 3 });
    expect(line(r, 'orders').cents).toBe(4 * 15000);
  });
  test('no orders, no fee', () => {
    expect(line(est.compute(rules, { ...base, orders: 0, orderAvg: 9999 }), 'orders').cents).toBe(0);
  });
});

describe('scenarios', () => {
  test('a lead sees seats only', () => {
    const r = est.compute(rules, { ...base, seatsOnly: true, claims: 999, orders: 9, orderAvg: 99 });
    expect(r.lines.map((l) => l.id)).toEqual(['seats']);
  });
  test('the net line is what was typed minus all the fees', () => {
    const r = est.compute(rules, { ...base, claims: 10000 });
    expect(r.recoveredCents).toBe(1000000);
    expect(r.netMonthlyCents).toBe(1000000 - r.monthlyCents);
    expect(r.netYearlyCents).toBe(r.netMonthlyCents * 12);
  });
});

describe('prices live in one place', () => {
  const cents = (s) => Number(s) * 100;
  test.each(Object.entries(LANGS))('the %s cards agree with data/pricing.json', (lang, file) => {
    const src = read(file);
    const monthly = [...src.matchAll(/"price_monthly": "([^"]+)"/g)].map((m) => m[1]);
    const yearly = [...src.matchAll(/"price_yearly": "([^"]+)"/g)].map((m) => m[1]);
    expect(cents(monthly[0])).toBe(rules.lite.seatMonthlyCents);
    expect(cents(yearly[0])).toBe(rules.lite.seatYearlyCents);
    expect(cents(yearly[1])).toBe(rules.dedicated.seatYearlyCents);
    expect(cents(monthly[1])).toBe(rules.dedicated.seatYearlyCents);
    expect(src).toMatch(/18[ ,.  ]?000/);
    expect(src).toMatch(/\b900\b/);
    // The per-order cap on the cards is the one in the data, and the old one is gone.
    const cap = rules.outcome.provisioningCapCentsPerOrder / 100;
    expect(src).toContain(String(cap));
    expect(src).not.toMatch(/\$50\b|\b50 \$/);
  });
  test('the licence page states the same provisioning range and per-order cap as the data', () => {
    const lic = read('content/license.md');
    const o = rules.outcome;
    expect(lic).toContain(`${o.provisioningMinBps / 100}% to ${o.provisioningMaxBps / 100}%`);
    expect(lic).toContain(`$${o.provisioningCapCentsPerOrder / 100} per order`);
    expect(lic).toMatch(/approved and that are confirmed/);
    expect(lic).not.toMatch(/a 3% commission/);
  });
  test('the data holds the owner figures', () => {
    expect(rules.outcome.provisioningCapCentsPerOrder).toBe(15000);
    expect(rules.outcome.provisioningMinBps).toBe(100);
    expect(rules.outcome.provisioningMaxBps).toBe(300);
    expect(rules.outcome.claimsBps).toBe(2000);
    expect(rules.dedicated.runnerFeeBps).toBe(150);
    expect(rules.units.overageCentsPer100).toBe(12);
    expect(rules.units.prepaidMonthOffPct).toBe(5);
    expect(rules.units.prepaidYearOffPct).toBe(10);
    expect(rules.lite.seatYearlyCents).toBe(8500);
    expect(rules.lite.seatMonthlyCents).toBe(9900);
    expect(rules.dedicated.seatYearlyCents).toBe(16500);
  });
  test('data/pricing.json carries no cost, margin, partner, hardware, onboarding or consulting field', () => {
    const d = JSON.parse(read('data/pricing.json'));
    delete d._note;
    expect(Object.keys(d).sort()).toEqual(['currency', 'dedicated', 'lite', 'outcome', 'units']);
    expect(JSON.stringify(d)).not.toMatch(/cost|margin|partner|hardware|onboarding|consult|share|split/i);
  });
  test('the script carries no price literal of its own', () => {
    const js = read('assets/js/pricing-estimator.js').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
    for (const lit of ['8500', '9900', '16500', '15000', '18000', '2000']) expect(js).not.toContain(lit);
  });
});

describe('four languages', () => {
  const copies = Object.fromEntries(Object.entries(LANGS).map(([l, f]) => [l, estimatorCopy(f)]));
  const keys = (o) => Object.keys(o).sort();
  test.each(['fr', 'es', 'pt'])('%s has exactly the keys English has', (l) => {
    expect(keys(copies[l])).toEqual(keys(copies.en));
    expect(copies[l].scenarios.map((s) => s.id)).toEqual(copies.en.scenarios.map((s) => s.id));
  });
  test.each(Object.keys(LANGS))('%s carries every key the script reads', (l) => {
    const c = copies[l];
    for (const id of ['seats', 'units_within', 'units_payg', 'units_month', 'units_year', 'units_unlimited', 'runner', 'runner_cloud', 'claims', 'orders']) {
      expect(c['line_' + id]).toBeTruthy();
      expect(c['f_' + id]).toBeTruthy();
    }
    for (const k of ['summary', 'pct', 'tier_lite', 'tier_dedicated', 'tier_enterprise', 'tierLine', 'seatRange', 'currencyNote', 'notice']) {
      expect(c[k]).toBeTruthy();
    }
  });
  test.each(Object.keys(LANGS))('%s templates use the same tokens as English', (l) => {
    const tokens = (s) => (String(s).match(/\{\w+\}/g) || []).sort().join();
    for (const k of Object.keys(copies.en)) {
      if (typeof copies.en[k] === 'string') expect([l, k, tokens(copies[l][k])]).toEqual([l, k, tokens(copies.en[k])]);
    }
  });
  test.each(Object.keys(LANGS))('%s says estimate-not-quote and the regional currency line', (l) => {
    expect(copies[l].notice.length).toBeGreaterThan(10);
    expect(copies[l].currencyNote).toMatch(/USD|\$|dollar|dólar|dollars/i);
  });
  test.each(Object.keys(LANGS))('%s shows no cost, margin, partner share, hardware, onboarding, consulting or managed-service share', (l) => {
    const text = JSON.stringify(copies[l]) + JSON.stringify(rules);
    expect(text).not.toMatch(/margin|marge|margen|hardware|matériel|onboarding|consulting|conseil|consultor|partner|partenaire|socio|parceir|75\s*%|90\s*%|landscape|audit/i);
  });
});

// Owner, 2026-11-05 (billing business model §9b D6): the services FAQ shows the
// landscape audit and roadmap first at $200 or EUR 200 an hour (2026-11-06) in 50-hour blocks,
// and the pilot, onboarding and consulting, support and updates as "Upon request".
// No fixed services price (pilot, onboarding, support uplift, retainer, block total)
// may reach the page.
describe('the services FAQ', () => {
  const UPON = { en: /Upon request/, fr: /sur demande/i, es: /bajo petición/i, pt: /sob consulta/i };
  const servicesAnswer = (file) => {
    const m = read(file).match(/"question": "[^"]*\b(services|servicios|serviços)\b[^"]*",\s*"answer": "((?:[^"\\]|\\.)*)"/);
    if (!m) throw new Error(file + ' has no services question in its FAQ');
    return m[2];
  };
  test.each(Object.entries(LANGS))('%s: audit first, the hourly rate in both currencies, the rest upon request', (lang, file) => {
    const a = servicesAnswer(file);
    expect(a).toMatch(/\$\s?200\b|\b200 \$/);
    expect(a).toMatch(/€\s?200\b|\b200 €/);
    expect(a).not.toMatch(/\$\s?1[59]0\b|\b1[59]0 \$|€\s?1[59]0\b|\b1[59]0 €/);
    expect(a).toMatch(/\b50\b/);
    expect(a).toMatch(UPON[lang]);
    expect(a).toMatch(/audit|auditoría|auditoria/i);
    expect(a).toMatch(/pilot|piloto/i);
  });
  test.each(Object.entries(LANGS))('%s: no fixed price for pilot, onboarding, support or retainers', (lang, file) => {
    const a = servicesAnswer(file);
    expect(a).not.toMatch(/15[,. ]?000|22[,. ]?500|7[,. ]?500|\b750\b|1[,. ]?500|3[,. ]?000|10[,. ]?000|20[,. ]?000|30[,. ]?000|2[,. ]?000|4[,. ]?000|\b900\b|\+\s?1[05]\s?%|\b1[05]\s?%/);
  });
});

describe('the shortcode and the script agree on names', () => {
  const html = read('layouts/shortcodes/pricing-estimator.html');
  // The scenario radios choose which fields show, so they are never a
  // data-field box themselves: a box would be hidden by the visibility walk.
  test('has the scenario control, always visible', () => {
    expect(html).toContain('name="scenario"');
    expect(html).not.toContain('data-field="scenario"');
  });
  test.each(['seats', 'premises', 'cycle', 'units', 'unitsPay', 'runner', 'claims', 'orders', 'orderAvg', 'rate'])('has the %s control', (n) => {
    expect(html).toContain('name="' + n + '"');
    expect(html).toContain('data-field="' + n + '"');
  });
  test.each(['data-est-rows', 'data-est-summary', 'data-est-tier', 'data-est-notes', 'data-est-net', 'data-est-seatrange', 'data-est-app', 'data-est-config'])('has %s', (a) => {
    expect(html).toContain(a);
  });
  test('reads data/pricing.json and loads no third-party script', () => {
    expect(html).toContain('site.Data.pricing');
    expect(html).not.toMatch(/src="https?:/);
  });
  test('the config block is emitted as JSON, not as a JS-quoted string', () => {
    // html/template treats an application/json script as JavaScript: a safeHTML value
    // there is re-encoded as one quoted string, and JSON.parse returns a string.
    expect(html).toContain('{{ $cfg | jsonify | safeJS }}</script>');
    expect(html).not.toContain('jsonify | safeHTML');
  });
});

describe('the rendered widget', () => {
  function mount(lang) {
    const names = ['seats', 'units', 'runner', 'claims', 'orders', 'orderAvg', 'rate'];
    document.body.innerHTML = `
      <section data-pricing-estimator>
        <div data-est-app hidden>
          <form>
            ${['lead', 'prospect', 'customer', 'market'].map((s, i) => `<input type="radio" name="scenario" value="${s}" ${i === 0 ? 'checked' : ''}>`).join('')}
            ${names.map((n) => `<div data-field="${n}"><input name="${n}" value="${n === 'seats' ? 5 : n === 'rate' ? 3 : 0}"></div>`).join('')}
            <div data-field="premises"><input type="checkbox" name="premises"></div>
            <div data-field="cycle"><input type="radio" name="cycle" value="yearly" checked><input type="radio" name="cycle" value="monthly"></div>
            <div data-field="unitsPay"><input type="radio" name="unitsPay" value="payg" checked><input type="radio" name="unitsPay" value="month"><input type="radio" name="unitsPay" value="year"></div>
          </form>
          <p data-est-seatrange></p><p data-est-tier></p><p data-est-summary></p>
          <table><tbody data-est-rows></tbody></table>
          <div data-est-net></div><div data-est-notes></div>
        </div>
        <script type="application/json" data-est-config></script>
      </section>`;
    const root = document.querySelector('[data-pricing-estimator]');
    root.querySelector('[data-est-config]').textContent = JSON.stringify({
      rules, copy: estimatorCopy(LANGS[lang]), locale: { en: 'en-US', fr: 'fr-FR', es: 'es-ES', pt: 'pt-BR' }[lang]
    });
    return root;
  }
  const set = (root, name, v) => {
    const f = root.querySelector(`[name="${name}"]`);
    f.value = v;
    f.dispatchEvent(new Event('input', { bubbles: true }));
  };
  const pick = (root, name, v) => {
    const f = root.querySelector(`[name="${name}"][value="${v}"]`);
    f.checked = true;
    f.dispatchEvent(new Event('change', { bubbles: true }));
  };
  const text = (root) => root.querySelector('[data-est-rows]').textContent;

  test('the form appears once the script has run and shows a formula beside every line', () => {
    const root = mount('en');
    expect(root.querySelector('[data-est-app]').hidden).toBe(true);
    est.init(root);
    expect(root.querySelector('[data-est-app]').hidden).toBe(false);
    const rows = root.querySelectorAll('[data-est-rows] tr');
    expect(rows.length).toBeGreaterThan(0);
    rows.forEach((tr) => expect(tr.children[2].textContent.length).toBeGreaterThan(3));
    expect(root.querySelector('[data-est-summary]').textContent).toContain('$425');
  });

  test('a customer checking a bill gets the invoice lines', () => {
    const root = mount('en');
    est.init(root);
    pick(root, 'scenario', 'customer');
    set(root, 'seats', 12);
    set(root, 'runner', 2000);
    set(root, 'claims', 1000);
    set(root, 'orders', 2);
    set(root, 'orderAvg', 10000);
    const t = text(root);
    expect(t).toContain('$1,980'); // 12 x $165
    expect(t).toContain('$30'); // 1.5% of $2,000 runner cloud cost
    expect(t).toContain('$200'); // 20% of $1,000
    expect(t).toContain('$300'); // two orders at the $150 cap
  });

  test('a prospect sees the net line, nobody else does', () => {
    const root = mount('en');
    est.init(root);
    pick(root, 'scenario', 'prospect');
    set(root, 'claims', 1000);
    expect(root.querySelector('[data-est-net]').textContent).toContain('Net a month');
    pick(root, 'scenario', 'customer');
    expect(root.querySelector('[data-est-net]').textContent).toBe('');
  });

  test('Google Cloud Marketplace shows where it is billed and no share of anyone', () => {
    const root = mount('en');
    est.init(root);
    pick(root, 'scenario', 'market');
    const notes = root.querySelector('[data-est-notes]').textContent;
    expect(notes).toContain('Google Cloud');
    expect(notes).not.toMatch(/share|margin|%/i);
  });

  test('Enterprise prints "Priced with you" and no amount', () => {
    const root = mount('en');
    est.init(root);
    root.querySelector('[name="premises"]').checked = true;
    root.querySelector('[name="premises"]').dispatchEvent(new Event('change', { bubbles: true }));
    expect(text(root)).toContain('Priced with you');
    expect(text(root)).not.toMatch(/\$\d/);
  });

  test.each(['fr', 'es', 'pt'])('%s formats the figures for its locale', (l) => {
    const root = mount(l);
    est.init(root);
    set(root, 'seats', 12);
    set(root, 'runner', 2000);
    pick(root, 'scenario', 'customer');
    expect(text(root)).toMatch(/1[\s  .]?980/);
  });
});
