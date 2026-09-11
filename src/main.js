import "@fontsource/dm-mono/latin-300.css";
import "@fontsource/dm-mono/latin-400.css";
import "@fontsource/dm-mono/latin-500.css";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/manrope/latin-700.css";
import "@fontsource/newsreader/latin-300-italic.css";
import "@fontsource/newsreader/latin-400-italic.css";
import logoUrl from "./logo.svg";
import "./styles.css";

const repositoryUrl = "https://github.com/openshift/traust";
const quickstartUrl = `${repositoryUrl}/blob/main/docs/getting-started.md`;

const githubIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.6v-2.2c-3.4.7-4.1-1.4-4.1-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.1 2 3 1.4 3.7 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.4 11.4 0 0 0 12 .8Z"/>
  </svg>`;

const arrowIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

const stageIcons = {
  inventory: `
    <svg viewBox="0 0 240 180" aria-hidden="true">
      <g class="icon-muted" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="28" y="31" width="72" height="51" rx="3"/><path d="M40 44h21M40 55h38M40 66h29"/>
        <rect x="140" y="98" width="72" height="51" rx="3"/><path d="M152 111h21M152 122h38M152 133h29"/>
        <rect x="28" y="111" width="72" height="38" rx="3"/><path d="M40 124h31M40 135h19"/>
      </g>
      <g class="icon-accent" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="157" cy="51" r="25"/><path d="m174 69 17 17M147 43h20M147 52h13M147 61h16"/>
        <path d="M100 56h30M91 99l25-21 23 24" stroke-dasharray="4 5"/>
      </g>
    </svg>`,
  threat: `
    <svg viewBox="0 0 240 180" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="1.5" class="icon-muted">
        <circle cx="120" cy="90" r="58"/><circle cx="120" cy="90" r="34"/><circle cx="120" cy="90" r="10"/>
      </g>
      <g fill="none" stroke="currentColor" stroke-width="2" class="icon-accent">
        <path d="M29 132 120 90l-41-76M120 90l79-44M120 90l49 68"/>
        <circle cx="29" cy="132" r="5" fill="currentColor"/><circle cx="79" cy="14" r="5" fill="currentColor"/><circle cx="199" cy="46" r="5" fill="currentColor"/><circle cx="169" cy="158" r="5" fill="currentColor"/>
      </g>
    </svg>`,
  audit: `
    <svg viewBox="0 0 240 180" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="1.5" class="icon-muted">
        <path d="M48 27h112l31 31v96H48z"/><path d="M160 27v31h31M70 79h76M70 96h99M70 113h82M70 130h53"/>
      </g>
      <g fill="none" stroke="currentColor" stroke-width="2.2" class="icon-accent">
        <circle cx="154" cy="119" r="28"/><path d="m174 139 19 19M145 119l7 7 14-18"/>
      </g>
    </svg>`,
  triage: `
    <svg viewBox="0 0 240 180" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="1.5" class="icon-muted">
        <path d="M33 35h174M33 78h174M33 121h174"/><circle cx="67" cy="35" r="17"/><circle cx="151" cy="78" r="17"/><circle cx="102" cy="121" r="17"/>
      </g>
      <g fill="none" stroke="currentColor" stroke-width="2.2" class="icon-accent">
        <path d="m60 35 5 5 10-12M144 78l5 5 10-12M95 121l5 5 10-12"/><path d="M37 151h117" stroke-dasharray="3 5"/><path d="m148 145 10 6-10 6"/>
      </g>
    </svg>`,
  validate: `
    <svg viewBox="0 0 240 180" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="1.5" class="icon-muted">
        <path d="M120 19 193 51v48c0 39-29 57-73 68-44-11-73-29-73-68V51z"/>
        <path d="M76 77h88M76 96h53M76 115h73"/>
      </g>
      <g fill="none" stroke="currentColor" stroke-width="2.4" class="icon-accent">
        <path d="m93 89 19 19 39-44"/><circle cx="120" cy="91" r="52" stroke-dasharray="3 6"/>
      </g>
    </svg>`,
  remediate: `
    <svg viewBox="0 0 240 180" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="1.5" class="icon-muted">
        <path d="M35 42h76v96H35zM129 42h76v96h-76z"/><path d="M49 61h47M49 76h32M49 91h41M143 61h47M143 76h25M143 91h41"/>
      </g>
      <g fill="none" stroke="currentColor" stroke-width="2.2" class="icon-accent">
        <path d="M93 118h54M137 108l10 10-10 10M72 113l8 8 19-24M157 113l8 8 19-24"/>
      </g>
    </svg>`,
  deliver: `
    <svg viewBox="0 0 240 180" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="1.5" class="icon-muted">
        <path d="M31 52h178v99H31zM31 52l89 61 89-61"/><path d="m31 151 62-56M209 151l-62-56"/>
      </g>
      <g fill="none" stroke="currentColor" stroke-width="2.2" class="icon-accent">
        <path d="M120 18v70M105 72l15 16 15-16"/><circle cx="120" cy="18" r="5" fill="currentColor"/>
      </g>
    </svg>`,
  continuous: `
    <svg viewBox="0 0 240 180" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="1.5" class="icon-muted">
        <circle cx="120" cy="90" r="60"/><circle cx="120" cy="90" r="34"/><path d="M120 56v34l25 15"/>
      </g>
      <g fill="none" stroke="currentColor" stroke-width="2.3" class="icon-accent">
        <path d="M59 80a62 62 0 0 1 108-32M181 99a62 62 0 0 1-108 32"/><path d="m164 32 5 18-19-2M76 147l-5-18 19 2"/>
      </g>
    </svg>`,
};

const stages = [
  {
    number: "01",
    phase: "Understand",
    title: "Map the estate.",
    command: "/inventory-repositories",
    description:
      "Start with the whole system, not an isolated repository. Traust discovers source, images, packages, services, ownership, and the product relationships between them.",
    output: "A living inventory and portfolio graph define what exists, who owns it, and what must be assessed.",
    icon: "inventory",
    side: "left",
  },
  {
    number: "02",
    phase: "Model",
    title: "Know what can go wrong.",
    command: "/threat-model",
    description:
      "Your model reads architecture and code to identify trust boundaries, attacker goals, exposed surfaces, and controls before it starts hunting for individual bugs.",
    output: "A threat model becomes shared context for audit, triage, validation, and future change reviews.",
    icon: "threat",
    side: "right",
  },
  {
    number: "03",
    phase: "Discover",
    title: "Combine breadth with judgment.",
    command: "/secure-code-audit",
    description:
      "Deterministic scanners enumerate facts. Your models reason over code, configuration, and threat context across industry security frameworks. Each method strengthens the other.",
    output: "Schema-valid findings carry evidence, locations, severity, remediation, and exact workflow provenance.",
    icon: "audit",
    side: "left",
  },
  {
    number: "04",
    phase: "Decide",
    title: "Turn alerts into decisions.",
    command: "/triage",
    description:
      "Traust adversarially checks every claim, collapses duplicates, ranks exploitability, and routes uncertain conclusions to human review instead of quietly discarding them.",
    output: "Engineering receives a prioritized, cited set of findings rather than another undifferentiated scanner backlog.",
    icon: "triage",
    side: "right",
  },
  {
    number: "05",
    phase: "Prove",
    title: "Test reality, safely.",
    command: "/validate-findings",
    description:
      "On targets you authorize, scope guards and positive controls govern live probes. Traust can confirm exploit paths, expose attack chains, or mark weak refutations inconclusive.",
    output: "Execution evidence outranks static opinion, while human review governs consequential dismissals and overrides.",
    icon: "validate",
    side: "left",
  },
  {
    number: "06",
    phase: "Close",
    title: "Remediate. Then verify.",
    command: "/remediate-finding → /verify-remediation",
    description:
      "Generate reviewable patches, run the repository’s own checks in containment, and re-audit the original claim against patched code. Fleet transforms address repeated patterns at scale.",
    output: "A fix is not complete because a diff exists. It closes only when evidence says the weakness is resolved without regression.",
    icon: "remediate",
    side: "right",
  },
  {
    number: "07",
    phase: "Deliver",
    title: "Put evidence where work happens.",
    command: "/generate-team-report",
    description:
      "Package validated results, map them to accountable owners, export standards-based SARIF, and connect findings to the systems teams already use to plan and ship work.",
    output: "Every audience gets the right projection while the underlying contracts remain consistent and traceable.",
    icon: "deliver",
    side: "left",
  },
  {
    number: "08",
    phase: "Repeat",
    title: "Keep the answer current.",
    command: "diff scans · dependency watch · drift",
    description:
      "Change-driven routing sends repositories back through focused workflow lanes when code, dependencies, artifacts, methods, or evidence change. Dashboards rebuild from the same source of truth.",
    output: "Security becomes a continuous operating loop, not a report that starts aging the moment it is delivered.",
    icon: "continuous",
    side: "right",
  },
];

const terminalLines = [
  { delay: 0, html: '<span class="terminal-prompt">›</span> <span class="terminal-command">/secure-code-audit github.com/acme/payments</span>' },
  { delay: 1, html: '<span class="terminal-dim">traust</span>  loading workflow <span class="terminal-pill">audit</span>' },
  { delay: 2, html: '<span class="terminal-ok">✓</span> threat model found <span class="terminal-dim">payments-threat-model.md</span>' },
  { delay: 3, html: '<span class="terminal-ok">✓</span> scanners complete <span class="terminal-dim">opengrep · gitleaks · osv</span>' },
  { delay: 4, html: '<span class="terminal-ok">✓</span> review lanes complete <span class="terminal-dim">auth · dataflow · supply chain</span>' },
  { delay: 5, html: '<span class="terminal-warn">!</span> 3 findings ready for triage' },
  { delay: 6, html: '<span class="terminal-dim">output</span> payments-security-audit.json <span class="terminal-ok">schema valid</span>' },
];

const renderStage = (stage) => `
  <article class="workflow-stage stage-${stage.side} reveal" data-stage="${stage.number}">
    <div class="stage-copy">
      <div class="stage-kicker"><span>${stage.number}</span>${stage.phase}</div>
      <h3>${stage.title}</h3>
      <p>${stage.description}</p>
      <p class="stage-output"><span>Output</span>${stage.output}</p>
      <code>${stage.command}</code>
    </div>
    <div class="stage-visual" aria-hidden="true">
      <div class="visual-grid"></div>
      ${stageIcons[stage.icon]}
      <span class="visual-label">${stage.phase.toLowerCase()} / ${stage.number}</span>
    </div>
    <span class="stage-node" aria-hidden="true"><i></i></span>
  </article>`;

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="noise" aria-hidden="true"></div>
  <nav class="site-nav" aria-label="Primary navigation">
    <a class="wordmark" href="#top" aria-label="Traust home">
      <img class="wordmark-logo" src="${logoUrl}" alt="" />
      <span>traust</span>
    </a>
    <div class="nav-links">
      <a href="#workflow">Workflow</a>
      <a href="#platform">Platform</a>
      <a href="${quickstartUrl}">Docs</a>
    </div>
    <a class="github-link" href="${repositoryUrl}" aria-label="Traust on GitHub">
      ${githubIcon}<span>GitHub</span>
    </a>
  </nav>

  <main id="main">
    <header class="hero" id="top">
      <img class="hero-logo" src="${logoUrl}" alt="" aria-hidden="true" />
      <div class="hero-eyebrow reveal">Open source · Apache 2.0 · built for the full security lifecycle</div>
      <h1 class="hero-title reveal">
        <span>Traust is</span>
        <span class="flip-window" aria-live="polite">
          <span class="flip-text">skills</span>
        </span>
      </h1>
      <p class="hero-deck reveal">
        A security workflow your models can run, from understanding the estate to proving the fix.
        Bring your agents, scanners, and engineering systems. Traust connects the work and preserves the evidence.
      </p>
      <div class="hero-actions reveal">
        <a class="button button-primary" href="${quickstartUrl}">Start the quickstart ${arrowIcon}</a>
        <a class="button button-secondary" href="#workflow">Explore the workflow <span aria-hidden="true">↓</span></a>
      </div>
      <div class="hero-facts reveal" aria-label="Traust highlights">
        <div><strong>51</strong><span>composable skills</span></div>
        <div><strong>09</strong><span>connected stages</span></div>
        <div><strong>01</strong><span>evidence stream</span></div>
        <div><strong>∞</strong><span>model possibilities</span></div>
      </div>
    </header>

    <section class="terminal-section" aria-labelledby="terminal-heading">
      <div class="section-rail reveal">
        <span>One command in</span><span>Structured evidence out</span>
      </div>
      <div class="terminal-layout">
        <div class="terminal-copy reveal">
          <span class="section-label">Agent-native by design</span>
          <h2 id="terminal-heading">Your models do the reasoning.<br />Traust gives it a system.</h2>
          <p>
            Skills give agents precise procedures. Contracts keep every handoff legible. Deterministic tools ground the work in facts. The workflow turns all three into repeatable security operations.
          </p>
          <div class="model-chips" aria-label="Model support philosophy">
            <span>your models</span><span>your agents</span><span>your policies</span>
          </div>
        </div>
        <div class="terminal-window reveal" aria-label="Simulated Traust security audit terminal">
          <div class="terminal-bar">
            <div class="terminal-controls" aria-hidden="true"><i></i><i></i><i></i></div>
            <span>traust / workspace / payments</span>
            <span class="terminal-status">● connected</span>
          </div>
          <div class="terminal-body">
            ${terminalLines.map((line) => `<div class="terminal-line" style="--line-delay:${line.delay}">${line.html}</div>`).join("")}
            <div class="terminal-cursor" aria-hidden="true"><span>›</span><i></i></div>
          </div>
          <div class="terminal-footer"><span>model <b>registry/default</b></span><span>workflow <b>v0.1.1</b></span></div>
        </div>
      </div>
    </section>

    <section class="quickstart-band" aria-labelledby="quickstart-heading">
      <div class="quickstart-index">00</div>
      <div>
        <span class="section-label">Start small</span>
        <h2 id="quickstart-heading">From clone to first audit.</h2>
      </div>
      <p>Run a threat model and a multi-framework audit on a repository you are authorized to assess. No campaign infrastructure required.</p>
      <a class="button button-dark" href="${quickstartUrl}">Read the quickstart ${arrowIcon}</a>
    </section>

    <section class="workflow-intro" id="workflow" aria-labelledby="workflow-heading">
      <span class="section-label reveal">The Traust workflow</span>
      <h2 id="workflow-heading" class="reveal">Security is not a scan.<br /><em>It is a chain of decisions.</em></h2>
      <p class="reveal">Follow one finding through a system where every stage produces durable context for the next.</p>
    </section>

    <section class="workflow" aria-label="Eight-stage Traust workflow">
      <div class="workflow-path" aria-hidden="true">
        <svg viewBox="0 0 1000 3600" preserveAspectRatio="none">
          <path class="path-shadow" d="M500 0 C500 170 225 230 225 445 S775 690 775 890 S225 1130 225 1340 S775 1580 775 1790 S225 2030 225 2240 S775 2480 775 2690 S225 2930 225 3140 S500 3430 500 3600"/>
          <path class="path-progress" d="M500 0 C500 170 225 230 225 445 S775 690 775 890 S225 1130 225 1340 S775 1580 775 1790 S225 2030 225 2240 S775 2480 775 2690 S225 2930 225 3140 S500 3430 500 3600"/>
        </svg>
      </div>
      ${stages.map(renderStage).join("")}
    </section>

    <section class="continuity" aria-labelledby="continuity-heading">
      <div class="continuity-copy reveal">
        <span class="section-label">One continuous record</span>
        <h2 id="continuity-heading">The workflow remembers.</h2>
        <p>Every audit, judgment, proof, correction, and verification contributes to a replayable history. Current state can change without erasing how it changed.</p>
      </div>
      <div class="event-stream reveal" aria-label="Example finding event history">
        <div class="event-row event-head"><span>Event</span><span>Evidence</span><span>State</span><span>Time</span></div>
        <div class="event-row"><span><i class="dot dot-open"></i>Finding created</span><span>static analysis</span><span>open</span><span>09:14</span></div>
        <div class="event-row"><span><i class="dot dot-warn"></i>Claim triaged</span><span>cited review</span><span>confirmed</span><span>10:02</span></div>
        <div class="event-row"><span><i class="dot dot-live"></i>Exploit reproduced</span><span>execution</span><span>confirmed</span><span>13:47</span></div>
        <div class="event-row"><span><i class="dot dot-fix"></i>Patch verified</span><span>re-audit</span><span>resolved</span><span>16:20</span></div>
      </div>
    </section>

    <section class="platform" id="platform" aria-labelledby="platform-heading">
      <div class="platform-heading reveal">
        <span class="section-label">More than a harness</span>
        <h2 id="platform-heading">A workflow needs connective tissue.</h2>
        <p>Use the full system or integrate only the surfaces you need. Each component is separately versioned and built around the same security lifecycle.</p>
      </div>

      <article class="platform-row platform-sdk reveal">
        <div class="platform-number">01 / SDK</div>
        <div class="platform-copy">
          <h3>Bring Traust into your systems.</h3>
          <p>A typed Go SDK for invoking skills, dispatching asynchronous work, submitting human and machine decisions, and querying findings and integrity.</p>
          <a href="https://github.com/openshift/traust-sdk">Explore the SDK ${arrowIcon}</a>
        </div>
        <div class="code-card" aria-label="Go SDK example">
          <div class="code-card-bar"><span>audit.go</span><span>Go</span></div>
          <pre><code><span class="code-key">report</span>, err := skills.Scan.Run(
  ctx, provider,
  skills.ScanInput{
    Repo: <span class="code-string">"github.com/acme/payments"</span>,
    Ref:  <span class="code-string">"main"</span>,
  },
)

<span class="code-key">for</span> _, finding := <span class="code-key">range</span> report.Findings {
  queue.Submit(finding)
}</code></pre>
        </div>
      </article>

      <article class="platform-row platform-contracts reveal">
        <div class="platform-number">02 / Contracts</div>
        <div class="platform-copy">
          <h3>Keep every handoff understood.</h3>
          <p>Versioned schemas, controlled vocabularies, and typed models define findings from discovery through remediation. Add your own tooling without inventing another translation layer.</p>
          <a href="https://github.com/openshift/traust-contracts">Explore Contracts ${arrowIcon}</a>
        </div>
        <div class="schema-card" aria-label="Contract relationship diagram">
          <div class="schema-node schema-source">scanner<span>adapter result</span></div>
          <div class="schema-arrow">→</div>
          <div class="schema-node schema-core">finding<span>contract v1</span></div>
          <div class="schema-arrow">→</div>
          <div class="schema-stack"><span>triage</span><span>validation</span><span>remediation</span></div>
        </div>
      </article>

      <article class="platform-row platform-ledger reveal">
        <div class="platform-number">03 / Ledger</div>
        <div class="platform-copy">
          <h3>Preserve why the answer changed.</h3>
          <p>An authenticated, append-oriented finding decision ledger with deterministic correlation, replayable state, Merkle tamper detection, and optional Cosign or Sigstore attestation.</p>
          <a href="https://github.com/openshift/traust-ledger">Explore the Ledger ${arrowIcon}</a>
        </div>
        <div class="ledger-card" aria-label="Ledger chain illustration">
          <div class="ledger-root"><span>MERKLE ROOT</span><strong>5c82…9af1</strong></div>
          <div class="ledger-chain">
            <span><i>01</i>audit</span><span><i>02</i>triage</span><span><i>03</i>proof</span><span><i>04</i>fix</span>
          </div>
          <div class="ledger-proof"><span>✓</span> event sequence verified</div>
        </div>
      </article>
    </section>

    <section class="final-cta" aria-labelledby="final-heading">
      <div class="final-orbit" aria-hidden="true"><i></i><i></i><i></i></div>
      <img class="final-logo" src="${logoUrl}" alt="" aria-hidden="true" />
      <span class="section-label reveal">The workflow is open</span>
      <h2 id="final-heading" class="reveal">Give your models<br /><em>something to trust.</em></h2>
      <p class="reveal">Start with one repository. Keep the evidence for every one after it.</p>
      <div class="hero-actions reveal">
        <a class="button button-primary" href="${quickstartUrl}">Start the quickstart ${arrowIcon}</a>
        <a class="button button-secondary-light" href="${repositoryUrl}">${githubIcon} View on GitHub</a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <a class="wordmark footer-wordmark" href="#top"><img class="wordmark-logo" src="${logoUrl}" alt="" /><span>traust</span></a>
    <p>Security assessment as a continuous, evidence-led workflow.</p>
    <div><a href="${quickstartUrl}">Docs</a><a href="${repositoryUrl}">GitHub</a><span>Apache 2.0</span><span>v0.1.1</span></div>
  </footer>
`;

const flipWords = ["skills", "agents", "scripts", "scanners", "more than a harness"];
const flipText = document.querySelector(".flip-text");
let flipIndex = 0;

const advanceFlip = () => {
  if (flipIndex >= flipWords.length - 1) {
    flipText.closest(".flip-window").classList.add("flip-settled");
    return;
  }

  flipText.classList.add("flip-out");
  window.setTimeout(() => {
    flipIndex += 1;
    flipText.textContent = flipWords[flipIndex];
    flipText.classList.remove("flip-out");
    flipText.classList.add("flip-in");
    window.setTimeout(() => flipText.classList.remove("flip-in"), 250);
    window.setTimeout(advanceFlip, flipIndex === flipWords.length - 1 ? 900 : 430);
  }, 210);
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (reduceMotion.matches) {
  flipText.textContent = flipWords.at(-1);
  flipText.closest(".flip-window").classList.add("flip-settled");
} else {
  window.setTimeout(advanceFlip, 700);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const workflow = document.querySelector(".workflow");
const workflowProgress = document.querySelector(".path-progress");
const updateWorkflowPath = () => {
  if (window.innerWidth <= 760) {
    return;
  }

  const rect = workflow.getBoundingClientRect();
  const viewportTrigger = window.innerHeight * 0.58;
  const total = rect.height - window.innerHeight * 0.3;
  const progress = Math.max(0, Math.min(1, (viewportTrigger - rect.top) / total));
  workflowProgress.style.setProperty("--path-progress", progress);
};

let ticking = false;
const requestPathUpdate = () => {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(() => {
    updateWorkflowPath();
    ticking = false;
  });
};

window.addEventListener("scroll", requestPathUpdate, { passive: true });
window.addEventListener("resize", requestPathUpdate);
updateWorkflowPath();

const nav = document.querySelector(".site-nav");
const updateNav = () => nav.classList.toggle("nav-scrolled", window.scrollY > 24);
window.addEventListener("scroll", updateNav, { passive: true });
updateNav();
