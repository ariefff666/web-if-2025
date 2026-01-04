<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LecturerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('lecturers')->delete();

        DB::table('lecturers')->insert([
            [
                'id' => 1,
                'name' => 'Hadipurnawan Satria, M.Sc., Ph.D.',
                'title' => 'Dosen Bidang Sistem Terdistribusi',
                'photoUrl' => '/storage/dosen/hadi-purnawan.jpeg',
                'created_at' => '2025-10-11 17:59:14',
                'updated_at' => '2025-10-11 17:59:14',
            ],
            [
                'id' => 2,
                'name' => 'Anggina Primanita, M.IT, Ph. D',
                'title' => 'Dosen Bidang Game Development',
                'photoUrl' => '/storage/dosen/anggina-primanita.jpeg',
                'created_at' => '2025-10-11 17:59:14',
                'updated_at' => '2025-10-11 17:59:14',
            ],
            [
                'id' => 3,
                'name' => 'Kanda Januar Miraswan, M.T.',
                'title' => 'Dosen Bidang Big Data dan Pengenalan Pola',
                'photoUrl' => '/storage/dosen/kanda-januar.jpeg',
                'created_at' => '2025-10-11 17:59:14',
                'updated_at' => '2025-10-11 17:59:14',
            ],
            [
                'id' => 4,
                'name' => 'Novi Yusliani, M.T.',
                'title' => 'Dosen Bidang Pemrosesan Bahasa Alami',
                'photoUrl' => '/storage/dosen/dosen-4.jpg',
                'created_at' => '2025-10-11 17:59:14',
                'updated_at' => '2025-10-11 17:59:14',
            ],
            [
                'id' => 5,
                'name' => 'Citra Dewi, S.Kom., M.Kom.',
                'title' => 'Dosen Bidang Keahlian Jaringan Komputer',
                'photoUrl' => '/storage/dosen/dosen-5.jpg',
                'created_at' => '2025-10-11 17:59:14',
                'updated_at' => '2025-10-11 17:59:14',
            ],
        ]);
    }
}