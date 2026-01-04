<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StrukturPimpinanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('struktur_pimpinans')->delete();

        DB::table('struktur_pimpinans')->insert([
            'id' => 1,
            'content' => '/storage/struktur-pimpinan/struktur-pimpinan.png',
            'created_at' => '2025-11-03 09:50:41',
            'updated_at' => '2025-11-03 09:50:41',
        ]);
    }
}
