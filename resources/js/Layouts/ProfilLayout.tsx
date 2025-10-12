import GlobalLayout from '@/Layouts/GlobalLayout';
import { Link, usePage } from '@inertiajs/react';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { IconChevronRight } from '@tabler/icons-react';
import { PageProps as InertiaPageProps } from '@inertiajs/core';

// Tipe untuk breadcrumbs
interface Breadcrumb {
    label: string;
    url: string;
}

// Tipe untuk props halaman
interface CustomPageProps extends InertiaPageProps {
    title?: string;
    breadcrumbs?: Breadcrumb[];
    [key: string]: any;
}

// Komponen utama ProfilLayout
export default function ProfilLayout({ children }: { children: ReactNode }) {
    const pageProps = usePage<CustomPageProps>().props;
    const title = pageProps.title || 'Profil';
    const breadcrumbs = pageProps.breadcrumbs || [];
    const currentUrl = usePage().url;

    const sidebarNavItems = [
        { href: route('profil.visi-misi'), label: 'Visi & Misi' },
        { href: route('profil.profil-jurusan'), label: 'Profil Jurusan' },
        { href: route('profil.struktur-pimpinan'), label: 'Struktur Pimpinan' },
        {
            href: route('profil.capaian-pembelajaran'),
            label: 'Capaian Pembelajaran',
        },
    ];

    return (
        <GlobalLayout>
            {/* Bagian Header Halaman */}
            {/* <div className="bg-sky-600 text-white pt-6 pb-6">
                <div className="container mx-auto px-6 lg:px-32">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h1 className="text-4xl font-bold">{title}</h1>
                        <nav className="text-sm font-medium mt-2 md:mt-0">
                            <ol className="list-none p-0 inline-flex">
                                <li className="flex items-center">
                                    <Link href="/" className="hover:underline">
                                        Beranda
                                    </Link>
                                </li>
                                {breadcrumbs.map((crumb, index) => (
                                    <li key={index} className="flex items-center">
                                        <IconChevronRight size={18} className="mx-2" />
                                        {index === breadcrumbs.length - 1 ? (
                                            <span className="text-yellow-400">
                                                {crumb.label}
                                            </span>
                                        ) : (
                                            <Link href={crumb.url} className="hover:underline">
                                                {crumb.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </div>
                </div>
            </div> */}

            {/* Bagian Konten Utama */}
            <div className="container mx-auto px-6 py-12 lg:px-32 bg-gradient-to-r from-white via-sky-100 to-white">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Navigasi */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                            <h3 className="text-xl font-bold text-sky-600 mb-4">
                                Navigasi Profil
                            </h3>
                            <ul className="space-y-2">
                                {sidebarNavItems.map(item => {
                                    const isActive = currentUrl.includes(item.href.split('/').pop() || "");
                                    return (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                className={`group relative flex justify-between items-center w-full text-left px-4 py-2 rounded-md overflow-hidden transition-all duration-300 ${
                                                    isActive
                                                        ? 'bg-sky-50 font-bold text-yellow-500'
                                                        : 'text-gray-700 hover:bg-sky-50'
                                                }`}
                                            >
                                                {/* Vertical yellow indicator line */}
                                                <span className={`absolute left-0 top-0 h-full w-1 bg-yellow-500 transition-all duration-300 ${
                                                    isActive 
                                                        ? 'scale-y-100' 
                                                        : 'scale-y-0 group-hover:scale-y-100'
                                                }`}></span>
                                                
                                                <span className={`transition-all duration-300 ${isActive ? 'pl-2' : 'group-hover:pl-2'}`}>
                                                    {item.label}
                                                </span>
                                                
                                                <IconChevronRight size={16} className={`transition-all duration-300 ${
                                                    isActive ? 'text-yellow-500' : 'text-gray-400 group-hover:text-yellow-500'
                                                }`} />
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Konten Halaman */}
                    <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-md">
                        {children}
                    </div>
                </div>
            </div>
        </GlobalLayout>
    );
}