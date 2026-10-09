# Project CSS Ghaza — versi lengkap

## Membuka hasil
1. Ekstrak ZIP terlebih dahulu (jangan membuka HTML dari dalam ZIP).
2. Buka index.html menggunakan Chrome, Edge, atau Firefox.
3. Semua CSS, JavaScript, dan foto tersedia lokal. Tidak perlu instalasi, npm, atau koneksi internet untuk melihat desain. Link media sosial memerlukan internet.
4. Alternatif saat mengedit: buka folder di VS Code dan gunakan Live Server.

## File utama
- index.html: Home.
- profile.html: profil dan pendidikan dari project HTML awal.
- galery.html: sembilan foto asli + caption.
- article.html: artikel laut dan pelabuhan dari project HTML awal.
- guestbook.html: biodata, akun contoh, dan pesan (demo).
- aboutme.html: tentang diri dan project.
- tutorial.html: penjelasan singkat CSS yang digunakan.
- mystyle.css: semua pengaturan desain, dengan komentar per bagian.
- script.js: tambahan pencarian halaman dan validasi form demo.
- gambar/: foto asli, konsisten huruf kecil.
- home.html, profil.html, about me.html: pengalihan nama lama ke halaman baru.
- referensi-awal/: HTML, CSS, dan banner awal dari ZIP CSS untuk perbandingan; bukan halaman website final.

## Kerangka yang dipertahankan
.top-menu → .header → .nav-bar → .isi-konten (.kiri + .tengah) → .footer.
Menu kiri menggunakan fieldset seperti latihan awal. Layout tabel sudah diganti Flexbox; gallery menggunakan Grid. Galeri kecil tidak menggunakan marquee supaya gambar mudah dilihat dan tidak bergerak terus.

## Yang dibetulkan
- widht → width, filex → flex, transition: 0,5s → .5s.
- Lebar yang tidak punya satuan diganti layout responsif.
- padding: 7px auto tidak valid; diganti nilai px.
- Path GAMBAR/gambar diseragamkan menjadi gambar.
- #guestbook.html diganti guestbook.html; semua tujuan menu tersedia.
- Bahasa dokumen menjadi id; tag penutup, label form, alt gambar, dan judul halaman dirapikan.
- Banner final memakai teks dan foto asli dengan CSS; banner awal tetap disimpan sebagai referensi.
- Tidak ada framework atau font eksternal.

## Cara belajar dari kode
1. Di mystyle.css, ubah --accent untuk mengganti warna aksen.
2. .wrap membatasi lebar konten; .isi-konten mengatur dua kolom.
3. .gallery-grid menggunakan repeat(3, 1fr) di desktop.
4. @media mengubah layout untuk tablet dan HP.
5. prefers-color-scheme menyesuaikan tema gelap perangkat. Untuk hasil maroon-krem seperti pratinjau, gunakan tema terang perangkat/browser.
6. style.css dipakai bersama, tetapi header/nav/footer HTML diulang di setiap halaman supaya tetap sederhana. Jika mengubah navbar, ubah di ketujuh halaman.

## Batas fungsi (penting)
- Pencarian hanya mencari halaman dan kata kunci dalam daftar script.js, bukan mesin pencarian seluruh teks.
- Form adalah DEMO latihan. Tidak ada server/database, pengiriman email, penyimpanan, atau pembuatan akun.
- Form mengecek nama/email wajib, format email, dan kecocokan password contoh jika diisi. Tidak memverifikasi kepemilikan email.
- File upload hanya memilih file lokal; tidak mengunggahnya.
- Gunakan data contoh, bukan password asli atau data sensitif.
- JavaScript digunakan hanya untuk fungsi tambahan; materi desain utama tetap HTML + CSS. Saat JavaScript dimatikan, halaman dan link tetap bisa dibuka; demo kirim/pencarian tidak aktif.
- Link media sosial diambil dari project pengguna; tidak diverifikasi melalui internet. Tautan TikTok placeholder tidak disertakan karena belum ada alamat akun.

## Sebelum dipublikasikan
Profil memuat tanggal lahir dan link kontak dari project awal. Hapus informasi pribadi yang tidak ingin kamu tampilkan ke publik. ZIP ini tidak mempublikasikan website secara otomatis.
