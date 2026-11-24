// Entry poster copier: this program copies the bounty image entry.png, which
// lives next to this file, into the output directory named by the
// MAKEFUN_OUTPUT_DIR environment variable (or /output when unset), creating
// the directory first if it does not exist.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const dirHere = fileURLToPath(new URL(".", import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const sourcePng = join(dirHere, "entry.png");
const targetPng = join(outputDir, "entry.png");

copyFileSync(sourcePng, targetPng);
console.log(`Copied entry.png -> ${targetPng}`); // done
