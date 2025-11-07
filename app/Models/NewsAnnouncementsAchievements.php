<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsAnnouncementsAchievements extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'category',
        'is_popular',
        'excerpt',
        'body',
        'image_url',
        'student_name',
        'date',
        'published_at',
    ];
}
