# PT Primadev Global Consulting - Official Website

Repositori resmi website profil perusahaan **PT Primadev Global Consulting**. Proyek ini dibangun menggunakan arsitektur modern Next.js App Router, Tailwind CSS v4, TypeScript, serta dukungan penuh untuk containerization Docker dan multi-platform cloud deployment (Vercel, Cloudflare, dan VPS).

---

## Tentang Perusahaan

**PT Primadev Global Consulting** adalah perusahaan konsultan dan pelatihan butik (boutique consulting firm) terkemuka yang berfokus pada manajemen proyek, industri minyak dan gas (Oil & Gas), serta eksekusi proyek-proyek rekayasa dan konstruksi skala kompleks.

Didirikan pada tahun 2013, Primadev membantu organisasi dan korporasi menyelaraskan strategi, tata kelola, biaya, jadwal, dan mitigasi risiko agar para pemangku kepentingan memiliki visibilitas dan kepastian terukur dalam pengambilan keputusan strategis.

### Bidang Keahlian dan Layanan Utama

1. **EPCI Project Management**: Manajemen terintegrasi untuk fase Engineering, Procurement, Construction, dan Installation pada fasilitas hulu dan hilir energi.
2. **Cost, Schedule & Risk Analysis**: Analisis kuantitatif terpadu untuk mengevaluasi eksposur biaya dan jadwal sebelum menjadi deviasi proyek.
3. **Cost Estimating Berbasis Standar AACE**: Penyusunan dan peninjauan estimasi biaya proyek dengan metodologi internasional AACE International.
4. **Project Assurance & Health Check**: Tinjauan kesiapan proyek (project readiness review) dan audit independen berbasis risiko.
5. **Pelatihan Profesional & Sertifikasi**: Program pelatihan komprehensif, mulai dari Project Management Essentials hingga persiapan sertifikasi internasional Project Management Professional (PMP).
6. **Procurement & Negotiation Strategy**: Pendampingan pengadaan dan negosiasi kontrak strategis.

---

## Arsitektur Teknologi

- **Framework**: Next.js App Router (React 19)
- **Bundler & Build Engine**: Next.js Compiler (Turbopack)
- **Styling**: Tailwind CSS v4 (PostCSS)
- **Bahasa**: TypeScript 5.9
- **Containerization**: Docker & Docker Compose (Multi-stage build berbasis Node.js 22 Alpine Standalone)
- **Deployment Targets**: Vercel (Native), Docker / VPS, Cloudflare

---

## Struktur Direktori

```text
.
├── app/                  # Route handlers, halaman (App Router), dan layouts
│   ├── kontak/           # Halaman informasi kontak
│   ├── layanan/          # Halaman portofolio layanan konsultasi
│   ├── pelatihan/        # Halaman program pelatihan profesional
│   ├── tentang/          # Halaman profil perusahaan
│   ├── layout.tsx        # Root layout, metadata, favicon, dan structured data
│   └── page.tsx          # Beranda utama
├── components/           # Komponen UI modular dan navigasi
├── hooks/                # Custom React hooks
├── lib/                  # Utilitas SEO, terjemahan, dan konfigurasi data
├── public/               # Asset statis, favicon lengkap, manifest, dan gambar
├── Dockerfile            # Multi-stage production build configuration (Standalone)
├── docker-compose.yml    # Konfigurasi orkestrasi container Docker
├── next.config.ts        # Konfigurasi Next.js (output standalone)
├── postcss.config.mjs    # Konfigurasi PostCSS untuk Tailwind CSS v4
├── seo.config.json       # Konfigurasi domain kanonikal dan indexing SEO
└── tsconfig.json         # Konfigurasi TypeScript compiler
```

---

## Memulai Pengembangan Lokal

### Prasyarat

- Node.js versi 22.13.0 atau yang lebih baru
- npm versi 10 atau yang lebih baru
- (Opsional) Docker dan Docker Compose untuk pengujian container

### Instalasi

1. Kloning repositori ini:
   ```bash
   git clone https://github.com/username/primadev-global-consulting.git
   cd primadev-global-consulting
   ```

2. Instal dependensi proyek:
   ```bash
   npm install
   ```

### Menjalankan Server Pengembangan

Jalankan perintah berikut untuk memulai server lokal:

```bash
npm run dev
```

Buka peramban dan akses alamat: `http://localhost:3000`.

---

## Skrip yang Tersedia

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run dev` | Menjalankan server pengembangan lokal dengan Next.js Turbopack HMR. |
| `npm run build` | Melakukan kompilasi dan optimasi bundle untuk tahap produksi. |
| `npm run start` | Menjalankan server produksi Next.js pada port 3000. |
| `npm run lint` | Menjalankan pemeriksaan kualitas dan sintaksis kode menggunakan Oxlint. |
| `npm run format` | Melakukan pemformatan kode secara otomatis menggunakan Oxfmt. |

---

## Menjalankan Menggunakan Docker

Proyek ini telah dilengkapi dengan konfigurasi Docker multi-stage standalone yang aman, efisien, dan menggunakan pengguna non-root.

### Menggunakan Docker Compose (Direkomendasikan)

Jalankan perintah berikut pada direktori utama:

```bash
docker compose up --build -d
```

Aplikasi akan berjalan pada latar belakang dan dapat diakses melalui: `http://localhost:3000`

Untuk menghentikan container:

```bash
docker compose down
```

### Menggunakan Docker CLI Manual

1. Build image:
   ```bash
   docker build -t primadev-consulting:latest .
   ```

2. Jalankan container:
   ```bash
   docker run -d -p 3000:3000 --name primadev-web primadev-consulting:latest
   ```

---

## Panduan Penerapan (Deployment)

### 1. Vercel (Native Next.js)
1. Hubungkan repositori Git ke akun Vercel Anda.
2. Vercel akan otomatis mendeteksi framework **Next.js**.
3. Klik tombol **Deploy**. Vercel akan secara otomatis membangun dan menerbitkan situs dengan performa global edge.

### 2. Server VPS / Cloud VM (Docker)
Kloning repositori pada server tujuan, sesuaikan file konfigurasi, lalu jalankan:
```bash
docker compose up --build -d
```

---

## Konfigurasi SEO dan Domain

Pengaturan SEO dan URL kanonikal dikelola terpusat melalui file `seo.config.json`:

```json
{
  "canonicalOrigin": "https://primadev-global-consulting.primadev.id",
  "indexingEnabled": true,
  "googleSiteVerification": ""
}
```

- **canonicalOrigin**: URL domain utama berprotokol HTTPS.
- **indexingEnabled**: Nilai boolean (`true`/`false`) untuk mengaktifkan perayapan mesin pencari.
- **googleSiteVerification**: Kode verifikasi kepemilikan situs untuk Google Search Console.

---

## Informasi Kontak dan Legal

**PT Primadev Global Consulting**
- Alamat: Jakarta, Indonesia
- Email: primadevconsulting@gmail.com
- Telepon: +62 811-1883-646
- Website: [https://primadev-global-consulting.primadev.id](https://primadev-global-consulting.primadev.id)
- LinkedIn: [PT Primadev Global Consulting](https://www.linkedin.com/company/primadev-global-consulting)

---

Hak Cipta (c) PT Primadev Global Consulting. Seluruh hak cipta dilindungi undang-undang.
