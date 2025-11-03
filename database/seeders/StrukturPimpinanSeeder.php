<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\StrukturPimpinan;

class StrukturPimpinanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        StrukturPimpinan::truncate();

        StrukturPimpinan::create([
            'content' => '/storage/struktur-pimpinan/struktur-pimpinan.png',
        ]);
    }
}
