<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\NewsAnnouncementsAchievements;
use App\Models\Lecturer;
use App\Models\Akademik;
use App\Models\PanduanSop;
use App\Models\HeroSection;
use App\Models\WelcomeMessage;
use App\Models\Testimonial;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;

class AdminController extends Controller
{
    /**
     * Menampilkan halaman beranda admin (dashboard).
     */
    public function beranda()
    {
        $stats = [
            'berita' => NewsAnnouncementsAchievements::count(),
            'dosen' => Lecturer::count(),
            'dokumen' => Akademik::count() + PanduanSop::count(),
        ];

        $recentActivities = collect()
            ->concat(HeroSection::latest('updated_at')->limit(1)->get()->map(fn($item) => ['type' => 'Hero Section', 'item' => $item]))
            ->concat(WelcomeMessage::latest('updated_at')->limit(1)->get()->map(fn($item) => ['type' => 'Welcome Message', 'item' => $item]))
            ->concat(Testimonial::latest('updated_at')->limit(3)->get()->map(fn($item) => ['type' => 'Testimonial', 'item' => $item]))
            ->sortByDesc(fn($activity) => $activity['item']->updated_at)
            ->take(5)
            ->values();
        
        return Inertia::render('Admin/Beranda', [
            'stats' => $stats,
            'recentActivities' => $recentActivities,
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

    /**
     * Menampilkan halaman pengelolaan welcome message.
     */
    public function welcomeMessage()
    {
        $welcomeData = WelcomeMessage::first();
        return Inertia::render('Admin/WelcomeMessage', [
            'welcomeData' => $welcomeData
        ]);
    }

    /**
     * Memperbarui data welcome message.
     */
    public function updateWelcomeMessage(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'paragraph_1' => 'required|string',
            'paragraph_2' => 'nullable|string',
            'name' => 'required|string|max:255',
            'kajur_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $welcomeMessage = WelcomeMessage::first();

        if ($request->hasFile('kajur_image')) {
            if ($welcomeMessage->kajur_image_path) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $welcomeMessage->kajur_image_path));
            }

            $path = $request->file('kajur_image')->store('images/welcome', 'public');
            $welcomeMessage->kajur_image_path = Storage::url($path);
        }

        $welcomeMessage->title = $request->title;
        $welcomeMessage->paragraph_1 = $request->paragraph_1;
        $welcomeMessage->paragraph_2 = $request->paragraph_2;
        $welcomeMessage->name = $request->name;
        $welcomeMessage->save();

        return Redirect::route('admin.welcome-message')->with('success', 'Welcome Message berhasil diperbarui.');
    }
}