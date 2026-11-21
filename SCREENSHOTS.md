# Screenshots — Senja City: Ojek Terakhir

All 4 screenshots are real renders of the game itself, captured by the
builder with headless Chromium (Playwright), viewport 1280x720, from the
game running locally. No editing, no compositing, no borrowed images.

The game supports deterministic shot scenes via `?shot=...` (see `shots.json`):
the mission timer and game clock are frozen so the scene holds still.

## How each shot was taken

1. **01-cover-senja-pangkalan.png** — `?shot=cover`
   Mission 1, drop-off phase. Arka on his green motor at the ojek base,
   17:20 sunset, wanted 0, minimap and mission panel visible.
2. **02-kejar-kejaran-malam.png** — `?shot=chase`
   Mission 5 (Getaway Malam), drop-off phase. Wanted 3, three police cars
   with flashing lights closing in, 19:00 night, Rp 320.000 on the HUD.
3. **03-jalan-kaki-pasar-senja.png** — `?shot=market`
   Mission 2, pick-up phase. Arka on foot at Pasar Senja, yellow pick-up
   marker next to him, pedestrians and traffic in frame, 17:10.
4. **04-misi-bu-sari-warteg.png** — `?shot=warteg`
   Mission 3, drop-off phase. Arka on the motor at Warteg Bu Sari, green
   destination marker, Bu Sari's dialog visible, 17:40.

## Checklist

- [x] 4 files, cover = 01, all real renders, unedited
- [x] Shot 01: sunset + motor + angkot + minimap + mission visible
- [x] Shot 02: wanted + police chase visible
- [x] Shot 03: on foot + pedestrians + market visible
- [x] Shot 04: Bu Sari dialog + mission + minimap visible
- [x] No browser UI, cursor, or watermark in frame
- [x] All files under 256 KiB
