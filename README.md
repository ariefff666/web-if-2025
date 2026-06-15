<div align="center">

# 🎓 Website Teknik Informatika

### Sistem Informasi & Content Management System — Program Studi Teknik Informatika

[![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Inertia.js](https://img.shields.io/badge/Inertia.js-2-9553E9?style=for-the-badge&logo=inertia&logoColor=white)](https://inertiajs.com)

<br/>

Website resmi Program Studi Teknik Informatika yang dibangun dengan arsitektur **Single Page Application (SPA)** modern. Menggabungkan kekuatan **Laravel** sebagai backend dan **React** sebagai frontend melalui **Inertia.js**, menghasilkan pengalaman pengguna yang cepat, interaktif, dan responsif.

<br/>

[Fitur](#-fitur-utama) · [Tech Stack](#-tech-stack) · [Instalasi](#-instalasi) · [Struktur Proyek](#-struktur-proyek) · [Kontributor](#-kontributor)

</div>

---

## ✨ Fitur Utama

### 🌐 Halaman Publik

<table>
<tr>
<td width="50%">

**🏠 Beranda**
- Hero section dinamis (dikelola via admin)
- Sambutan pimpinan prodi
- Berita, pengumuman & prestasi terbaru
- Testimonial alumni (slider)
- Profil dosen & galeri fasilitas

</td>
<td width="50%">

**📰 Pusat Informasi**
- Agregasi berita, pengumuman & prestasi
- Highlight konten terbaru & populer
- Halaman detail artikel dengan rich text
- Sidebar rekomendasi artikel terkait

</td>
</tr>
<tr>
<td width="50%">

**🎓 Profil Jurusan**
- Visi & misi program studi
- Profil lulusan & kompetensi
- Struktur organisasi pimpinan
- Direktori dosen & Capaian Pembelajaran (CPL)

</td>
<td width="50%">

**📚 Akademik & Panduan**
- Kurikulum & daftar mata kuliah
- Jadwal kuliah & kegiatan akademik
- Dokumen akademik (PDF viewer)
- SOP & prosedur layanan administrasi

</td>
</tr>
</table>

### 🔐 Panel Administrator

<table>
<tr>
<td width="50%">

**📊 Dashboard & CMS**
- Dashboard ringkasan aktivitas
- CRUD berita, pengumuman & prestasi
- Manajemen hero section & welcome message
- Kelola testimonial & fasilitas

</td>
<td width="50%">

**⚙️ Manajemen Data**
- Kelola data dosen (Nama, NIP, Foto, Keahlian)
- Update visi misi & profil lulusan
- Kelola struktur organisasi
- Upload dokumen akademik & SOP

</td>
</tr>
</table>

> 🔒 **Keamanan**: Autentikasi Laravel Breeze + Sanctum dengan middleware `IsAdmin` untuk role-based access control.

---

## 🛠 Tech Stack

### Backend
| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| **PHP** | ^8.2 | Runtime bahasa |
| **Laravel** | 12 | Framework backend |
| **Inertia.js** | 2.0 | Bridge backend-frontend |
| **Laravel Breeze** | 2.3 | Autentikasi |
| **Laravel Sanctum** | 4.0 | API token & session |
| **MySQL** | - | Database relasional |

### Frontend
| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| **React** | 18 | Library UI |
| **TypeScript** | 5 | Type-safe JavaScript |
| **Tailwind CSS** | 4 | Utility-first CSS |
| **Vite** | 7 | Build tool & dev server |

### Visual & Animasi
| Teknologi | Fungsi |
|-----------|--------|
| **Three.js + React Three Fiber** | Elemen grafis 3D |
| **Framer Motion** | Animasi transisi halus |
| **GSAP** | Animasi timeline kompleks |
| **Swiper** | Slider & carousel |
| **tsParticles** | Efek partikel interaktif |

---

## 🚀 Instalasi

### Prasyarat

Pastikan sistem Anda telah terinstal:

- **PHP** >= 8.2
- **Composer** >= 2.x
- **Node.js** >= 20.x
- **MySQL** >= 8.0
- **Git**

### Langkah Instalasi

**1. Clone repository**

```bash
git clone https://github.com/ariefff666/web-if-2025.git
cd web-if-2025
```

**2. Install dependencies**

```bash
# Backend dependencies
composer install

# Frontend dependencies
npm install
```

**3. Konfigurasi environment**

```bash
# Salin file environment
cp .env.example .env

# Generate application key
php artisan key:generate
```

**4. Setup database**

Buat database MySQL bernama `web-if-2025`, lalu sesuaikan konfigurasi di file `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=web-if-2025
DB_USERNAME=root
DB_PASSWORD=
```

**5. Migrasi & seed database**

```bash
php artisan migrate --seed
```

Atau import dari file SQL yang tersedia:

```bash
mysql -u root web-if-2025 < "web-if-2025 (3).sql"
```

**6. Jalankan aplikasi**

```bash
# Opsi 1: Jalankan semua service sekaligus
composer dev

# Opsi 2: Jalankan terpisah (di terminal berbeda)
php artisan serve        # Backend  → http://localhost:8000
npm run dev              # Frontend → Vite dev server
```

---

## 📁 Struktur Proyek

```
web-if-2025/
├── app/
│   ├── Http/
│   │   ├── Controllers/          # Controller backend
│   │   │   ├── Admin/            # Controller panel admin
│   │   │   └── ...               # Controller halaman publik
│   │   └── Middleware/           # Middleware (IsAdmin, dll.)
│   ├── Models/                   # Eloquent models
│   └── Providers/                # Service providers
│
├── resources/
│   └── js/
│       ├── Components/           # Komponen React reusable
│       │   ├── Admin/            # Komponen khusus admin
│       │   ├── Beranda/          # Komponen halaman beranda
│       │   ├── Navbar/           # Navigasi utama
│       │   └── Footer/           # Footer website
│       ├── Layouts/              # Layout templates
│       ├── Pages/                # Halaman-halaman (routes)
│       │   ├── Admin/            # Halaman panel admin
│       │   ├── Akademik/         # Halaman akademik
│       │   ├── Berita/           # Halaman berita
│       │   ├── Profil/           # Halaman profil jurusan
│       │   └── PanduanSop/       # Halaman panduan & SOP
│       └── types/                # TypeScript type definitions
│
├── routes/
│   ├── web.php                   # Route utama
│   └── auth.php                  # Route autentikasi
│
├── database/
│   ├── migrations/               # Skema database
│   ├── seeders/                  # Data seeder
│   └── factories/                # Model factories
│
└── public/                       # Asset publik
```

---

## 🏗 Arsitektur Sistem

```
┌─────────────────┐                    ┌─────────────────┐
│   PENGUNJUNG     │                    │  ADMINISTRATOR   │
│    (Publik)      │                    │  (Dosen/Staff)   │
└────────┬────────┘                    └────────┬────────┘
         │                                       │
         │ Mengakses URL                         │ Login /admin
         ▼                                       ▼
┌─────────────────────────┐         ┌─────────────────────────┐
│    FRONTEND PUBLIK       │         │    BACKEND ADMIN         │
│   React + Inertia.js     │         │  Laravel Breeze + CRUD   │
└────────────┬────────────┘         └────────────┬────────────┘
             │                                    │
             └──────────────┬─────────────────────┘
                            │
                            ▼
              ┌──────────────────────────┐
              │     LARAVEL FRAMEWORK     │
              │    (API + Web Server)     │
              └────────────┬─────────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │     MySQL DB     │
                  └─────────────────┘
```

---

## 📦 Scripts

| Command | Deskripsi |
|---------|-----------|
| `composer dev` | Jalankan semua service (server, queue, logs, vite) |
| `npm run dev` | Jalankan Vite dev server |
| `npm run build` | Build production assets |
| `npm run lint` | Jalankan ESLint |
| `composer test` | Jalankan test suite |

---

## 👥 Kontributor

<table>
<tr>
<td align="center">
<a href="https://github.com/ariefff666">
<img src="https://github.com/ariefff666.png" width="100px;" alt="Muhammad Arief Pratama" style="border-radius:50%"/><br/>
<b>Muhammad Arief Pratama</b>
</a><br/>
<sub>Full Stack Developer</sub>
</td>
<td align="center">
<a href="https://github.com/hanrsyidin">
<img src="https://github.com/hanrsyidin.png" width="100px;" alt="Ahmad Farhan Rasyidin" style="border-radius:50%"/><br/>
<b>Ahmad Farhan Rasyidin</b>
</a><br/>
<sub>Full Stack Developer</sub>
</td>
</tr>
</table>

---

## 📄 Lisensi

Project ini dilisensikan di bawah [MIT License](https://opensource.org/licenses/MIT).

---

<div align="center">

**Dibuat dengan ❤️ untuk Program Studi Teknik Informatika**

[![GitHub](https://img.shields.io/badge/GitHub-ariefff666-181717?style=flat-square&logo=github)](https://github.com/ariefff666)

</div>
