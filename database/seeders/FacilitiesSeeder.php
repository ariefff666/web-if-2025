<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Facilities;

class FacilitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Facilities::truncate();

        Facilities::create([
            'name' => 'Ruang Kelas',
            'facilities_image_path' => '/storage/fasilitas/ruang_kelas.png',
        ]);

        Facilities::create([
            'name' => 'Ruang Perpustakaan',
            'facilities_image_path' => '/storage/fasilitas/ruang_perpustakaan.png',
        ]);

        Facilities::create([
            'name' => 'Ruang Laboratorium Rekayasa Perangkat Lunak',
            'facilities_image_path' => '/storage/fasilitas/laboratorium_rekayasa_perangkat_lunak.png',
        ]);

        Facilities::create([
            'name' => 'Aula',
            'facilities_image_path' => '/storage/fasilitas/ruang_aula.png',
        ]);

        Facilities::create([
            'name' => 'Layanan dan Administrasi',
            'facilities_image_path' => '/storage/fasilitas/layanan.png',
        ]);

        Facilities::create([
            'name' => 'Taman',
            'facilities_image_path' => '/storage/fasilitas/taman.png',
        ]);

        Facilities::create([
            'name' => 'Kantin',
            'facilities_image_path' => '/storage/fasilitas/kantin.png',
        ]);

        Facilities::create([
            'name' => 'Toilet',
            'facilities_image_path' => '/storage/fasilitas/Toilet.png',
        ]);
    }
}
