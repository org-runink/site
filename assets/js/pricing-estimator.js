/*
 * The FACE pricing estimator (layouts/shortcodes/pricing-estimator.html).
 *
 * WHAT IT IS. A calculator that turns the PUBLIC price rules into a monthly and
 * a yearly figure, and prints the formula beside every figure. It is an estimate,
 * not a quote, and it says so.
 *
 * WHERE THE NUMBERS COME FROM. Nowhere in this file. Every price, rate and cap is
 * read from the rules object the shortcode copies out of data/pricing.json, so the
 * calculator cannot drift from the licence cards: a jest test compares that file
 * with the cards in all four languages. There is no price literal below.
 *
 * WHAT IT NEVER SHOWS. Costs, margins, partner shares, hardware, onboarding and
 * consulting rates. They are not in data/pricing.json, so they cannot be here.
 *
 * MONEY IS WHOLE CENTS. Every figure is an integer number of cents, rounded the way
 * the billing library rounds (down for a percentage, up for a block of units), so
 * the page and an invoice agree to the cent.
 *
 * PROGRESSIVE ENHANCEMENT. The markup is inert and hidden until this file runs; a
 * <noscript> note points the reader to the licence cards, which carry the same
 * prices. Output is built with textContent, never innerHTML.
 */
(function () {
  'use strict';

  var UNITS_BLOCK = 100; // units are charged in blocks of 100

  function wholeNumber(v, min, max) {
    var n = Math.floor(Number(v));
    if (!isFinite(n) || n < min) n = min;
    if (max !== undefined && n > max) n = max;
    return n;
  }

  // Dollars typed by a person (may have cents) -> integer cents.
  function dollarsToCents(v) {
    var n = Number(v);
    if (!isFinite(n) || n < 0) return 0;
    return Math.round(n * 100);
  }

  // Which licence a team lands on, from the public rules.
  function tierFor(rules, seats, premises) {
    if (premises) return 'enterprise';
    return seats >= rules.dedicated.minSeats ? 'dedicated' : 'lite';
  }

  // Fee on ONE approved and confirmed fulfilment order: the rate clamped to its
  // public range, rounded down, never above the per-order cap.
  function provisioningFeeCents(rules, orderCents, rateBps) {
    var o = rules.outcome;
    if (orderCents <= 0) return 0;
    var bps = Math.min(Math.max(rateBps, o.provisioningMinBps), o.provisioningMaxBps);
    var fee = Math.floor((orderCents * bps) / 10000);
    return Math.min(fee, o.provisioningCapCentsPerOrder);
  }

  function claimsFeeCents(rules, recoveredCents) {
    if (recoveredCents <= 0) return 0;
    return Math.floor((recoveredCents * rules.outcome.claimsBps) / 10000);
  }

  // Extra units: pay as you go, or bought ahead for a month or a year.
  function extraUnitsCents(rules, extraUnits, how) {
    if (extraUnits <= 0) return 0;
    var blocks = Math.ceil(extraUnits / UNITS_BLOCK);
    var gross = blocks * rules.units.overageCentsPer100;
    var off = how === 'year' ? rules.units.prepaidYearOffPct : how === 'month' ? rules.units.prepaidMonthOffPct : 0;
    return Math.floor((gross * (100 - off)) / 100);
  }

  /*
   * compute(rules, input) -> { tier, lines, monthlyCents, yearlyCents, ... }
   *
   * Each line: { id, cents, vars, info }. `vars` fills the formula template the
   * copy carries for that id; `info` marks a line that is shown but is NOT part of
   * the total (the runner's cloud cost is paid to the reader's own cloud).
   */
  function compute(rules, input) {
    var seats = wholeNumber(input.seats, 1, 100000);
    var tier = tierFor(rules, seats, !!input.premises);
    var res = { tier: tier, seats: seats, lines: [], monthlyCents: 0, yearlyCents: 0 };

    if (tier === 'enterprise') return res; // priced with you: no figure is invented

    var yearly = input.cycle !== 'monthly';
    var seatCents;
    if (tier === 'lite') {
      seatCents = yearly ? rules.lite.seatYearlyCents : rules.lite.seatMonthlyCents;
    } else {
      yearly = true; // Dedicated is a yearly contract
      seatCents = rules.dedicated.seatYearlyCents;
    }
    res.cycle = yearly ? 'yearly' : 'monthly';
    res.lines.push({ id: 'seats', cents: seats * seatCents, vars: { seats: seats, price: seatCents } });

    if (input.seatsOnly) return finish(res);

    if (tier === 'lite') {
      var included = seats * rules.lite.unitsPerSeat;
      var used = wholeNumber(input.units, 0);
      var extra = Math.max(0, used - included);
      var how = input.unitsPay === 'month' || input.unitsPay === 'year' ? input.unitsPay : 'payg';
      res.lines.push({
        id: extra > 0 ? 'units_' + how : 'units_within',
        cents: extraUnitsCents(rules, extra, how),
        vars: {
          used: used, included: included, extra: extra,
          blocks: Math.ceil(extra / UNITS_BLOCK), rate: rules.units.overageCentsPer100,
          off: how === 'year' ? rules.units.prepaidYearOffPct : rules.units.prepaidMonthOffPct
        }
      });
    } else {
      var cost = dollarsToCents(input.runnerCost);
      res.lines.push({ id: 'units_unlimited', cents: 0, vars: {} });
      res.lines.push({
        id: 'runner', cents: Math.floor((cost * rules.dedicated.runnerFeeBps) / 10000),
        vars: { bps: rules.dedicated.runnerFeeBps, cost: cost }
      });
      res.lines.push({ id: 'runner_cloud', cents: cost, vars: { cost: cost }, info: true });
    }

    var recovered = dollarsToCents(input.claims);
    res.recoveredCents = recovered;
    res.lines.push({
      id: 'claims', cents: claimsFeeCents(rules, recovered),
      vars: { bps: rules.outcome.claimsBps, amount: recovered }
    });

    var orders = wholeNumber(input.orders, 0);
    var avg = dollarsToCents(input.orderAvg);
    var rateBps = Math.round(Number(input.ratePct) * 100);
    if (!isFinite(rateBps)) rateBps = rules.outcome.provisioningMaxBps;
    rateBps = Math.min(Math.max(rateBps, rules.outcome.provisioningMinBps), rules.outcome.provisioningMaxBps);
    var raw = Math.floor((avg * rateBps) / 10000);
    var each = provisioningFeeCents(rules, avg, rateBps);
    res.lines.push({
      id: 'orders', cents: orders * each,
      vars: { orders: orders, avg: avg, bps: rateBps, raw: raw, cap: rules.outcome.provisioningCapCentsPerOrder, each: each }
    });
    return finish(res);
  }

  function finish(res) {
    var sum = 0;
    res.lines.forEach(function (l) { if (!l.info) sum += l.cents; });
    res.monthlyCents = sum;
    res.yearlyCents = sum * 12;
    if (res.recoveredCents !== undefined) {
      res.netMonthlyCents = res.recoveredCents - sum;
      res.netYearlyCents = res.netMonthlyCents * 12;
    }
    return res;
  }

  // ---- formatting ---------------------------------------------------------

  function money(cents, locale, currency) {
    var whole = cents % 100 === 0;
    try {
      return new Intl.NumberFormat(locale, {
        style: 'currency', currency: currency,
        minimumFractionDigits: whole ? 0 : 2, maximumFractionDigits: 2
      }).format(cents / 100);
    } catch (e) {
      return (cents / 100).toFixed(whole ? 0 : 2) + ' ' + currency;
    }
  }

  function plain(n, locale) {
    try { return new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(n); } catch (e) { return String(n); }
  }

  function percent(bps, locale, pattern) {
    return String(pattern || '{n}%').replace('{n}', plain(bps / 100, locale));
  }

  function fill(tpl, vars) {
    return String(tpl).replace(/\{(\w+)\}/g, function (m, k) { return k in vars ? vars[k] : m; });
  }

  // Turn a line's numeric vars into display strings for its formula template.
  function display(line, cfg) {
    var L = cfg.locale, C = cfg.rules.currency, v = line.vars, out = {};
    var cents = ['price', 'cost', 'amount', 'avg', 'raw', 'cap', 'each', 'rate'];
    Object.keys(v).forEach(function (k) {
      if (cents.indexOf(k) >= 0) out[k] = money(v[k], L, C);
      else if (k === 'bps') out.pct = percent(v[k], L, cfg.copy.pct);
      else if (k === 'off') out.off = percent(v[k] * 100, L, cfg.copy.pct);
      else out[k] = plain(v[k], L);
    });
    return out;
  }

  // ---- DOM ---------------------------------------------------------------

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function row(tbody, label, amount, formula, strong) {
    var tr = el('tr', strong ? 'font-bold' : '');
    var th = el('th', 'py-2 pr-4 text-left align-top font-semibold text-ink', label);
    th.setAttribute('scope', 'row');
    tr.appendChild(th);
    tr.appendChild(el('td', 'py-2 pr-4 align-top whitespace-nowrap text-ink', amount));
    tr.appendChild(el('td', 'py-2 align-top text-ink-2 text-sm', formula || ''));
    tbody.appendChild(tr);
  }

  var FIELD_VISIBILITY = {
    lead: ['seats', 'premises', 'cycle'],
    prospect: ['seats', 'premises', 'cycle', 'units', 'unitsPay', 'runner', 'claims', 'orders', 'orderAvg', 'rate'],
    customer: ['seats', 'premises', 'cycle', 'units', 'unitsPay', 'runner', 'claims', 'orders', 'orderAvg', 'rate'],
    market: ['seats', 'premises', 'cycle', 'units', 'unitsPay', 'runner', 'claims', 'orders', 'orderAvg', 'rate']
  };

  function readInput(root, scenario) {
    function val(name) {
      var f = root.querySelector('[name="' + name + '"]');
      return f ? f.value : '';
    }
    var cycleEl = root.querySelector('[name="cycle"]:checked');
    var payEl = root.querySelector('[name="unitsPay"]:checked');
    var prem = root.querySelector('[name="premises"]');
    return {
      seats: val('seats'),
      premises: !!(prem && prem.checked),
      cycle: cycleEl ? cycleEl.value : 'yearly',
      units: val('units'),
      unitsPay: payEl ? payEl.value : 'payg',
      runnerCost: val('runner'),
      claims: val('claims'),
      orders: val('orders'),
      orderAvg: val('orderAvg'),
      ratePct: val('rate'),
      seatsOnly: scenario === 'lead'
    };
  }

  function render(root, cfg) {
    var scenarioEl = root.querySelector('[name="scenario"]:checked');
    var scenario = scenarioEl ? scenarioEl.value : 'lead';
    var visible = FIELD_VISIBILITY[scenario] || FIELD_VISIBILITY.lead;
    var input = readInput(root, scenario);
    var res = compute(cfg.rules, input);

    // Show only the fields this scenario and this licence use.
    var tier = res.tier;
    Array.prototype.forEach.call(root.querySelectorAll('[data-field]'), function (box) {
      var name = box.getAttribute('data-field');
      var on = visible.indexOf(name) >= 0;
      if (tier === 'enterprise' && name !== 'seats' && name !== 'premises') on = false;
      if (tier === 'dedicated' && (name === 'units' || name === 'unitsPay' || name === 'cycle')) on = false;
      if (tier === 'lite' && name === 'runner') on = false;
      box.hidden = !on;
    });
    var payBox = root.querySelector('[data-field="unitsPay"]');
    var unitsBox = root.querySelector('[data-field="units"]');
    if (payBox && unitsBox && unitsBox.hidden) payBox.hidden = true;

    root.querySelector('[data-est-seatrange]').textContent = fill(cfg.copy.seatRange, {
      liteMax: cfg.rules.lite.maxSeats, dedMin: cfg.rules.dedicated.minSeats
    });

    var tierName = cfg.copy['tier_' + tier];
    root.querySelector('[data-est-tier]').textContent = fill(cfg.copy.tierLine, { tier: tierName });

    var tbody = root.querySelector('[data-est-rows]');
    while (tbody.firstChild) tbody.removeChild(tbody.firstChild);
    var L = cfg.locale, C = cfg.rules.currency;
    var summary = root.querySelector('[data-est-summary]');
    var notes = root.querySelector('[data-est-notes]');
    while (notes.firstChild) notes.removeChild(notes.firstChild);
    var net = root.querySelector('[data-est-net]');
    while (net.firstChild) net.removeChild(net.firstChild);

    if (tier === 'enterprise') {
      row(tbody, cfg.copy.enterpriseLabel, cfg.copy.pricedWithYou, cfg.copy.enterpriseFormula);
      summary.textContent = cfg.copy.enterpriseSummary;
    } else {
      res.lines.forEach(function (line) {
        var label = cfg.copy['line_' + line.id];
        var amount = line.id === 'units_unlimited' ? cfg.copy.unlimited : money(line.cents, L, C);
        var formula = fill(cfg.copy['f_' + line.id], display(line, cfg));
        if (line.info) formula += ' ' + cfg.copy.notInTotal;
        row(tbody, label, amount, formula, false);
      });
      row(tbody, cfg.copy.totalMonthly, money(res.monthlyCents, L, C), cfg.copy.f_totalMonthly, true);
      row(tbody, cfg.copy.totalYearly, money(res.yearlyCents, L, C), cfg.copy.f_totalYearly, true);
      summary.textContent = fill(cfg.copy.summary, {
        monthly: money(res.monthlyCents, L, C), yearly: money(res.yearlyCents, L, C)
      });
      if (scenario === 'prospect') {
        var t = el('table', 'w-full text-left border-collapse');
        var cap = el('caption', 'text-left text-xs font-bold uppercase tracking-widest text-stone-500 pb-2', cfg.copy.netTitle);
        t.appendChild(cap);
        var tb = el('tbody');
        row(tb, cfg.copy.netRecovery, money(res.recoveredCents, L, C), cfg.copy.f_netRecovery);
        row(tb, cfg.copy.netFees, money(res.monthlyCents, L, C), cfg.copy.f_netFees);
        row(tb, cfg.copy.netMonthly, money(res.netMonthlyCents, L, C), cfg.copy.f_netMonthly, true);
        row(tb, cfg.copy.netYearly, money(res.netYearlyCents, L, C), cfg.copy.f_netYearly, true);
        t.appendChild(tb);
        net.appendChild(t);
        net.appendChild(el('p', 'mt-2 text-sm text-ink-2', cfg.copy.netNote));
      }
    }
    if (scenario === 'market') {
      notes.appendChild(el('p', 'text-sm text-ink-2', cfg.copy.marketSeat));
      notes.appendChild(el('p', 'text-sm text-ink-2', cfg.copy.marketRunner));
    }
    if (scenario === 'customer') {
      notes.appendChild(el('p', 'text-sm text-ink-2', cfg.copy.customerNote));
    }
    return res;
  }

  function init(root) {
    if (!root || root.getAttribute('data-est-ready')) return null;
    var cfgEl = root.querySelector('script[data-est-config]');
    if (!cfgEl) return null;
    var cfg;
    try { cfg = JSON.parse(cfgEl.textContent); } catch (e) { return null; }
    var run = function () { render(root, cfg); };
    root.addEventListener('submit', function (e) { e.preventDefault(); });
    root.addEventListener('input', run);
    root.addEventListener('change', run);
    root.setAttribute('data-est-ready', 'true');
    var live = root.querySelector('[data-est-app]');
    if (live) live.hidden = false;
    run();
    return cfg;
  }

  function boot() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-pricing-estimator]'), init);
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
    else boot();
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      compute: compute, provisioningFeeCents: provisioningFeeCents, claimsFeeCents: claimsFeeCents,
      extraUnitsCents: extraUnitsCents, tierFor: tierFor, money: money, fill: fill, init: init, render: render
    };
  }
})();
