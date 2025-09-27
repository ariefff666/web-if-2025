// resources/js/Components/Navbar.tsx

import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';

const logoPath = '/images/logo-unsri.png'; 

export default function Navbar() {
    const { url } = usePage();

    const navLinkClasses = "relative font-semibold text-gray-700 transition-colors duration-300 hover:text-yellow-500 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full";
    
    const activeNavLinkClasses = "relative font-bold text-yellow-500 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-yellow-500";

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-52">
                {/* Bagian Kiri: Logo */}
                <Link href="/" className="flex items-center space-x-3">
                    <img src={logoPath} alt="Logo Fasilkom Unsri" className="h-12" />
                </Link>

                {/* Bagian Kanan: Gabungan Navigasi & Pencarian */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className={url === '/' ? activeNavLinkClasses : navLinkClasses}>
                        BERANDA
                    </Link>
                    
                    <button className={`${navLinkClasses} flex items-center space-x-1`}>
                        <span>PROFIL</span>
                        <FaChevronDown size={12} />
                    </button>

                    <Link href="/berita" className={url.startsWith('/berita') ? activeNavLinkClasses : navLinkClasses}>
                        BERITA
                    </Link>

                    <button className={`${navLinkClasses} flex items-center space-x-1`}>
                        <span>AKADEMIK</span>
                        <FaChevronDown size={12} />
                    </button>
                    
                    <button className={`${navLinkClasses} flex items-center space-x-1`}>
                        <span>PANDUAN DAN SOP</span>
                        <FaChevronDown size={12} />
                    </button>
                    
                    <button className="text-gray-700 hover:text-yellow-500 transition-colors">
                        <FaSearch size={20} />
                    </button>
                </div>
            </div>
        </nav>
    );
}