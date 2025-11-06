<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Jalankan migrasi untuk membuat tabel capaian_pembelajaran.
     */
    public function up(): void
    {
        Schema::create('c_p_l_s', function (Blueprint $table) {
            $table->id();
            $table->string('kode', 10)->unique(); // Contoh: S1, P3, KU2, KK9
            $table->enum('kategori', ['S', 'P', 'KU', 'KK']); // Jenis capaian
            $table->string('sub_kategori', 100); // Nama lengkap kategori (misal: Sikap dan Tata Nilai)
            $table->text('deskripsi'); // Isi deskripsi capaian pembelajaran
            $table->timestamps();
        });
    }

    /**
     * Hapus tabel jika migrasi di-rollback.
     */
    public function down(): void
    {
        Schema::dropIfExists('c_p_l_s');
    }
};
