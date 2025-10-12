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
}