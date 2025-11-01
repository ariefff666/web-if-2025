<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\HeroSection;

class HeroSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HeroSection::truncate();

        HeroSection::create([
            'hero_image_path' => '/storage/dosen/hadi-purnawan.jpeg',
            'title' => 'Tentang Prodi Teknik Informatika',
            'paragraph_1' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ipsam ratione maiores at ipsa quo laudantium ad illum commodi cupiditate repellendus laboriosam modi, quos alias voluptatibus minima nihil a eaque in, similique fugit dignissimos.',
            'paragraph_2' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minus asperiores et quas dolorem, dignissimos molestias aliquam odit accusantium quisquam minima earum ullam facere nemo accusamus animi perferendis architecto similique.',
        ]);
    }
}
