<?php

use App\Http\Controllers\BeritaPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProfilController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Models\NewsAnnouncementsAchievements;

Route::get('/', [HomeController::class, 'index']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::prefix('profil')->name('profil.')->group(function () {
    Route::get('/visi-misi', [ProfilController::class, 'visiMisi']);
    Route::get('/profil-lulusan', [ProfilController::class, 'profilLulusan']);
    Route::get('/struktur-pimpinan', [ProfilController::class, 'strukturPimpinan']);
    Route::get('/capaian-pembelajaran', [ProfilController::class, 'capaianPembelajaran']);
    Route::get('/profil-dosen', [ProfilController::class, 'dosen']);
// });

Route::get('/berita', [BeritaPageController::class, 'index']);

Route::get('/berita/{berita:slug}', [BeritaPageController::class, 'show']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/kurikulum', function () {
    return Inertia::render('Akademik/Kurikulum');
});

Route::get('/jadwal', function () {
    return Inertia::render('Akademik/Jadwal');
});

Route::get('/dokumen', function () {
    return Inertia::render('Akademik/Dokumen');
});

require __DIR__.'/auth.php';