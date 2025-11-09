<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CPL;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class CplController extends Controller
{
    public function index()
    {
        $cpls = CPL::all();
        return Inertia::render('Admin/Profil/Cpl/Index', [
            'cpls' => $cpls,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Profil/Cpl/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'kode' => 'required|string|max:255',
            'kategori' => 'required|string|max:255',
            'sub_kategori' => 'required|string|max:255',
            'deskripsi' => 'required|string',
        ]);

        CPL::create($request->all());

        return Redirect::route('admin.profil.cpl.index')->with('success', 'CPL berhasil ditambahkan.');
    }

    public function edit(CPL $cpl)
    {
        return Inertia::render('Admin/Profil/Cpl/Edit', [
            'cpl' => $cpl,
        ]);
    }

    public function update(Request $request, CPL $cpl)
    {
        $request->validate([
            'kode' => 'required|string|max:255',
            'kategori' => 'required|string|max:255',
            'sub_kategori' => 'required|string|max:255',
            'deskripsi' => 'required|string',
        ]);

        $cpl->update($request->all());

        return Redirect::route('admin.profil.cpl.index')->with('success', 'CPL berhasil diperbarui.');
    }

    public function destroy(CPL $cpl)
    {
        $cpl->delete();

        return Redirect::route('admin.profil.cpl.index')->with('success', 'CPL berhasil dihapus.');
    }
}
