const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const html = fs.readFileSync("/home/me/Documents/site/static/demo/index.html", "utf8");
const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });

const scriptContent = fs.readFileSync("/home/me/Documents/site/static/demo/app.js", "utf8");
const scriptEl = dom.window.document.createElement("script");
scriptEl.textContent = scriptContent;
dom.window.document.body.appendChild(scriptEl);

dom.window.eval("renderIncidentsList()");
console.log("Incidents count:", dom.window.document.getElementById("incidents-scroll-list").children.length);
