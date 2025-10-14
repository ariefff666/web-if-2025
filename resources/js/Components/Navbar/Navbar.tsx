// resources/js/Components/Navbar.tsx

import React, { useState, useRef, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import NavDropdown, { DropdownLink, DropdownLinkMobile } from './NavDropDown';

const logoPath = '/images/logo-unsri.png'; 

export default function Navbar() {
    const { url } = usePage();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchRef]);


    const navLinkClasses = "relative font-semibold text-gray-700 transition-colors duration-300 hover:text-yellow-500 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full";
    const activeNavLinkClasses = "relative font-bold text-yellow-500 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-yellow-500";

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            {/* --- NAVIGASI UTAMA (DESKTOP) --- */}
            <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-32">
                <Link href="/" className="flex items-center space-x-3">
                    <img src={logoPath} alt="Logo Teknik Informatika Unsri" className="h-12" />
                </Link>

                {/* Menu Navigasi Desktop (Disembunyikan di layar kecil) */}
                <div className="hidden md:flex items-center space-x-8">
                    {/* Link Navigasi dengan penanda aktif */}
                    <Link href="/" className={url === '/' ? activeNavLinkClasses : navLinkClasses}>
                        BERANDA
                    </Link>
                    
                    {/* Komponen Dropdown yang bisa digunakan kembali */}
                    <NavDropdown title="PROFIL">
                        <DropdownLink href="visi-misi">VISI DAN MISI</DropdownLink>
                        <DropdownLink href="profil-lulusan">PROFIL LULUSAN</DropdownLink>
                        <DropdownLink href="struktur-pimpinan">STRUKTUR PIMPINAN</DropdownLink>
                        <DropdownLink href="capaian-pembelajaran">CAPAIAN PEMBELAJARAN LULUSAN (CPL)</DropdownLink>
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

                    <button 
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        className="text-gray-700 hover:text-yellow-500 transition-colors"
                    >
                        <FaSearch size={20} />
                    </button>
                </div>

                <div className={`absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out
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


                {/* --- 2. TOMBOL HAMBURGER (Hanya muncul di layar kecil) --- */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* --- 3. PANEL MENU MOBILE --- */}
            <div 
                className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden
                    ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
                    <p className="px-2 pt-2 text-sm font-bold text-gray-400">BERANDA</p>
                    <DropdownLinkMobile href="/">BERANDA</DropdownLinkMobile>

                    <p className="px-2 pt-2 text-sm font-bold text-gray-400">BERITA</p>
                    <DropdownLinkMobile href="/berita">BERITA</DropdownLinkMobile>
                    
                    {/* Untuk dropdown di mobile, biasanya dibuat lebih simpel */}
                    <p className="px-2 pt-2 text-sm font-bold text-gray-400">PROFIL</p>
                    <DropdownLinkMobile href="/visi-misi">VISI DAN MISI</DropdownLinkMobile>
                    <DropdownLinkMobile href="/profil-lulusan">PROFIL LULUSAN</DropdownLinkMobile>
                    <DropdownLinkMobile href="/struktur-pimpinan">STRUKTUR PIMPINAN</DropdownLinkMobile>
                    <DropdownLinkMobile href="/cpl">CAPAIAN PEMBELAJARAN LULUSAN (CPL)</DropdownLinkMobile>
                    
                    <p className="px-2 pt-2 text-sm font-bold text-gray-400">AKADEMIK</p>
                    <DropdownLinkMobile href="/kurikulum">KURIKULUM</DropdownLinkMobile>
                    <DropdownLinkMobile href="/jadwal">JADWAL</DropdownLinkMobile>
                    <DropdownLinkMobile href="/dokumen">DOKUMEN</DropdownLinkMobile>
                    
                    <p className="px-2 pt-2 text-sm font-bold text-gray-400">PANDUAN DAN SOP</p>
                    <DropdownLinkMobile href='/prosedur-tugas-akhir'>PROSEDUR TUGAS AKHIR</DropdownLinkMobile>
                    <DropdownLinkMobile href='/panduan-tugas-akhir'>PANDUAN TUGAS AKHIR</DropdownLinkMobile>
                    <DropdownLinkMobile href='/prosedur-kerja-praktek'>PROSEDUR KERJA PRAKTEK</DropdownLinkMobile>
                    <DropdownLinkMobile href='/panduan-kerja-praktek'>PANDUAN KERJA PRAKTEK</DropdownLinkMobile>
                    <DropdownLinkMobile href='/sop-mbkm'>SOP MBKM</DropdownLinkMobile>

                </div>
            </div>

            {/* ... Kode Search Bar Anda tetap sama ... */}
        </nav>
    );
}

// Untuk DropdownLink di menu mobile, kita butuh sedikit penyesuaian style
const MobileDropdownLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className="block py-2 pl-6 text-gray-700 hover:bg-gray-100 rounded">{children}</Link>
);