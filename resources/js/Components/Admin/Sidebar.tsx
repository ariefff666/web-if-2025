import { Link, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    LayoutDashboard,
    PanelsTopLeft,
    Newspaper,
    GraduationCap,
    FileText,
    X,
    Sparkles,
    ChevronRight,
} from 'lucide-react';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

interface NavItem {
    label: string;
    href: string;
    patterns: string[];
}

const navGroups: { title: string; icon: React.ElementType; patterns: string[]; items: NavItem[] }[] = [
    {
        title: 'Beranda',
        icon: LayoutDashboard,
        patterns: ['/admin', '/admin/hero-section', '/admin/welcome', '/admin/testimonials', '/admin/facilities'],
        items: [
            { label: 'Ringkasan', href: route('admin.beranda'), patterns: ['/admin$'] },
            { label: 'Hero Section', href: route('admin.hero-section'), patterns: ['/admin/hero-section'] },
            { label: 'Welcome Message', href: "#", patterns: ['/admin/welcome'] },
            { label: 'Testimonials', href: "#", patterns: ['/admin/testimonials'] },
            { label: 'Facilities', href: "#", patterns: ['/admin/facilities'] },
        ],
    },
    {
        title: 'Profil',
        icon: PanelsTopLeft,
        patterns: ['/admin/visi', '/admin/misi', '/admin/profil-lulusan', '/admin/struktur', '/admin/lecturers', '/admin/cpl'],
        items: [
            { label: 'Visi', href: "#", patterns: ['/admin/visi'] },
            { label: 'Misi', href: "#", patterns: ['/admin/misi'] },
            { label: 'Profil Lulusan', href: "#", patterns: ['/admin/profil-lulusan'] },
            { label: 'Struktur Pimpinan', href: "#", patterns: ['/admin/struktur'] },
            { label: 'Lecturers', href: "#", patterns: ['/admin/lecturers'] },
            { label: 'Capaian Pembelajaran', href: "#", patterns: ['/admin/cpl'] },
        ],
    },
    {
        title: 'Berita',
        icon: Newspaper,
        patterns: ['/admin/news'],
        items: [{ label: 'News & Announcements', href: "#", patterns: ['/admin/news'] }],
    },
    {
        title: 'Akademik',
        icon: GraduationCap,
        patterns: ['/admin/akademik'],
        items: [{ label: 'Akademik', href: "#", patterns: ['/admin/akademik'] }],
    },
    {
        title: 'Panduan & SOP',
        icon: FileText,
        patterns: ['/admin/panduan'],
        items: [{ label: 'Dokumen Panduan', href: "#", patterns: ['/admin/panduan'] }],
    },
];

const isPatternActive = (url: string, patterns: string[]) => patterns.some(pattern => new RegExp(pattern).test(url));

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const { url } = usePage();

    const sidebar = (
        <motion.aside
            initial={{ x: isOpen ? 0 : -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="relative z-40 flex h-full w-72 flex-col overflow-y-auto bg-white/80 p-6 shadow-xl shadow-sky-200 backdrop-blur-xl md:shadow-none"
        >
            <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <motion.div
                        initial={{ rotate: -8, scale: 0.8 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-lg shadow-sky-400/40"
                    >
                        <Sparkles size={24} />
                    </motion.div>
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Portal</p>
                        <p className="text-lg font-bold text-slate-900">IF Admin Center</p>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 md:hidden"
                    aria-label="Close sidebar"
                >
                    <X size={20} />
                </button>
            </div>

            <nav className="space-y-6">
                {navGroups.map(group => {
                    const activeSection = isPatternActive(url, group.patterns);
                    return (
                        <div key={group.title} className="space-y-3">
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                                <group.icon size={16} className={activeSection ? 'text-sky-600' : 'text-slate-300'} />
                                {group.title}
                            </div>

                            <div className="space-y-1.5">
                                {group.items.map(item => {
                                    const isActive = isPatternActive(url, item.patterns);
                                    return (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="group relative block"
                                        >
                                            <motion.div
                                                layout
                                                className={`relative flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-500 transition-all duration-300 ${
                                                    isActive
                                                        ? 'bg-white shadow-lg shadow-sky-200 text-sky-600'
                                                        : 'hover:bg-sky-50 hover:text-sky-600'
                                                }`}
                                            >
                                                <motion.span
                                                    layoutId={`indicator-${group.title}`}
                                                    className="pointer-events-none absolute inset-y-2 left-2 w-1 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-300"
                                                    style={{ opacity: isActive ? 1 : 0, scaleY: isActive ? 1 : 0 }}
                                                    transition={{ duration: 0.25 }}
                                                />
                                                <span className={`pl-3 transition ${isActive ? 'font-semibold' : 'font-medium'}`}>
                                                    {item.label}
                                                </span>
                                                <ChevronRight
                                                    size={16}
                                                    className={`transition-transform ${isActive ? 'text-yellow-500' : 'text-slate-300 group-hover:text-yellow-400'} ${
                                                        isActive ? 'translate-x-0' : 'group-hover:translate-x-1'
                                                    }`}
                                                />
                                            </motion.div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </nav>

            <div className="mt-auto rounded-2xl bg-gradient-to-br from-sky-500/10 via-sky-500/5 to-transparent p-4 text-xs text-slate-500">
                © {new Date().getFullYear()} Program Studi Teknik Informatika. Semua hak dilindungi.
            </div>
        </motion.aside>
    );

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-30 bg-slate-900/40 md:hidden"
                        onClick={onClose}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && <motion.div className="fixed inset-y-0 left-0 z-40 w-72 md:hidden">{sidebar}</motion.div>}
            </AnimatePresence>

            <div className="hidden md:block md:w-72 md:flex-shrink-0">{sidebar}</div>
        </>
    );
}