// resources/js/Components/Beranda/Hero.tsx

import React from 'react';
import { Link } from '@inertiajs/react';
import { FaArrowRight } from 'react-icons/fa';

// Variabel untuk menyimpan path gambar hero agar mudah diubah.
const heroImagePath = "/images/hero_dummy_web_if_2025.png";

/*
|--------------------------------------------------------------------------
| Komponen InfoLink
|--------------------------------------------------------------------------
| Komponen kecil yang bisa digunakan kembali untuk membuat link informasi
| di sisi kanan. Ini membuat kode lebih bersih dan mudah dikelola.
| Efek hover (garis kuning & perubahan warna teks) diatur di sini.
*/
const InfoLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link 
        href={href}
        className="relative overflow-hidden bg-white text-gray-800 font-semibold p-4 rounded-lg flex justify-between items-center w-full hover:text-yellow-500 transition-colors duration-300 shadow 
                   before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-yellow-500 before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:origin-center"
    >
        {/* z-10 memastikan teks dan ikon berada di atas lapisan efek hover */}
        <span className="relative z-10">{children}</span>
        <FaArrowRight className="relative z-10" />
    </Link>
);

export default function Hero() {
    return (
        /*
        |--------------------------------------------------------------------------
        | Wadah Utama Hero Section
        |--------------------------------------------------------------------------
        | Diberi 'relative' untuk menjadi jangkar bagi lapisan gambar dan konten
        | yang akan diposisikan secara 'absolute' di dalamnya. Tingginya
        | diatur 85% dari tinggi viewport (h-85vh).
        */
        <section className="relative w-full h-[85vh] bg-gray-200">
            
            {/* Lapisan 1: Gambar Latar Belakang */}
            <img 
                src={heroImagePath} 
                alt="Gedung Fakultas Teknik Informatika" 
                className="w-full h-full object-cover"
            />

            {/*
            |--------------------------------------------------------------------------
            | Lapisan 2: Overlay Konten
            |--------------------------------------------------------------------------
            | Div ini diposisikan 'absolute' untuk menumpuk di atas gambar.
            | 'flex items-end' digunakan untuk mendorong semua kontennya ke
            | bagian bawah, menciptakan efek seperti di gambar referensi.
            */
            }
            <div className="absolute inset-0 flex items-end">
                <div className="w-full bg-sky-600/90">
                    <div className="container mx-auto w-full px-32 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            
                            {/* Kolom Kiri: Deskripsi Teks */}
                            <div className="md:col-span-2 text-white">
                                <h2 className="text-4xl font-bold mb-4">Tentang Prodi Teknik Informatika</h2>
                                <p className="mb-4 text-gray-200 leading-relaxed text-justify">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ipsam ratione maiores at ipsa quo laudantium ad illum commodi cupiditate repellendus laboriosam modi, quos alias voluptatibus minima nihil a eaque in, similique fugit dignissimos. Possimus officiis, laudantium omnis numquam minus dignissimos neque harum voluptatibus, et dolores consequuntur enim doloremque! Beatae?
                                </p>
                                <p className="text-gray-200 leading-relaxed text-justify">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minus asperiores et quas dolorem, dignissimos molestias aliquam odit accusantium quisquam minima earum ullam facere nemo accusamus animi perferendis architecto similique nulla placeat natus repellat. Tempore, quia. Delectus culpa obcaecati nisi.
                                </p>
                            </div>

                            {/* Kolom Kanan: Link-link Penting */}
                            <div className="md:col-span-1 flex flex-col space-y-4 justify-end pb-1">
                                <InfoLink href="/profil-lulusan">Profil Lulusan</InfoLink>
                                <InfoLink href="/kurikulum">Kurikulum Akademik</InfoLink>
                                <InfoLink href="/sop-mbkm">SOP MBKM</InfoLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}