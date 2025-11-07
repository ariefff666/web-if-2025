<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\NewsAnnouncementsAchievements;
use App\Models\Lecturer;

class AdminController extends Controller
{
    /**
     * Menampilkan halaman beranda admin (dashboard).
     */
    public function beranda()
    {
        // Nanti kita akan pass data statistik ke sini untuk dashboard
        // $stats = [
        //     'berita' => NewsAnnouncementsAchievements::count(),
        //     'dosen' => Lecturer::count(),
        //     'dokumen' => \App\Models\Akademik::count() + \App\Models\PanduanSop::count(),
        // ];
        
        // Untuk sekarang, kita render halaman saja
        return Inertia::render('Admin/Beranda', [
            // 'stats' => $stats
        ]);
    }

    // Kita akan tambahkan method untuk menu lain di sini nanti
    // public function profil() { ... }
    // public function berita() { ... }
    // public function akademik() { ... }
    // public function panduanSop() { ... }
}