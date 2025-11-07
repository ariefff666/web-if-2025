import { PropsWithChildren, useState } from 'react';
import { Head } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '@/Components/Admin/Sidebar';
import Header from '@/Components/Admin/Header';

interface Props {
    title?: string;
}

export default function AdminLayout({ title = 'Admin Dashboard', children }: PropsWithChildren<Props>) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Head title={title} />
            <div className="relative min-h-screen bg-gradient-to-br from-sky-50 via-white to-slate-100">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-sky-200 blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.25, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="pointer-events-none absolute -right-20 bottom-24 h-80 w-80 rounded-full bg-yellow-200 blur-3xl"
                />

                <div className="relative z-10 flex min-h-screen">
                    <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
                    <div className="flex min-h-screen flex-1 flex-col">
                        <Header onToggleSidebar={() => setSidebarOpen(true)} />
                        <main className="flex-1 px-4 py-8 sm:px-8 lg:px-12">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={title}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -16 }}
                                    transition={{ duration: 0.25 }}
                                    className="mx-auto w-full max-w-7xl"
                                >
                                    {children}
                                </motion.div>
                            </AnimatePresence>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}