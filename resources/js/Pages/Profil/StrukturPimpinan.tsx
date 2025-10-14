import ProfilLayout from '@/Layouts/ProfilLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function VisiMisi() {
    return (
        <ProfilLayout>
            <Head title="Profil Lulusan" />
            <motion.div
                className="relative h-screen" // Pastikan div ini punya tinggi, contoh: h-screen (tinggi layar penuh)
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <img
                    src="/storage/struktur-pimpinan/struktur-pimpinan.png" // Ganti dengan path gambar Anda
                    alt="Deskripsi gambar yang relevan"
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </ProfilLayout>
    );
}