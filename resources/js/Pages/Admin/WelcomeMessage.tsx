import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import { WelcomeData } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { Camera, CheckCircle, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function WelcomeMessage({ welcomeData, flash }: { welcomeData: WelcomeData, flash: { success?: string } }) {
    const { data, setData, post, processing, errors, progress } = useForm({
        title: welcomeData.title || '',
        paragraph_1: welcomeData.paragraph_1 || '',
        paragraph_2: welcomeData.paragraph_2 || '',
        name: welcomeData.name || '',
        kajur_image: null as File | null,
        _method: 'POST', // Inertia requires this for file uploads with POST
    });

    const [imagePreview, setImagePreview] = useState<string | null>(welcomeData.kajur_image_path);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (flash?.success) {
            setShowSuccess(true);
            const timer = setTimeout(() => setShowSuccess(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [flash]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('kajur_image', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.welcome-message.update'), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout title="Kelola Welcome Message">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center text-white shadow-lg shadow-sky-300">
                        <Sparkles size={24} />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800">Pengaturan Welcome Message</h1>
                </div>

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
                        <InputLabel htmlFor="kajur_image" value="Gambar Ketua Jurusan" />
                        <div className="mt-2 relative w-full aspect-video rounded-lg bg-slate-100 overflow-hidden group">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-400">Tidak ada gambar</div>
                            )}
                            <label htmlFor="kajur_image" className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition cursor-pointer">
                                <div className="text-white text-center">
                                    <Camera size={32} />
                                    <p className="mt-2 text-sm font-semibold">Ganti Gambar</p>
                                </div>
                            </label>
                            <input id="kajur_image" type="file" className="hidden" onChange={handleImageChange} />
                        </div>
                        {progress && (
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                <div className="bg-sky-600 h-2.5 rounded-full" style={{ width: `${progress.percentage}%` }}></div>
                            </div>
                        )}
                        <InputError message={errors.kajur_image} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <InputLabel htmlFor="title" value="Judul Sambutan" />
                        <TextInput
                            id="title"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            className="w-full mt-1"
                            placeholder='Contoh: Sambutan dari Ketua Program Studi'
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        <InputLabel htmlFor="paragraph_1" value="Paragraf 1" />
                        <textarea
                            id="paragraph_1"
                            value={data.paragraph_1}
                            onChange={e => setData('paragraph_1', e.target.value)}
                            className="w-full mt-1 border-gray-300 focus:border-sky-500 focus:ring-sky-500 rounded-md shadow-sm min-h-[150px]"
                            placeholder='Tuliskan paragraf pertama di sini...'
                        />
                        <InputError message={errors.paragraph_1} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                        <InputLabel htmlFor="paragraph_2" value="Paragraf 2 (Opsional)" />
                        <textarea
                            id="paragraph_2"
                            value={data.paragraph_2}
                            onChange={e => setData('paragraph_2', e.target.value)}
                            className="w-full mt-1 border-gray-300 focus:border-sky-500 focus:ring-sky-500 rounded-md shadow-sm min-h-[150px]"
                            placeholder='Tuliskan paragraf kedua di sini...'
                        />
                        <InputError message={errors.paragraph_2} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                        <InputLabel htmlFor="name" value="Nama Ketua Jurusan" />
                        <TextInput
                            id="name"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            className="w-full mt-1"
                            placeholder='Contoh: John Doe, S.Kom., M.Kom.'
                        />
                        <InputError message={errors.name} className="mt-2" />
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
