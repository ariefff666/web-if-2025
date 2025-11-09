import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { Camera, UserPlus } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Create() {
    const { data, setData, post, processing, errors, progress } = useForm({
        name: '',
        title: '',
        photo: null as File | null,
    });

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('photo', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.profil.dosen.store'), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout title="Tambah Dosen">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center text-white shadow-lg shadow-sky-300">
                        <UserPlus size={24} />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800">Tambah Dosen Baru</h1>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                        <InputLabel htmlFor="photo" value="Foto" />
                        <div className="mt-2 flex items-center gap-4">
                            <div className="relative w-24 h-24 rounded-full bg-slate-100 overflow-hidden group">
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                                        <Camera size={32} />
                                    </div>
                                )}
                            </div>
                            <label htmlFor="photo" className="cursor-pointer bg-white text-sm text-slate-600 font-semibold py-2 px-4 border border-slate-300 rounded-lg hover:bg-slate-50 transition">
                                Pilih Gambar
                            </label>
                            <input id="photo" type="file" className="hidden" onChange={handleImageChange} />
                        </div>
                        {progress && (
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                <div className="bg-sky-600 h-2.5 rounded-full" style={{ width: `${progress.percentage}%` }}></div>
                            </div>
                        )}
                        <InputError message={errors.photo} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <InputLabel htmlFor="name" value="Nama" />
                        <TextInput
                            id="name"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            className="w-full mt-1"
                            placeholder='Contoh: John Doe, S.Kom., M.Kom.'
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        <InputLabel htmlFor="title" value="Jabatan" />
                        <TextInput
                            id="title"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            className="w-full mt-1"
                            placeholder='Contoh: Dosen, Ketua Program Studi'
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex justify-end">
                        <PrimaryButton disabled={processing}>
                            {processing ? 'Menyimpan...' : 'Simpan Dosen'}
                        </PrimaryButton>
                    </motion.div>
                </form>
            </motion.div>
        </AdminLayout>
    );
}
