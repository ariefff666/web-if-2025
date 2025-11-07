<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\AkademikDokumen;

class AkademikDokumenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        AkademikDokumen::truncate();

        AkademikDokumen::insert([
            ['title' => 'Kurikulum','file_path' => '/storage/akademik/kurikulum.pdf'],
            ['title' => 'Dummy','file_path' => '/storage/akademik/dummyPDF.pdf'],
        ]);
    }
}
