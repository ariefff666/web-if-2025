<?php

namespace App\Http\Controllers;

use App\Models\PanduanSop;
use Inertia\Inertia;
use Inertia\Response;

class PanduanSopController extends Controller
{
    public function panduan(): Response
    {
        $panduan = PanduanSop::where('category', 'panduan')->latest()->get();
        return Inertia::render('PanduanSop/Panduan', [
            'panduan' => $panduan,
        ]);
    }

    public function sop(): Response
    {
        $sop = PanduanSop::where('category', 'sop')->latest()->get();
        return Inertia::render('PanduanSop/Sop', [
            'sop' => $sop,
        ]);
    }

    public function prosedur(): Response
    {
        $prosedur = PanduanSop::where('category', 'prosedur')->latest()->get();
        return Inertia::render('PanduanSop/Prosedur', [
            'prosedur' => $prosedur,
        ]);
    }
}