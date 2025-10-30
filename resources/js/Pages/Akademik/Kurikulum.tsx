import AkademikLayout from '@/Layouts/AkademikLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

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
                {/* <h2 className="text-3xl font-bold text-sky-600 mb-6 border-l-4 border-yellow-400 pl-4">Kurikulum</h2> */}
                <iframe
                    src={pdfPath}
                    title="Dokumen PDF"
                    className="w-full h-full border-none rounded-lg"
                />
            </motion.div>
        </AkademikLayout>
    );
}