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
        kode: '',
        kategori: '',
        sub_kategori: '',
        deskripsi: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.profil.cpl.store'));
    };

    return (
        <AdminLayout title="Tambah CPL">
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
                    <h1 className="text-2xl font-bold text-slate-800">Tambah CPL Baru</h1>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                        <InputLabel htmlFor="kode" value="Kode" />
                        <TextInput
                            id="kode"
                            value={data.kode}
                            onChange={e => setData('kode', e.target.value)}
                            className="w-full mt-1"
                            placeholder='Contoh: CPL-01'
                        />
                        <InputError message={errors.kode} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <InputLabel htmlFor="kategori" value="Kategori" />
                        <TextInput
                            id="kategori"
                            value={data.kategori}
                            onChange={e => setData('kategori', e.target.value)}
                            className="w-full mt-1"
                            placeholder='Contoh: Sikap'
                        />
                        <InputError message={errors.kategori} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        <InputLabel htmlFor="sub_kategori" value="Sub Kategori" />
                        <TextInput
                            id="sub_kategori"
                            value={data.sub_kategori}
                            onChange={e => setData('sub_kategori', e.target.value)}
                            className="w-full mt-1"
                            placeholder='Contoh: Bertaqwa kepada Tuhan Yang Maha Esa'
                        />
                        <InputError message={errors.sub_kategori} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                        <InputLabel htmlFor="deskripsi" value="Deskripsi" />
                        <textarea
                            id="deskripsi"
                            value={data.deskripsi}
                            onChange={e => setData('deskripsi', e.target.value)}
                            className="w-full mt-1 border-gray-300 focus:border-sky-500 focus:ring-sky-500 rounded-md shadow-sm min-h-[120px]"
                            placeholder='Tuliskan deskripsi CPL di sini...'
                        />
                        <InputError message={errors.deskripsi} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex justify-end">
                        <PrimaryButton disabled={processing}>
                            {processing ? 'Menyimpan...' : 'Simpan CPL'}
                        </PrimaryButton>
                    </motion.div>
                </form>
            </motion.div>
        </AdminLayout>
    );
}
