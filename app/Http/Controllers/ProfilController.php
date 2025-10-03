<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilController extends Controller
{
    // Menampilkan halaman Visi & Misi
    public function visiMisi()
    {
        return Inertia::render('Profil/VisiMisi', [
            'title' => 'Visi & Misi',
            'breadcrumbs' => [
                ['label' => 'Profil', 'url' => '#'],
                ['label' => 'Visi & Misi', 'url' => route('profil.visi-misi')],
            ]
        ]);
    }

    // Menampilkan halaman Profil Jurusan
    public function profilJurusan()
    {
        return Inertia::render('Profil/ProfilJurusan', [
            'title' => 'Profil Jurusan',
            'breadcrumbs' => [
                ['label' => 'Profil', 'url' => '#'],
                ['label' => 'Profil Jurusan', 'url' => route('profil.profil-jurusan')],
            ]
        ]);
    }

    // Menampilkan halaman Struktur Pimpinan
    public function strukturPimpinan()
    {
        return Inertia::render('Profil/StrukturPimpinan', [
            'title' => 'Struktur Pimpinan',
            'breadcrumbs' => [
                ['label' => 'Profil', 'url' => '#'],
                ['label' => 'Struktur Pimpinan', 'url' => route('profil.struktur-pimpinan')],
            ]
        ]);
    }

    // Menampilkan halaman Capaian Pembelajaran Lulusan
    public function capaianPembelajaran()
    {
        return Inertia::render('Profil/CapaianPembelajaran', [
            'title' => 'Capaian Pembelajaran Lulusan',
            'breadcrumbs' => [
                ['label' => 'Profil', 'url' => '#'],
                ['label' => 'Capaian Pembelajaran Lulusan', 'url' => route('profil.capaian-pembelajaran')],
            ]
        ]);
    }
}
