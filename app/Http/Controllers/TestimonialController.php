<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::all();
        return Inertia::render('Admin/Testimonials/Index', [
            'testimonials' => $testimonials,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Testimonials/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'major' => 'required|string|max:255',
            'text' => 'required|string',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $testimonial = new Testimonial($request->except('avatar'));

        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('images/testimonials', 'public');
            $testimonial->avatar = Storage::url($path);
        }

        $testimonial->save();

        return Redirect::route('admin.testimonials.index')->with('success', 'Testimonial berhasil ditambahkan.');
    }

    public function edit(Testimonial $testimonial)
    {
        return Inertia::render('Admin/Testimonials/Edit', [
            'testimonial' => $testimonial,
        ]);
    }

    public function update(Request $request, Testimonial $testimonial)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'major' => 'required|string|max:255',
            'text' => 'required|string',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $testimonial->fill($request->except('avatar'));

        if ($request->hasFile('avatar')) {
            if ($testimonial->avatar) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $testimonial->avatar));
            }
            $path = $request->file('avatar')->store('images/testimonials', 'public');
            $testimonial->avatar = Storage::url($path);
        }

        $testimonial->save();

        return Redirect::route('admin.testimonials.index')->with('success', 'Testimonial berhasil diperbarui.');
    }

    public function destroy(Testimonial $testimonial)
    {
        if ($testimonial->avatar) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $testimonial->avatar));
        }
        $testimonial->delete();

        return Redirect::route('admin.testimonials.index')->with('success', 'Testimonial berhasil dihapus.');
    }
}
