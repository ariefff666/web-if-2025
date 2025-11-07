<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WelcomeMessage extends Model
{
    use HasFactory;

    protected $fillable = [
        'kajur_image_path',
        'title',
        'paragraph_1',
        'paragraph_2',
        'name',
    ];
}
