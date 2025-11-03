<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Lecturer;
use App\Models\Visi;
use App\Models\Misi;
use App\Models\ProfilLulusan;
use App\Models\StrukturPimpinan;

class ProfilController extends Controller
{
    // Menampilkan halaman Visi & Misi
    public function visiMisi()
    {
        $visis = Visi::first();
        $misis = Misi::latest()->get();
        return Inertia::render('Profil/VisiMisi', [
            'title' => 'Visi & Misi',
            'visis' => $visis,
            'misis' => $misis,
        ]);
    }

    // Menampilkan halaman Profil Jurusan
    public function profilLulusan()
    {
        $profilLulusans = ProfilLulusan::latest()->get();

        return Inertia::render('Profil/ProfilLulusan', [
            'title' => 'Profil ProfilLulusan',
            'profilLulusans' => $profilLulusans,
            // 'breadcrumbs' => [
            //     ['label' => 'Profil', 'url' => '#'],
            //     ['label' => 'Profil lulusan', 'url' => route('profil.profil-lulusan')],
            // ]
        ]);
    }

    // Menampilkan halaman Struktur Pimpinan
    public function strukturPimpinan()
    {
        $strukturPimpinans = StrukturPimpinan::first();
        return Inertia::render('Profil/StrukturPimpinan', [
            'title' => 'Struktur Pimpinan',
            'strukturPimpinans' => $strukturPimpinans,
            // 'breadcrumbs' => [
            //     ['label' => 'Profil', 'url' => '#'],
            //     ['label' => 'Struktur Pimpinan', 'url' => route('profil.struktur-pimpinan')],
            // ]
        ]);
    }

    // Menampilkan halaman Capaian Pembelajaran Lulusan
    public function capaianPembelajaran()
    {
        return Inertia::render('Profil/CapaianPembelajaran', [
            'title' => 'Capaian Pembelajaran Lulusan',
            // 'breadcrumbs' => [
            //     ['label' => 'Profil', 'url' => '#'],
            //     ['label' => 'Capaian Pembelajaran Lulusan', 'url' => route('profil.capaian-pembelajaran')],
            // ]
        ]);
    }

    public function dosen(){
        $lecturers = Lecturer::latest()->get();
        return Inertia::render('Profil/Dosen', [
            'lecturers' => $lecturers,
        ]);
    }
}
