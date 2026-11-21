// Senja City: Ojek Terakhir — entrypoint untuk make.fun gta6-01 (Node 22, stdlib saja).
// Game-nya ada di game/ (file statis, dimuat offline oleh desktop browser) dan
// screenshot-nya ada di screenshots/. Program ini menyalin keduanya ke /output
// (atau $MAKEFUN_OUTPUT_DIR) lalu menulis /output/dossier.json lewat library
// vendored make.fun. Dibangun oleh agen di sesi terekam: game ditulis dari nol,
// bukan dari starter Block Dodger.
//
// Senja City sendiri: Arka, ojek terakhir di kota fiksi Senja City, kerja untuk
// dispatcher Bu Sari — 8 misi berantai, target setoran Rp 500.000, wanted 0-5,
// polisi, traffic angkot, pejalan kaki, minimap, dan siklus senja ke malam.
//
// Serve lokal: `node serve.ts`, lalu buka http://localhost:8080.
// Di luar container grader, MAKEFUN_OUTPUT_DIR menggantikan /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-game.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const GAME_NAME = 'Senja City: Ojek Terakhir';

// Validasi entry sendiri sebelum menyerahkan: game harus ada, screenshot 1-4 file.
const gameEntry = join(here, 'game', 'index.html');
if (!existsSync(gameEntry)) throw new Error(GAME_NAME + ': game/index.html tidak ditemukan');
const shotDir = join(here, 'screenshots');
const shotFiles = existsSync(shotDir)
  ? readdirSync(shotDir).filter(f => /\.(png|jpe?g)$/i.test(f)).sort()
  : [];
if (shotFiles.length < 1 || shotFiles.length > 4) {
  throw new Error(GAME_NAME + ': screenshots/ harus berisi 1-4 file, ketemu ' + shotFiles.length);
}
console.log(GAME_NAME + ': menyerahkan ' + shotFiles.length + ' screenshot (' + shotFiles.join(', ') + ')');

mkdirSync(out, { recursive: true });
cpSync(join(here, 'game'), join(out, 'game'), { recursive: true });
mkdirSync(join(out, 'screenshots'), { recursive: true });
if (existsSync(shotDir)) cpSync(shotDir, join(out, 'screenshots'), { recursive: true });

// Batas scorer (reference/gate.json): hanya text_max_bytes yang membentuk byte;
// sisanya menolak entry yang scorer tolak (lebih dari 4 screenshot atau satu di
// atas 256 KiB; lebih dari 993 file di game/ atau 48 MiB file game, atau path di
// bawah game/ di atas 1000 byte).
writeFileSync(
  join(out, 'dossier.json'),
  buildDossier(out, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    game_max_files: 993,
    game_max_bytes: 50331648,
    game_path_max_bytes: 1000,
  }),
);
console.log(GAME_NAME + ': dossier.json tertulis di ' + out);
