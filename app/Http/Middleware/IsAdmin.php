<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class IsAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        // Cek apakah user sudah login DAN memiliki role 'admin'
        if (!Auth::check() || !Auth::user()->is_admin) {
            // Jika tidak, tendang ke halaman utama
            return redirect('/')->with('error', 'Anda tidak memiliki hak akses.');
        }

        return $next($request);
    }
}