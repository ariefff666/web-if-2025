<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use App\Models\Lecturer;
use Inertia\Inertia;
use App\Models\HeroSection;
use App\Models\WelcomeMessage;
use App\Models\NewsAnnouncementsAchievements;
use App\Models\Facilities;

class HomeController extends Controller
{
    public function index()
    {
        $heroData = HeroSection::first();
        $welcomeMessageData = WelcomeMessage::first();
        $testimonials = Testimonial::latest()->take(6)->get();
        $lecturers = Lecturer::latest()->take(6)->get();
        $news = NewsAnnouncementsAchievements::where('category', 'berita')->latest()->take(2)->get();
        $announcements =NewsAnnouncementsAchievements::where('category', 'pengumuman')->latest()->take(3)->get();
        $achievements =NewsAnnouncementsAchievements::where('category', 'prestasi')->latest()->take(3)->get();
        $facilitiesData = Facilities::latest()->get();
        
        return Inertia::render('Beranda', [
            'testimonials' => $testimonials,
            'lecturers' => $lecturers,
            'heroData' => $heroData,
            'welcomeMessageData' => $welcomeMessageData,
            'news' => $news,
            'announcements' => $announcements,
            'achievements' => $achievements,
            'facilitiesData' => $facilitiesData,
        ]);
    }
}