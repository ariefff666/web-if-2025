import AkademikLayout from '@/Layouts/AkademikLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { Akademik } from '@/types/index'

export default function Jadwal({jadwal} : {jadwal: Akademik}) {

    return (
        <AkademikLayout>
            <Head title={jadwal.title} />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <div className="w-full">
                <h2 className="text-3xl font-bold text-sky-600 mb-6 border-l-4 border-yellow-400 pl-4">
                    {jadwal.title}
                </h2>
                <div className="w-full h-screen rounded-lg overflow-hidden border border-gray-200 shadow-inner">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                        <Viewer fileUrl={jadwal.file_path} />
                    </Worker>
                </div>
            </div>
            </motion.div>
        </AkademikLayout>
    );
}