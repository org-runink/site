import os

file_path = '/home/me/Documents/site/static/demo/app.js'
with open(file_path, 'r') as f:
    content = f.read()

# We want to replace the runNextFetchStepSimulator and startKickbacksTypingEffect functions.
# The functions start around: function runNextFetchStepSimulator() {
# and end at the end of startKickbacksTypingEffect()

import re

pattern = re.compile(r"function runNextFetchStepSimulator\(\)\s*\{.*?function startKickbacksTypingEffect\(\)\s*\{.*?\}\n\s*\}\n", re.DOTALL)

new_logic = """function runNextFetchStepSimulator() {
  if (!fetchActive) return;
  if (fetchStep > 8) {
    fetchActive = false;
    showToast("Ingestion run complete. Swarm compiled and pushed to Twin Cockpit.", true);
    const historyList = document.getElementById("execution-history-list");
    const item = document.createElement("div");
    item.className = "list-item-wrapper";
    item.style.backgroundColor = "rgba(34, 197, 94, 0.05)";
    // Create a unique ID for this execution log to bind the modal to
    const execId = 'hist-' + Date.now();
    item.innerHTML = `
      <div class="list-item-title" style="color:#22C55E;">Intelligent Swarm Audit Run - SUCCESS</div>
      <div class="list-item-time">Just Now</div>
      <div style="font-size:0.65rem; color:var(--accent-orange-light); cursor:pointer; font-weight:700; margin-top:4px;" onclick="showDetailsModal('${execId}')">View Detailed Logs</div>
    `;
    
    // Dynamically insert details for this run into our REMEDIATION_DETAILS constant
    if (typeof REMEDIATION_DETAILS !== 'undefined') {
      REMEDIATION_DETAILS[execId] = {
        title: 'Fetch History Logs',
        content: '[ActionTwinQueue:\\n  QueuedAction: { action_id: 1, type: "CLAIMS_RECOVERY" }\\n  QueuedAction: { action_id: 3, type: "HAZMAT_LOCK" }\\n]\\n\\n[DocumentOCR:\\n  DocType: "BillOfLading"\\n  BOL_Number: "AL-773410"\\n]',
        format: 'code'
      };
    }
    
    if (historyList) historyList.insertBefore(item, historyList.firstChild);

    setTimeout(() => {
      document.getElementById("fetch-pipeline-overlay").style.display = "none";
    }, 1000);
    return;
  }

  const stepInfo = fetchStepDetails[fetchStep];
  
  // Parallel Agents Logic
  const console1 = document.getElementById("sim-console-text-1");
  const console2 = document.getElementById("sim-console-text-2");
  const console3 = document.getElementById("sim-console-text-3");
  
  if (console1) console1.innerHTML += `> ${stepInfo.title}\\n`;
  if (console2 && fetchStep % 2 === 0) console2.innerHTML += `> Verifying policy constraints...\\n`;
  if (console3 && fetchStep % 3 === 0) console3.innerHTML += `> Syncing telemetry context graph...\\n`;
  
  let logIdx = 0;
  function printLogLine() {
    if (!fetchActive) return;
    if (logIdx < stepInfo.logs.length) {
      if (console1) {
        console1.innerHTML += stepInfo.logs[logIdx] + "\\n";
        console1.scrollTop = console1.scrollHeight;
      }
      if (console2 && logIdx % 2 === 0) {
        console2.innerHTML += "Policy DB Ok. \\n";
        console2.scrollTop = console2.scrollHeight;
      }
      if (console3 && logIdx % 3 === 0) {
        console3.innerHTML += "Graph node merged.\\n";
        console3.scrollTop = console3.scrollHeight;
      }
      logIdx++;
      setTimeout(printLogLine, 250);
    } else {
      setTimeout(() => {
        fetchStep++;
        runNextFetchStepSimulator();
      }, 700);
    }
  }

  printLogLine();
}

let kickbacksCarouselInterval;
function startKickbacksCarousel() {
  const target = document.getElementById("kickbacks-carousel-target");
  if (!target) return;
  
  const messages = [
    "Your Actionable Twin detected 2 anomalies across 847 telemetry signals.",
    "Auto-claim filed via BOL reconciliation pipeline. $12,400 discrepancy resolved.",
    "Compliance scan: 98.2% PII masking accuracy. 1 new exposure flagged.",
    "3 remediation workflows ready for dispatch — saving 4.2 hours."
  ];
  
  let msgIdx = 0;
  target.textContent = messages[msgIdx];
  
  clearInterval(kickbacksCarouselInterval);
  kickbacksCarouselInterval = setInterval(() => {
    target.style.opacity = 0;
    setTimeout(() => {
      msgIdx = (msgIdx + 1) % messages.length;
      target.textContent = messages[msgIdx];
      target.style.opacity = 1;
    }, 500);
  }, 4000);
}
"""

if pattern.search(content):
    new_content = pattern.sub(new_logic, content)
    with open(file_path, 'w') as f:
        f.write(new_content)
    print("Replaced successfully")
else:
    print("Pattern not found!")
