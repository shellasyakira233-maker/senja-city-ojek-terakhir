# Screenshot — Senja City: Ojek Terakhir

## Status
4 screenshot BELUM diambil di mesin build ini: tidak ada headless browser
(Chromium / Firefox / Playwright) di mesin ini, dan gambar TIDAK BOLEH dikarang.
Yang sudah disiapkan: 4 scene deterministik di game + daftar shot ini.
Pengambilan dilakukan di Chrome desktop (lihat langkah di bawah).

## Aturan make.fun (jangan dilanggar)
- `screenshots/` berisi 3 atau 4 PNG/JPEG, render asli dari kode game sendiri.
- File pertama menurut nama adalah COVER.
- Dilarang diedit, dikomposit, atau dipinjam. Jangan Photoshop, jangan tempel.
- Masing-masing file maksimal 256 KiB (cek: `ls -lh screenshots/`).

## Scene deterministik (game membaca `?shot=` dari URL)
Game dibekukan timer misi & jam-nya di mode ini supaya staging stabil.
Semua sistem (traffic, polisi, minimap, HUD) tetap jalan normal.

| File | URL (setelah `node serve.ts`) | Isi frame |
|---|---|---|
| `01-cover-senja-pangkalan.png` | `http://localhost:8080/?shot=cover` | Senja, motor + penumpang, angkot lewat, minimap, misi Pasar Senja |
| `02-kejar-kejaran-malam.png` | `http://localhost:8080/?shot=chase` | Wanted 3 bintang, 3 polisi mengejar, malam neon |
| `03-jalan-kaki-pasar-senja.png` | `http://localhost:8080/?shot=market` | Arka jalan kaki di Pasar Senja, pejalan kaki di sekitar |
| `04-misi-bu-sari-warteg.png` | `http://localhost:8080/?shot=warteg` | Paket Warteg diantar, dialog Bu Sari, minimap |

Daftar yang sama ada di `shots.json` di root repo.

## Langkah pengambilan (Chrome desktop, ~5 menit)
1. Di repo ini: `node serve.ts` → buka `http://localhost:8080/?shot=cover`.
2. Tekan F11 (fullscreen), zoom 100%, 1920x1080. Tunggu 2 detik sampai
   traffic & polisi masuk frame. Geser kursor ke pojok layar.
3. Screenshot (Windows: Win+Shift+S / macOS: Cmd+Shift+4), simpan sebagai
   `screenshots/01-cover-senja-pangkalan.png`.
4. Ulangi untuk `?shot=chase`, `?shot=market`, `?shot=warteg`.
5. Verifikasi: 4 file ada, masing-masing ≤ 256 KiB, cover = file 01,
   tidak ada UI browser / kursor / watermark di frame.
6. Commit + push, lalu jalankan ulang `makefun check` sebelum submit.

## Checklist per shot (dari Hari ke-2)
- [ ] 01: senja + motor + angkot + minimap + misi terlihat.
- [ ] 02: wanted + polisi mengejar terlihat.
- [ ] 03: jalan kaki + pejalan kaki + pasar terlihat.
- [ ] 04: dialog Bu Sari + misi + minimap terlihat.
