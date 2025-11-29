import AdminLayout from '@/Layouts/AdminLayout';
import { PanduanSop } from '@/types';
import { Link } from '@inertiajs/react';
import { Plus, Trash2, Edit, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

type PanduanSopWithCategory = PanduanSop & {
    category: 'panduan' | 'sop' | 'prosedur';
};

export default function Index({ panduanSop }: { panduanSop: PanduanSopWithCategory[] }) {
    
    const [filter, setFilter] = useState('all');

    const filteredPanduanSop = panduanSop.filter(item => {
        if (filter === 'all') return true;
        return item.category === filter;
    });

    const getCategoryName = (category: string) => {
        switch (category) {
            case 'panduan': return 'Panduan';
            case 'sop': return 'SOP';
            case 'prosedur': return 'Prosedur';
            default: return 'Lainnya';
        }
    }

    const renderTabs = () => (
        <div className="mb-6 border-b border-gray-200">
            <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                <button onClick={() => setFilter('all')} className={`${filter === 'all' ? 'border-sky-500 text-sky-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition`}>Semua</button>
                <button onClick={() => setFilter('panduan')} className={`${filter === 'panduan' ? 'border-sky-500 text-sky-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition`}>Panduan</button>
                <button onClick={() => setFilter('sop')} className={`${filter === 'sop' ? 'border-sky-500 text-sky-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition`}>SOP</button>
                <button onClick={() => setFilter('prosedur')} className={`${filter === 'prosedur' ? 'border-sky-500 text-sky-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition`}>Prosedur</button>
            </nav>
        </div>
    );

    return (
        <AdminLayout title="Kelola Panduan & SOP">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8"
            >
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-slate-800">Daftar Panduan & SOP</h1>
                    <Link
                        href={route('admin.panduan-sop.create')}
                        className="inline-flex items-center gap-2 bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-sky-700 transition"
                    >
                        <Plus size={20} />
                        <span>Tambah Dokumen</span>
                    </Link>
                </div>

                {renderTabs()}

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
                        <thead className="bg-sky-50">
                            <tr>
                                <th className="py-3 px-6 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Judul</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Kategori</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tanggal Unggah</th>
                                <th className="py-3 px-6 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {filteredPanduanSop.map((item, index) => (
                                <motion.tr
                                    key={item.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <td className="py-4 px-6 whitespace-nowrap">{item.title}</td>
                                    <td className="py-4 px-6 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.category === 'panduan' ? 'bg-blue-100 text-blue-800' : item.category === 'sop' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            {getCategoryName(item.category)}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 whitespace-nowrap">{new Date(item.created_at).toLocaleDateString()}</td>
                                    <td className="py-4 px-6 whitespace-nowrap text-right">
                                        <a href={item.file_path} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-600 transition mr-4">
                                            <Download size={18} />
                                        </a>
                                        <Link href={route('admin.panduan-sop.edit', item.id)} className="text-slate-500 hover:text-yellow-600 transition mr-4">
                                            <Edit size={18} />
                                        </Link>
                                        <Link href={route('admin.panduan-sop.destroy', item.id)} method="delete" as="button" className="text-slate-500 hover:text-red-600 transition">
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
