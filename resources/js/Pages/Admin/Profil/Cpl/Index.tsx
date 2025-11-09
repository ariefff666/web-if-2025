import AdminLayout from '@/Layouts/AdminLayout';
import { CPL } from '@/types';
import { Link } from '@inertiajs/react';
import { Plus, Trash2, Edit } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Index({ cpls }: { cpls: CPL[] }) {
    return (
        <AdminLayout title="Kelola CPL">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8"
            >
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-slate-800">Daftar Capaian Pembelajaran Lulusan</h1>
                    <Link
                        href={route('admin.profil.cpl.create')}
                        className="inline-flex items-center gap-2 bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-sky-700 transition"
                    >
                        <Plus size={20} />
                        <span>Tambah CPL</span>
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
                        <thead className="bg-sky-50">
                            <tr>
                                <th className="py-3 px-6 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Kode</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Kategori</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Sub Kategori</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Deskripsi</th>
                                <th className="py-3 px-6 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {cpls.map((cpl, index) => (
                                <motion.tr
                                    key={cpl.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <td className="py-4 px-6 whitespace-nowrap">{cpl.kode}</td>
                                    <td className="py-4 px-6 whitespace-nowrap">{cpl.kategori}</td>
                                    <td className="py-4 px-6 whitespace-nowrap">{cpl.sub_kategori}</td>
                                    <td className="py-4 px-6">{cpl.deskripsi}</td>
                                    <td className="py-4 px-6 whitespace-nowrap text-right">
                                        <Link href={route('admin.profil.cpl.edit', cpl.id)} className="text-slate-500 hover:text-sky-600 transition mr-4">
                                            <Edit size={18} />
                                        </Link>
                                        <Link href={route('admin.profil.cpl.destroy', cpl.id)} method="delete" as="button" className="text-slate-500 hover:text-red-600 transition">
                                            <Trash2 size={18} />
                                        </Link>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </AdminLayout>
    );
}
