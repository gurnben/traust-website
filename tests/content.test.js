import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(new URL("../src/main.js", import.meta.url), "utf8");
const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const logo = await readFile(new URL("../src/logo.svg", import.meta.url), "utf8");

const requiredStages = [
  "Map the estate.",
  "Know what can go wrong.",
  "Combine breadth with judgment.",
  "Turn alerts into decisions.",
  "Test reality, safely.",
  "Remediate. Then verify.",
  "Put evidence where work happens.",
  "Keep the answer current.",
];

const flipSequence = ["skills", "agents", "scripts", "scanners", "more than a harness"];

test("hero contains the requested flip sequence in order", () => {
  let cursor = -1;
  for (const word of flipSequence) {
    const next = source.indexOf(`"${word}"`, cursor + 1);
    assert.ok(next > cursor, `${word} is present in sequence`);
    cursor = next;
  }
});

test("workflow includes each lifecycle stage", () => {
  for (const title of requiredStages) {
    assert.match(source, new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("differentiator sections and model-neutral language are present", () => {
  assert.match(source, /your models/i);
  assert.match(source, /01 \/ SDK/);
  assert.match(source, /02 \/ Contracts/);
  assert.match(source, /03 \/ Ledger/);
});

test("document includes essential metadata and skip navigation", () => {
  assert.match(html, /name="description"/);
  assert.match(html, /class="skip-link"/);
  assert.match(html, /id="app"/);
});

test("adapted shield mark is used as brand artwork and favicon", () => {
  assert.match(logo, /viewBox="0 0 180 210"/);
  assert.match(source, /import logoUrl from "\.\/logo\.svg"/);
  assert.match(source, /class="wordmark-logo"/);
  assert.match(source, /class="hero-logo"/);
  assert.match(html, /rel="icon" href="\/src\/logo\.svg"/);
});
