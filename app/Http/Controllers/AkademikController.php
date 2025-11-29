<?php

namespace App\Http\Controllers;
use App\Models\Akademik;
use App\Models\AkademikDokumen;
use Inertia\Inertia;

class AkademikController extends Controller {
    public function jadwal() {
        $jadwal = Akademik::where('category', 'jadwal')->latest()->get();
        return Inertia::render('Akademik/Jadwal', [
            'jadwal' => $jadwal,
        ]);
    }

    public function kurikulum() {
        $kurikulum = Akademik::where('category', 'kurikulum')->latest()->get();
        return Inertia::render('Akademik/Kurikulum', [
            'kurikulum' => $kurikulum,
        ]);
    }

    public function dokumen() {
        $dokumen = Akademik::where('category', 'dokumen')->latest()->get();
        return Inertia::render('Akademik/Dokumen', [
            'dokumen' => $dokumen,
        ]);
    }
}