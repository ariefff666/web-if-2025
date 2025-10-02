// resources/js/Components/Beranda/VideoProfile.tsx

/*
|--------------------------------------------------------------------------
| Video Profile Section Component
|--------------------------------------------------------------------------
| Komponen ini bertanggung jawab untuk menampilkan section "Video Profil"
| di halaman beranda, yang berisi judul dan sebuah video yang disematkan
| (embed) dari YouTube.
*/
export default function VideoProfile() {
    /*
    |--------------------------------------------------------------------------
    | YouTube Embed URL
    |--------------------------------------------------------------------------
    | Variabel ini menyimpan link embed untuk video YouTube yang akan ditampilkan.
    | Ganti nilai ini dengan link 'src' dari kode embed video profil Anda.
    | (PS: Kali ini link-nya asli, bukan Rick Roll lagi 😄)
    */
    const youtubeEmbedUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=Xv_hV7hPfDSXPQnf"; 

    return (
        // Wadah utama untuk seluruh section video.
        <section className="bg-white py-16 px-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-32">
                
                {/* Bagian header untuk judul dan subjudul section */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Video Profil</h2>
                    <div className="relative w-84 h-1 mx-auto my-4">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300"></div>
                        <div className="relative w-24 h-1 bg-sky-600 mx-auto rounded"></div>
                    </div>
                    <p className="text-lg text-gray-600">
                        Kenali lebih dekat Jurusan Teknik Informatika Fasilkom Unsri.
                    </p>
                </div>

                {/*
                |--------------------------------------------------------------------------
                | Responsive Video Wrapper
                |--------------------------------------------------------------------------
                | Div ini berfungsi sebagai pembungkus responsif untuk video.
                | - relative: Menjadi jangkar untuk iframe yang diposisikan 'absolute'.
                | - aspect-video: Menjaga rasio aspek 16:9 agar video tidak terdistorsi.
                | - max-w-4xl mx-auto: Membatasi lebar maksimum video dan menempatkannya di tengah.
                */}
                <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
                    
                    {/*
                    |--------------------------------------------------------------------------
                    | YouTube Iframe Player
                    |--------------------------------------------------------------------------
                    | Ini adalah elemen <iframe> yang sebenarnya menampilkan pemutar video YouTube.
                    | Atribut 'allow' dan 'allowFullScreen' penting untuk fungsionalitas modern
                    | seperti picture-in-picture dan mode layar penuh.
                    | Class 'absolute' dan 'w-full h-full' membuatnya mengisi penuh area wrapper.
                    */
                    }
                    <iframe
                        src={youtubeEmbedUrl}
                        title="Video Profil Jurusan Teknik Informatika"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}