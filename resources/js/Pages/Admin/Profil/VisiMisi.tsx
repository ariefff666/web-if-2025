import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import { Visi, Misi } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import { CheckCircle, Eye, Target, Plus, Trash } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VisiMisi({ visi, misi, flash }: { visi: Visi, misi: Misi[], flash: { success?: string } }) {
    const { data, setData, post, processing, errors } = useForm({
        visi: visi.content || '',
        misi: misi.length > 0 ? misi : [{ content: '' }],
    });

    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (flash?.success) {
            setShowSuccess(true);
            const timer = setTimeout(() => setShowSuccess(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [flash]);

    const handleMisiChange = (index: number, value: string) => {
        const newMisi = [...data.misi];
        newMisi[index].content = value;
        setData('misi', newMisi);
    };

    const addMisi = () => {
        setData('misi', [...data.misi, { content: '' }]);
    };

    const removeMisi = (index: number) => {
        const newMisi = [...data.misi];
        newMisi.splice(index, 1);
        setData('misi', newMisi);
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.profil.visi-misi.update'));
    };

    return (
        <AdminLayout title="Kelola Visi & Misi">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8"
            >
                <h1 className="text-2xl font-bold text-slate-800 mb-6">Pengaturan Visi & Misi</h1>

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
                        <InputLabel htmlFor="visi" value="Visi" />
                        <div className="mt-2 flex items-start gap-4">
                            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center text-white shadow-lg shadow-sky-300">
                                <Eye size={24} />
                            </div>
                            <textarea
                                id="visi"
                                value={data.visi}
                                onChange={e => setData('visi', e.target.value)}
                                className="w-full mt-1 border-gray-300 focus:border-sky-500 focus:ring-sky-500 rounded-md shadow-sm min-h-[120px]"
                                placeholder='Tuliskan visi program studi di sini...'
                            />
                        </div>
                        <InputError message={errors.visi} className="mt-2 ml-16" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <InputLabel value="Misi" />
                        <div className="mt-2 flex items-start gap-4">
                             <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-white shadow-lg shadow-yellow-300">
                                <Target size={24} />
                            </div>
                            <div className="w-full space-y-4">
                                <AnimatePresence>
                                    {data.misi.map((m, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex items-center gap-2"
                                        >
                                            <textarea
                                                value={m.content}
                                                onChange={e => handleMisiChange(index, e.target.value)}
                                                className="w-full border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 rounded-md shadow-sm"
                                                placeholder={`Misi #${index + 1}`}
                                            />
                                            <button type="button" onClick={() => removeMisi(index)} className="p-2 text-slate-400 hover:text-red-500 transition">
                                                <Trash size={18} />
                                            </button>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                                <InputError message={errors.misi} className="mt-2" />

                                <button type="button" onClick={addMisi} className="flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 transition">
                                    <Plus size={16} />
                                    <span>Tambah Misi</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex justify-end">
                        <PrimaryButton disabled={processing}>
                            {processing ? 'Menyimpan...' : 'Simpan Visi & Misi'}
                        </PrimaryButton>
                    </motion.div>
                </form>
            </motion.div>
        </AdminLayout>
    );
}
