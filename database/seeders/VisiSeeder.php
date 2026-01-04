<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VisiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('visis')->delete();

        DB::table('visis')->insert([
            'id' => 1,
            'content' => 'Menjadi program pendidikan terkemuka di bidang riset dan rekayasa informatika yang menghasilkan sumber daya manusia yang bertaqwa kepada Tuhan Yang Maha Esa, berakhlak tinggi, profesional, serta memiliki keunggulan ilmu untuk bersaing di era globalisasi.',
            'created_at' => '2025-11-01 11:03:18',
            'updated_at' => '2025-12-11 12:27:48',
        ]);
    }
}
