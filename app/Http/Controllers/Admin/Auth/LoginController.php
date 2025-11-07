<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class LoginController extends Controller
{
    /**
     * Menampilkan halaman login admin.
     */
    public function create(): InertiaResponse
    {
        return Inertia::render('Admin/Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Memproses request login admin.
     */
    public function store(LoginRequest $request): \Illuminate\Http\RedirectResponse
    {
        // 1. Coba autentikasi seperti biasa
        $request->authenticate();

        // 2. CEK KRUSIAL: Apakah user ini admin?
        if (!Auth::user()->is_admin) {
            // Jika BUKAN admin, langsung logout lagi
            Auth::guard('web')->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();

            // Kembalikan ke login dengan pesan error
            return redirect()->route('login')
                ->withErrors(['email' => 'Anda tidak memiliki hak akses admin.']);
        }

        // 3. Jika DIA admin, lanjutkan sesi
        $request->session()->regenerate();

        // Redirect ke admin beranda
        return redirect()->intended(route('admin.beranda', [], false));
    }

    /**
     * Menghancurkan sesi (logout) admin.
     */
    public function destroy(Request $request): \Illuminate\Http\RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        // Redirect ke halaman login admin, bukan halaman utama
        return redirect()->route('login');
    }
}