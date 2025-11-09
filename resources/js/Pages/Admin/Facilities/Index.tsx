import AdminLayout from '@/Layouts/AdminLayout';
import { FacilitiesData } from '@/types';
import { Link } from '@inertiajs/react';
import { Plus, Trash2, Edit } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Index({ facilities }: { facilities: FacilitiesData[] }) {
    return (
        <AdminLayout title="Kelola Fasilitas">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8"
            >
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-slate-800">Daftar Fasilitas</h1>
                    <Link
                        href={route('admin.facilities.create')}
                        className="inline-flex items-center gap-2 bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-sky-700 transition"
                    >
                        <Plus size={20} />
                        <span>Tambah Fasilitas</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={facility.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-white rounded-xl shadow-md overflow-hidden group"
                        >
                            <div className="relative aspect-video">
                                <img className="w-full h-full object-cover" src={facility.facilities_image_path} alt={facility.name} />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Link href={route('admin.facilities.edit', facility.id)} className="bg-white/80 p-2 rounded-full text-slate-600 hover:text-sky-600 transition">
                                        <Edit size={18} />
                                    </Link>
                                    <Link href={route('admin.facilities.destroy', facility.id)} method="delete" as="button" className="bg-white/80 p-2 rounded-full text-slate-600 hover:text-red-600 transition">
                                        <Trash2 size={18} />
                                    </Link>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-slate-800">{facility.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </AdminLayout>
    );
}
