import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import { HeroData } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { Camera, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroSection({ heroData, flash }: { heroData: HeroData, flash: { success?: string } }) {
    const { data, setData, post, processing, errors, progress } = useForm({
        title: heroData.title || '',
        paragraph_1: heroData.paragraph_1 || '',
        paragraph_2: heroData.paragraph_2 || '',
        hero_image: null as File | null,
    });

    const [imagePreview, setImagePreview] = useState<string | null>(heroData.hero_image_path);
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
            setData('hero_image', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.hero-section.update'), {
            forceFormData: true, // Important for file uploads
        });
    };

    return (
        <AdminLayout title="Kelola Hero Section">
            <div className="max-w-4xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8">
                <h1 className="text-2xl font-bold text-slate-800 mb-6">Pengaturan Hero Section</h1>

                {showSuccess && (
                    <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-100 p-4 text-sm font-medium text-green-700">
                        <CheckCircle size={20} />
                        <span>{flash.success}</span>
                    </div>
                )}

                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <InputLabel htmlFor="hero_image" value="Gambar Hero" />
                        <div className="mt-2 relative w-full h-64 rounded-lg bg-slate-100 overflow-hidden group">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-400">Tidak ada gambar</div>
                            )}
                            <label htmlFor="hero_image" className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition cursor-pointer">
                                <div className="text-white text-center">
                                    <Camera size={32} />
                                    <p className="mt-2 text-sm font-semibold">Ganti Gambar</p>
                                </div>
                            </label>
                            <input id="hero_image" type="file" className="hidden" onChange={handleImageChange} />
                        </div>
                        {progress && (
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress.percentage}%` }}></div>
                            </div>
                        )}
                        <InputError message={errors.hero_image} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="title" value="Judul" />
                        <TextInput
                            id="title"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            className="w-full mt-1"
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="paragraph_1" value="Paragraf 1" />
                        <textarea
                            id="paragraph_1"
                            value={data.paragraph_1}
                            onChange={e => setData('paragraph_1', e.target.value)}
                            className="w-full mt-1 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm min-h-[100px]"
                        />
                        <InputError message={errors.paragraph_1} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="paragraph_2" value="Paragraf 2 (Opsional)" />
                        <textarea
                            id="paragraph_2"
                            value={data.paragraph_2}
                            onChange={e => setData('paragraph_2', e.target.value)}
                            className="w-full mt-1 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm min-h-[100px]"
                        />
                        <InputError message={errors.paragraph_2} className="mt-2" />
                    </div>

                    <div className="flex justify-end">
                        <PrimaryButton disabled={processing}>
                            {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
