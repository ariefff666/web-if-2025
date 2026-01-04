<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AkademikDokumenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('akademik_dokumens')->delete();

        DB::table('akademik_dokumens')->insert([
            [
                'id' => 1,
                'title' => 'Kurikulum',
                'file_path' => '/storage/akademik/kurikulum.pdf',
                'created_at' => NULL,
                'updated_at' => NULL,
            ],
            [
                'id' => 2,
                'title' => 'Dummy',
                'file_path' => '/storage/akademik/dummyPDF.pdf',
                'created_at' => NULL,
                'updated_at' => NULL,
            ],
        ]);
    }
}
