<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        $now = now();

        DB::table('hero_sections')->updateOrInsert(
            ['id' => 1],
            [
                'hero_image_path' => '/images/site/campus-hero.svg',
                'title' => 'Teknik Informatika Fakultas Ilmu Komputer',
                'paragraph_1' => 'Program Studi Teknik Informatika berfokus pada pengembangan kemampuan rekayasa perangkat lunak, kecerdasan buatan, sistem data, jaringan komputer, dan keamanan siber. Mahasiswa diarahkan untuk memahami konsep komputasi sekaligus menerapkannya dalam solusi teknologi yang berdampak.',
                'paragraph_2' => 'Melalui pembelajaran berbasis proyek, kurikulum OBE, kegiatan laboratorium, dan kolaborasi dengan berbagai mitra, program studi mempersiapkan lulusan yang adaptif, profesional, dan siap berkontribusi di ekosistem digital.',
                'created_at' => $now,
                'updated_at' => $now,
            ]
        );

        DB::table('welcome_messages')->updateOrInsert(
            ['id' => 1],
            [
                'kajur_image_path' => '/images/site/welcome-profile.svg',
                'title' => 'Selamat datang di Program Studi Teknik Informatika',
                'paragraph_1' => 'Website ini menjadi pusat informasi akademik, profil program studi, kegiatan mahasiswa, berita, dan layanan dokumen bagi civitas akademika Teknik Informatika.',
                'paragraph_2' => 'Kami terus mendorong budaya belajar yang kolaboratif, terbuka terhadap inovasi, dan relevan dengan kebutuhan industri teknologi informasi.',
                'name' => 'Ketua Program Studi Teknik Informatika',
                'created_at' => $now,
                'updated_at' => $now,
            ]
        );

        $lecturers = [
            [1, 'Hadipurnawan Satria, M.Sc., Ph.D.', 'Dosen Bidang Sistem Terdistribusi', '/images/site/lecturer-network.svg'],
            [2, 'Anggina Primanita, M.IT., Ph.D.', 'Dosen Bidang Interaksi Manusia dan Komputer', '/images/site/lecturer-software.svg'],
            [3, 'Kanda Januar Miraswan, M.T.', 'Dosen Bidang Big Data dan Pengenalan Pola', '/images/site/lecturer-data.svg'],
            [4, 'Novi Yusliani, M.T.', 'Dosen Bidang Pemrosesan Bahasa Alami', '/images/site/lecturer-data.svg'],
            [5, 'Citra Dewi, S.Kom., M.Kom.', 'Dosen Bidang Jaringan Komputer dan Keamanan', '/images/site/lecturer-network.svg'],
        ];

        foreach ($lecturers as [$id, $name, $title, $photoUrl]) {
            DB::table('lecturers')->updateOrInsert(
                ['id' => $id],
                [
                    'name' => $name,
                    'title' => $title,
                    'photoUrl' => $photoUrl,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]
            );
        }

        $facilities = [
            [1, 'Laboratorium Komputasi', '/images/site/facility-lab.svg'],
            [2, 'Ruang Kelas Interaktif', '/images/site/facility-classroom.svg'],
            [3, 'Perpustakaan Digital', '/images/site/facility-library.svg'],
            [4, 'Ruang Diskusi Mahasiswa', '/images/site/news-event.svg'],
            [5, 'Layanan Akademik', '/images/site/announcement.svg'],
            [6, 'Ruang Riset dan Inovasi', '/images/site/news-research.svg'],
        ];

        foreach ($facilities as [$id, $name, $imagePath]) {
            DB::table('facilities')->updateOrInsert(
                ['id' => $id],
                [
                    'name' => $name,
                    'facilities_image_path' => $imagePath,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]
            );
        }

        DB::table('news_announcements_achievements')
            ->whereIn('category', ['berita', 'pengumuman', 'prestasi'])
            ->delete();

        DB::table('news_announcements_achievements')->insert([
            [
                'title' => 'Mahasiswa Informatika Kembangkan Prototipe Sistem Informasi Akademik Berbasis Web',
                'slug' => 'mahasiswa-informatika-kembangkan-sistem-informasi-akademik',
                'category' => 'berita',
                'is_popular' => true,
                'excerpt' => 'Tim mahasiswa mengembangkan prototipe aplikasi akademik untuk mendukung layanan informasi program studi.',
                'body' => '<p>Mahasiswa Teknik Informatika mengembangkan prototipe sistem informasi akademik berbasis web yang dirancang untuk membantu penyajian informasi program studi, berita, dokumen akademik, dan layanan administrasi secara lebih terstruktur.</p><p>Pengembangan ini menjadi bagian dari pembelajaran berbasis proyek yang menekankan kemampuan analisis kebutuhan, perancangan antarmuka, pengelolaan basis data, dan deployment aplikasi web.</p>',
                'image_url' => '/images/site/news-research.svg',
                'student_name' => null,
                'date' => '2026-06-10',
                'published_at' => $now,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Workshop UI/UX dan Frontend Development untuk Mahasiswa',
                'slug' => 'workshop-ui-ux-dan-frontend-development',
                'category' => 'berita',
                'is_popular' => true,
                'excerpt' => 'Workshop memperkenalkan proses desain produk digital, prototyping, dan implementasi antarmuka modern.',
                'body' => '<p>Program studi menyelenggarakan workshop UI/UX dan frontend development untuk memperkuat pemahaman mahasiswa terhadap proses desain produk digital.</p><p>Kegiatan ini mencakup riset pengguna, perancangan wireframe, pembuatan prototype, serta praktik implementasi antarmuka menggunakan teknologi web modern.</p>',
                'image_url' => '/images/site/news-event.svg',
                'student_name' => null,
                'date' => '2026-06-08',
                'published_at' => $now,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Kolaborasi Riset Data Science Dorong Inovasi Pembelajaran',
                'slug' => 'kolaborasi-riset-data-science-dorong-inovasi-pembelajaran',
                'category' => 'berita',
                'is_popular' => false,
                'excerpt' => 'Dosen dan mahasiswa mulai memetakan topik riset data science untuk mendukung pengembangan layanan digital.',
                'body' => '<p>Kolaborasi riset di bidang data science diarahkan untuk menghasilkan solusi berbasis data yang dapat membantu proses analisis, pelaporan, dan pengambilan keputusan.</p><p>Topik yang dibahas meliputi data preprocessing, visualisasi data, machine learning dasar, dan evaluasi model secara bertanggung jawab.</p>',
                'image_url' => '/images/site/news-research.svg',
                'student_name' => null,
                'date' => '2026-06-05',
                'published_at' => $now,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Pengumuman Pengisian KRS Semester Ganjil',
                'slug' => 'pengumuman-pengisian-krs-semester-ganjil',
                'category' => 'pengumuman',
                'is_popular' => true,
                'excerpt' => 'Mahasiswa diminta memperhatikan jadwal pengisian KRS dan berkonsultasi dengan dosen pembimbing akademik.',
                'body' => '<p>Mahasiswa diminta melakukan pengisian KRS sesuai jadwal akademik yang berlaku. Sebelum finalisasi, mahasiswa disarankan berkonsultasi dengan dosen pembimbing akademik agar mata kuliah yang dipilih sesuai dengan rencana studi.</p>',
                'image_url' => '/images/site/announcement.svg',
                'student_name' => null,
                'date' => '2026-06-12',
                'published_at' => $now,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Informasi Layanan Administrasi Akademik',
                'slug' => 'informasi-layanan-administrasi-akademik',
                'category' => 'pengumuman',
                'is_popular' => false,
                'excerpt' => 'Layanan surat aktif kuliah, rekomendasi, dan administrasi akademik dapat diajukan melalui kanal resmi program studi.',
                'body' => '<p>Program studi menyediakan layanan administrasi akademik untuk kebutuhan surat aktif kuliah, rekomendasi kegiatan, dan dokumen pendukung akademik lainnya. Mahasiswa dapat menghubungi layanan administrasi pada jam kerja.</p>',
                'image_url' => '/images/site/announcement.svg',
                'student_name' => null,
                'date' => '2026-06-09',
                'published_at' => $now,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Tim Mahasiswa Raih Penghargaan pada Kompetisi Aplikasi Web',
                'slug' => 'tim-mahasiswa-raih-penghargaan-kompetisi-aplikasi-web',
                'category' => 'prestasi',
                'is_popular' => true,
                'excerpt' => 'Prestasi mahasiswa menunjukkan kemampuan dalam merancang solusi digital yang relevan dan siap digunakan.',
                'body' => '<p>Tim mahasiswa Teknik Informatika meraih penghargaan pada kompetisi pengembangan aplikasi web. Produk yang dikembangkan menekankan aspek kegunaan, performa, dan kemudahan akses bagi pengguna.</p><p>Prestasi ini menjadi bukti bahwa pembelajaran berbasis proyek dapat mendorong mahasiswa menghasilkan karya yang kompetitif.</p>',
                'image_url' => '/images/site/achievement.svg',
                'student_name' => 'Tim Web Informatika',
                'date' => '2026-06-07',
                'published_at' => $now,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Mahasiswa Informatika Masuk Final Kompetisi Data Analytics',
                'slug' => 'mahasiswa-informatika-final-kompetisi-data-analytics',
                'category' => 'prestasi',
                'is_popular' => true,
                'excerpt' => 'Finalis mempresentasikan analisis data dan rekomendasi berbasis visualisasi yang mudah dipahami.',
                'body' => '<p>Mahasiswa Teknik Informatika berhasil masuk babak final kompetisi data analytics. Presentasi yang dibawakan menekankan kualitas data, interpretasi hasil, dan komunikasi insight secara visual.</p>',
                'image_url' => '/images/site/achievement.svg',
                'student_name' => 'Kelompok Data Science',
                'date' => '2026-06-03',
                'published_at' => $now,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);

        DB::table('testimonials')->delete();
        DB::table('testimonials')->insert([
            [
                'name' => 'Rizky Pratama',
                'title' => 'Software Engineer',
                'major' => 'Teknik Informatika Angkatan 2021',
                'avatar' => null,
                'text' => 'Pembelajaran berbasis proyek membuat saya terbiasa memecahkan masalah dari kebutuhan nyata. Pengalaman membangun aplikasi web, berdiskusi dalam tim, dan melakukan presentasi teknis sangat membantu saat masuk dunia kerja.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Nadia Aulia',
                'title' => 'UI/UX Designer',
                'major' => 'Teknik Informatika Angkatan 2020',
                'avatar' => null,
                'text' => 'Materi rekayasa perangkat lunak dan interaksi manusia-komputer membantu saya memahami bahwa produk digital bukan hanya soal kode, tetapi juga pengalaman pengguna, alur kerja, dan validasi kebutuhan.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Dimas Arya',
                'title' => 'Data Analyst',
                'major' => 'Teknik Informatika Angkatan 2019',
                'avatar' => null,
                'text' => 'Dasar pemrograman, basis data, dan analisis data yang dipelajari selama kuliah menjadi bekal penting untuk mengolah data, membuat visualisasi, dan menyampaikan rekomendasi kepada tim bisnis.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Salsabila Putri',
                'title' => 'Quality Assurance Engineer',
                'major' => 'Teknik Informatika Angkatan 2022',
                'avatar' => null,
                'text' => 'Kebiasaan membuat dokumentasi, menguji fitur, dan memahami alur sistem sejak kuliah sangat membantu saya bekerja sebagai QA. Saya belajar melihat aplikasi dari sisi teknis dan pengguna.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);

        DB::table('struktur_pimpinans')->updateOrInsert(
            ['id' => 1],
            [
                'content' => '/images/site/structure.svg',
                'created_at' => $now,
                'updated_at' => $now,
            ]
        );

        DB::table('akademiks')->where('id', 4)->update([
            'title' => 'Ringkasan Kurikulum OBE Program Studi',
            'category' => 'dokumen',
            'slug' => 'ringkasan-kurikulum-obe-program-studi',
            'updated_at' => $now,
        ]);

        DB::table('akademiks')->where('id', 5)->update([
            'title' => 'Panduan Kegiatan Akademik Mahasiswa',
            'category' => 'dokumen',
            'slug' => 'panduan-kegiatan-akademik-mahasiswa',
            'updated_at' => $now,
        ]);

        DB::table('panduan_sops')->where('id', 7)->update([
            'title' => 'Panduan Layanan Akademik Mahasiswa',
            'category' => 'panduan',
            'slug' => 'panduan-layanan-akademik-mahasiswa',
            'updated_at' => $now,
        ]);
    }

    public function down(): void
    {
        // Demo content migration is intentionally not reversible.
    }
};
