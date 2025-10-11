<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Testimonial;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Testimonial::create([
            'name' => 'Ahmad Farhan Rasyidin',
            'title' => 'Software Engineer @ Google',
            'major' => "Teknik Informatika Angkatan '23",
            'avatar' => '/images/avatars-alumni/avatar-1.jpg',
            'text' => 'Selama kuliah, saya mendapatkan pemahaman mendalam tentang berbagai aspek T.I, termasuk teori, media massa, public relations, dan komunikasi organisasi. Kuliah ini memberikan landasan yang kuat bagi karier saya di dunia teknologi. Proses penyusunan kurikulum didasarkan pada masukan dari berbagai pihak seperti industri dan alumni.'
        ]);

        Testimonial::create([
            'name' => 'Sheryl Jesselyn',
            'title' => 'UI/UX Designer @ Gojek',
            'major' => "Teknik Informatika Angkatan '22",
            'avatar' => '/images/avatars-alumni/avatar-2.jpg',
            'text' => 'Proses penyusunan kurikulum didasarkan pada masukan dari berbagai pihak seperti industri dan alumni, untuk memastikan relevansinya dengan dunia kerja yang semakin kompleks. Ini sangat membantu saya saat pertama kali bekerja.'
        ]);

        Testimonial::create([
            'name' => 'Stefanie Cho',
            'title' => 'Data Scientist @ Tokopedia',
            'major' => "Teknik Informatika Angkatan '21",
            'avatar' => '/images/avatars-alumni/avatar-3.jpg',
            'text' => 'Program studi ini berkomitmen kuat dalam meningkatkan mutu pendidikan. Kurikulum berbasis OBE memastikan setiap lulusan memiliki keterampilan praktis yang relevan dengan kebutuhan industri. Saya sangat merasakannya.'
        ]);

        Testimonial::create([
            'name' => 'Zelia Valetzkya',
            'title' => 'Project Manager @ Traveloka',
            'major' => "Teknik Informatika Angkatan '20",
            'avatar' => '/images/avatars-alumni/avatar-4.jpg',
            'text' => 'Saya bersyukur telah menempuh program studi ini. Saya telah berhasil bekerja di beberapa perusahaan ternama dan mengaplikasikan pengetahuan dan keterampilan yang saya pelajari selama kuliah. Terima kasih Fasilkom Unsri!'
        ]);

        Testimonial::create([
            'name' => 'Grimaldie William',
            'title' => 'Cybersecurity Analyst @ BSSN',
            'major' => "Teknik Informatika Angkatan '19",
            'avatar' => '/images/avatars-alumni/avatar-5.jpg',
            'text' => 'Selain teori, kami juga dibekali keterampilan praktis yang relevan dengan kebutuhan industri. Proses pembelajaran didasarkan pada masukan dari berbagai pihak seperti industri, alumni, dan asosiasi.'
        ]);
    }
}
