<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Visi;
use App\Models\Misi;
use App\Models\ProfilLulusan;
use App\Models\StrukturPimpinan;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class ProfilAdminController extends Controller
{
    public function visiMisi()
    {
        $visi = Visi::first();
        $misi = Misi::all();
        return Inertia::render('Admin/Profil/VisiMisi', [
            'visi' => $visi,
            'misi' => $misi,
        ]);
    }

    public function updateVisiMisi(Request $request)
    {
        $request->validate([
            'visi' => 'required|string',
            'misi' => 'required|array',
            'misi.*.content' => 'required|string',
        ]);

        $visi = Visi::first();
        $visi->update(['content' => $request->visi]);

        Misi::truncate();
        foreach ($request->misi as $misiItem) {
            Misi::create(['content' => $misiItem['content']]);
        }

        return Redirect::route('admin.profil.visi-misi')->with('success', 'Visi & Misi berhasil diperbarui.');
    }

    public function profilLulusan()
    {
        $profilLulusan = ProfilLulusan::all();
        return Inertia::render('Admin/Profil/ProfilLulusan', [
            'profilLulusan' => $profilLulusan,
        ]);
    }

    public function updateProfilLulusan(Request $request)
    {
        $request->validate([
            'profilLulusan' => 'required|array',
            'profilLulusan.*.content' => 'required|string',
        ]);

        ProfilLulusan::truncate();
        foreach ($request->profilLulusan as $profil) {
            ProfilLulusan::create(['content' => $profil['content']]);
        }

        return Redirect::route('admin.profil.profil-lulusan')->with('success', 'Profil Lulusan berhasil diperbarui.');
    }

    public function strukturPimpinan()
    {
        $strukturPimpinan = StrukturPimpinan::all();
        return Inertia::render('Admin/Profil/StrukturPimpinan', [
            'strukturPimpinan' => $strukturPimpinan,
        ]);
    }

    public function updateStrukturPimpinan(Request $request)
    {
        $request->validate([
            'images' => 'required|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $pimpinans = StrukturPimpinan::all();
        foreach ($pimpinans as $pimpinan) {
            if ($pimpinan->content) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $pimpinan->content));
            }
        }
        StrukturPimpinan::truncate();

        foreach ($request->file('images') as $image) {
            $path = $image->store('images/struktur-pimpinan', 'public');
            StrukturPimpinan::create(['content' => Storage::url($path)]);
        }

        return Redirect::route('admin.profil.struktur-pimpinan')->with('success', 'Struktur Pimpinan berhasil diperbarui.');
    }
}