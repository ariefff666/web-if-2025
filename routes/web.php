<?php

use App\Http\Controllers\BeritaPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProfilController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Models\NewsAnnouncementsAchievements;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [HomeController::class, 'index']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::prefix('profil')->name('profil.')->group(function () {
    Route::get('/visi-misi', [ProfilController::class, 'visiMisi']);
    Route::get('/profil-lulusan', [ProfilController::class, 'profilLulusan']);
    Route::get('/struktur-pimpinan', [ProfilController::class, 'strukturPimpinan']);
    Route::get('/capaian-pembelajaran', [ProfilController::class, 'capaianPembelajaran']);
// });

Route::get('/berita', [BeritaPageController::class, 'index']);

Route::get('/berita/{berita:slug}', [BeritaPageController::class, 'show']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
