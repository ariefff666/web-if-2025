// resources/js/Components/Navbar/Navbar.tsx

import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { FaSearch} from 'react-icons/fa';
import NavDropdown, { DropdownLink } from './NavDropDown';

const logoPath = '/images/logo-unsri.png'; 

export default function Navbar() {
    /*
    |--------------------------------------------------------------------------
    | Component State & Hooks
    |--------------------------------------------------------------------------
    | Mengelola semua state dan hooks yang dibutuhkan oleh komponen Navbar.
    | - usePage: Dari Inertia, untuk mendapatkan URL saat ini.
    | - useState: Dari React, untuk melacak status buka/tutup search bar.
    | - useRef & useEffect: Untuk mendeteksi klik di luar area search bar.
    */
    const { url } = usePage();
    const [isSearchOpen, setIsSearchOpen] = useState(false); 

    /*
    |--------------------------------------------------------------------------
    | Styling Classes
    |--------------------------------------------------------------------------
    | Variabel untuk menyimpan kumpulan class Tailwind agar kode JSX lebih rapi.
    | - navLinkClasses: Style default untuk link navigasi, termasuk efek hover.
    | - activeNavLinkClasses: Style khusus untuk link yang sedang aktif.
    */
    const navLinkClasses = "relative font-semibold text-gray-700 transition-colors duration-300 hover:text-yellow-500 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full";
    const activeNavLinkClasses = "relative font-bold text-yellow-500 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-yellow-500";

    return (
        /*
        |--------------------------------------------------------------------------
        | Main Navigation Structure
        |--------------------------------------------------------------------------
        | Tag <nav> utama yang dibuat sticky dan memiliki z-index tinggi agar
        | selalu berada di atas konten lain saat halaman di-scroll.
        */
        <nav className="bg-white shadow-sm sticky top-0 z-50 relative">
            <div className="container mx-auto flex justify-between items-center py-4 sm:px-6 lg:px-32">
                {/* Logo dan link ke halaman utama */}
                <Link href="/" className="flex items-center space-x-3">
                    <img src={logoPath} alt="Logo Teknik Informatika Unsri" className="h-12" />
                </Link>

                {/* Wadah untuk semua item navigasi di sisi kanan */}
                <div className="hidden md:flex items-center space-x-8">
                    {/* Link Navigasi dengan penanda aktif */}
                    <Link href="/" className={url === '/' ? activeNavLinkClasses : navLinkClasses}>
                        BERANDA
                    </Link>
                    
                    {/* Komponen Dropdown yang bisa digunakan kembali */}
                    <NavDropdown title="PROFIL">
                        <DropdownLink href="/visi-misi">VISI DAN MISI</DropdownLink>
                        <DropdownLink href="/profil-lulusan">PROFIL LULUSAN</DropdownLink>
                        <DropdownLink href="/struktur-pimpinan">STRUKTUR ORGANISASI</DropdownLink>
                        <DropdownLink href="/cpl">CAPAIAN PEMBELAJARAN LULUSAN (CPL)</DropdownLink>
                    </NavDropdown>

                    <Link href="/berita" className={url.startsWith('/berita') ? activeNavLinkClasses : navLinkClasses}>
                        BERITA
                    </Link>

                    <NavDropdown title="AKADEMIK">
                        <DropdownLink href="/kurikulum">KURIKULUM</DropdownLink>
                        <DropdownLink href="/jadwal">JADWAL</DropdownLink>
                        <DropdownLink href="/dokumen">DOKUMEN</DropdownLink>
                    </NavDropdown>
                    
                    <NavDropdown title="PANDUAN DAN SOP">
                        <DropdownLink href="/prosedur-tugas-akhir">PROSEDUR TUGAS AKHIR</DropdownLink>
                        <DropdownLink href="/panduan-tugas-akhir">PANDUAN TUGAS AKHIR</DropdownLink>
                        <DropdownLink href="/prosedur-kerja-praktek">PROSEDUR KERJA PRAKTEK</DropdownLink>
                        <DropdownLink href="/panduan-kerja-praktek">PANDUAN KERJA PRAKTEK</DropdownLink>
                        <DropdownLink href="/sop-mbkm">SOP MBKM</DropdownLink>
                        <DropdownLink href="/panduan-mata-kuliah-berbasis-proyek">PANDUAN MATA KULIAH BERBASIS PROYEK</DropdownLink>
                    </NavDropdown>

                    {/*
                    |--------------------------------------------------------------------------
                    | Search Feature
                    |--------------------------------------------------------------------------
                    | Wadah 'relative' untuk tombol pencarian dan panel pop-over.
                    | 'ref' digunakan untuk mendeteksi klik di luar area ini.
                    */
                    }
                    <button 
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        className="text-gray-700 hover:text-yellow-500 transition-colors"
                    >
                        <FaSearch size={20} />
                    </button>
                </div>
            </div>

            {/* Panel pop-over yang visibilitasnya dikontrol oleh state 'isSearchOpen' */}
            <div 
                className={`absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out
                    ${isSearchOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible'}`}
            >
                <div className="container mx-auto flex items-center py-4 px-52">
                    <div className="relative w-full">
                        <input 
                            type="text" 
                            placeholder="Masukkan kata kunci..."
                            className="w-full py-2 pl-4 pr-12 text-gray-700 border-2 border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-800">
                            <FaSearch size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}