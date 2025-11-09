import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import { StrukturPimpinanData } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import { CheckCircle, Users, Plus, Trash, UploadCloud } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StrukturPimpinan({ strukturPimpinan, flash }: { strukturPimpinan: StrukturPimpinanData[], flash: { success?: string } }) {
    const { data, setData, post, processing, errors } = useForm<{ images: File[] }>(
        {
            images: [],
        }
    );

    const [imagePreviews, setImagePreviews] = useState<string[]>(strukturPimpinan.map(p => p.content));
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (flash?.success) {
            setShowSuccess(true);
            const timer = setTimeout(() => setShowSuccess(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [flash]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            setData('images', [...data.images, ...files]);

            const newPreviews = files.map(file => URL.createObjectURL(file));
            setImagePreviews([...imagePreviews, ...newPreviews]);
        }
    };

    const removeImage = (index: number) => {
        const newImages = [...data.images];
        newImages.splice(index, 1);
        setData('images', newImages);

        const newPreviews = [...imagePreviews];
        newPreviews.splice(index, 1);
        setImagePreviews(newPreviews);
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.profil.struktur-pimpinan.update'), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout title="Kelola Struktur Pimpinan">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8"
            >
                <h1 className="text-2xl font-bold text-slate-800 mb-6">Pengaturan Struktur Pimpinan</h1>

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
                        <InputLabel value="Gambar Struktur Pimpinan" />
                        <div className="mt-2">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                <AnimatePresence>
                                    {imagePreviews.map((preview, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="relative group"
                                        >
                                            <img src={preview} className="w-full h-auto object-cover rounded-lg shadow-md" />
                                            <button
                                                type="button"
                                                onClick={() => removeImage(index)}
                                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <Trash size={14} />
                                            </button>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                            <label htmlFor="image-upload" className="mt-4 flex justify-center w-full px-6 py-10 border-2 border-dashed rounded-lg cursor-pointer hover:border-sky-500 transition">
                                <div className="text-center">
                                    <UploadCloud size={40} className="mx-auto text-slate-400" />
                                    <p className="mt-2 text-sm text-slate-600">
                                        <span className="font-semibold text-sky-600">Klik untuk mengunggah</span> atau seret dan lepas
                                    </p>
                                    <p className="text-xs text-slate-500">PNG, JPG, GIF up to 2MB</p>
                                </div>
                            </label>
                            <input id="image-upload" type="file" multiple className="hidden" onChange={handleFileChange} />
                        </div>
                        <InputError message={errors.images} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex justify-end">
                        <PrimaryButton disabled={processing}>
                            {processing ? 'Menyimpan...' : 'Simpan Struktur Pimpinan'}
                        </PrimaryButton>
                    </motion.div>
                </form>
            </motion.div>
        </AdminLayout>
    );
}
