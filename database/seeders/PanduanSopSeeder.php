<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PanduanSopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('panduan_sops')->delete();

        DB::table('panduan_sops')->insert([
            'id' => 7,
            'title' => 'entah',
            'category' => 'sop',
            'slug' => 'entah',
            'file_path' => '/storage/documents/panduan-sop/aLoOPk3n7Ixav9hdRSQ2QqmPDvw5AyEpORpKKcKL.pdf',
            'created_at' => '2025-11-29 01:14:39',
            'updated_at' => '2025-11-29 01:14:39',
        ]);
    }
}