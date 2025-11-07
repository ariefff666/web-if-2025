<?php

namespace App\Http\Controllers;
use App\Models\Akademik;
use App\Models\AkademikDokumen;
use Inertia\Inertia;

class AkademikController extends Controller {
    public function jadwal() {
        $jadwal = Akademik::where('slug', 'jadwal')->first();
        return Inertia::render('Akademik/Jadwal', [
            'jadwal' => $jadwal,
        ]);
    }

    public function kurikulum() {
        $kurikulum = Akademik::where('slug', 'kurikulum')->first();
        return Inertia::render('Akademik/Kurikulum', [
            'kurikulum' => $kurikulum,
        ]);
    }

    public function dokumen() {
        $dokumen = AkademikDokumen::latest()->get();
        return Inertia::render('Akademik/Dokumen', [
            'dokumen' => $dokumen,
        ]);
    }
}