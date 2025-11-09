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
        file: null as File | null,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.panduan-sop.store'), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout title="Tambah Dokumen Panduan & SOP">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center text-white shadow-lg shadow-sky-300">
                        <PlusSquare size={24} />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800">Tambah Dokumen Baru</h1>
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
                        <InputLabel htmlFor="file" value="File Dokumen" />
                        <input 
                            id="file"
                            type="file" 
                            className="w-full mt-1"
                            onChange={e => setData('file', e.target.files ? e.target.files[0] : null)} 
                        />
                        <InputError message={errors.file} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex justify-end">
                        <PrimaryButton disabled={processing}>
                            {processing ? 'Menyimpan...' : 'Simpan Dokumen'}
                        </PrimaryButton>
                    </motion.div>
                </form>
            </motion.div>
        </AdminLayout>
    );
}
