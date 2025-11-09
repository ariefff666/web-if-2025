import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import { CPL } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { Edit2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Edit({ cpl }: { cpl: CPL }) {
    const { data, setData, post, processing, errors } = useForm({
        kode: cpl.kode || '',
        kategori: cpl.kategori || '',
        sub_kategori: cpl.sub_kategori || '',
        deskripsi: cpl.deskripsi || '',
        _method: 'PUT',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.profil.cpl.update', cpl.id));
    };

    return (
        <AdminLayout title="Edit CPL">
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
                    <h1 className="text-2xl font-bold text-slate-800">Edit CPL</h1>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                        <InputLabel htmlFor="kode" value="Kode" />
                        <TextInput
                            id="kode"
                            value={data.kode}
                            onChange={e => setData('kode', e.target.value)}
                            className="w-full mt-1"
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
                        />
                        <InputError message={errors.sub_kategori} className="mt-2" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                        <InputLabel htmlFor="deskripsi" value="Deskripsi" />
                        <textarea
                            id="deskripsi"
                            value={data.deskripsi}
                            onChange={e => setData('deskripsi', e.target.value)}
                            className="w-full mt-1 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 rounded-md shadow-sm min-h-[120px]"
                        />
                        <InputError message={errors.deskripsi} className="mt-2" />
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
