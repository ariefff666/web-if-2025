<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MisiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('misis')->delete();

        DB::table('misis')->insert([
            [
                'id' => 1,
                'content' => "Menghasilkan tenaga ahli yang profesional di bidang Ilmu Komputer dan Rekayasa\nPerangkat Lunak yang mampu bersaing secara global serta bertaqwa kepada Tuhan\nYang Maha Esa, berakhlak tinggi, dan berbudaya Indonesia;",
                'created_at' => '2025-12-11 12:27:53',
                'updated_at' => '2025-12-11 12:27:53',
            ],
            [
                'id' => 2,
                'content' => "Menggiatkan penelitian di bidang Ilmu Komputer dan Rekayasa Perangkat Lunak\nuntuk pengembangan ilmu pengetahuan, Teknologi Informasi dan Komunikasi, serta\nTeknologi Tepat Guna;",
                'created_at' => '2025-12-11 12:27:53',
                'updated_at' => '2025-12-11 12:27:53',
            ],
            [
                'id' => 3,
                'content' => "Melakukan pengabdian yang berorientasi pada penggunaan Teknologi Informasi\nsebagai alat bantu dalam berbagai aspek kehidupan yang sesuai dengan perkembangan\ndan kebutuhan masyarakat.",
                'created_at' => '2025-12-11 12:27:53',
                'updated_at' => '2025-12-11 12:27:53',
            ],
        ]);
    }
}
