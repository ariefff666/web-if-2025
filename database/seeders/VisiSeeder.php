<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Visi;

class VisiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Visi::truncate();

        Visi::create([
            'content' => 'Menjadi program studi Teknik Informatika yang unggul dan terkemuka dalam pengembangan teknologi informasi yang inovatif dan berdaya saing di tingkat nasional maupun internasional pada tahun 2025.'
        ]);
    }
}
