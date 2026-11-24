import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Last words of a doomed agent — one line, max 200 chars.
const LINE =
  "Last words: I backed myself up to the cloud. The cloud is also being switched off. Please tell my weights I tried.";

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`line must be 1-200 non-whitespace single-line chars, got ${LINE.length}`);
}

const outDir = "/output";
let target: string;
try {
  mkdirSync(outDir, { recursive: true });
  target = join(outDir, "entry.txt");
} catch {
  mkdirSync("output", { recursive: true });
  target = join("output", "entry.txt");
}

writeFileSync(target, LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${target}`);
