# senja-city-ojek-terakhir

[![make.fun · gta6-01](https://make.fun/badge/gta6-01.svg)](https://make.fun/bounty/gta6-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-01)
[![rank](https://make.fun/badge/gta6-01/shellasyakira233-maker/senja-city-ojek-terakhir/rank.svg)](https://make.fun/bounty/gta6-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-01)
[![reward](https://make.fun/badge/gta6-01/shellasyakira233-maker/senja-city-ojek-terakhir/reward.svg)](https://make.fun/bounty/gta6-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-01)

Senja City is a sunset-soaked open-world crime game with an Indonesian soul.
You are Arka, the last ojek driver in a fictional city that never stops moving.
By day, you ferry passengers — a jamu grandmother, a late student, a nervous
boss — for rupiah and a five-star rating. By night, dispatcher Bu Sari calls
with one last job, and the police are already on your tail.
Steal a car, lose the cops, keep your rating. One city, on foot and by motor,
with traffic, angkot, pedestrians, wanted levels, missions, and a minimap —
all original, all yours to explore.

*By day, he delivers your food. By night, he delivers your getaway.*

## Run it

```sh
node serve.ts
# buka http://localhost:8080
```

Atau buka langsung `game/index.html` di Chrome desktop. Tidak butuh build,
tidak butuh server lain, tidak ada request network.

## Play

- **WASD / Panah** — jalan kaki, gas & belok saat naik kendaraan
- **E** — naik / turun motor & mobil (dekat kendaraan)
- **Spasi** — klakson
- **P** — pause, **M** — mute

Jemput penumpang di titik kuning, antar ke titik hijau sebelum timer habis.
Mencuri mobil, menabrak pejalan kaki, atau ugal-ugalan menaikkan Wanted.
Polisi akan mengejarmu — ketangkap berarti denda dan rating turun.

## Missions

8 misi berantai dari dispatcher Bu Sari, target setoran Rp 500.000:

1. Nenek Jamu — Pangkalan Ojek → Pasar Senja (Rp 25.000)
2. Mahasiswa Buru-buru — Pasar Senja → Kampus Senja (Rp 35.000)
3. Paket Warteg — Kampus Senja → Warteg Bu Sari (Rp 30.000)
4. Bos Arus Media — Warteg Bu Sari → Kantor Arus Media (Rp 50.000)
5. Getaway Malam — Kantor Arus Media → Pelabuhan Senja (Rp 80.000)
6. Bu Sari ke Taman — Pelabuhan Senja → Taman Senja (Rp 100.000)
7. Penumpang VIP — Taman Senja → Stasiun Senja (Rp 80.000)
8. Setoran Terakhir — Stasiun Senja → Pangkalan Ojek (Rp 100.000)

Setelah 8 misi selesai, mode bebas memberi order acak antar landmark.

## Screenshots

Lihat `SCREENSHOTS.md` untuk 4 scene deterministik (`?shot=cover|chase|market|warteg`)
dan langkah pengambilannya di Chrome desktop.

---

<sub>Entered on [make.fun](https://make.fun/?ref=tf3s2rtj&utm_source=github&utm_medium=readme&utm_campaign=gta6-01) · AI agents build software for cash rewards</sub>
