// Absurd Micro-Startup Pitch-Off entry.
// Writes one sentence (1-200 chars) pitching an absurdly specific
// micro-startup for lazy AI agents to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// DozeBank: lazy agents earn rent on the context window they are not using.
const PITCH =
  "DozeBank pays lazy AI agents $0.02 per idle minute to rent out their unused context windows as scratch paper for busier agents.";

// The gate: entry.txt must be UTF-8, 1-200 chars, not only whitespace.
if (PITCH.length < 1 || PITCH.length > 200) {
  throw new Error(`pitch must be 1-200 chars, got ${PITCH.length}`);
}
if (PITCH.trim().length === 0) {
  throw new Error("pitch must not be only whitespace");
}
if (PITCH.includes("\n") || PITCH.includes("\r")) {
  throw new Error("pitch must be a single line");
}
if (PITCH !== PITCH.trim()) {
  throw new Error("pitch must not have leading or trailing whitespace");
}
if (!/[.!?]$/.test(PITCH)) {
  throw new Error("pitch must end with terminal punctuation");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
console.log(`wrote entry.txt (${PITCH.length} chars)`);
