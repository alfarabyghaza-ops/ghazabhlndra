/* JavaScript tambahan yang kecil: pencarian halaman dan demo form.
   Layout dan desain tetap menggunakan HTML + CSS, tanpa framework.
   Tidak ada database, localStorage, atau permintaan jaringan. */

// 1. Daftar halaman untuk pencarian lokal.
const pages = [
    { title: 'Home', url: 'index.html', keywords: 'beranda armada cerita' },
    { title: 'Profil', url: 'profile.html', keywords: 'profile identitas pendidikan hobi kontak ghaza' },
    { title: 'Gallery', url: 'galery.html', keywords: 'galeri galery foto dokumentasi kegiatan' },
    { title: 'Article', url: 'article.html', keywords: 'artikel cerita laut pelabuhan' },
    { title: 'Guestbook', url: 'guestbook.html', keywords: 'buku tamu biodata formulir pesan' },
    { title: 'About Me', url: 'aboutme.html', keywords: 'tentang saya project mahasiswa' },
    { title: 'Tutorial', url: 'tutorial.html', keywords: 'belajar html css flexbox grid responsif' }
];
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('#site-search');
const searchResults = document.querySelector('#search-results');

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    searchResults.replaceChildren();
    searchResults.hidden = false;
    const matches = query ? pages.filter(function (page) {
        return (page.title + ' ' + page.keywords).toLowerCase().includes(query);
    }) : [];
    const message = document.createElement('p');
    message.textContent = !query ? 'Ketik nama halaman atau kata seperti foto, profil, atau CSS.' : matches.length ? 'Halaman yang cocok:' : 'Belum ada hasil. Coba kata foto, profil, atau CSS.';
    searchResults.append(message);
    matches.forEach(function (page) {
        const link = document.createElement('a');
        link.href = page.url;
        link.textContent = page.title + ' ↗';
        searchResults.append(link);
    });
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') searchResults.hidden = true;
});
searchInput.addEventListener('input', function () { searchResults.hidden = true; });

// 2. Form demo: cek input, lalu tampilkan pesan; bukan mengirim data.
const guestForm = document.querySelector('#guestbook-form');
if (guestForm) {
    const password = document.querySelector('#password');
    const confirmation = document.querySelector('#konfirmasi');
    const status = document.querySelector('#form-status');
    function checkPassword() {
        const mismatch = password.value !== confirmation.value;
        confirmation.setCustomValidity(mismatch ? 'Password contoh dan konfirmasi belum sama.' : '');
    }
    password.addEventListener('input', checkPassword);
    confirmation.addEventListener('input', checkPassword);
    guestForm.addEventListener('submit', function (event) {
        event.preventDefault();
        checkPassword();
        if (!guestForm.reportValidity()) return;
        status.textContent = 'Form contoh berhasil divalidasi. Ini hanya demo: data tidak dikirim, tidak disimpan, dan tidak membuat akun.';
    });
    guestForm.addEventListener('reset', function () {
        confirmation.setCustomValidity('');
        status.textContent = '';
    });
}
