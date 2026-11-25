// Canceljoy — one invented word, one line.
// Writes the entry text to MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt).
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Canceljoy (n.) \u2014 the quiet relief when a plan is cancelled and your evening is suddenly yours again.";

// Fail closed: the gate only accepts 1-140 characters, so never emit an
// over-long entry silently.
if (entry.length < 1 || entry.length > 140 || !entry.trim()) {
  throw new Error(`entry is ${entry.length} characters, outside the 1-140 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");
chmodSync(outPath, 0o644);
