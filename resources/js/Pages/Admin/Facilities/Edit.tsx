import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import { FacilitiesData } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { Camera, Edit2 } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Edit({ facility }: { facility: FacilitiesData }) {
    const { data, setData, post, processing, errors, progress } = useForm({
        name: facility.name || '',
        facilities_image: null as File | null,
        _method: 'PUT',
    });

    const [imagePreview, setImagePreview] = useState<string | null>(facility.facilities_image_path);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('facilities_image', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.facilities.update', facility.id), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout title="Edit Fasilitas">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-white shadow-lg shadow-yellow-300">
                        <Edit2 size={24} />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800">Edit Fasilitas</h1>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                        <InputLabel htmlFor="facilities_image" value="Gambar Fasilitas" />
                        <div className="mt-2 relative w-full aspect-video rounded-lg bg-slate-100 overflow-hidden group">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-400">
                                    <Camera size={32} />
                                </div>
                            )}
                             <label htmlFor="facilities_image" className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition cursor-pointer">
                                <div className="text-white text-center">
                                    <Camera size={32} />
                                    <p className="mt-2 text-sm font-semibold">Ganti Gambar</p>
                                </div>
                            </label>
                            <input id="facilities_image" type="file" className="hidden" onChange={handleImageChange} />
                        </div>
                        {progress && (
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: `${progress.percentage}%` }}></div>
                            </div>
                        )}
                        <InputError message={errors.facilities_image} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <InputLabel htmlFor="name" value="Nama Fasilitas" />
                        <TextInput
                            id="name"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            className="w-full mt-1"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex justify-end">
                        <PrimaryButton disabled={processing}>
                            {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                        </PrimaryButton>
                    </motion.div>
                </form>
            </motion.div>
        </AdminLayout>
    );
}
