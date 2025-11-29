import AkademikLayout from '@/Layouts/AkademikLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Akademik } from '@/types';
import { Download, Eye } from 'lucide-react';
import { useState } from 'react';
import PdfPreviewModal from '@/Components/PdfPreviewModal';

export default function Kurikulum({kurikulum} : {kurikulum: Akademik[]}) {
    const [previewFile, setPreviewFile] = useState<string | null>(null);

    return (
        <AkademikLayout>
            <Head title="Kurikulum Akademik" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8 min-h-[75vh]"
            >
                <h1 className="text-3xl font-bold mb-6 text-gray-800">
                    Kurikulum Akademik
                </h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
                        <thead className="bg-sky-50">
                            <tr>
                                <th className="py-3 px-6 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Judul</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tanggal Unggah</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {kurikulum.length > 0 ? (
                                kurikulum.map((doc, index) => (
                                    <motion.tr
                                        key={doc.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                        <td className="py-4 px-6 whitespace-nowrap">{doc.title}</td>
                                        <td className="py-4 px-6 whitespace-nowrap">{new Date(doc.created_at).toLocaleDateString()}</td>
                                        <td className="py-4 px-6 whitespace-nowrap text-left">
                                            <div className="flex items-center gap-4">
                                                <motion.button whileHover={{ y: -2, scale: 1.1 }} onClick={() => setPreviewFile(doc.file_path)} className="text-slate-500 hover:text-sky-600 transition">
                                                    <Eye size={18} />
                                                </motion.button>
                                                <motion.a whileHover={{ y: -2, scale: 1.1 }} href={doc.file_path} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-600 transition">
                                                    <Download size={18} />
                                                </motion.a>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="py-4 px-6 text-center text-gray-500">
                                        Tidak ada kurikulum yang tersedia.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </motion.div>
            {previewFile && (
                <PdfPreviewModal
                    file_path={previewFile}
                    onClose={() => setPreviewFile(null)}
                />
            )}
        </AkademikLayout>
    );
}