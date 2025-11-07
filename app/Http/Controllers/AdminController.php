<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\NewsAnnouncementsAchievements;
use App\Models\Lecturer;
use App\Models\HeroSection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;

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

    /**
     * Menampilkan halaman pengelolaan hero section.
     */
    public function heroSection()
    {
        $heroData = HeroSection::first(); // Asumsi hanya ada satu baris data
        return Inertia::render('Admin/HeroSection', [
            'heroData' => $heroData
        ]);
    }

    /**
     * Memperbarui data hero section.
     */
    public function updateHeroSection(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'paragraph_1' => 'required|string',
            'paragraph_2' => 'nullable|string',
            'hero_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $heroSection = HeroSection::first();

        if ($request->hasFile('hero_image')) {
            // Hapus gambar lama jika ada
            if ($heroSection->hero_image_path) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $heroSection->hero_image_path));
            }

            $path = $request->file('hero_image')->store('images/hero', 'public');
            $heroSection->hero_image_path = Storage::url($path);
        }

        $heroSection->title = $request->title;
        $heroSection->paragraph_1 = $request->paragraph_1;
        $heroSection->paragraph_2 = $request->paragraph_2;
        $heroSection->save();

        return Redirect::route('admin.hero-section')->with('success', 'Hero Section berhasil diperbarui.');
    }
}