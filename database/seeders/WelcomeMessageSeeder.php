<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\WelcomeMessage;


class WelcomeMessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        WelcomeMessage::truncate();

        WelcomeMessage::create([
            'kajur_image_path' => '/images/kajur_dummy_web_if_2025.png',
            'title' => 'Selamat datang di situs resmi Program Studi Teknik Informatika, Fakultas Ilmu Komputer',
            'paragraph_1' => 'Selamat datang di Teknik Informatika Unsri, tempat inovasi dan kolaborasi bertemu. Komitmen utama kami adalah membekali setiap mahasiswa dengan keterampilan praktis dan relevan melalui kurikulum modern yang mengadopsi kerangka Merdeka Belajar Kampus Merdeka (MBKM) dengan pendekatan Outcome-Based Education (OBE).',
            'paragraph_2' => 'Dengan masukan berkelanjutan dari para praktisi industri dan alumni, kami memastikan program kami selalu selangkah di depan. Kami bangga mencetak lulusan yang tidak hanya siap kerja, tetapi juga siap memimpin dan menciptakan perubahan di dunia teknologi.',
            'name' => 'Hadipurnawan Satria, S.Kom., M.Sc., Ph.D.',
        ]);
    }
}
