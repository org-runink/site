const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const html = fs.readFileSync("/home/me/Documents/site/static/demo/index.html", "utf8");
const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("jsdomError", error => {
  console.error("JSDOM Error:", error.stack || error);
});
virtualConsole.on("error", error => {
  console.error("Console Error:", error);
});
virtualConsole.on("log", log => {
  console.log("Console Log:", log);
});
const dom = new JSDOM(html, { runScripts: "dangerously", virtualConsole });
setTimeout(() => {
  console.log("Done.");
  process.exit(0);
}, 500);
