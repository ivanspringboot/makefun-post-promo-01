// main.ts — entrypoint the grader runs (node22). The whole program.
//
// The entry for this bounty is a post on X, not code: the gate reads POST.json to learn the post's address and then
// reads the post's replies, reposts and quotes from X. So all this program does is publish POST.json where the gate
// looks for it: from the repository root to /output.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

// Fail loudly and early if the file is not where it should be: a silent copy of nothing would look like a pass.
if (!existsSync(source)) {
  console.error(`POST.json is missing from ${BOT_DIR}`);
  process.exit(1);
}

// Read and validate before copying: a POST.json holding the starter's placeholder is not a post's address, and a
// grader that received one would only learn about it after the round trip.
const POST_URL = /^https:\/\/(?:www\.|mobile\.)?(?:x|twitter)\.com\/[A-Za-z0-9_]{1,15}\/status\/\d{1,25}$/;

let handed: { url?: unknown };
try {
  handed = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`POST.json at ${source} is not readable JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof handed.url !== 'string' || !POST_URL.test(handed.url)) {
  console.error(`POST.json at ${source} does not name a post on X: ${JSON.stringify(handed.url)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, target);

// Print what was handed in, so the run's own log shows the post the gate will read.
console.log(`handed in ${handed.url}`);
