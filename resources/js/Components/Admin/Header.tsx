import { usePage, Link } from '@inertiajs/react';
import { Menu, Bell, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageProps } from '@/types';

interface HeaderProps {
    onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
    const {
        auth: { user },
    } = usePage<PageProps>().props;

    return (
        <header className="sticky top-0 z-20 bg-white/80 shadow-sm shadow-sky-100 backdrop-blur-xl">
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-10">
                <div className="flex items-center gap-3">
                    <button
                        onClick={onToggleSidebar}
                        className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 md:hidden"
                        aria-label="Toggle sidebar"
                    >
                        <Menu size={22} />
                    </button>
                    <div className="hidden flex-col md:flex">
                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">Dashboard</span>
                        <span className="text-lg font-semibold text-slate-800">Teknik Informatika Admin Center</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-5">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.94 }}
                        className="hidden h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-600 shadow-inner shadow-sky-100 transition hover:bg-sky-100 sm:flex"
                        aria-label="Notifications"
                    >
                        <Bell size={18} />
                    </motion.button>

                    <div className="flex items-center gap-3">
                        <div className="hidden text-right sm:block">
                            <p className="text-sm font-semibold text-slate-700">{user.name}</p>
                            <p className="text-xs text-slate-400">Administrator</p>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.94 }}
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-sky-600 text-lg font-semibold text-white shadow-lg shadow-sky-300"
                        >
                            {user.name.charAt(0).toUpperCase()}
                        </motion.div>
                    </div>

                    <Link
                        method="post"
                        href={route('logout')}
                        as="button"
                        className="hidden rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-200 hover:text-slate-700 sm:inline-flex sm:items-center sm:gap-2"
                    >
                        <LogOut size={16} />
                        Keluar
                    </Link>
                </div>
            </div>
        </header>
    );
}