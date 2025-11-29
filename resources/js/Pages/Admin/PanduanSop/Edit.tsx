import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import { PanduanSop } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { Edit2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface PanduanSopWithCategory extends PanduanSop {
    category: 'panduan' | 'sop' | 'prosedur';
}

export default function Edit({ panduanSop }: { panduanSop: PanduanSopWithCategory }) {
    const { data, setData, post, processing, errors } = useForm({
        title: panduanSop.title || '',
        category: panduanSop.category || 'panduan',
        file: null as File | null,
        _method: 'PUT',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.panduan-sop.update', panduanSop.id), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout title="Edit Dokumen Panduan & SOP">
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
                    <h1 className="text-2xl font-bold text-slate-800">Edit Dokumen</h1>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                        <InputLabel htmlFor="title" value="Judul Dokumen" />
                        <TextInput
                            id="title"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            className="w-full mt-1"
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <InputLabel htmlFor="category" value="Kategori Dokumen" />
                        <select
                            id="category"
                            name="category"
                            value={data.category}
                            onChange={e => setData('category', e.target.value)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md"
                        >
                            <option value="panduan">Panduan</option>
                            <option value="sop">SOP</option>
                            <option value="prosedur">Prosedur</option>
                        </select>
                        <InputError message={errors.category} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        <InputLabel htmlFor="file" value="File Dokumen (Kosongkan jika tidak ingin diubah)" />
                        <input 
                            id="file"
                            type="file" 
                            className="w-full mt-1"
                            onChange={e => setData('file', e.target.files ? e.target.files[0] : null)} 
                        />
                        <InputError message={errors.file} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex justify-end">
                        <PrimaryButton disabled={processing}>
                            {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                        </PrimaryButton>
                    </motion.div>
                </form>
            </motion.div>
        </AdminLayout>
    );
}
