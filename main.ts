import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `A bell lies in the silt of an old harbor.
The ship that brought it fell silent
long before the harbor did.

Light thins as it sinks;
the name on the bell turns green.
Tides pass. Ferries pass.
It has not rung, and is not asked to.

The water holds it without a reason.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, TEXT, "utf8");

// A bell rests in the harbor silt, un-rung and un-asked.
// The lines are short and plain on purpose: slow enough
// to leave room between them, so the picture keeps on
// widening after the very last word, the way still water
// keeps on moving long after the ferry has gone.
function describeOutput(outDir: string, chars: number): string {
  return `[awe-bell-v2] ${chars} characters written to ${outDir}`;
}

console.error(describeOutput(outDir, TEXT.length));
