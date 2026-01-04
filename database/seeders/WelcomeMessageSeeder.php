<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WelcomeMessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('welcome_messages')->delete();

        DB::table('welcome_messages')->insert([
            'id' => 1,
            'kajur_image_path' => '/storage/dosen/hadi-purnawan.jpeg',
            'title' => 'Selamat datang di situs resmi Program Studi Teknik Informatika, Fakultas Ilmu Komputer',
            'paragraph_1' => 'Selamat datang di Teknik Informatika Unsri, tempat inovasi dan kolaborasi bertemu. Komitmen utama kami adalah membekali setiap mahasiswa dengan keterampilan praktis dan relevan melalui kurikulum modern yang mengadopsi kerangka Merdeka Belajar Kampus Merdeka (MBKM) dengan pendekatan Outcome-Based Education (OBE).',
            'paragraph_2' => 'Dengan masukan berkelanjutan dari para praktisi industri dan alumni, kami memastikan program kami selalu selangkah di depan. Kami bangga mencetak lulusan yang tidak hanya siap kerja, tetapi juga siap memimpin dan menciptakan perubahan di dunia teknologi.',
            'name' => 'Hadipurnawan Satria, S.Kom., M.Sc., Ph.D.',
            'created_at' => '2025-11-01 02:20:00',
            'updated_at' => '2025-11-01 02:20:00',
        ]);
    }
}