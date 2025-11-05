<?php

namespace Database\Seeders;

use App\Models\Akademik;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AkademikSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Akademik::truncate();

        $akademiks = [
            [
                'title' => 'Kurikulum',
                'slug' => 'kurikulum',
                'file_path' => '/storage/dokumen/kurikulum.pdf',
            ],
            [
                'title' => 'Jadwal',
                'slug' => 'jadwal',
                'file_path' => '/storage/dokumen/kurikulum.pdf',
            ],
            [
                'title' => 'Dokumen',
                'slug' => 'dokumen',
                'file_path' => '/storage/dokumen/kurikulum.pdf',
            ],
        ];

        foreach ($akademiks as $item) {
            Akademik::create($item);
        }
    }
}
