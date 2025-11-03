import GlobalLayout from '@/Layouts/GlobalLayout';
import { Link, usePage } from '@inertiajs/react';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { IconChevronRight } from '@tabler/icons-react';
import { PageProps as InertiaPageProps } from '@inertiajs/core';

// Tipe data untuk PanduanSOP (sesuai dari controller)
interface PanduanItem {
    title: string;
    slug: string;
}

interface CurrentPanduanItem extends PanduanItem {
    file_url: string;
}

// Tipe untuk props halaman
interface CustomPageProps extends InertiaPageProps {
    title: string;
    breadcrumbs: { label: string; url: string }[];
    currentPanduan: CurrentPanduanItem;
    allPanduan: PanduanItem[];
    [key: string]: any;
}

// Komponen utama PanduanSopLayout
export default function PanduanSopLayout({ children }: { children: ReactNode }) {
    const { allPanduan, currentPanduan } = usePage<CustomPageProps>().props;

    return (
        <GlobalLayout>
            <div className="container mx-auto px-6 py-12 lg:px-32 bg-gradient-to-r from-white via-gray-100 to-white">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Navigasi (Kiri) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                            <h3 className="text-xl font-bold text-sky-600 mb-4">
                                Panduan & SOP
                            </h3>
                            <ul className="space-y-2">
                                {allPanduan.map(item => {
                                    const isActive =
                                        item.slug === currentPanduan.slug;
                                    return (
                                        <li key={item.slug}>
                                            <Link
                                                href={route(
                                                    'panduan-sop.' +
                                                        item.slug.replace(
                                                            /_/g,
                                                            '-',
                                                        ),
                                                )}
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

                                                {/* Style text 'active' & 'hover' */}
                                                <span
                                                    className={`relative transition-all duration-300 ${
                                                        isActive
                                                            ? 'pl-2'
                                                            : 'group-hover:pl-2'
                                                    }`}
                                                >
                                                    {item.title}
                                                </span>

                                                {/* Style icon 'active' & 'hover' */}
                                                <IconChevronRight
                                                    size={16}
                                                    className={`relative transition-all duration-300 ${
                                                        isActive
                                                            ? 'text-yellow-500'
                                                            : 'text-gray-400 group-hover:text-yellow-500'
                                                    }`}
                                                />
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Konten Halaman (Kanan) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="lg:col-span-3 bg-white p-8 rounded-lg shadow-md"
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </GlobalLayout>
    );
}