<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PanduanSop;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PanduanSopAdminController extends Controller
{
    public function index()
    {
        $panduanSop = PanduanSop::all();
        return Inertia::render('Admin/PanduanSop/Index', [
            'panduanSop' => $panduanSop,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/PanduanSop/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'file' => 'required|file|mimes:pdf,doc,docx,xls,xlsx,ppt,pptx',
        ]);

        $panduanSop = new PanduanSop($request->except('file'));
        $panduanSop->slug = Str::slug($request->title);

        if ($request->hasFile('file')) {
            $path = $request->file('file')->store('documents/panduan-sop', 'public');
            $panduanSop->file_path = Storage::url($path);
        }

        $panduanSop->save();

        return Redirect::route('admin.panduan-sop.index')->with('success', 'Dokumen berhasil ditambahkan.');
    }

    public function edit(PanduanSop $panduanSop)
    {
        return Inertia::render('Admin/PanduanSop/Edit', [
            'panduanSop' => $panduanSop,
        ]);
    }

    public function update(Request $request, PanduanSop $panduanSop)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'file' => 'nullable|file|mimes:pdf,doc,docx,xls,xlsx,ppt,pptx',
        ]);

        $panduanSop->fill($request->except('file'));
        $panduanSop->slug = Str::slug($request->title);

        if ($request->hasFile('file')) {
            if ($panduanSop->file_path) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $panduanSop->file_path));
            }
            $path = $request->file('file')->store('documents/panduan-sop', 'public');
            $panduanSop->file_path = Storage::url($path);
        }

        $panduanSop->save();

        return Redirect::route('admin.panduan-sop.index')->with('success', 'Dokumen berhasil diperbarui.');
    }

    public function destroy(PanduanSop $panduanSop)
    {
        if ($panduanSop->file_path) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $panduanSop->file_path));
        }
        $panduanSop->delete();

        return Redirect::route('admin.panduan-sop.index')->with('success', 'Dokumen berhasil dihapus.');
    }
}
