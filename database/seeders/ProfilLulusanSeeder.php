<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ProfilLulusan;

class ProfilLulusanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProfilLulusan::truncate();

        ProfilLulusan::create([
            'content' => 'Analisis & Solusi Industri: Lulusan mampu menganalisis persoalan komputasi dan menerapkan ilmunya (serta disiplin terkait) untuk mengidentifikasi solusi yang relevan bagi kebutuhan industri (produk/jasa).',
        ]);

        ProfilLulusan::create([
            'content' => 'Desain & Implementasi Teknis: Lulusan mampu merancang, membangun, dan mengevaluasi solusi komputasi—khususnya di bidang rekayasa perangkat lunak, keamanan informasi, atau sains/rekayasa data—yang memenuhi kebutuhan pengguna secara efektif.',
        ]);

        ProfilLulusan::create([
            'content' => 'Pemikiran Kritis & Logis: Lulusan mampu berpikir secara logis, kritis, dan sistematis saat menggunakan ilmu informatika untuk memecahkan masalah di dunia nyata.',
        ]);

        ProfilLulusan::create([
            'content' => 'Profesionalisme & Kerja Tim: Lulusan mampu belajar mandiri secara berkelanjutan, bersikap kreatif, inovatif, serta dapat berkomunikasi dan bekerja sama secara efektif dalam tim (baik sebagai anggota maupun pemimpin) di lingkungan profesional.',
        ]);

    }
}
