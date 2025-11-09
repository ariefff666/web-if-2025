import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { PlusSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        category: 'berita',
        body: '',
        image: null as File | null,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.berita.store'), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout title="Tambah Berita">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center text-white shadow-lg shadow-sky-300">
                        <PlusSquare size={24} />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800">Tambah Item Baru</h1>
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
                            onChange={e => setData('category', e.target.value)}
                            className="w-full mt-1 border-gray-300 focus:border-sky-500 focus:ring-sky-500 rounded-md shadow-sm"
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
                            className="w-full mt-1 border-gray-300 focus:border-sky-500 focus:ring-sky-500 rounded-md shadow-sm min-h-[200px]"
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
                            {processing ? 'Menyimpan...' : 'Simpan'}
                        </PrimaryButton>
                    </motion.div>
                </form>
            </motion.div>
        </AdminLayout>
    );
}
