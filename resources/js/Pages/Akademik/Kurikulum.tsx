import AkademikLayout from '@/Layouts/AkademikLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Worker, Viewer } from '@react-pdf-viewer/core';

export default function VisiMisi() {
    const pdfPath = "/storage/dokumen/kurikulum.pdf"; 

    return (
        <AkademikLayout>
            <Head title="Dokumen" />
            <motion.div
                className="relative h-[85vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer fileUrl={pdfPath} />
                </Worker>
            </motion.div>
        </AkademikLayout>
    );
}