import ProfilLayout from '@/Layouts/ProfilLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import React from 'react';

export default function VisiMisi() {
    return (
        <ProfilLayout>
            <Head title="Visi & Misi" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-3xl font-bold text-sky-600 mb-6 border-l-4 border-yellow-400 pl-4">
                    Visi
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                    Menjadi program studi Teknik Informatika yang unggul dan terkemuka dalam pengembangan teknologi informasi yang inovatif dan berdaya saing di tingkat nasional maupun internasional pada tahun 2025.
                </p>

                <h2 className="text-3xl font-bold text-sky-600 mb-6 border-l-4 border-yellow-400 pl-4">
                    Misi
                </h2>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-3">
                    <li>
                        Menyelenggarakan pendidikan tinggi di bidang Teknik Informatika yang berkualitas dan relevan dengan perkembangan industri.
                    </li>
                    <li>
                        Melaksanakan penelitian yang inovatif dan bermanfaat bagi masyarakat dalam bidang teknologi informasi.
                    </li>
                    <li>
                        Melakukan pengabdian kepada masyarakat melalui penerapan teknologi informasi untuk memecahkan masalah-masalah sosial.
                    </li>
                    <li>
                        Menjalin kerjasama dengan industri, pemerintah, dan lembaga pendidikan lainnya untuk meningkatkan kualitas tridharma perguruan tinggi.
                    </li>
                </ul>
            </motion.div>
        </ProfilLayout>
    );
}