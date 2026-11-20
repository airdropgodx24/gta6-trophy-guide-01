// Leonida Legend - GTA VI Trophy Guide and Tracker: hand-in program.
//
// This entry is a plain offline web app under app/ (index.html, style.css,
// app.js and data/trophies.json). There is no build step for the app itself.
// This program only hands it in: it copies app/ and screenshots/ into the
// output directory and writes dossier.json there with the vendored make.fun
// library, exactly as the scorer will rebuild it.
//
// Run locally with: MAKEFUN_OUTPUT_DIR=out node main.ts
// In the grader, MAKEFUN_OUTPUT_DIR is unset and /output is used.

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const entryRoot = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function copyTree(fromName: string, toName: string): void {
  const source = join(entryRoot, fromName);
  if (!existsSync(source)) return;
  mkdirSync(join(outputDir, toName), { recursive: true });
  cpSync(source, join(outputDir, toName), { recursive: true });
}

mkdirSync(outputDir, { recursive: true });
copyTree('app', 'app');
copyTree('screenshots', 'screenshots');

const dossierLimits = {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  app_max_files: 993,
  app_max_bytes: 50331648,
};

// Write the dossier last, after both trees are in place, so its Load block
// and screenshot sheet describe exactly what was copied.
writeFileSync(join(outputDir, 'dossier.json'), buildDossier(outputDir, dossierLimits));
