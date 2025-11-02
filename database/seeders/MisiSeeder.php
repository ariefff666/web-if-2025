<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Misi;

class MisiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Misi::truncate();

        Misi::create([
            'content' => 'Menyelenggarakan pendidikan tinggi di bidang Teknik Informatika yang berkualitas dan relevan dengan perkembangan industri.'
        ]);
        Misi::create([
            'content' => 'Melaksanakan penelitian yang inovatif dan bermanfaat bagi masyarakat dalam bidang teknologi informasi.'
        ]);
        Misi::create([
            'content' => 'Melakukan pengabdian kepada masyarakat melalui penerapan teknologi informasi untuk memecahkan masalah-masalah sosial.'
        ]);
        Misi::create([
            'content' => 'Menjalin kerjasama dengan industri, pemerintah, dan lembaga pendidikan lainnya untuk meningkatkan kualitas tridharma perguruan tinggi.'
        ]);
    }
}
