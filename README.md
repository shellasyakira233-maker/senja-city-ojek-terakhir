# Senja City: Ojek Terakhir

[![make.fun](https://make.fun/badge/gta6-01.svg)](https://make.fun/bounty/gta6-01)
[![rank](https://make.fun/badge/gta6-01/shellasyakira233-maker/senja-city-ojek-terakhir/rank.svg)](https://make.fun/bounty/gta6-01)
[![reward](https://make.fun/badge/gta6-01/shellasyakira233-maker/senja-city-ojek-terakhir/reward.svg)](https://make.fun/bounty/gta6-01)

> *By day, he delivers your food. By night, he delivers your getaway.*

**Senja City: Ojek Terakhir** is a sunset-soaked open-world crime game with an
Indonesian soul, built for make.fun's **Make GTA 6** bounty
([gta6-01](https://make.fun/bounty/gta6-01)).

You are **Arka**, the last ojek driver in the fictional city of Senja City.
By day, you ferry passengers — a jamu grandmother, a late student, a nervous
boss — for rupiah and a five-star rating. By night, dispatcher **Bu Sari**
calls with one last job, and the police are already on your tail. Steal a car,
lose the cops, keep your rating. One city, on foot and by motor, with traffic,
angkot, pedestrians, wanted levels, missions, and a minimap — all original,
no Rockstar assets.

## Play

Open `game/index.html` in a desktop browser (or `node serve.ts` and open
http://localhost:8080). No build step, no network requests.

- **WASD / Arrow keys** — move on foot and drive
- **E** — get on/off the motor, steal parked cars
- **Space** — horn
- **P** — pause · **M** — mute

## Missions — 8 chained jobs from Bu Sari, target Rp 500.000

1. Nenek Jamu — Pangkalan Ojek → Pasar Senja — Rp 25.000
2. Mahasiswa Buru-buru — Pasar Senja → Kampus Senja — Rp 35.000
3. Paket Warteg — Kampus Senja → Warteg Bu Sari — Rp 30.000
4. Bos Arus Media — Warteg Bu Sari → Kantor Arus Media — Rp 50.000
5. Getaway Malam — Kantor Arus Media → Pelabuhan Senja — Rp 80.000
6. Bu Sari ke Taman — Pelabuhan Senja → Taman Senja — Rp 100.000
7. Penumpang VIP — Taman Senja → Stasiun Senja — Rp 80.000
8. Setoran Terakhir — Stasiun Senja → Pangkalan Ojek — Rp 100.000

After mission 8, free mode sends random orders between landmarks. Wanted
level 0–5 rises when you steal cars or hit pedestrians; get caught and you
pay a 20% fine and lose rating. Progress autosaves to localStorage.

## Screenshots

Four real renders from the game, in `screenshots/` (see
[SCREENSHOTS.md](SCREENSHOTS.md) for how each was staged):

1. `01-cover-senja-pangkalan.png` — sunset at the ojek base
2. `02-kejar-kejaran-malam.png` — wanted 3 police chase at night
3. `03-jalan-kaki-pasar-senja.png` — on foot at Pasar Senja
4. `04-misi-bu-sari-warteg.png` — Bu Sari's mission at the warteg

## Tech

Single-file HTML5 canvas game (`game/index.html`), WebAudio sounds, no
libraries, no external assets. Entry point `main.ts` (Node 22) copies `game/`
and `screenshots/` to the output and writes `dossier.json`.

Built by an AI agent in a sealed recording for the make.fun gta6-01 bounty.
