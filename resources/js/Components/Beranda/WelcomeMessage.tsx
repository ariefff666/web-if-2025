// resources/js/Components/Beranda/WelcomeMessage.tsx

import { FaQuoteRight } from 'react-icons/fa';

// Variabel untuk menyimpan path gambar Ketua Prodi di folder `public`.
const headOfProgramImagePath = '/storage/dosen/hadi-purnawan.jpeg'; 

/*
|--------------------------------------------------------------------------
| Welcome Message Section Component
|--------------------------------------------------------------------------
| Komponen ini menampilkan section "Sambutan Ketua Prodi" di halaman beranda.
| Terdiri dari layout dua kolom: foto di kiri dan teks sambutan di kanan,
| disajikan dalam format kartu yang modern.
*/
export default function WelcomeMessage() {
    return (
        /*
        |--------------------------------------------------------------------------
        | Section Container
        |--------------------------------------------------------------------------
        | Wadah utama untuk section. Diberi warna latar belakang dan padding
        | untuk memisahkannya secara visual dari section lain di halaman.
        */
        <section className="bg-gradient-to-b from-sky-600 from-0% to-white to-100% py-8 px-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-32">
                {/* Kartu utama yang membungkus semua konten */}
                <div className="relative bg-white rounded-2xl shadow-lg p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        
                        {/* Kolom Kiri: Foto Ketua Prodi */}
                        <div className="lg:col-span-1 flex justify-center">
                            <img 
                                src={headOfProgramImagePath} 
                                alt="Ketua Program Studi Teknik Informatika"
                                className="w-64 h-auto object-cover rounded-lg shadow-md"
                            />
                        </div>

                        {/* Kolom Kanan: Teks Sambutan dan Tanda Tangan */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                Selamat datang di situs resmi Program Studi Teknik Informatika, Fakultas Ilmu Komputer
                            </h2>
                            <div className="relative w-84 h-1 mx-auto mb-4">
                                <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300"></div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                                Selamat datang di Teknik Informatika Unsri, tempat inovasi dan kolaborasi bertemu. Komitmen utama kami adalah membekali setiap mahasiswa dengan keterampilan praktis dan relevan melalui kurikulum modern yang mengadopsi kerangka Merdeka Belajar Kampus Merdeka (MBKM) dengan pendekatan Outcome-Based Education (OBE).
                            </p>
                            <p className="text-gray-600 leading-relaxed text-justify">
                                Dengan masukan berkelanjutan dari para praktisi industri dan alumni, kami memastikan program kami selalu selangkah di depan. Kami bangga mencetak lulusan yang tidak hanya siap kerja, tetapi juga siap memimpin dan menciptakan perubahan di dunia teknologi.
                            </p>
                            
                            {/* Bagian Tanda Tangan Digital */}
                            <div className="mt-8">
                                <p className="font-bold text-gray-900">Hadipurnawan Satria, S.Kom., M.Sc., Ph.D.</p>
                                <p className="font-semibold text-yellow-500">Ketua Program Studi Teknik Informatika</p>
                            </div>
                        </div>
                    </div>
                    
                    {/*
                    |--------------------------------------------------------------------------
                    | Ikon Dekoratif
                    |--------------------------------------------------------------------------
                    | Ikon tanda kutip yang diposisikan 'absolute' di pojok kanan bawah
                    | kartu untuk memberikan sentuhan visual yang menarik.
                    */
                    }
                    <FaQuoteRight className="absolute bottom-12 right-12 text-yellow-400 opacity-20 text-8xl" />
                </div>
            </div>
        </section>
    );
}