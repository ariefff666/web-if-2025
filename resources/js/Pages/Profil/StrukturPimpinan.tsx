import ProfilLayout from '@/Layouts/ProfilLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { StrukturPimpinan } from '@/types';

export default function VisiMisi({strukturPimpinans}: {strukturPimpinans: StrukturPimpinan}) {
    return (
        <ProfilLayout>
            <Head title="Profil Lulusan" />
            <motion.div
                className="relative h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-3xl font-bold text-sky-600 mb-6 border-l-4 border-yellow-400 pl-4">Struktur Pimpinan</h2>
                <img
                    src={strukturPimpinans.content}
                    alt="Deskripsi gambar yang relevan"
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </ProfilLayout>
    );
}