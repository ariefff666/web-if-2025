import AkademikLayout from '@/Layouts/AkademikLayout';
import { AkademikDokumen } from '@/types';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Dokumen({dokumen} : {dokumen: AkademikDokumen[]}) {

    return (
        <AkademikLayout>
            <Head title="Dokumen" />
            <motion.div
                className="relative h-[85vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-3xl font-bold mb-6 text-gray-800">
                    Dokumen Akademik
                </h1>

                {/* 2. Wrapper untuk tabel agar responsif dan ada shadow */}
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3 w-16">
                                    No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nama Dokumen
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Unduh
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* 3. Lakukan mapping/iterasi data dokumen di sini */}
                            {dokumen.length > 0 ? (
                                dokumen.map((doc, index) => (
                                    <tr key={doc.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">
                                            {/* Nomor urut baris */}
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4">
                                            {/* Judul dokumen */}
                                            {doc.title}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {/* 4. Link untuk download */}
                                            <a
                                                href={doc.file_path}
                                                download // Atribut ini memberitahu browser untuk men-download
                                                target="_blank" // Membuka di tab baru (baik untuk file)
                                                rel="noopener noreferrer"
                                                className="font-medium text-blue-600 hover:underline"
                                            >
                                                Unduh File
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                // Tampilkan pesan jika tidak ada dokumen
                                <tr className="bg-white border-b">
                                    <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                                        Tidak ada dokumen yang tersedia.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </AkademikLayout>
    );
}