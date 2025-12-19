# Laporan Analisis Fitur Website Teknik Informatika

## 1. Ringkasan Proyek
Proyek ini adalah aplikasi web modern untuk jurusan akademik (kemungkinan Teknik Informatika), yang dirancang dengan arsitektur **Single Page Application (SPA)**. Aplikasi ini memisahkan frontend yang interaktif (berbasis React) dengan backend yang kuat (Laravel), dihubungkan secara mulus menggunakan **Inertia.js**. Ini memungkinkan pengalaman pengguna yang sangat cepat tanpa reload halaman penuh, namun tetap mempertahankan kemudahan pengembangan khas framework web tradisional.

## 2. Pustaka Teknologi (Tech Stack)
Aplikasi ini dibangun menggunakan teknologi mutakhir:

*   **Backend**: Laravel 12 (PHP)
    *   Menangani logika bisnis, keamanan, dan database.
    *   Menggunakan fitur modern seperti **Laravel Breeze** dan **Sanctum** untuk otentikasi.
*   **Frontend**: React.js
    *   Antarmuka pengguna yang dinamis dan modular.
    *   **Inertia.js**: Menghubungkan Laravel dan React, memungkinkan routing backend merender komponen frontend secara langsung.
*   **Styling**: Tailwind CSS (v4)
    *   Desain responsif dan modern.
*   **Visual & Animasi**:
    *   **Three.js / React Three Fiber**: Digunakan untuk elemen grafis 3D (kemungkinan pada Hero section atau latar belakang).
    *   **Framer Motion & GSAP**: Untuk animasi transisi yang halus dan menarik.
    *   **Swiper**: Untuk fitur slider/carousel (misalnya pada Testimonial atau Fasilitas).

## 3. Fitur Utama (Halaman Publik)

Website ini memiliki berbagai fitur yang ditujukan untuk mahasiswa, dosen, dan pengunjung umum:

### A. Beranda (Homepage)
Halaman depan yang dinamis dan informatif, terdiri dari beberapa segmen:
*   **Hero Section**: Tampilan utama yang menarik perhatian, dikelola secara dinamis dari admin panel.
*   **Sambutan (Welcome Message)**: Pesan dari pimpinan prodi/jurusan.
*   **Berita & Pengumuman**: Menampilkan berita terbaru, pengumuman akademik, dan prestasi mahasiswa/dosen dalam format tab atau grid.
*   **Testimonial Alumni**: Silder pengalaman alumni untuk membangun kredibilitas.
*   **Profil Dosen**: Daftar singkat dosen pengajar.
*   **Fasilitas**: Galeri fasilitas yang tersedia di jurusan.

### B. Profil Jurusan
Halaman-halaman statis namun dinamis datanya untuk informasi institusi:
*   **Visi & Misi**: Menjelaskan arah dan tujuan jurusan.
*   **Profil Lulusan**: Deskripsi kompetensi lulusan.
*   **Struktur Pimpinan**: Bagan organisasi pimpinan jurusan.
*   **Dosen & CPL**: Direktori lengkap dosen dan Capaian Pembelajaran Lulusan (CPL).

### C. Akademik
Pusat informasi bagi mahasiswa aktif:
*   **Kurikulum**: Daftar mata kuliah dan struktur kurikulum.
*   **Jadwal**: Informasi jadwal kuliah atau kegiatan akademik.
*   **Dokumen**: Repository dokumen penting yang mungkin menggunakan integrasi PDF viewer (`@react-pdf-viewer/core`).

### D. Panduan & SOP
Halaman khusus untuk transparansi prosedur:
*   **Panduan**: Buku panduan akademik atau kemahasiswaan.
*   **SOP & Prosedur**: Standar Operasional Prosedur untuk berbagai layanan administrasi.

### E. Pusat Berita & Informasi
Halaman khusus `/berita` yang berfungsi sebagai pusat informasi terkini, dengan fitur:
*   **Agregasi Kategori**: Menampilkan tiga kategori utama (Berita, Pengumuman, dan Prestasi) dalam satu halaman yang terorganisir.
*   **Highlight Konten**: Memisahkan antara konten "Terbaru" dan "Populer" untuk setiap kategori, memudahkan pengunjung menemukan informasi hangat.
*   **Halaman Detail Artikel**:
    *   Tampilan artikel yang bersih dengan gambar utama yang responsif.
    *   **Sidebar Rekomendasi**: Menampilkan widget "Populer di [Kategori]" di sisi kanan artikel untuk meningkatkan retensi pembaca.
    *   Dukungan konten kaya (Rich Text) untuk isi berita.

## 4. Fitur Administrator (Back-Office)

Aplikasi memiliki panel admin khusus yang aman (`/admin`) untuk mengelola semua konten website tanpa mengubah kode.

### A. Dashboard Admin
*   Halaman beranda admin untuk melihat ringkasan aktivitas atau status sistem.

### B. Manajemen Konten (CMS)
Admin dapat melakukan operasi CRUD (Create, Read, Update, Delete) pada hampir semua data aplikasi:
1.  **Halaman Depan**:
    *   Mengedit teks dan gambar pada **Hero Section**.
    *   Mengubah **Welcome Message**.
2.  **Informasi**:
    *   Manajemen **Berita, Pengumuman, dan Prestasi**.
    *   Manajemen **Testimonial** (menambah data alumni).
    *   Manajemen **Fasilitas** (upload foto dan deskripsi).
3.  **Data Institusi**:
    *   Update **Visi Misi dan Profil Lulusan**.
    *   Update **Struktur Pimpinan**.
    *   Manajemen Data **Dosen** (Nama, NIP, Foto, Bidang Keahlian).
    *   Manajemen **CPL** (Capaian Pembelajaran).
4.  **Akademik & SOP**:
    *   Mengunggah dan mengelola dokumen Akademik.
    *   Mengelola file dan teks untuk Panduan dan SOP.

### C. Keamanan & Otentikasi
*   **Login Aman**: Menggunakan sistem otentikasi standar Laravel yang tangguh.
*   **Role-Based Access**: Middleware `IsAdmin` memastikan hanya pengguna dengan hak akses admin yang bisa masuk ke panel pengelolaan.
*   **Profil Admin**: Admin dapat mengubah informasi profil dan password mereka sendiri.

## 5. Kesimpulan
Website ini adalah solusi lengkap content management system (CMS) yang dikhususkan untuk kebutuhan akademik. Dengan pemisahan yang jelas antara **Frontend Publik** (untuk kecepatan dan keindahan visual) dan **Backend Admin** (untuk kemudahan pengelolaan data), sistem ini siap mendukung digitalisasi informasi di jurusan Teknik Informatika.
