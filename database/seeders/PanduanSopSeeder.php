<?php

namespace Database\Seeders;

use App\Models\PanduanSop;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PanduanSopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PanduanSop::truncate();

        $panduan = [
            [
                'title' => 'Prosedur Tugas Akhir',
                'slug' => 'prosedur-tugas-akhir',
                'file_path' => 'panduan-sop/prosedur-tugas-akhir.pdf',
            ],
            [
                'title' => 'Panduan Tugas Akhir',
                'slug' => 'panduan-tugas-akhir',
                'file_path' => 'panduan-sop/panduan-tugas-akhir.pdf',
            ],
            [
                'title' => 'Prosedur Kerja Praktek',
                'slug' => 'prosedur-kerja-praktek',
                'file_path' => 'panduan-sop/prosedur-kerja-praktek.pdf',
            ],
            [
                'title' => 'Panduan Kerja Praktek',
                'slug' => 'panduan-kerja-praktek',
                'file_path' => 'panduan-sop/panduan-kerja-praktek.pdf',
            ],
            [
                'title' => 'SOP MBKM',
                'slug' => 'sop-mbkm',
                'file_path' => 'panduan-sop/sop-mbkm.pdf',
            ],
            [
                'title' => 'Panduan Mata Kuliah Berbasis Proyek',
                'slug' => 'panduan-mk-proyek',
                'file_path' => 'panduan-sop/panduan-mk-proyek.pdf',
            ],
        ];

        foreach ($panduan as $item) {
            PanduanSop::create($item);
        }
    }
}