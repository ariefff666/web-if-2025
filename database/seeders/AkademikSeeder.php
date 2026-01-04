<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AkademikSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('akademiks')->delete();

        DB::table('akademiks')->insert([
            [
                'id' => 4,
                'title' => 'RAG',
                'category' => 'dokumen',
                'slug' => 'rag',
                'file_path' => '/storage/documents/akademik/wGyZqHNYjWB7uqQgfBFRLMIummmSMs9aeg2X4DXW.pdf',
                'created_at' => '2025-11-29 00:22:09',
                'updated_at' => '2025-11-29 00:22:09',
            ],
            [
                'id' => 5,
                'title' => 'anu',
                'category' => 'dokumen',
                'slug' => 'anu',
                'file_path' => '/storage/documents/akademik/OcqMyL0PSLnyDDALZ0wtlh3wCo8Nokusj4yecjdZ.pdf',
                'created_at' => '2025-11-29 00:29:20',
                'updated_at' => '2025-11-29 00:29:20',
            ],
        ]);
    }
}
