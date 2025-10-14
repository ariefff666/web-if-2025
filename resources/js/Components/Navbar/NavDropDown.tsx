// resources/js/Components/Navbar/NavDropdown.tsx

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from '@inertiajs/react';

// Mendefinisikan tipe properti (props) yang akan diterima oleh komponen NavDropdown
interface NavDropdownProps {
    title: string;          // Teks yang akan ditampilkan di tombol utama (misal: "PROFIL")
    children: React.ReactNode; // Konten yang akan muncul di dalam panel dropdown (biasanya daftar DropdownLink)
    isActive?: boolean;     // Menandakan apakah dropdown dalam keadaan aktif
}

export default function NavDropdown({ title, children, isActive = false }: NavDropdownProps) {
    /*
    |--------------------------------------------------------------------------
    | State Management
    |--------------------------------------------------------------------------
    | Menggunakan hook 'useState' dari React untuk melacak kondisi dropdown.
    | 'isOpen' akan bernilai 'true' jika dropdown terbuka, dan 'false' jika tertutup.
    */
    const [isOpen, setIsOpen] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Styling Classes
    |--------------------------------------------------------------------------
    | Menyimpan kumpulan class Tailwind dalam sebuah variabel agar bisa digunakan kembali
    | dan membuat kode JSX lebih bersih. Ini termasuk efek garis bawah kuning
    | yang muncul saat di-hover pada link utama di navbar.
    */
    const navLinkClasses = "relative font-semibold text-gray-700 transition-colors duration-300 hover:text-yellow-500 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full";
    const activeNavLinkClasses = "relative font-bold text-yellow-500 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-yellow-500";

    return (
        // Wadah utama dari komponen dropdown.
        // onMouseEnter akan mengubah state 'isOpen' menjadi true saat mouse masuk ke area ini.
        // onMouseLeave akan mengubah state 'isOpen' menjadi false saat mouse keluar.
        // Ini memastikan menu tetap terbuka selama mouse berada di atas tombol ATAU panel dropdown.
        <div 
            className="relative" 
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Ini adalah tombol utama yang terlihat di navbar */}
            <div className={`${isActive ? activeNavLinkClasses : navLinkClasses} flex items-center space-x-1 cursor-pointer`}>
                <span>{title}</span>
                {/* Ikon panah yang akan berputar saat dropdown terbuka */}
                <FaChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            {/* | Panel Dropdown yang muncul dan menghilang.
            | Class-nya diatur secara dinamis berdasarkan nilai state 'isOpen'.
            | Ini yang menciptakan efek animasi fade-in dan slide-down yang mulus.
            */}
            <div 
                className={`absolute top-full mt-4 w-56 rounded-md shadow-lg bg-sky-600 z-50 transition-all duration-300 ease-in-out
                    ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
            >
                <div className="py-1">
                    {/* 'children' adalah tempat di mana semua DropdownLink yang Anda masukkan akan ditampilkan */}
                    {children}
                </div>
            </div>
        </div>
    );
}

//--- Komponen terpisah khusus untuk setiap item di dalam dropdown ---//

interface DropdownLinkProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean; // Menandakan apakah link dalam keadaan aktif
}

export const DropdownLink = ({ href, children, isActive = false }: DropdownLinkProps) => {
    return (
        <Link
            href={href}
            /*
            |--------------------------------------------------------------------------
            | Styling untuk setiap link di dalam dropdown
            |--------------------------------------------------------------------------
            | - hover:bg-blue-900/50: Mengubah background saat di-hover.
            | - hover:text-yellow-500: Mengubah warna teks saat di-hover.
            | - before:...: Membuat pseudo-element untuk garis kuning vertikal di kiri
            |   yang muncul saat di-hover dengan animasi 'scale-y'.
            */
            className={`relative block px-4 py-2 text-sm ${
                isActive 
                    ? 'font-bold text-yellow-500 bg-blue-900/30 before:scale-y-100' 
                    : 'text-gray-200 hover:bg-blue-900/50 hover:text-yellow-500 before:scale-y-0 hover:before:scale-y-100'
            } transition-colors duration-200 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-yellow-500 before:transition-transform before:duration-300`}
        >
            {children}
        </Link>
    );
};

export const DropdownLinkMobile = ({ href, children, isActive = false }: DropdownLinkProps) => {
    return (
        <Link
            href={href}
            /*
            |--------------------------------------------------------------------------
            | Styling untuk setiap link di dalam dropdown
            |--------------------------------------------------------------------------
            | - hover:bg-blue-900/50: Mengubah background saat di-hover.
            | - hover:text-yellow-500: Mengubah warna teks saat di-hover.
            | - before:...: Membuat pseudo-element untuk garis kuning vertikal di kiri
            |   yang muncul saat di-hover dengan animasi 'scale-y'.
            */
            className={`relative block px-4 py-2 text-sm ${
                isActive 
                    ? 'font-bold text-yellow-500 bg-blue-900/30 before:scale-y-100' 
                    : 'block py-2 text-gray-700 font-semibold hover:bg-gray-100 rounded'
            } transition-colors duration-200 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-yellow-500 before:transition-transform before:duration-300`}
        >
            {children}
        </Link>
    );
};