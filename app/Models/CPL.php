<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CPL extends Model
{
    use HasFactory;

    protected $table = 'c_p_l_s';

    protected $fillable = [
        'kode',
        'kategori',
        'sub_kategori',
        'deskripsi',
    ];
}
