import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import { NewsAnnouncementsAchievements } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { Edit2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Edit({ berita }: { berita: NewsAnnouncementsAchievements }) {
    const { data, setData, post, processing, errors } = useForm<{
        title: string;
        category: 'berita' | 'pengumuman' | 'prestasi';
        body: string;
        image: File | null;
        _method: string;
    }>({
        title: berita.title || '',
        category: berita.category || 'berita',
        body: (berita.body as string) || '',
        image: null as File | null,
        _method: 'PUT',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.berita.update', berita.id), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout title="Edit Berita">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-white shadow-lg shadow-yellow-300">
                        <Edit2 size={24} />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800">Edit Item</h1>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                        <InputLabel htmlFor="title" value="Judul" />
                        <TextInput
                            id="title"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            className="w-full mt-1"
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <InputLabel htmlFor="category" value="Kategori" />
                        <select
                            id="category"
                            value={data.category}
                            onChange={e => setData('category', e.target.value as 'berita' | 'pengumuman' | 'prestasi')}
                            className="w-full mt-1 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 rounded-md shadow-sm"
                        >
                            <option value="berita">Berita</option>
                            <option value="pengumuman">Pengumuman</option>
                            <option value="prestasi">Prestasi</option>
                        </select>
                        <InputError message={errors.category} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        <InputLabel htmlFor="body" value="Isi Konten" />
                        <textarea
                            id="body"
                            value={data.body}
                            onChange={e => setData('body', e.target.value)}
                            className="w-full mt-1 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 rounded-md shadow-sm min-h-[200px]"
                        />
                        <InputError message={errors.body} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                        <InputLabel htmlFor="image" value="Gambar" />
                        <input
                            id="image"
                            type="file"
                            className="w-full mt-1"
                            onChange={e => setData('image', e.target.files ? e.target.files[0] : null)}
                        />
                        <InputError message={errors.image} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex justify-end">
                        <PrimaryButton disabled={processing}>
                            {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                        </PrimaryButton>
                    </motion.div>
                </form>
            </motion.div>
        </AdminLayout>
    );
}
