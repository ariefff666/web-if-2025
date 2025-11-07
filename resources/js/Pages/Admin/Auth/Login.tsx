import React, { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, Sparkles } from 'lucide-react';

export default function Login({ status, canResetPassword }: { status?: string; canResetPassword?: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => () => reset('password'), []);

    const submit = (event: React.FormEvent) => {
        event.preventDefault();
        post(route('admin.login.store'));
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100">
            <Head title="Admin Login" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="pointer-events-none absolute inset-0"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.35, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-sky-300 blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.25, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-yellow-200 blur-3xl"
                />
            </motion.div>

            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 90 }}
                    className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white/70 shadow-2xl shadow-sky-200/60 backdrop-blur-md lg:grid-cols-[1fr,1.1fr]"
                >
                    <div className="relative hidden h-full flex-col justify-between bg-gradient-to-br from-sky-600 via-sky-500 to-sky-700 p-10 text-white lg:flex">
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            <div className="flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.3em] text-sky-100/80">
                                <ShieldCheck size={24} />
                                IF Admin
                            </div>
                            <h1 className="mt-6 text-4xl font-bold leading-tight">
                                Portal Administrasi
                                <span className="block text-yellow-300">Teknik Informatika</span>
                            </h1>
                            <p className="mt-4 text-sky-50/80">
                                Kelola konten beranda, profil, berita, akademik, dan panduan &amp; SOP dari satu dasbor terpadu dengan keamanan tingkat lanjut.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="grid gap-3 rounded-2xl bg-white/10 p-6 shadow-inner backdrop-blur-md"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/90 text-sky-900">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold">Pengelolaan Terpusat</p>
                                    <p className="text-sm text-sky-100/70">Sunting setiap modul situs akademik dengan mudah.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-white">
                                    <Lock size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold">Keamanan Terjamin</p>
                                    <p className="text-sm text-sky-100/70">Proteksi autentikasi ganda untuk akun administrator.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            <div className="mb-8 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 shadow-inner shadow-sky-200">
                                    <ShieldCheck size={26} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold text-slate-900">Masuk ke Dasbor Admin</h2>
                                    <p className="text-sm text-slate-500">Silakan autentikasi untuk melanjutkan.</p>
                                </div>
                            </div>

                            {status && (
                                <div className="mb-4 rounded-lg border border-green-100 bg-green-50 px-4 py-2 text-sm text-green-600 shadow-sm">
                                    {status}
                                </div>
                            )}

                            <form onSubmit={submit} className="space-y-6">
                                <div className="space-y-2">
                                    <InputLabel htmlFor="email" value="Alamat Email" />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="w-full"
                                        autoComplete="username"
                                        isFocused
                                        onChange={event => setData('email', event.target.value)}
                                    />
                                    <InputError message={errors.email} className="mt-1" />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <InputLabel htmlFor="password" value="Kata Sandi" />
                                        {canResetPassword && (
                                            <Link
                                                href={route('password.request')}
                                                className="text-sm font-medium text-sky-600 transition-colors hover:text-sky-700"
                                            >
                                                Lupa password?
                                            </Link>
                                        )}
                                    </div>
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="w-full"
                                        autoComplete="current-password"
                                        onChange={event => setData('password', event.target.value)}
                                    />
                                    <InputError message={errors.password} className="mt-1" />
                                </div>

                                <label className="flex items-center gap-2 text-sm text-slate-600">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={event => setData('remember', event.target.checked)}
                                    />
                                    Ingat saya pada perangkat ini
                                </label>

                                <PrimaryButton className="w-full justify-center py-3 text-sm font-semibold uppercase tracking-wide" disabled={processing}>
                                    Masuk Sekarang
                                </PrimaryButton>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
