import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import { Testimonial } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { Camera, UserPlus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Edit({ testimonial }: { testimonial: Testimonial }) {
    const { data, setData, post, processing, errors, progress } = useForm({
        name: testimonial.name || '',
        title: testimonial.title || '',
        major: testimonial.major || '',
        text: testimonial.text || '',
        avatar: null as File | null,
        _method: 'PUT',
    });

    const [imagePreview, setImagePreview] = useState<string | null>(testimonial.avatar);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('avatar', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.testimonials.update', testimonial.id), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout title="Edit Testimonial">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-white shadow-lg shadow-yellow-300">
                        <UserPlus size={24} />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800">Edit Testimonial</h1>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                        <InputLabel htmlFor="avatar" value="Avatar" />
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
                            <label htmlFor="avatar" className="cursor-pointer bg-white text-sm text-slate-600 font-semibold py-2 px-4 border border-slate-300 rounded-lg hover:bg-slate-50 transition">
                                Ganti Gambar
                            </label>
                            <input id="avatar" type="file" className="hidden" onChange={handleImageChange} />
                        </div>
                        {progress && (
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: `${progress.percentage}%` }}></div>
                            </div>
                        )}
                        <InputError message={errors.avatar} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <InputLabel htmlFor="name" value="Nama" />
                        <TextInput
                            id="name"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            className="w-full mt-1"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        <InputLabel htmlFor="major" value="Jurusan" />
                        <TextInput
                            id="major"
                            value={data.major}
                            onChange={e => setData('major', e.target.value)}
                            className="w-full mt-1"
                        />
                        <InputError message={errors.major} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                        <InputLabel htmlFor="title" value="Jabatan/Pekerjaan" />
                        <TextInput
                            id="title"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            className="w-full mt-1"
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                        <InputLabel htmlFor="text" value="Isi Testimoni" />
                        <textarea
                            id="text"
                            value={data.text}
                            onChange={e => setData('text', e.target.value)}
                            className="w-full mt-1 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 rounded-md shadow-sm min-h-[120px]"
                        />
                        <InputError message={errors.text} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex justify-end">
                        <PrimaryButton disabled={processing}>
                            {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                        </PrimaryButton>
                    </motion.div>
                </form>
            </motion.div>
        </AdminLayout>
    );
}
