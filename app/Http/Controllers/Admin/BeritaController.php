<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\NewsAnnouncementsAchievements as Berita;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BeritaController extends Controller
{
    public function index()
    {
        $berita = Berita::all();
        return Inertia::render('Admin/Berita/Index', [
            'berita' => $berita,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Berita/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|in:berita,pengumuman,prestasi',
            'body' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $berita = new Berita($request->except('image'));
        $berita->slug = Str::slug($request->title);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images/berita', 'public');
            $berita->image_url = Storage::url($path);
        }

        $berita->save();

        return Redirect::route('admin.berita.index')->with('success', 'Berita berhasil ditambahkan.');
    }

    public function edit(Berita $beritum)
    {
        return Inertia::render('Admin/Berita/Edit', [
            'berita' => $beritum,
        ]);
    }

    public function update(Request $request, Berita $beritum)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|in:berita,pengumuman,prestasi',
            'body' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $beritum->fill($request->except('image'));
        $beritum->slug = Str::slug($request->title);

        if ($request->hasFile('image')) {
            if ($beritum->image_url) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $beritum->image_url));
            }
            $path = $request->file('image')->store('images/berita', 'public');
            $beritum->image_url = Storage::url($path);
        }

        $beritum->save();

        return Redirect::route('admin.berita.index')->with('success', 'Berita berhasil diperbarui.');
    }

    public function destroy(Berita $beritum)
    {
        if ($beritum->image_url) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $beritum->image_url));
        }
        $beritum->delete();

        return Redirect::route('admin.berita.index')->with('success', 'Berita berhasil dihapus.');
    }
}
