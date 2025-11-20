import GlobalLayout from '@/Layouts/GlobalLayout';
import { Link, usePage } from '@inertiajs/react';
import { ReactNode } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { PageProps as InertiaPageProps } from '@inertiajs/core';

interface CustomPageProps extends InertiaPageProps {
    title?: string;
    [key: string]: any;
}

export default function ProfilLayout({ children }: { children: ReactNode }) {
    const currentUrl = usePage().url;

    const sidebarNavItems = [
        { href: '/kurikulum', label: 'Kurikulum' },
        { href: '/jadwal', label: 'Jadwal' },
        { href: '/dokumen', label: 'Dokumen' },
    ];

    return (
        <GlobalLayout>
            {/* Bagian Konten Utama */}
            <div className="container mx-auto px-6 py-12 lg:px-32 bg-gradient-to-r from-white via-sky-100 to-white">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Navigasi */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                            <h3 className="text-xl font-bold text-sky-600 mb-4">
                                Navigasi Akademik
                            </h3>
                            <ul className="space-y-2">
                                {sidebarNavItems.map(item => {
                                    const isActive = currentUrl.includes(item.href || "");
                                    return (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                className={`group relative flex justify-between items-center w-full text-left px-4 py-2 rounded-md overflow-hidden transition-all duration-300 ${
                                                    isActive
                                                        ? 'bg-gray-100 font-bold text-yellow-500'
                                                        : 'text-gray-700 hover:bg-gray-100'
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