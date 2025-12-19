# Flowchart Alur Sistem Website

Berikut adalah gambaran alur kerja (flowchart) sistem website dalam format ASCII.

## 1. Arsitektur Umum (High Level)

Diagram ini menggambarkan hubungan antara Pengunjung Pubik, Administrator, dan Sistem.

```text
+-----------------+                    +---------------------+
|   PENGUNJUNG    |                    |    ADMINISTRATOR    |
|     (Publik)    |                    |   (Dosen/Staff)     |
+--------+--------+                    +----------+----------+
         |                                        |
         | Mengakses URL                          | Login ke /admin
         v                                        v
+-----------------------------+        +-----------------------------+
|      FRONTEND PUBLIK        |        |      BACKEND ADMIN          |
|        (React.js)           |        |    (Laravel + Breeze)       |
+--------------+--------------+        +--------------+--------------+
               |                                      |
               | Request Data                         | CRUD Data
               v                                      v
+--------------------------------------------------------------------+
|                          WEB SERVER & API                          |
|                       (Laravel Framework)                          |
+------------------------------+-------------------------------------+
                               |
                               | Query / Store
                               v
                    +---------------------+
                    |      DATABASE       |
                    |      (MySQL)        |
                    +---------------------+
```

## 2. Alur Pengguna Publik (User Flow)

Bagaimana pengunjung berinteraksi dengan fitur-fitur website.

```text
(Mulai)
   |
   v
[ Buka Website / ]
   |
   +---> [ Halaman Beranda ] ---------------------------+
   |     (Hero, Sambutan, Berita Terkini)               |
   |                                                    |
   +---> [ Menu Profil ]                                |
   |     |-- Visi Misi                                  |
   |     |-- Profil Lulusan                             |
   |     |-- Struktur Pimpinan                          |
   |     +-- CPL & Dosen                                |
   |                                                    |
   +---> [ Menu Akademik ]                              |
   |     |-- Kurikulum                                  |
   |     |-- Jadwal Kuliah                              |
   |     +-- Dokumen Akademik (Download/View)           |
   |                                                    |
   +---> [ Informasi ]                                  |
   |     |-- Berita (Baca Detail)                       |
   |     |-- Pengumuman                                 |
   |     +-- Prestasi                                   |
   |                                                    |
   +---> [ Panduan & SOP ]                              |
         +-- Baca Prosedur Operasional                  |
                                                        |
(Selesai) <---------------------------------------------+
```

## 3. Alur Administrator (Admin Flow)

Bagaimana admin mengelola konten website.

```text
(Mulai)
   |
   v
[ Akses /login ]
   |
   v
< Cek Kredensial? > ----(Gagal)---> [ Tampil Error ]
   |  (Sukses)
   v
[ Dashboard Admin ]
   |
   +---> [ Kelola Beranda ]
   |     |-- Edit Hero Section
   |     +-- Edit Welcome Message
   |
   +---> [ Kelola Informasi ]
   |     |-- Tambah/Edit/Hapus Berita
   |     |-- Tambah/Edit/Hapus Pengumuman
   |     +-- Kelola Testimonial & Fasilitas
   |
   +---> [ Kelola Data Institusi ]
   |     |-- Update Visi Misi
   |     |-- Kelola Data Dosen (Foto/NIP)
   |     +-- Kelola Struktur Organisasi
   |
   +---> [ Kelola Akademik ]
   |     +-- Upload Dokumen & Kurikulum
   |
   +---> [ Pengaturan Akun ]
         +-- Ubah Password / Profil
   |
   v
(Logout)
```
