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
| Komponen kecil ini berfungsi sebagai tombol link di sisi kanan. Dibuat
| terpisah agar bisa digunakan kembali dan menjaga kode utama tetap bersih.
| Semua logika animasi hover (garis kuning, warna teks) diatur di sini.
*/
const InfoLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link 
        href={href}
        className="relative overflow-hidden bg-white/90 text-gray-800 font-semibold p-4 rounded-lg flex justify-between items-center w-full hover:text-yellow-600 transition-colors duration-300 shadow 
                   before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-yellow-500 before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:origin-center"
    >
        <span className="relative z-10">{children}</span>
        <FaArrowRight className="relative z-10" />
    </Link>
);

export default function Hero() {
    return (
        /*
        |--------------------------------------------------------------------------
        | Wadah Utama Hero Section (Responsif)
        |--------------------------------------------------------------------------
        | Section ini adalah container utama. 'h-auto' membuatnya fleksibel di
        | mobile, sementara 'sm:h-[85vh]' memberikan tinggi tetap di desktop
        | untuk efek sinematik. 'relative' adalah kunci untuk menumpuk
        | lapisan gambar dan konten di dalamnya.
        */
        <section className="relative w-full h-auto sm:h-[85vh] bg-gray-200">
            
            {/* Lapisan Gambar: Muncul sebagai elemen biasa di mobile, dan menjadi latar belakang absolut di desktop */}
            <img 
                src={heroImagePath} 
                alt="Gedung Fakultas Teknik Informatika" 
                className="w-full sm:absolute sm:inset-0 sm:h-full object-cover"
            />

            {/*
            |--------------------------------------------------------------------------
            | Lapisan Overlay Konten (Responsif)
            |--------------------------------------------------------------------------
            | Div ini berisi semua teks dan link. Di layar mobile, ia akan tampil
            | sebagai blok biasa di bawah gambar. Di layar desktop (sm:), ia akan
            | menjadi lapisan 'absolute' yang menumpuk di atas gambar dan
            | didorong ke bawah dengan 'sm:flex sm:items-end'.
            */}
            <div className="relative sm:absolute sm:inset-0 sm:flex sm:items-end">
                <div className="w-full bg-sky-600 sm:bg-sky-600/90">
                    <div className="container mx-auto w-full px-4 sm:px-6 lg:px-32 py-12">
                        {/*
                        | Layout Grid untuk Konten
                        | Di mobile akan menjadi 1 kolom (tersusun ke bawah). Di desktop (md:),
                        | akan menjadi 3 kolom, dengan deskripsi mengambil 2 kolom dan link 1 kolom.
                        */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            
                            {/* Kolom Kiri: Deskripsi Teks */}
                            <div className="md:col-span-2 text-white">
                                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tentang Prodi Teknik Informatika</h2>
                                <p className="mb-4 text-gray-200 leading-relaxed text-justify">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ipsam ratione maiores at ipsa quo laudantium ad illum commodi cupiditate repellendus laboriosam modi, quos alias voluptatibus minima nihil a eaque in, similique fugit dignissimos.
                                </p>
                                <p className="text-gray-200 leading-relaxed text-justify">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minus asperiores et quas dolorem, dignissimos molestias aliquam odit accusantium quisquam minima earum ullam facere nemo accusamus animi perferendis architecto similique.
                                </p>
                            </div>

                            {/* Kolom Kanan: Link-link Penting */}
                            <div className="md:col-span-1 flex flex-col space-y-4">
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