// resources/js/Pages/Profil/Dosen.tsx

import ProfilLayout from '@/Layouts/ProfilLayout';
import { Head } from '@inertiajs/react';
import { Lecturer } from '@/types';
import { useState, useMemo, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

/*
|--------------------------------------------------------------------------
| Komponen Kartu Dosen
|--------------------------------------------------------------------------
*/
const LecturerCard = ({ lecturer }: { lecturer: Lecturer }) => (
    <div className="flex flex-col bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-[28rem]">
        <div className="flex flex-col gap-4">
            <img
                src={lecturer.photoUrl}
                alt={`Foto ${lecturer.name}`}
                className="w-full h-72 object-cover object-center rounded-xl"
            />
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <h3 className="text-lg font-bold border-l-4 border-gray-400 pl-3">
                    {lecturer.name}
                </h3>
            </div>
            <p className="text-yellow-500 text-sm leading-relaxed">{lecturer.title}</p>
        </div>
    </div>
);

/*
|--------------------------------------------------------------------------
| Komponen Dropdown Kustom
|--------------------------------------------------------------------------
*/
const CustomDropdown = ({
    options,
    selected,
    onSelect,
}: {
    options: string[];
    selected: string;
    onSelect: (value: string) => void;
}) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Tutup dropdown saat klik di luar area
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <motion.div
            ref={dropdownRef}
            className="relative w-full max-w-xs"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Filter berdasarkan Bidang Keahlian
            </label>

            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className={`w-full flex justify-between items-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-200 ${
                    open ? 'ring-2 ring-sky-400 shadow-md' : ''
                }`}
            >
                <span>{selected}</span>
                <FaChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown List */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden animate-fadeInUp max-h-60 overflow-y-auto"
                >
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => {
                                onSelect(option);
                                setOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm cursor-pointer transition-colors duration-150 ${
                                selected === option
                                    ? 'bg-sky-100 text-sky-700 font-semibold'
                                    : 'hover:bg-gray-100 text-gray-700'
                            }`}
                        >
                            {option}
                        </button>
                    ))}
                </motion.div>
            )}
        </motion.div>
    );
};

/*
|--------------------------------------------------------------------------
| Komponen Utama Halaman
|--------------------------------------------------------------------------
*/
export default function Dosen({ lecturers }: { lecturers: Lecturer[] }) {
    const [activeCategory, setActiveCategory] = useState('Semua');

    // Ambil kategori unik dari title
    const uniqueCategories = useMemo(() => {
        const titles = lecturers
            .map((lecturer) => lecturer.title)
            .filter((title): title is string => Boolean(title));
        return ['Semua', ...new Set(titles)];
    }, [lecturers]);

    // Filter dosen berdasarkan kategori aktif
    const filteredLecturers = useMemo(() => {
        if (activeCategory === 'Semua') return lecturers;
        return lecturers.filter((lecturer) => lecturer.title === activeCategory);
    }, [activeCategory, lecturers]);

    return (
        <ProfilLayout>
            <Head title="Profil Dosen" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="space-y-8"
            >
                <div>
                    <h2 className="text-3xl font-bold text-sky-600 mb-6 border-l-4 border-yellow-400 pl-4">Profil Dosen</h2>
                    <p className="text-gray-600 mb-8">
                        Kenali lebih dekat para pengajar ahli di Program Studi Teknik Informatika.
                    </p>
                </div>

                {/* 🔹 Dropdown Filter Kustom */}
                <CustomDropdown
                    options={uniqueCategories}
                    selected={activeCategory}
                    onSelect={setActiveCategory}
                />

                {/* 🔹 Grid Dosen */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredLecturers.length > 0 ? (
                        filteredLecturers.map((lecturer) => (
                            <LecturerCard key={lecturer.id} lecturer={lecturer} />
                        ))
                    ) : (
                        <p className="col-span-full text-gray-500 text-center py-8">
                            Tidak ada dosen yang ditemukan untuk kategori ini.
                        </p>
                    )}
                </div>
            </motion.div>
        </ProfilLayout>
    );
}

/*
|--------------------------------------------------------------------------
| Tambahkan ke tailwind.config.js
|--------------------------------------------------------------------------
| theme: {
|   extend: {
|     keyframes: {
|       fadeInUp: {
|         '0%': { opacity: 0, transform: 'translateY(-6px)' },
|         '100%': { opacity: 1, transform: 'translateY(0)' },
|       },
|     },
|     animation: {
|       fadeInUp: 'fadeInUp 0.2s ease-out',
|     },
|   },
| },
*/
