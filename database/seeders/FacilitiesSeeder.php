<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FacilitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('facilities')->delete();

        DB::table('facilities')->insert([
            [
                'id' => 1,
                'name' => 'Ruang Kelas',
                'facilities_image_path' => '/storage/fasilitas/ruang_kelas.png',
                'created_at' => '2025-11-01 10:05:20',
                'updated_at' => '2025-11-01 10:05:20',
            ],
            [
                'id' => 2,
                'name' => 'Ruang Perpustakaan',
                'facilities_image_path' => '/storage/fasilitas/ruang_perpustakaan.png',
                'created_at' => '2025-11-01 10:05:20',
                'updated_at' => '2025-11-01 10:05:20',
            ],
            [
                'id' => 3,
                'name' => 'Ruang Laboratorium Rekayasa Perangkat Lunak',
                'facilities_image_path' => '/storage/fasilitas/laboratorium_rekayasa_perangkat_lunak.png',
                'created_at' => '2025-11-01 10:05:20',
                'updated_at' => '2025-11-01 10:05:20',
            ],
            [
                'id' => 4,
                'name' => 'Aula',
                'facilities_image_path' => '/storage/fasilitas/ruang_aula.png',
                'created_at' => '2025-11-01 10:05:20',
                'updated_at' => '2025-11-01 10:05:20',
            ],
            [
                'id' => 5,
                'name' => 'Layanan dan Administrasi',
                'facilities_image_path' => '/storage/fasilitas/layanan.png',
                'created_at' => '2025-11-01 10:05:20',
                'updated_at' => '2025-11-01 10:05:20',
            ],
            [
                'id' => 6,
                'name' => 'Taman',
                'facilities_image_path' => '/storage/fasilitas/taman.png',
                'created_at' => '2025-11-01 10:05:20',
                'updated_at' => '2025-11-01 10:05:20',
            ],
            [
                'id' => 7,
                'name' => 'Kantin',
                'facilities_image_path' => '/storage/fasilitas/kantin.png',
                'created_at' => '2025-11-01 10:05:20',
                'updated_at' => '2025-11-01 10:05:20',
            ],
            [
                'id' => 8,
                'name' => 'Toilet',
                'facilities_image_path' => '/storage/fasilitas/Toilet.png',
                'created_at' => '2025-11-01 10:05:20',
                'updated_at' => '2025-11-01 10:05:20',
            ],
        ]);
    }
}
