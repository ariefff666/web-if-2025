<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProfilLulusanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('profil_lulusans')->delete();

        DB::table('profil_lulusans')->insert([
            [
                'id' => 1,
                'content' => "Software Engineer: Seseorang yang menerapkan prinsip-prinsip\nrekayasa perangkat lunak pada proses perancangan,\npembangunan, pemeliharaan, pengujian, dan\nevaluasi dari suatu proyek perangkat lunak. Seorang\nsoftware engineer harus dapat memimpin dan\nmengelola kelompok kerjanya sehingga perangkat\nlunak yang dihasilkan memenuhi batasan waktu dan\nbiaya yang telah ditentukan.",
                'created_at' => '2025-12-11 12:37:31',
                'updated_at' => '2025-12-11 12:37:31',
            ],
            [
                'id' => 2,
                'content' => "Database Engineer: Seorang yang bertugas untuk merancang dan\nmemonitor basis data yang bersifat kompleks. Proses\nmerancang basis data adalah proses memetakan\nkebutuhan dari suatu perusahaan menjadi struktur\nbasis data yang kemudian diimplementasikan dalam\ninfrastruktur yang telah disediakan. Proses\nmemonitor basis data adalah menjaga ketersediaan,\nkeamanan, dan kestabilan basis data dari suatu\nperusahaan, sehingga data yang digunakan bersifat\nvalid dan relevan. Database engineer juga bertugas\nuntuk mengintegrasikan produk dan paket perangkat\nlunak yang baru ke dalam sistem.",
                'created_at' => '2025-12-11 12:37:31',
                'updated_at' => '2025-12-11 12:37:31',
            ],
            [
                'id' => 3,
                'content' => "System Engineer: Seorang yang menggunakan ilmu IT untuk\nmerancang dan mengimplementasikan perangkat\nlunak sebagai suatu sistem lengkap, termasuk di\ndalamnya aspek infrastruktur, jaringan, hardware,\ndan software. Seorang system engineer mampu\nmenganalisis dan menentukan arsitektur atau\nteknologi terbaik pada sistemnya, termasuk di\ndalamnya desain topologi jaringan, middleware, parallelism, dan sistem terdistibusi yang sesuai\ndengan kebutuhan sistem.",
                'created_at' => '2025-12-11 12:37:31',
                'updated_at' => '2025-12-11 12:37:31',
            ],
            [
                'id' => 4,
                'content' => "Computer Science Researcher: Seorang yang bertugas untuk menyelesaikan\npermasalahan di bidang Informatika dengan\nmengaplikasikan dan mengembangkan algoritmaalgoritma yang berkaitan dengan permasalahan\ntersebut. Seorang computer science researcher harus\ndapat mengklasifikasikan dan mengukur kinerja\nsuatu algoritma, serta dapat mengumpulkan,\nmengolah, dan menyajikan data dengan akuntabel.",
                'created_at' => '2025-12-11 12:37:31',
                'updated_at' => '2025-12-11 12:37:31',
            ],
            [
                'id' => 5,
                'content' => "IT Entrepreneur: Seseorang yang menggunakan prinsip-prinsip serta\nilmu Informatika untuk menciptakan perangkat\nlunak tepat guna yang bernilai ekonomis. Seorang IT\nEntrepreneur harus memiliki jiwa kepemimpinan\ndan kemampuan manajerial sehingga dapat\nmengelola bisnis yang dikembangkannya.",
                'created_at' => '2025-12-11 12:37:31',
                'updated_at' => '2025-12-11 12:37:31',
            ],
            [
                'id' => 6,
                'content' => "Intelligent System Engineer: Seorang yang bekerja untuk merancang dan\nmengembangkan suatu sistem cerdas baik melalui\nbasis pengetahuan maupun yang diperoleh melalui\npembelajaran mesin.",
                'created_at' => '2025-12-11 12:37:31',
                'updated_at' => '2025-12-11 12:37:31',
            ],
            [
                'id' => 7,
                'content' => "Data Scientist: Seorang Data Scientist bertanggung jawab untuk\nmemberikan informasi dalam pengambilan\nkeputusan yang menguntungkan perusahaan. Data\nScientist menganalisis dan menyajikan data beserta\npolanya secara visualisasi sehingga mudah dipahami\noleh pengguna ataupun proses lain menggunakan\nalat bantu. Selanjutnya dapat mengembangkan\nmodel prediksi untuk mengestimasi kejadian yang\nakan datang berdasarkan data yang tersedia.",
                'created_at' => '2025-12-11 12:37:31',
                'updated_at' => '2025-12-11 12:37:31',
            ],
        ]);
    }
}
