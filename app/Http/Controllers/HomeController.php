<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use App\Models\Lecturer;
use Inertia\Inertia;
use App\Models\HeroSection;
use App\Models\WelcomeMessage;

class HomeController extends Controller
{
    public function index()
    {
        $heroData = HeroSection::first();
        $welcomeMessageData = WelcomeMessage::first();
        $testimonials = Testimonial::latest()->take(6)->get();
        $lecturers = Lecturer::latest()->take(6)->get();
        
        return Inertia::render('Beranda', [
            'testimonials' => $testimonials,
            'lecturers' => $lecturers,
            'heroData' => $heroData,
            'welcomeMessageData' => $welcomeMessageData,
        ]);
    }
}