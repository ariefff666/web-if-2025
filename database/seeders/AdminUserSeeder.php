<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->delete();

        DB::table('users')->insert([
            'id' => 1,
            'name' => 'Admin',
            'email' => 'admin@if.unsri.ac.id',
            'is_admin' => 1,
            'email_verified_at' => '2025-11-07 07:22:25',
            'password' => '$2y$12$rAiGnHWtzztVfQqoiPHTX.u6ET4fAYkJpSUXjNed6xKapteyKIjX.',
            'remember_token' => NULL,
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
    }
}