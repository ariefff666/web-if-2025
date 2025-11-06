<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CPL;

class CPLSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CPL::insert([
            // ===================== SIKAP DAN TATA NILAI (S) =====================
            ['kode' => 'S1', 'kategori' => 'S', 'sub_kategori' => 'Sikap dan Tata Nilai', 'deskripsi' => 'Bertaqwa kepada Tuhan Yang Maha Esa dan mampu menunjukkan sikap religius', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'S2', 'kategori' => 'S', 'sub_kategori' => 'Sikap dan Tata Nilai', 'deskripsi' => 'Menjunjung tinggi nilai kemanusiaan dalam menjalankan tugas berdasarkan agama, moral, dan etika', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'S3', 'kategori' => 'S', 'sub_kategori' => 'Sikap dan Tata Nilai', 'deskripsi' => 'Berkontribusi dalam peningkatan mutu kehidupan bermasyarakat, berbangsa, bernegara, dan kemajuan peradaban berdasarkan Pancasila', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'S4', 'kategori' => 'S', 'sub_kategori' => 'Sikap dan Tata Nilai', 'deskripsi' => 'Berperan sebagai warga negara yang bangga dan cinta tanah air, memiliki nasionalisme serta rasa tanggung jawab pada negara dan bangsa', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'S5', 'kategori' => 'S', 'sub_kategori' => 'Sikap dan Tata Nilai', 'deskripsi' => 'Menghargai keanekaragaman budaya, pandangan, agama, dan kepercayaan, serta pendapat atau temuan orisinal orang lain', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'S6', 'kategori' => 'S', 'sub_kategori' => 'Sikap dan Tata Nilai', 'deskripsi' => 'Bekerjasama dan memiliki kepekaan sosial serta kepedulian terhadap masyarakat dan lingkungan', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'S7', 'kategori' => 'S', 'sub_kategori' => 'Sikap dan Tata Nilai', 'deskripsi' => 'Taat hukum dan disiplin dalam kehidupan bermasyarakat dan bernegara', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'S8', 'kategori' => 'S', 'sub_kategori' => 'Sikap dan Tata Nilai', 'deskripsi' => 'Menginternalisasi nilai, norma, dan etik akademik', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'S9', 'kategori' => 'S', 'sub_kategori' => 'Sikap dan Tata Nilai', 'deskripsi' => 'Menunjukkan sikap bertanggung jawab atas pekerjaan di bidang keahliannya secara mandiri', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'S10', 'kategori' => 'S', 'sub_kategori' => 'Sikap dan Tata Nilai', 'deskripsi' => 'Menginternalisasi semangat kemandirian, kejuangan, dan kewirausahaan', 'created_at' => now(), 'updated_at' => now()],

            // ===================== PENGETAHUAN (P) =====================
            ['kode' => 'P1', 'kategori' => 'P', 'sub_kategori' => 'Pengetahuan', 'deskripsi' => 'Mampu menguasai konsep manajemen layanan sistem dan teknologi informasi yang komprehensif termasuk penanganan risiko, keamanan dan audit sistem informasi.', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'P2', 'kategori' => 'P', 'sub_kategori' => 'Pengetahuan', 'deskripsi' => 'Mampu menguasai konsep teknologi terkini sebagai solusi bisnis.', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'P3', 'kategori' => 'P', 'sub_kategori' => 'Pengetahuan', 'deskripsi' => 'Mampu menguasai konsep pembuatan program komputer.', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'P4', 'kategori' => 'P', 'sub_kategori' => 'Pengetahuan', 'deskripsi' => 'Mampu menguasai konsep komunikasi, mempengaruhi antar personal.', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'P5', 'kategori' => 'P', 'sub_kategori' => 'Pengetahuan', 'deskripsi' => 'Mampu menguasai konsep pemodelan data dan cara menganalisis hasilnya dalam pendukung pengambilan keputusan.', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'P6', 'kategori' => 'P', 'sub_kategori' => 'Pengetahuan', 'deskripsi' => 'Mampu menguasai konsep pengembangan sistem informasi.', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'P7', 'kategori' => 'P', 'sub_kategori' => 'Pengetahuan', 'deskripsi' => 'Mampu menguasai konsep cara menganalisis kebutuhan bisnis.', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'P8', 'kategori' => 'P', 'sub_kategori' => 'Pengetahuan', 'deskripsi' => 'Mampu menguasai tren bisnis model.', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'P9', 'kategori' => 'P', 'sub_kategori' => 'Pengetahuan', 'deskripsi' => 'Mampu menguasai konsep kerangka kerja pemodelan bisnis.', 'created_at' => now(), 'updated_at' => now()],

            // ===================== KETERAMPILAN UMUM (KU) =====================
            ['kode' => 'KU1', 'kategori' => 'KU', 'sub_kategori' => 'Keterampilan Umum', 'deskripsi' => 'Mampu mengembangkan pemikiran logis, kritis, sistematis, dan kreatif melalui penelitian ilmiah...', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'KU2', 'kategori' => 'KU', 'sub_kategori' => 'Keterampilan Umum', 'deskripsi' => 'Mampu melakukan validasi akademik atau kajian sesuai bidang keahliannya dalam menyelesaikan masalah di masyarakat atau industri...', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'KU3', 'kategori' => 'KU', 'sub_kategori' => 'Keterampilan Umum', 'deskripsi' => 'Mampu menyusun ide, hasil pemikiran, dan argumen saintifik secara bertanggung jawab...', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'KU4', 'kategori' => 'KU', 'sub_kategori' => 'Keterampilan Umum', 'deskripsi' => 'Mampu mengidentifikasi bidang keilmuan yang menjadi obyek penelitiannya...', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'KU5', 'kategori' => 'KU', 'sub_kategori' => 'Keterampilan Umum', 'deskripsi' => 'Mampu mengambil keputusan dalam konteks menyelesaikan masalah pengembangan ilmu pengetahuan...', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'KU6', 'kategori' => 'KU', 'sub_kategori' => 'Keterampilan Umum', 'deskripsi' => 'Mampu mengelola, mengembangkan dan memelihara jaringan kerja dengan kolega, sejawat, dan komunitas penelitian.', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'KU7', 'kategori' => 'KU', 'sub_kategori' => 'Keterampilan Umum', 'deskripsi' => 'Mampu meningkatkan kapasitas pembelajaran secara mandiri.', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'KU8', 'kategori' => 'KU', 'sub_kategori' => 'Keterampilan Umum', 'deskripsi' => 'Mampu mendokumentasikan, menyimpan, mengamankan, dan menemukan kembali data hasil penelitian...', 'created_at' => now(), 'updated_at' => now()],

            // ===================== KETERAMPILAN KHUSUS (KK) =====================
            ['kode' => 'KK1', 'kategori' => 'KK', 'sub_kategori' => 'Keterampilan Khusus', 'deskripsi' => 'Mampu mengimplementasikan manajemen layanan sistem dan teknologi informasi...', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'KK2', 'kategori' => 'KK', 'sub_kategori' => 'Keterampilan Khusus', 'deskripsi' => 'Mampu menggunakan teknologi terkini sebagai solusi bisnis.', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'KK3', 'kategori' => 'KK', 'sub_kategori' => 'Keterampilan Khusus', 'deskripsi' => 'Mampu membuat program komputer.', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'KK4', 'kategori' => 'KK', 'sub_kategori' => 'Keterampilan Khusus', 'deskripsi' => 'Mampu membangun komunikasi, mempengaruhi antar personal.', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'KK5', 'kategori' => 'KK', 'sub_kategori' => 'Keterampilan Khusus', 'deskripsi' => 'Mampu merancang pemodelan data dan menganalisis hasilnya dalam pendukung pengambilan keputusan.', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'KK6', 'kategori' => 'KK', 'sub_kategori' => 'Keterampilan Khusus', 'deskripsi' => 'Mampu menerapkan konsep pengembangan sistem informasi.', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'KK7', 'kategori' => 'KK', 'sub_kategori' => 'Keterampilan Khusus', 'deskripsi' => 'Mampu menganalisis kebutuhan bisnis.', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'KK8', 'kategori' => 'KK', 'sub_kategori' => 'Keterampilan Khusus', 'deskripsi' => 'Mampu membandingkan tren bisnis model.', 'created_at' => now(), 'updated_at' => now()],
            ['kode' => 'KK9', 'kategori' => 'KK', 'sub_kategori' => 'Keterampilan Khusus', 'deskripsi' => 'Mampu menggunakan kerangka kerja pemodelan bisnis.', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}