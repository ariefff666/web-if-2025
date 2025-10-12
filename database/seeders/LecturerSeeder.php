<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Lecturer;

class LecturerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $lecturers = [
            [
                'name' => 'Muhammad Zakaa Shahzada, S.T., M.Kom.',
                'title' => 'Dosen Bidang Animasi dan Multimedia',
                'photoUrl' => '/images/dosen/dosen-1.jpg',
            ],
            [
                'name' => 'Dr. Eng. Ade Candra, S.T., M.Kom.',
                'title' => 'Dosen Bidang Keahlian AI',
                'photoUrl' => '/images/dosen/dosen-2.jpg',
            ],
            [
                'name' => 'Prof. Dr. Indah Lestari, M.Cs.',
                'title' => 'Dosen Bidang Keahlian Data Science',
                'photoUrl' => '/images/dosen/dosen-3.jpg',
            ],
            [
                'name' => 'Budi Santoso, S.Kom., M.TI.',
                'title' => 'Dosen Bidang Keahlian Keamanan Siber',
                'photoUrl' => '/images/dosen/dosen-4.jpg',
            ],
            [
                'name' => 'Citra Dewi, S.Kom., M.Kom.',
                'title' => 'Dosen Bidang Keahlian Jaringan Komputer',
                'photoUrl' => '/images/dosen/dosen-5.jpg',
            ],
        ];

        foreach ($lecturers as $lecturer) {
            Lecturer::create($lecturer);
        }
    }
}