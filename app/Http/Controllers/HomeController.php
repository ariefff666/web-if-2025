<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use App\Models\Lecturer;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::latest()->take(6)->get();
        $lecturers = Lecturer::latest()->take(6)->get();
        
        return Inertia::render('Beranda', [
            'testimonials' => $testimonials,
            'lecturers' => $lecturers,
        ]);
    }
}