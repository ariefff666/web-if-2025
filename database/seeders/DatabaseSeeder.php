<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AdminUserSeeder::class,
            HeroSectionSeeder::class,
            WelcomeMessageSeeder::class,
            VisiSeeder::class,
            MisiSeeder::class,
            AkademikSeeder::class,
            AkademikDokumenSeeder::class,
            CPLSeeder::class,
            ProfilLulusanSeeder::class,
            LecturerSeeder::class,
            StrukturPimpinanSeeder::class,
            FacilitiesSeeder::class,
            NewsAnnouncementsAchievementsSeeder::class,
            PanduanSopSeeder::class,
            TestimonialSeeder::class,
        ]);
    }
}
