<?php

use App\Http\Controllers\BeritaPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProfilController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Models\NewsAnnouncementsAchievements;
use App\Http\Controllers\PanduanSopController;
<<<<<<< HEAD
use App\Http\Controllers\Admin\Auth\LoginController as AdminLoginController;
use App\Http\Middleware\IsAdmin;
use App\Http\Controllers\AdminController;
=======
use App\Http\Controllers\AkademikController;
>>>>>>> 1b2652c6695df93e7584aba7b709535f82075352

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

Route::get('/kurikulum', [AkademikController::class, 'kurikulum']);

Route::get('/jadwal', [AkademikController::class, 'jadwal']);

Route::get('/dokumen', [AkademikController::class, 'dokumen']);

// Rute untuk Panduan & SOP
Route::prefix('panduan-sop')->name('panduan-sop.')->group(function () {
    Route::get('/prosedur-tugas-akhir', [PanduanSopController::class, 'prosedurTA'])->name('prosedur-tugas-akhir');
    Route::get('/panduan-tugas-akhir', [PanduanSopController::class, 'panduanTA'])->name('panduan-tugas-akhir');
    Route::get('/prosedur-kerja-praktek', [PanduanSopController::class, 'prosedurKP'])->name('prosedur-kerja-praktek');
    Route::get('/panduan-kerja-praktek', [PanduanSopController::class, 'panduanKP'])->name('panduan-kerja-praktek');
    Route::get('/sop-mbkm', [PanduanSopController::class, 'sopMBKM'])->name('sop-mbkm');
    Route::get('/panduan-mk-proyek', [PanduanSopController::class, 'panduanMKProyek'])->name('panduan-mk-proyek');
    Route::get('/stream/{slug}', [PanduanSopController::class, 'streamPdf'])->name('stream');
});

<<<<<<< HEAD
Route::middleware(['auth', IsAdmin::class])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        
    Route::get('/beranda', [AdminController::class, 'beranda'])->name('beranda');

    // (temp buat halaman lain nanti)
    // Route::get('/profil', [AdminController::class, 'profil'])->name('profil');
    // Route::get('/berita', [AdminController::class, 'berita'])->name('berita');
    // Route::get('/akademik', [AdminController::class, 'akademik'])->name('akademik');
    // Route::get('/panduan-sop', [AdminController::class, 'panduanSop'])->name('panduan-sop');
        
});

// Rute untuk menampilkan form login admin
Route::get('admin/login', [AdminLoginController::class, 'create'])
     ->middleware('guest') // Hanya bisa diakses jika BELUM login
     ->name('admin.login.form');

// Rute untuk memproses login admin
Route::post('admin/login', [AdminLoginController::class, 'store'])
     ->middleware('guest')
     ->name('admin.login.store');

// Rute untuk logout admin
Route::post('admin/logout', [AdminLoginController::class, 'destroy'])
     ->middleware('auth') // Hanya bisa diakses jika SUDAH login
     ->name('admin.logout');

=======
// Route::prefix('akademik')->name('akademik.')->group(function () {
//     Route::get('/jadwal', [AkademikController::class, 'jadwal'])
//          ->name('jadwal');
//     Route::get('/kurikulum', [AkademikController::class, 'kurikulum'])
//          ->name('kurikulum');
//     Route::get('/dokumen', [AkademikController::class, 'dokumen'])
//          ->name('dokumen');
//     Route::get('/stream/{slug}', [AkademikController::class, 'streamPdf'])
//          ->name('stream');
// });
>>>>>>> 1b2652c6695df93e7584aba7b709535f82075352
require __DIR__.'/auth.php';