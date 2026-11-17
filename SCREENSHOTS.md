# Screenshot — Senja City: Ojek Terakhir

## Status
4 screenshot SUDAH diambil dari render asli game di sesi build ini, memakai
Playwright headless (Chromium), viewport 1280x720, lewat mode `?shot=` di
bawah. Masing-masing ≤ 256 KiB, tanpa console/page error saat pengambilan.
Tidak ada gambar yang diedit, dikomposit, atau dipinjam.

Perbaikan staging di sesi ini: scene `market` sekarang memakai fase
`toDropoff`, jadi marker hijau Pasar Senja terlihat di tengah frame
(marker jemput kuning di Pangkalan tadinya tertutup panel misi kiri bawah).
Arka dipindah ke y=440 agar misi tidak selesai sendiri sebelum screenshot
diambil (jarak ke tujuan 100 px, di atas ambang 58 px).

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
| `03-jalan-kaki-pasar-senja.png` | `http://localhost:8080/?shot=market` | Arka jalan kaki di Pasar Senja, marker hijau tujuan terlihat, pejalan kaki di sekitar |
| `04-misi-bu-sari-warteg.png` | `http://localhost:8080/?shot=warteg` | Paket Warteg diantar, dialog Bu Sari, minimap |

Daftar yang sama ada di `shots.json` di root repo.

## Cara pengambilan ulang (Playwright headless, di mesin build)
1. Di repo ini: `node serve.ts` (port 8080).
2. Jalankan skrip capture Playwright (viewport 1280x720): buka tiap
   `http://localhost:8080/?shot=cover|chase|market|warteg`, tunggu ~2 detik,
   lalu `page.screenshot()` ke `screenshots/0N-nama.png`.
3. Verifikasi: 4 file ada, masing-masing ≤ 256 KiB, cover = file 01,
   tidak ada console/page error, canvas tidak kosong.

## Langkah pengambilan manual (Chrome desktop, ~5 menit)
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
- [x] 01: senja + motor + angkot + minimap + misi terlihat.
- [x] 02: wanted + polisi mengejar terlihat.
- [x] 03: jalan kaki + pejalan kaki + pasar + marker tujuan terlihat.
- [x] 04: dialog Bu Sari + misi + minimap terlihat.
