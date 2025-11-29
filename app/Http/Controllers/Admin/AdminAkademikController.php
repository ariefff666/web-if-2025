<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Akademik;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AdminAkademikController extends Controller
{
    public function index()
    {
        $akademik = Akademik::all();
        return Inertia::render('Admin/Akademik/Index', [
            'akademik' => $akademik,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Akademik/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|in:kurikulum,jadwal,dokumen',
            'file' => 'required|file|mimes:pdf,doc,docx,xls,xlsx,ppt,pptx',
        ]);

        $akademik = new Akademik($request->except('file'));
        $akademik->slug = Str::slug($request->title);
        $akademik->category = $request->category;

        if ($request->hasFile('file')) {
            $path = $request->file('file')->store('documents/akademik', 'public');
            $akademik->file_path = Storage::url($path);
        }

        $akademik->save();

        return Redirect::route('admin.akademik.index')->with('success', 'Dokumen akademik berhasil ditambahkan.');
    }

    public function edit(Akademik $akademik)
    {
        return Inertia::render('Admin/Akademik/Edit', [
            'akademik' => $akademik,
        ]);
    }

    public function update(Request $request, Akademik $akademik)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|in:kurikulum,jadwal,dokumen',
            'file' => 'nullable|file|mimes:pdf,doc,docx,xls,xlsx,ppt,pptx',
        ]);

        $akademik->fill($request->except('file'));
        $akademik->slug = Str::slug($request->title);
        $akademik->category = $request->category;

        if ($request->hasFile('file')) {
            if ($akademik->file_path) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $akademik->file_path));
            }
            $path = $request->file('file')->store('documents/akademik', 'public');
            $akademik->file_path = Storage::url($path);
        }

        $akademik->save();

        return Redirect::route('admin.akademik.index')->with('success', 'Dokumen akademik berhasil diperbarui.');
    }

    public function destroy(Akademik $akademik)
    {
        if ($akademik->file_path) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $akademik->file_path));
        }
        $akademik->delete();

        return Redirect::route('admin.akademik.index')->with('success', 'Dokumen akademik berhasil dihapus.');
    }
}
