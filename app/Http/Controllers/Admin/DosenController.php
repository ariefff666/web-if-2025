<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Lecturer;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class DosenController extends Controller
{
    public function index()
    {
        $lecturers = Lecturer::all();
        return Inertia::render('Admin/Profil/Dosen/Index', [
            'lecturers' => $lecturers,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Profil/Dosen/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $lecturer = new Lecturer($request->except('photo'));

        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('images/lecturers', 'public');
            $lecturer->photoUrl = Storage::url($path);
        }

        $lecturer->save();

        return Redirect::route('admin.profil.dosen.index')->with('success', 'Dosen berhasil ditambahkan.');
    }

    public function edit(Lecturer $dosen)
    {
        return Inertia::render('Admin/Profil/Dosen/Edit', [
            'lecturer' => $dosen,
        ]);
    }

    public function update(Request $request, Lecturer $dosen)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $dosen->fill($request->except('photo'));

        if ($request->hasFile('photo')) {
            if ($dosen->photoUrl) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $dosen->photoUrl));
            }
            $path = $request->file('photo')->store('images/lecturers', 'public');
            $dosen->photoUrl = Storage::url($path);
        }

        $dosen->save();

        return Redirect::route('admin.profil.dosen.index')->with('success', 'Dosen berhasil diperbarui.');
    }

    public function destroy(Lecturer $dosen)
    {
        if ($dosen->photoUrl) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $dosen->photoUrl));
        }
        $dosen->delete();

        return Redirect::route('admin.profil.dosen.index')->with('success', 'Dosen berhasil dihapus.');
    }
}
