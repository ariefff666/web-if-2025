<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HeroSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('hero_sections')->delete();

        DB::table('hero_sections')->insert([
            'id' => 1,
            'hero_image_path' => '/storage/images/hero/H3GlffDdC4JlRznVSKDRSF9OR1c9zwEJD0NLUENw.png',
            'title' => 'Tentang Prodi Teknik Informatika',
            'paragraph_1' => 'Teknik Informatika merupakan disiplin ilmu yang berfokus pada perancangan, pengembangan, dan penerapan sistem komputasi cerdas. Di sini, mahasiswa tidak hanya mempelajari bahasa pemrograman, tetapi juga diasah kemampuan logika dan analisisnya untuk menciptakan solusi teknologi inovatif—mulai dari Rekayasa Perangkat Lunak, Kecerdasan Buatan (AI), hingga Keamanan Siber—yang menjadi fondasi utama di era digital saat ini.',
            'paragraph_2' => 'Kami berkomitmen untuk mencetak lulusan yang kompeten, adaptif, dan berdaya saing global dalam menghadapi tantangan Revolusi Industri 4.0. Melalui kurikulum yang terintegrasi dengan kebutuhan industri, kami mempersiapkan talenta digital masa depan yang siap memberikan kontribusi nyata bagi kemajuan teknologi, masyarakat, dan bangsa.',
            'created_at' => '2025-11-01 01:14:31',
            'updated_at' => '2025-12-11 12:21:27',
        ]);
    }
}
