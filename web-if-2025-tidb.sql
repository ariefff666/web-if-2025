DROP DATABASE IF EXISTS `web_if_2025`;
CREATE DATABASE `web_if_2025` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `web_if_2025`;

-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 04, 2026 at 01:42 PM
-- Server version: 8.4.3
-- PHP Version: 8.3.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


--
-- Database: `web-if-2025`
--

-- --------------------------------------------------------

--
-- Table structure for table `akademiks`
--

CREATE TABLE `akademiks` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `akademiks`
--

INSERT INTO `akademiks` (`id`, `title`, `category`, `slug`, `file_path`, `created_at`, `updated_at`) VALUES
(4, 'RAG', 'dokumen', 'rag', '/storage/documents/akademik/wGyZqHNYjWB7uqQgfBFRLMIummmSMs9aeg2X4DXW.pdf', '2025-11-29 00:22:09', '2025-11-29 00:22:09'),
(5, 'anu', 'dokumen', 'anu', '/storage/documents/akademik/OcqMyL0PSLnyDDALZ0wtlh3wCo8Nokusj4yecjdZ.pdf', '2025-11-29 00:29:20', '2025-11-29 00:29:20');

-- --------------------------------------------------------

--
-- Table structure for table `akademik_dokumens`
--

CREATE TABLE `akademik_dokumens` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `akademik_dokumens`
--

INSERT INTO `akademik_dokumens` (`id`, `title`, `file_path`, `created_at`, `updated_at`) VALUES
(1, 'Kurikulum', '/storage/akademik/kurikulum.pdf', NULL, NULL),
(2, 'Dummy', '/storage/akademik/dummyPDF.pdf', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `c_p_l_s`
--

CREATE TABLE `c_p_l_s` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `kode` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kategori` enum('S','P','KU','KK') COLLATE utf8mb4_unicode_ci NOT NULL,
  `sub_kategori` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `c_p_l_s`
--

INSERT INTO `c_p_l_s` (`id`, `kode`, `kategori`, `sub_kategori`, `deskripsi`, `created_at`, `updated_at`) VALUES
(1, 'S1', 'S', 'Sikap dan Tata Nilai', 'Bertaqwa kepada Tuhan Yang Maha Esa dan mampu menunjukkan sikap\nreligius;', '2025-11-06 09:41:10', '2025-12-11 12:42:18'),
(2, 'S2', 'S', 'Sikap dan Tata Nilai', 'Menjunjung tinggi nilai kemanusiaan dalam menjalankan tugas berdasarkan\nagama, moral, dan etika;', '2025-11-06 09:41:10', '2025-12-11 12:42:28'),
(3, 'S3', 'S', 'Sikap dan Tata Nilai', 'Berkontribusi dalam peningkatan mutu kehidupan bermasyarakat, berbangsa,\nbernegara, dan kemajuan peradaban berdasarkan Pancasila;', '2025-11-06 09:41:10', '2025-12-11 12:42:36'),
(4, 'S4', 'S', 'Sikap dan Tata Nilai', 'Berperan sebagai warga negara yang bangga dan cinta tanah air, memiliki\nnasionalisme serta rasa tanggungjawab pada negara dan bangsa;', '2025-11-06 09:41:10', '2025-12-11 12:42:50'),
(5, 'S5', 'S', 'Sikap dan Tata Nilai', 'Menghargai keanekaragaman budaya, pandangan, agama, dan kepercayaan, serta pendapat atau temuan orisinal orang lain;', '2025-11-06 09:41:10', '2025-12-11 12:43:01'),
(6, 'S6', 'S', 'Sikap dan Tata Nilai', 'Bekerjasama dan memiliki kepekaan sosial serta kepedulian terhadap masyarakat\ndan lingkungan;', '2025-11-06 09:41:10', '2025-12-11 12:43:10'),
(7, 'S7', 'S', 'Sikap dan Tata Nilai', 'Taat hukum dan disiplin dalam kehidupan bermasyarakat dan bernegara;', '2025-11-06 09:41:10', '2025-12-11 12:43:25'),
(8, 'S8', 'S', 'Sikap dan Tata Nilai', 'Menginternalisasi nilai, norma, dan etik akademik;', '2025-11-06 09:41:10', '2025-12-11 12:43:48'),
(9, 'S9', 'S', 'Sikap dan Tata Nilai', 'Menunjukkan sikap bertanggungjawab atas pekerjaan di bidang keahliannya\nsecara mandiri;', '2025-11-06 09:41:10', '2025-12-11 12:44:05'),
(10, 'S10', 'S', 'Sikap dan Tata Nilai', 'Menginternalisasi semangat kemandirian, kejuangan, dan kewirausahaan;', '2025-11-06 09:41:10', '2025-12-11 12:44:28'),
(11, 'P1', 'P', 'Pengetahuan', 'Menguasai konsep-konsep matematika untuk memecahkan berbagai masalah yang berkaitan dengan logika, prinsip-prinsip pemodelan matematika, program linear, metode numerik, struktur diskrit, ilmu probabilitas, dan statistika;', '2025-11-06 09:41:10', '2025-12-11 12:59:15'),
(12, 'P2', 'P', 'Pengetahuan', 'Menguasai teori dan konsep yang mendasari ilmu komputer;', '2025-11-06 09:41:10', '2025-12-11 12:59:27'),
(13, 'P3', 'P', 'Pengetahuan', 'Menguasai prinsip algoritma dan logika pemrograman yang dapat digunakan\ndalam pemodelan dan desain sistem berbasis komputer;', '2025-11-06 09:41:10', '2025-12-11 12:59:58'),
(14, 'P4', 'P', 'Pengetahuan', 'Memahami konsep dan paradigma bahasa pemrograman komputer, dan penerapannya dalam menyelesaikan berbagai permasalahan sederhana, serta membandingkan berbagai solusi;', '2025-11-06 09:41:10', '2025-12-11 13:00:35'),
(15, 'P5', 'P', 'Pengetahuan', 'Memahami teori dasar arsitektur komputer dan jaringan komputer, termasuk perangkat keras komputer dan jaringan;', '2025-11-06 09:41:10', '2025-12-11 13:00:51'),
(16, 'P6', 'P', 'Pengetahuan', 'Menguasai metodologi pengembangan sistem, yaitu perencanaan, desain, penerapan, pengujian dan pemeliharaan sistem;', '2025-11-06 09:41:10', '2025-12-11 13:01:20'),
(17, 'P7', 'P', 'Pengetahuan', 'Menentukan pendekatan sistem cerdas yang sesuai dengan problem yang\ndihadapi, memilih representasi pengetahuan dan mekanisme penalarannya.', '2025-11-06 09:41:10', '2025-12-11 13:01:52'),
(18, 'P8', 'P', 'Pengetahuan', 'Menguasai algoritma dan pemrograman untuk memanipulasi data, grafis, citra,\nsuara, rendering, animasi, visualisasi, dan multimedia; dan', '2025-11-06 09:41:10', '2025-12-11 13:01:46'),
(19, 'P9', 'P', 'Pengetahuan', 'Memahami konsep pengolahan data untuk menghasilkan tren dan pola dalam\nsebuah data.', '2025-11-06 09:41:10', '2025-12-11 13:02:05'),
(20, 'KU1', 'KU', 'Keterampilan Umum', 'Mampu mengembangkan pemikiran logis, kritis, sistematis, dan kreatif melalui\npenelitian ilmiah, penciptaan desain atau karya seni dalam bidang ilmu\npengetahuan dan teknologi yang memperhatikan dan menerapkan nilai\nhumaniora sesuai dengan bidang keahliannya, menyusun konsepsi ilmiah dan\nhasil kajian berdasarkan kaidah, tata cara, dan etika ilmiah dalam bentuk tesis\natau bentuk lain yang setara, dan diunggah dalam laman perguruan tinggi, serta\nmakalah yang telah diterbitkan di jurnal ilmiah terakreditasi atau diterima di jurnal internasional;', '2025-11-06 09:41:10', '2025-12-11 12:44:44'),
(21, 'KU2', 'KU', 'Keterampilan Umum', 'Mampu melakukan validasi akademik atau kajian sesuai bidang keahliannya\ndalam menyelesaikan masalah di masyarakat atau industri yang relevan melalui pengembangan pengetahuan dan keahliannya;', '2025-11-06 09:41:10', '2025-12-11 12:45:01'),
(22, 'KU3', 'KU', 'Keterampilan Umum', 'Mampu menyusun ide, hasil pemikiran, dan argumen saintifik secara\nbertanggung jawab dan berdasarkan etika akademik, serta mengkomunikasikannya melalui media kepada masyarakat akademik dan masyarakat luas;', '2025-11-06 09:41:10', '2025-12-11 12:45:12'),
(23, 'KU4', 'KU', 'Keterampilan Umum', 'Mampu mengidentifikasi bidang keilmuan yang menjadi obyek penelitiannya\ndan memposisikan ke dalam suatu peta penelitian yang dikembangkan melalui pendekatan interdisiplin atau multidisiplin;', '2025-11-06 09:41:10', '2025-12-11 12:45:40'),
(24, 'KU5', 'KU', 'Keterampilan Umum', 'Mampu mengambil keputusan dalam konteks menyelesaikan masalah pengembangan ilmu pengetahuan dan teknologi yang memperhatikan dan menerapkan nilai humaniora berdasarkan kajian analisis atau eksperimental terhadap informasi dan data;', '2025-11-06 09:41:10', '2025-12-11 12:45:55'),
(25, 'KU6', 'KU', 'Keterampilan Umum', 'Mampu mengelola, mengembangkan dan memelihara jaringan kerja dengan kolega, sejawat di dalam lembaga dan komunitas penelitian yang lebih luas;', '2025-11-06 09:41:10', '2025-12-11 12:46:14'),
(26, 'KU7', 'KU', 'Keterampilan Umum', 'Mampu meningkatkan kapasitas pembelajaran secara mandiri; dan', '2025-11-06 09:41:10', '2025-12-11 12:47:14'),
(27, 'KU8', 'KU', 'Keterampilan Umum', 'Mampu mendokumentasikan, menyimpan, mengamankan, dan menemukan\nkembali data hasil penelitian dalam rangka menjamin kesahihan dan mencegah\nplagiasi.', '2025-11-06 09:41:10', '2025-12-11 12:47:29'),
(28, 'KK1', 'KK', 'Keterampilan Khusus', 'Menerapkan metodologi pengembangan sistem, yaitu perencanaan, desain,\npenerapan, pengujian dan pemeliharaan sistem;', '2025-11-06 09:41:10', '2025-12-11 12:48:49'),
(29, 'KK2', 'KK', 'Keterampilan Khusus', 'Merancang dan mengembangkan sistem penyimpanan data mulai dari skema\ndata, relasi data, penyimpanan yang efisien, dan pemeliharaan sistem\npenyimpanan data;', '2025-11-06 09:41:10', '2025-12-11 12:49:02'),
(30, 'KK3', 'KK', 'Keterampilan Khusus', 'Merancang dan mengembangkan environment sistem secara utuh, termasuk di dalamnya pemilihan topologi, hardware, middleware, dan software yang sesuai\ndengan kebutuhan;', '2025-11-06 09:41:10', '2025-12-11 12:49:17'),
(31, 'KK4', 'KK', 'Keterampilan Khusus', 'Mengembangkan rancangan solusi untuk menyelesaikaÅ„ permasalahan di\nbidang Informatika, mengukur kinerja suatu rancangan solusi, serta dapat mengumpulkan, mengolah, dan menyajikan data dengan akuntabel;', '2025-11-06 09:41:10', '2025-12-11 12:49:34'),
(32, 'KK5', 'KK', 'Keterampilan Khusus', 'Mampu mengembangkan perangkat lunak tepat guna yang bernilai ekonomis\ndan berdaya jual;', '2025-11-06 09:41:10', '2025-12-11 12:49:53'),
(33, 'KK6', 'KK', 'Keterampilan Khusus', 'Merancang dan mengembangkan suatu sistem cerdas baik melalui basis\npengetahuan maupun yang diperoleh melalui pembelajaran mesin; dan', '2025-11-06 09:41:10', '2025-12-11 12:50:07'),
(34, 'KK7', 'KK', 'Keterampilan Khusus', 'Mampu menganalisis dan menyajikan data beserta polanya secara visualisasi\nsehingga mudah dipahami oleh pengguna ataupun proses lain menggunakan alat bantu.', '2025-11-06 09:41:10', '2025-12-11 12:50:19');

-- --------------------------------------------------------

--
-- Table structure for table `facilities`
--

CREATE TABLE `facilities` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `facilities_image_path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `facilities`
--

INSERT INTO `facilities` (`id`, `name`, `facilities_image_path`, `created_at`, `updated_at`) VALUES
(1, 'Ruang Kelas', '/storage/fasilitas/ruang_kelas.png', '2025-11-01 10:05:20', '2025-11-01 10:05:20'),
(2, 'Ruang Perpustakaan', '/storage/fasilitas/ruang_perpustakaan.png', '2025-11-01 10:05:20', '2025-11-01 10:05:20'),
(3, 'Ruang Laboratorium Rekayasa Perangkat Lunak', '/storage/fasilitas/laboratorium_rekayasa_perangkat_lunak.png', '2025-11-01 10:05:20', '2025-11-01 10:05:20'),
(4, 'Aula', '/storage/fasilitas/ruang_aula.png', '2025-11-01 10:05:20', '2025-11-01 10:05:20'),
(5, 'Layanan dan Administrasi', '/storage/fasilitas/layanan.png', '2025-11-01 10:05:20', '2025-11-01 10:05:20'),
(6, 'Taman', '/storage/fasilitas/taman.png', '2025-11-01 10:05:20', '2025-11-01 10:05:20'),
(7, 'Kantin', '/storage/fasilitas/kantin.png', '2025-11-01 10:05:20', '2025-11-01 10:05:20'),
(8, 'Toilet', '/storage/fasilitas/Toilet.png', '2025-11-01 10:05:20', '2025-11-01 10:05:20');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hero_sections`
--

CREATE TABLE `hero_sections` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `hero_image_path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paragraph_1` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `paragraph_2` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hero_sections`
--

INSERT INTO `hero_sections` (`id`, `hero_image_path`, `title`, `paragraph_1`, `paragraph_2`, `created_at`, `updated_at`) VALUES
(1, '/storage/images/hero/H3GlffDdC4JlRznVSKDRSF9OR1c9zwEJD0NLUENw.png', 'Tentang Prodi Teknik Informatika', 'Teknik Informatika merupakan disiplin ilmu yang berfokus pada perancangan, pengembangan, dan penerapan sistem komputasi cerdas. Di sini, mahasiswa tidak hanya mempelajari bahasa pemrograman, tetapi juga diasah kemampuan logika dan analisisnya untuk menciptakan solusi teknologi inovatifâ€”mulai dari Rekayasa Perangkat Lunak, Kecerdasan Buatan (AI), hingga Keamanan Siberâ€”yang menjadi fondasi utama di era digital saat ini.', 'Kami berkomitmen untuk mencetak lulusan yang kompeten, adaptif, dan berdaya saing global dalam menghadapi tantangan Revolusi Industri 4.0. Melalui kurikulum yang terintegrasi dengan kebutuhan industri, kami mempersiapkan talenta digital masa depan yang siap memberikan kontribusi nyata bagi kemajuan teknologi, masyarakat, dan bangsa.', '2025-11-01 01:14:31', '2025-12-11 12:21:27');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lecturers`
--

CREATE TABLE `lecturers` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photoUrl` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `lecturers`
--

INSERT INTO `lecturers` (`id`, `name`, `title`, `photoUrl`, `created_at`, `updated_at`) VALUES
(1, 'Hadipurnawan Satria, M.Sc., Ph.D.', 'Dosen Bidang Sistem Terdistribusi', '/storage/dosen/hadi-purnawan.jpeg', '2025-10-11 17:59:14', '2025-10-11 17:59:14'),
(2, 'Anggina Primanita, M.IT, Ph. D', 'Dosen Bidang Game Development', '/storage/dosen/anggina-primanita.jpeg', '2025-10-11 17:59:14', '2025-10-11 17:59:14'),
(3, 'Kanda Januar Miraswan, M.T.', 'Dosen Bidang Big Data dan Pengenalan Pola', '/storage/dosen/kanda-januar.jpeg', '2025-10-11 17:59:14', '2025-10-11 17:59:14'),
(4, 'Novi Yusliani, M.T.', 'Dosen Bidang Pemrosesan Bahasa Alami', '/storage/dosen/dosen-4.jpg', '2025-10-11 17:59:14', '2025-10-11 17:59:14'),
(5, 'Citra Dewi, S.Kom., M.Kom.', 'Dosen Bidang Keahlian Jaringan Komputer', '/storage/dosen/dosen-5.jpg', '2025-10-11 17:59:14', '2025-10-11 17:59:14');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_10_11_121649_create_testimonials_table', 2),
(5, '2025_10_12_005437_create_lecturers_table', 3),
(6, '2025_10_12_095521_create_news_announcements_achievements_table', 4),
(7, '2025_11_01_080814_create_hero_sections_table', 5),
(8, '2025_11_01_085544_create_welcome_messages_table', 6),
(9, '2025_11_01_165504_create_facilities_table', 7),
(10, '2025_11_01_174720_create_visis_table', 8),
(11, '2025_11_01_181005_create_misis_table', 9),
(12, '2025_11_03_070635_create_profil_lulusans_table', 10),
(13, '2025_11_03_070636_create_struktur_pimpinan_table', 11),
(14, '2025_11_03_072639_create_struktur_pimpinans_table', 11),
(15, '2025_11_03_180436_create_panduan_sops_table', 12),
(16, '2025_11_05_062812_create_akademiks_table', 13),
(17, '2025_11_06_161904_create_c_p_l_s_table', 14),
(18, '2025_11_07_055337_create_akademik_dokumens_table', 15),
(19, '2025_11_07_022733_add_is_admin_to_users_table', 16),
(20, '2025_11_29_071816_add_category_to_akademiks_table', 17),
(21, '2025_11_29_073634_add_category_to_panduan_sops_table', 18);

-- --------------------------------------------------------

--
-- Table structure for table `misis`
--

CREATE TABLE `misis` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `misis`
--

INSERT INTO `misis` (`id`, `content`, `created_at`, `updated_at`) VALUES
(1, 'Menghasilkan tenaga ahli yang profesional di bidang Ilmu Komputer dan Rekayasa\nPerangkat Lunak yang mampu bersaing secara global serta bertaqwa kepada Tuhan\nYang Maha Esa, berakhlak tinggi, dan berbudaya Indonesia;', '2025-12-11 12:27:53', '2025-12-11 12:27:53'),
(2, 'Menggiatkan penelitian di bidang Ilmu Komputer dan Rekayasa Perangkat Lunak\nuntuk pengembangan ilmu pengetahuan, Teknologi Informasi dan Komunikasi, serta\nTeknologi Tepat Guna;', '2025-12-11 12:27:53', '2025-12-11 12:27:53'),
(3, 'Melakukan pengabdian yang berorientasi pada penggunaan Teknologi Informasi\nsebagai alat bantu dalam berbagai aspek kehidupan yang sesuai dengan perkembangan\ndan kebutuhan masyarakat.', '2025-12-11 12:27:53', '2025-12-11 12:27:53');

-- --------------------------------------------------------

--
-- Table structure for table `news_announcements_achievements`
--

CREATE TABLE `news_announcements_achievements` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_popular` tinyint(1) DEFAULT NULL,
  `excerpt` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `body` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `student_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` date DEFAULT NULL,
  `published_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `news_announcements_achievements`
--

INSERT INTO `news_announcements_achievements` (`id`, `title`, `slug`, `category`, `is_popular`, `excerpt`, `body`, `image_url`, `student_name`, `date`, `published_at`, `created_at`, `updated_at`) VALUES
(1, 'Jurnal Universitas Telah Terakreditasi SINTA', 'jurnal-terakreditasi-sinta', 'berita', 1, 'Sebuah pencapaian baru...', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. ', '/storage/berita/jurnal.jpg', NULL, '2025-03-24', NULL, '2025-10-12 03:10:10', '2025-10-12 03:10:10'),
(3, 'Juara 1 Lomba Competitive Programming Nasional', 'juara-1-cp-nasional', 'prestasi', 1, NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \r\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.', '/storage/berita/news3.jpg', 'Ahmad Farhan Rasyidin', '2025-09-15', NULL, NULL, NULL),
(5, 'Teknologi AI Terbaru Merevolusi Industri Kesehatan', 'teknologi-ai-terbaru-revolusi-industri-kesehatan', 'berita', 1, 'Sebuah terobosan dalam kecerdasan buatan menjanjikan diagnosa yang lebih cepat dan akurat untuk berbagai penyakit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.', 'https://placehold.co/600x400/cccccc/333333?text=Berita+1', 'Budi Santoso', '2025-10-14', '2025-10-14 04:54:09', '2025-10-14 04:54:09', '2025-10-14 04:54:09'),
(6, 'Pemerintah Luncurkan Program Subsidi Kendaraan Listrik', 'pemerintah-luncurkan-program-subsidi-kendaraan-listrik', 'berita', 0, 'Untuk mendorong adopsi kendaraan ramah lingkungan, pemerintah resmi meluncurkan skema subsidi baru.', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.', 'https://placehold.co/600x400/cccccc/333333?text=Berita+2', 'Citra Lestari', '2025-10-13', '2025-10-14 04:54:09', '2025-10-14 04:54:09', '2025-10-14 04:54:09'),
(7, 'Pasar Saham Lokal Menguat di Tengah Ketidakpastian Global', 'pasar-saham-lokal-menguat-ketidakpastian-global', 'berita', 1, 'Indeks Harga Saham Gabungan (IHSG) ditutup menguat pada perdagangan hari ini meskipun bursa regional melemah.', 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.', 'https://placehold.co/600x400/cccccc/333333?text=Berita+3', NULL, '2025-10-12', '2025-10-14 04:54:09', '2025-10-14 04:54:09', '2025-10-14 04:54:09'),
(8, 'Final Kompetisi E-sports Nasional Dimenangkan Tim Asal Surabaya', 'final-kompetisi-esports-nasional-dimenangkan-surabaya', 'berita', 1, 'Pertandingan sengit terjadi di babak final yang mempertemukan dua tim terkuat dari Jakarta dan Surabaya.', 'Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.', 'https://placehold.co/600x400/cccccc/333333?text=Berita+4', 'Eka Wijaya', '2025-10-11', '2025-10-11 02:00:00', '2025-10-14 04:54:09', '2025-10-14 04:54:09'),
(9, 'Festival Kuliner Nusantara Kembali Digelar di Ibu Kota', 'festival-kuliner-nusantara-kembali-digelar', 'berita', NULL, 'Acara tahunan yang paling ditunggu para pecinta kuliner ini akan menampilkan lebih dari 100 jenis makanan khas daerah.', 'Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus.', 'https://placehold.co/600x400/cccccc/333333?text=Berita+5', 'Rina Marlina', '2025-10-10', NULL, '2025-10-14 04:54:09', '2025-10-14 04:54:09'),
(10, 'Proyek Pembangunan Jalan Tol Trans-Sumatera Capai 80%', 'proyek-pembangunan-jalan-tol-trans-sumatera-80-persen', 'berita', 0, 'Pembangunan infrastruktur strategis nasional ini diharapkan dapat rampung sesuai target pada akhir tahun depan.', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.', 'https://placehold.co/600x400/cccccc/333333?text=Berita+6', NULL, '2025-10-09', '2025-10-09 07:30:00', '2025-10-14 04:54:09', '2025-10-14 04:54:09'),
(11, 'Cuaca Ekstrem Diperkirakan Melanda Sebagian Wilayah Indonesia', 'cuaca-ekstrem-diperkirakan-melanda-indonesia', 'berita', 0, 'BMKG mengeluarkan peringatan dini terkait potensi hujan lebat disertai angin kencang dan petir dalam beberapa hari ke depan.', 'Integer rutrum ante eu lacus. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', NULL, 'Agus Setiawan', '2025-10-08', '2025-10-14 04:54:09', '2025-10-14 04:54:09', '2025-10-14 04:54:09'),
(12, 'test', 'test', 'berita', NULL, NULL, 'lorem ipsum', NULL, NULL, NULL, NULL, '2025-11-20 00:14:32', '2025-11-20 00:14:32');

-- --------------------------------------------------------

--
-- Table structure for table `panduan_sops`
--

CREATE TABLE `panduan_sops` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `panduan_sops`
--

INSERT INTO `panduan_sops` (`id`, `title`, `category`, `slug`, `file_path`, `created_at`, `updated_at`) VALUES
(7, 'entah', 'sop', 'entah', '/storage/documents/panduan-sop/aLoOPk3n7Ixav9hdRSQ2QqmPDvw5AyEpORpKKcKL.pdf', '2025-11-29 01:14:39', '2025-11-29 01:14:39');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `profil_lulusans`
--

CREATE TABLE `profil_lulusans` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `profil_lulusans`
--

INSERT INTO `profil_lulusans` (`id`, `content`, `created_at`, `updated_at`) VALUES
(1, 'Software Engineer: Seseorang yang menerapkan prinsip-prinsip\nrekayasa perangkat lunak pada proses perancangan,\npembangunan, pemeliharaan, pengujian, dan\nevaluasi dari suatu proyek perangkat lunak. Seorang\nsoftware engineer harus dapat memimpin dan\nmengelola kelompok kerjanya sehingga perangkat\nlunak yang dihasilkan memenuhi batasan waktu dan\nbiaya yang telah ditentukan.', '2025-12-11 12:37:31', '2025-12-11 12:37:31'),
(2, 'Database Engineer: Seorang yang bertugas untuk merancang dan\nmemonitor basis data yang bersifat kompleks. Proses\nmerancang basis data adalah proses memetakan\nkebutuhan dari suatu perusahaan menjadi struktur\nbasis data yang kemudian diimplementasikan dalam\ninfrastruktur yang telah disediakan. Proses\nmemonitor basis data adalah menjaga ketersediaan,\nkeamanan, dan kestabilan basis data dari suatu\nperusahaan, sehingga data yang digunakan bersifat\nvalid dan relevan. Database engineer juga bertugas\nuntuk mengintegrasikan produk dan paket perangkat\nlunak yang baru ke dalam sistem.', '2025-12-11 12:37:31', '2025-12-11 12:37:31'),
(3, 'System Engineer: Seorang yang menggunakan ilmu IT untuk\nmerancang dan mengimplementasikan perangkat\nlunak sebagai suatu sistem lengkap, termasuk di\ndalamnya aspek infrastruktur, jaringan, hardware,\ndan software. Seorang system engineer mampu\nmenganalisis dan menentukan arsitektur atau\nteknologi terbaik pada sistemnya, termasuk di\ndalamnya desain topologi jaringan, middleware, parallelism, dan sistem terdistibusi yang sesuai\ndengan kebutuhan sistem.', '2025-12-11 12:37:31', '2025-12-11 12:37:31'),
(4, 'Computer Science Researcher: Seorang yang bertugas untuk menyelesaikan\npermasalahan di bidang Informatika dengan\nmengaplikasikan dan mengembangkan algoritmaalgoritma yang berkaitan dengan permasalahan\ntersebut. Seorang computer science researcher harus\ndapat mengklasifikasikan dan mengukur kinerja\nsuatu algoritma, serta dapat mengumpulkan,\nmengolah, dan menyajikan data dengan akuntabel.', '2025-12-11 12:37:31', '2025-12-11 12:37:31'),
(5, 'IT Entrepreneur: Seseorang yang menggunakan prinsip-prinsip serta\nilmu Informatika untuk menciptakan perangkat\nlunak tepat guna yang bernilai ekonomis. Seorang IT\nEntrepreneur harus memiliki jiwa kepemimpinan\ndan kemampuan manajerial sehingga dapat\nmengelola bisnis yang dikembangkannya.', '2025-12-11 12:37:31', '2025-12-11 12:37:31'),
(6, 'Intelligent System Engineer: Seorang yang bekerja untuk merancang dan\nmengembangkan suatu sistem cerdas baik melalui\nbasis pengetahuan maupun yang diperoleh melalui\npembelajaran mesin.', '2025-12-11 12:37:31', '2025-12-11 12:37:31'),
(7, 'Data Scientist: Seorang Data Scientist bertanggung jawab untuk\nmemberikan informasi dalam pengambilan\nkeputusan yang menguntungkan perusahaan. Data\nScientist menganalisis dan menyajikan data beserta\npolanya secara visualisasi sehingga mudah dipahami\noleh pengguna ataupun proses lain menggunakan\nalat bantu. Selanjutnya dapat mengembangkan\nmodel prediksi untuk mengestimasi kejadian yang\nakan datang berdasarkan data yang tersedia.', '2025-12-11 12:37:31', '2025-12-11 12:37:31');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('aVk84TSc8VUwd7MRIq2OxFgaFf8oxG42YcPbUsIc', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiU1N4WWR3emZQVDVvNHBtMVhldlNSZmZhQlo4TkhJUlc0cUl4QUdTOCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7fQ==', 1766062201),
('D1yLAkxCpJwg3ljkJgGFXHWMkYXCVPj5oGSToN8C', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZWVvdXBWZjFMUmlNc3FMc0syNUliUzZocWRTUVZLYzRXOXNaSWc5QSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1766140399),
('srDOIqMcbIcvmonaB6Hm2QWYeqoJ1ah1On5BG6O5', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQkZrcFpiR0ZTbmk4WmR5WUZUWXc2cFZFYVU4OW43WURUazZYQ2YwZCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1766152421);

-- --------------------------------------------------------

--
-- Table structure for table `struktur_pimpinans`
--

CREATE TABLE `struktur_pimpinans` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `struktur_pimpinans`
--

INSERT INTO `struktur_pimpinans` (`id`, `content`, `created_at`, `updated_at`) VALUES
(1, '/storage/struktur-pimpinan/struktur-pimpinan.png', '2025-11-03 09:50:41', '2025-11-03 09:50:41');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `major` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `name`, `title`, `major`, `avatar`, `text`, `created_at`, `updated_at`) VALUES
(1, 'Ahmad Farhan Rasyidin', 'Software Engineer @ Google', 'Teknik Informatika Angkatan \'23', '/images/avatars-alumni/avatar-1.jpg', 'Selama kuliah, saya mendapatkan pemahaman mendalam tentang berbagai aspek T.I, termasuk teori, media massa, public relations, dan komunikasi organisasi. Kuliah ini memberikan landasan yang kuat bagi karier saya di dunia teknologi. Proses penyusunan kurikulum didasarkan pada masukan dari berbagai pihak seperti industri dan alumni.', '2025-10-11 07:17:04', '2025-10-11 07:17:04'),
(2, 'Sheryl Jesselyn', 'UI/UX Designer @ Gojek', 'Teknik Informatika Angkatan \'22', '/images/avatars-alumni/avatar-2.jpg', 'Proses penyusunan kurikulum didasarkan pada masukan dari berbagai pihak seperti industri dan alumni, untuk memastikan relevansinya dengan dunia kerja yang semakin kompleks. Ini sangat membantu saya saat pertama kali bekerja.', '2025-10-11 07:17:04', '2025-10-11 07:17:04'),
(3, 'Stefanie Cho', 'Data Scientist @ Tokopedia', 'Teknik Informatika Angkatan \'21', '/images/avatars-alumni/avatar-3.jpg', 'Program studi ini berkomitmen kuat dalam meningkatkan mutu pendidikan. Kurikulum berbasis OBE memastikan setiap lulusan memiliki keterampilan praktis yang relevan dengan kebutuhan industri. Saya sangat merasakannya.', '2025-10-11 07:17:04', '2025-10-11 07:17:04'),
(4, 'Zelia Valetzkya', 'Project Manager @ Traveloka', 'Teknik Informatika Angkatan \'20', '/images/avatars-alumni/avatar-4.jpg', 'Saya bersyukur telah menempuh program studi ini. Saya telah berhasil bekerja di beberapa perusahaan ternama dan mengaplikasikan pengetahuan dan keterampilan yang saya pelajari selama kuliah. Terima kasih Fasilkom Unsri!', '2025-10-11 07:17:04', '2025-10-11 07:17:04'),
(5, 'Grimaldie William', 'Cybersecurity Analyst @ BSSN', 'Teknik Informatika Angkatan \'19', '/images/avatars-alumni/avatar-5.jpg', 'Selain teori, kami juga dibekali keterampilan praktis yang relevan dengan kebutuhan industri. Proses pembelajaran didasarkan pada masukan dari berbagai pihak seperti industri, alumni, dan asosiasi.', '2025-10-11 07:17:04', '2025-10-11 07:17:04');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `is_admin`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@if.unsri.ac.id', 1, '2025-11-07 07:22:25', '$2y$12$rAiGnHWtzztVfQqoiPHTX.u6ET4fAYkJpSUXjNed6xKapteyKIjX.', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `visis`
--

CREATE TABLE `visis` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `visis`
--

INSERT INTO `visis` (`id`, `content`, `created_at`, `updated_at`) VALUES
(1, 'Menjadi program pendidikan terkemuka di bidang riset dan rekayasa informatika yang menghasilkan sumber daya manusia yang bertaqwa kepada Tuhan Yang Maha Esa, berakhlak tinggi, profesional, serta memiliki keunggulan ilmu untuk bersaing di era globalisasi.', '2025-11-01 11:03:18', '2025-12-11 12:27:48');

-- --------------------------------------------------------

--
-- Table structure for table `welcome_messages`
--

CREATE TABLE `welcome_messages` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `kajur_image_path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paragraph_1` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `paragraph_2` text COLLATE utf8mb4_unicode_ci,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `welcome_messages`
--

INSERT INTO `welcome_messages` (`id`, `kajur_image_path`, `title`, `paragraph_1`, `paragraph_2`, `name`, `created_at`, `updated_at`) VALUES
(1, '/storage/dosen/hadi-purnawan.jpeg', 'Selamat datang di situs resmi Program Studi Teknik Informatika, Fakultas Ilmu Komputer', 'Selamat datang di Teknik Informatika Unsri, tempat inovasi dan kolaborasi bertemu. Komitmen utama kami adalah membekali setiap mahasiswa dengan keterampilan praktis dan relevan melalui kurikulum modern yang mengadopsi kerangka Merdeka Belajar Kampus Merdeka (MBKM) dengan pendekatan Outcome-Based Education (OBE).', 'Dengan masukan berkelanjutan dari para praktisi industri dan alumni, kami memastikan program kami selalu selangkah di depan. Kami bangga mencetak lulusan yang tidak hanya siap kerja, tetapi juga siap memimpin dan menciptakan perubahan di dunia teknologi.', 'Hadipurnawan Satria, S.Kom., M.Sc., Ph.D.', '2025-11-01 02:20:00', '2025-11-01 02:20:00');

--
-- Indexes for dumped tables
--





--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);


--
-- Indexes for table `c_p_l_s`
--
ALTER TABLE `c_p_l_s`
  ADD UNIQUE KEY `c_p_l_s_kode_unique` (`kode`);




--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);




--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);








--
-- Indexes for table `news_announcements_achievements`
--
ALTER TABLE `news_announcements_achievements`
  ADD UNIQUE KEY `news_announcements_achievements_slug_unique` (`slug`);


--
-- Indexes for table `panduan_sops`
--
ALTER TABLE `panduan_sops`
  ADD UNIQUE KEY `panduan_sops_slug_unique` (`slug`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);



--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);






--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `users_email_unique` (`email`);





COMMIT;

