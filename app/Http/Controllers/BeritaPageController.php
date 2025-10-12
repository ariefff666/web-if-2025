<?php

namespace App\Http\Controllers;
use App\Models\NewsAnnouncementsAchievements;
use Inertia\Inertia;

class BeritaPageController extends Controller
{
    public function index()
    {
        return Inertia::render('Berita/Berita', [
            'news' => [
                'latest' => NewsAnnouncementsAchievements::where('category', 'berita')->latest()->take(6)->get(),
                'popular' => NewsAnnouncementsAchievements::where('category', 'berita')->where('is_popular', true)->latest()->take(4)->get(),
            ],
            'announcements' => [
                'latest' => NewsAnnouncementsAchievements::where('category', 'pengumuman')->latest()->take(6)->get(),
                'popular' => NewsAnnouncementsAchievements::where('category', 'pengumuman')->where('is_popular', true)->latest()->take(4)->get(),
            ],
            'achievements' => [
                'latest' => NewsAnnouncementsAchievements::where('category', 'prestasi')->latest()->take(6)->get(),
                'popular' => NewsAnnouncementsAchievements::where('category', 'prestasi')->where('is_popular', true)->latest()->take(4)->get(),
            ],
        ]);
    }

    public function show(NewsAnnouncementsAchievements $berita)
{
    // Ambil data populer berdasarkan kategori dari berita yang sedang dibuka
    $popularItems = NewsAnnouncementsAchievements::where('category', $berita->category)
                          ->where('is_popular', true)
                          ->where('id', '!=', $berita->id) // Jangan tampilkan berita yang sedang dibaca
                          ->latest()
                          ->take(5)
                          ->get();

    return Inertia::render('Berita/Show', [
        'berita' => $berita,
        'popularItems' => $popularItems, // Kirim data populer ke frontend
    ]);
}
}