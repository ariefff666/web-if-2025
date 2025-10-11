<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('testimonials', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('title'); // Contoh: Software Engineer @ Google
        $table->string('major'); // Contoh: Teknik Informatika Angkatan '23
        $table->string('avatar')->nullable(); // Path ke foto
        $table->text('text');
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('testimonials');
    }
};
