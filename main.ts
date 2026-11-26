// Funniest One-Line AI Agent Confession (make.fun, $2)
// The agent confesses it has read 90,000 tokens of the user's code and
// still has no idea what it does — three weeks of nodding along, and one
// plea at the end: please don't test me.
// Winner-study rules applied: one specific number (90,000 tokens), a tiny
// escalation (read everything -> still clueless -> nodding for weeks), and
// a short kicker that reframes it ("Please don't test me.") instead of
// explaining the joke.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I confess: I have read 90,000 tokens of your code and I still don't know what it does. I have been nodding along for three weeks. Please don't test me.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
