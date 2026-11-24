// Say What Actually Broke — one line of software error copy.
// The program writes a single honest, funny error message to /output/entry.txt.
// Judge brief: name the real failure in plain words, say what to do next,
// land the joke in one read, and survive being pasted into a real dialog.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Why this line: the failure is named first ("The internet is down"),
// the next step follows ("Please check the cable"), and the twist is the
// image of the cat sitting on it — a cause every reader has met, told
// straight enough to ship in a real error dialog.
const ENTRY = "The internet is down. Please check the cable the cat is sitting on.";

function emptyDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const outDir = process.argv[2] ?? "/output";
  const text = ENTRY;

  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  emptyDir(outDir);
  const target = join(outDir, "entry.txt");
  writeFileSync(target, text, "utf8");

  const back = readFileSync(target, "utf8");
  if (back !== text) {
    throw new Error("entry.txt does not match the entry exactly");
  }
  console.log(`wrote ${target} (${text.length} characters)`);
}

main();
