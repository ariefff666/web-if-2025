<?php

namespace App\Http\Controllers;

use App\Models\PanduanSop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class PanduanSopController extends Controller
{
    /**
     * Helper function untuk merender halaman.
     * Ini adalah best practice agar tidak mengulang kode (DRY).
     */
    private function renderPanduanPage(string $slug, string $title, string $breadcrumbLabel): Response
    {
        $currentPanduan = PanduanSop::where('slug', $slug)->firstOrFail();
        $allPanduan = PanduanSop::all()->map(function ($item) {
            return [
                'title' => $item->title,
                'slug' => $item->slug,
            ];
        });

        return Inertia::render('PanduanSop/Show', [
            'title' => $title,
            'breadcrumbs' => [
                ['label' => 'Panduan & SOP', 'url' => '#'],
                ['label' => $breadcrumbLabel, 'url' => route('panduan-sop.' . str_replace('_', '-', $slug))],
            ],
            'currentPanduan' => [
                'title' => $currentPanduan->title,
                'slug' => $currentPanduan->slug,
                'file_url' => route('panduan-sop.stream', $currentPanduan->slug),
            ],
            'allPanduan' => $allPanduan,
        ]);
    }

    public function prosedurTA(): Response
    {
        return $this->renderPanduanPage(
            'prosedur-tugas-akhir',
            'Prosedur Tugas Akhir',
            'Prosedur Tugas Akhir'
        );
    }

    public function panduanTA(): Response
    {
        return $this->renderPanduanPage(
            'panduan-tugas-akhir',
            'Panduan Tugas Akhir',
            'Panduan Tugas Akhir'
        );
    }

    public function prosedurKP(): Response
    {
        return $this->renderPanduanPage(
            'prosedur-kerja-praktek',
            'Prosedur Kerja Praktek',
            'Prosedur Kerja Praktek'
        );
    }

    public function panduanKP(): Response
    {
        return $this->renderPanduanPage(
            'panduan-kerja-praktek',
            'Panduan Kerja Praktek',
            'Panduan Kerja Praktek'
        );
    }

    public function sopMBKM(): Response
    {
        return $this->renderPanduanPage(
            'sop-mbkm',
            'SOP MBKM',
            'SOP MBKM'
        );
    }

    public function panduanMKProyek(): Response
    {
        return $this->renderPanduanPage(
            'panduan-mk-proyek',
            'Panduan Mata Kuliah Berbasis Proyek',
            'Panduan MK Berbasis Proyek'
        );
    }

    public function streamPdf($slug)
    {
        $panduan = PanduanSop::where('slug', $slug)->firstOrFail();
        $path = $panduan->file_path;

        if (!Storage::disk('public')->exists($path)) {
            abort(404, 'File tidak ditemukan.');
        }

        $filePath = Storage::disk('public')->path($path);
        $fileName = basename($path);
        
        return response()->file($filePath, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="' . $fileName . '"'
        ]);
    }
}