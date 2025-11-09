import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import { ProfilLulusanData } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import { CheckCircle, GraduationCap, Plus, Trash } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProfilLulusan({ profilLulusan, flash }: { profilLulusan: ProfilLulusanData[], flash: { success?: string } }) {
    const { data, setData, post, processing, errors } = useForm({
        profilLulusan: profilLulusan.length > 0 ? profilLulusan : [{ content: '' }],
    });

    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (flash?.success) {
            setShowSuccess(true);
            const timer = setTimeout(() => setShowSuccess(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [flash]);

    const handleProfilChange = (index: number, value: string) => {
        const newProfil = [...data.profilLulusan];
        newProfil[index].content = value;
        setData('profilLulusan', newProfil);
    };

    const addProfil = () => {
        setData('profilLulusan', [...data.profilLulusan, { content: '' }]);
    };

    const removeProfil = (index: number) => {
        const newProfil = [...data.profilLulusan];
        newProfil.splice(index, 1);
        setData('profilLulusan', newProfil);
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.profil.profil-lulusan.update'));
    };

    return (
        <AdminLayout title="Kelola Profil Lulusan">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8"
            >
                <h1 className="text-2xl font-bold text-slate-800 mb-6">Pengaturan Profil Lulusan</h1>

                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mb-6 flex items-center gap-3 rounded-lg bg-green-100 p-4 text-sm font-medium text-green-700"
                    >
                        <CheckCircle size={20} />
                        <span>{flash.success}</span>
                    </motion.div>
                )}

                <form onSubmit={submit} className="space-y-8">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                        <InputLabel value="Profil Lulusan" />
                        <div className="mt-2 flex items-start gap-4">
                             <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center text-white shadow-lg shadow-sky-300">
                                <GraduationCap size={24} />
                            </div>
                            <div className="w-full space-y-4">
                                <AnimatePresence>
                                    {data.profilLulusan.map((p, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex items-center gap-2"
                                        >
                                            <textarea
                                                value={p.content}
                                                onChange={e => handleProfilChange(index, e.target.value)}
                                                className="w-full border-gray-300 focus:border-sky-500 focus:ring-sky-500 rounded-md shadow-sm"
                                                placeholder={`Profil #${index + 1}`}
                                            />
                                            <button type="button" onClick={() => removeProfil(index)} className="p-2 text-slate-400 hover:text-red-500 transition">
                                                <Trash size={18} />
                                            </button>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                                <InputError message={errors.profilLulusan} className="mt-2" />

                                <button type="button" onClick={addProfil} className="flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 transition">
                                    <Plus size={16} />
                                    <span>Tambah Profil</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex justify-end">
                        <PrimaryButton disabled={processing}>
                            {processing ? 'Menyimpan...' : 'Simpan Profil Lulusan'}
                        </PrimaryButton>
                    </motion.div>
                </form>
            </motion.div>
        </AdminLayout>
    );
}
