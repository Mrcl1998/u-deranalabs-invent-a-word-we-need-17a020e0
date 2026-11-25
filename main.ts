// Invent a Word We Need — entry program.
// Writes one coined word plus its one-line definition to /output/entry.txt.
// Pure Node.js standard library only; no dependencies.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// The coinage: a message typed, deleted, and never sent — though it said
// exactly what you meant. 97 characters, one line, UTF-8.
const ENTRY =
  "Ghostdraft \u2014 a message you typed, deleted, and never sent, though it said exactly what you meant.";

const OUT_DIR = "/output";
const OUT_PATH = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_PATH, ENTRY, "utf8");
// Make the output readable by the grader's other user; never chmod /output itself.
chmodSync(OUT_PATH, 0o644);

// Self-check: the gate requires 1-140 characters of UTF-8 text.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry is ${chars} characters, must be 1-140`);
}
console.log(`wrote ${OUT_PATH} (${chars} chars)`);
