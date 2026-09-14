# Persiapan domain dan Google Search Console

SEO teknis sudah disiapkan. Situs tetap privat dan `indexingEnabled` bernilai `false` selama belum diluncurkan. Tag `noindex` merupakan lapisan tambahan agar salinan persiapan tidak ikut terindeks bila aksesnya tanpa sengaja dibuka. Sitemap dan seluruh struktur halaman tetap tersedia untuk pengujian dengan akses pemilik.

## Satu konfigurasi untuk peluncuran

Edit `seo.config.json` setelah domain final tersedia:

- `canonicalOrigin`: origin HTTPS domain utama, misalnya `https://www.example.com`, tanpa path, query, atau fragment. Pilih www atau non-www secara konsisten.
- `indexingEnabled`: ubah menjadi `true` hanya setelah konten dan domain siap serta akses publik telah disetujui.
- `googleSiteVerification`: opsional; isi hanya nilai `content` dari tag verifikasi HTML Google. Biarkan kosong bila memakai verifikasi DNS.

Pengaturan ini dibaca saat build; jalankan build dan terbitkan ulang setelah mengubahnya. Canonical setiap halaman, metadata berbagi, sitemap, serta URL Organization, WebSite, Service, dan BreadcrumbList memakai origin yang sama. Menghubungkan domain saja tidak mengganti konfigurasi tersebut.

## Urutan peluncuran

1. Hubungkan domain ke hosting dan pastikan DNS serta HTTPS aktif.
2. Isi domain final pada konfigurasi. Aktifkan pengindeksan, lalu build dan terbitkan ulang setelah izin akses publik diberikan.
3. Pastikan beranda, /tentang, /layanan, /pelatihan, /kontak, /robots.txt, dan /sitemap.xml dapat dibuka tanpa login; halaman tidak memiliki meta/HTTP noindex.
4. Pastikan seluruh canonical dan URL sitemap menggunakan domain final. Bila domain lama sudah diindeks, siapkan redirect permanen ke domain final pada hosting yang mendukungnya.
5. Tambahkan properti Domain di Google Search Console dan verifikasi DNS. Alternatif: properti URL-prefix dengan tag HTML melalui googleSiteVerification, lalu build dan terbitkan ulang untuk memasang tag.
6. Kirim sitemap.xml dan gunakan URL Inspection untuk memeriksa halaman penting serta meminta pengindeksan.

Domain, DNS, akses publik, dan verifikasi Search Console belum diaktifkan oleh konfigurasi ini. Jangan menempelkan kata sandi, API key, atau kredensial akun ke file ini. Token verifikasi HTML merupakan nilai publik.

Sitelink dipilih otomatis oleh Google, bukan diaktifkan oleh schema tertentu. Pantau Page Indexing dan Performance setelah peluncuran; pengiriman sitemap tidak menjamin indexing, peringkat, atau sitelink.

Referensi: https://developers.google.com/search/docs/appearance/sitelinks
