import { useCallback } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { motion } from 'framer-motion';
import { Newspaper, Users, FileStack, Sparkles, Rocket, ChevronRight } from 'lucide-react';
import Particles from '@tsparticles/react';
import type { Container, Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: React.ElementType;
    accent: string;
    delay: number;
}

const StatCard = ({ title, value, icon: Icon, accent, delay }: StatCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="group relative overflow-hidden rounded-2xl bg-white/90 p-6 shadow-lg shadow-sky-100 transition hover:-translate-y-1 hover:shadow-xl"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/30 to-white/0 opacity-0 transition group-hover:opacity-100" />
        <div className="relative flex items-center justify-between">
            <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">{title}</p>
                <p className="mt-3 text-4xl font-bold text-slate-800">{value}</p>
            </div>
            <div className={`h-14 w-14 rounded-2xl ${accent} flex items-center justify-center text-white shadow-lg shadow-sky-200`}>
                <Icon size={26} />
            </div>
        </div>
    </motion.div>
);

export default function Beranda() {
    const stats = { berita: 12, dosen: 25, dokumen: 42 };

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (_container: Container | undefined) => {}, []);

    return (
        <AdminLayout title="Beranda Admin">
            <div className="relative overflow-hidden rounded-[32px] bg-white/80 p-6 pb-10 shadow-xl shadow-sky-100 sm:p-10">
                <Particles
                    id="admin-dashboard-particles"
                    // @ts-ignore
                    init={particlesInit}
                    // @ts-ignore
                    loaded={particlesLoaded}
                    options={{
                        fullScreen: { enable: false },
                        background: { color: 'transparent' },
                        particles: {
                            number: { value: 40, density: { enable: true } },
                            color: { value: ['#0284C7', '#FACC15'] },
                            opacity: { value: 0.35 },
                            size: { value: { min: 1, max: 4 } },
                            move: { enable: true, speed: 1.2, outModes: { default: 'out' } },
                            links: { enable: true, color: '#38BDF8', opacity: 0.2, distance: 140, width: 1 },
                        },
                        interactivity: {
                            events: { onHover: { enable: true, mode: 'repulse' } },
                            modes: { repulse: { distance: 110, duration: 0.4 } },
                        },
                    }}
                    className="pointer-events-none absolute inset-0"
                />

                <div className="relative z-10 space-y-10">
                    <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">
                                    <Rocket size={14} />
                                    Dasbor Administrasi
                                </p>
                                <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Selamat Datang di IF Admin Center</h1>
                                <p className="mt-2 max-w-2xl text-sm text-slate-500">
                                    Kelola semua konten situs Teknik Informatika secara terpadu dengan antarmuka yang cepat dan aman.
                                </p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-300 text-sky-800 shadow-lg shadow-yellow-200"
                            >
                                <Sparkles size={36} />
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        <StatCard title="Total Berita" value={stats.berita} icon={Newspaper} accent="bg-gradient-to-br from-sky-500 to-sky-600" delay={0.2} />
                        <StatCard title="Jumlah Dosen" value={stats.dosen} icon={Users} accent="bg-gradient-to-br from-emerald-500 to-emerald-600" delay={0.3} />
                        <StatCard title="Total Dokumen" value={stats.dokumen} icon={FileStack} accent="bg-gradient-to-br from-yellow-400 to-yellow-500 text-sky-900" delay={0.4} />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="grid gap-6 lg:grid-cols-2"
                    >
                        <div className="rounded-2xl border border-sky-100/70 bg-white/90 p-6 shadow-sm">
                            <h2 className="text-lg font-semibold text-slate-800">Pintasan Cepat</h2>
                            <p className="mt-2 text-sm text-slate-500">Atur modul utama dengan satu klik.</p>
                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                {[
                                    { label: 'Tambah Berita', href: "#" },
                                    { label: 'Kelola Hero Section', href: "#" },
                                    { label: 'Perbarui Visi Misi', href: "#" },
                                    { label: 'Dokumen Panduan', href: "#" },
                                ].map(link => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 transition hover:border-sky-500 hover:text-sky-600"
                                    >
                                        <span>{link.label}</span>
                                        <ChevronRight size={16} className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-yellow-500" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-sky-100/70 bg-white/90 p-6 shadow-sm">
                            <h2 className="text-lg font-semibold text-slate-800">Aktivitas Terkini</h2>
                            <p className="mt-2 text-sm text-slate-500">Riwayat pembaruan konten dan pengguna.</p>
                            <div className="mt-4 space-y-3 text-sm text-slate-500">
                                <p>• 12/11/2025 — Hero Section diperbarui oleh Admin</p>
                                <p>• 11/11/2025 — 3 Testimoni baru ditambahkan</p>
                                <p>• 09/11/2025 — Struktur pimpinan diperbarui</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </AdminLayout>
    );
}