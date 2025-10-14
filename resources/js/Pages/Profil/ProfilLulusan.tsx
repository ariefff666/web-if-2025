import ProfilLayout from '@/Layouts/ProfilLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import React from 'react';

export default function VisiMisi() {
    return (
        <ProfilLayout>
            <Head title="Profil Lulusan" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-3xl font-bold text-sky-600 mb-6 border-l-4 border-yellow-400 pl-4">
                    Profil Lulusan
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Berdasarkan visi dan misi, Program Studi S1 Teknik Informatika bertujuan menghasilkan lulusan yang mempunyai profil sebagai berikut:
                </p>

                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-3">
                    <li>
                        <strong>Software Engineer / Software Developer: </strong>Menghasilkan tenaga ahli yang profesional di bidang Ilmu Komputer dan Rekayasa Perangkat Lunak.
                    </li>
                    <li>
                        <strong>Analis Sistem (Systems Analyst): </strong>Menghasilkan tenaga ahli yang profesional di bidang Analis Sistem.
                    </li>
                    <li>
                        <strong>Peneliti / Ilmuwan Komputer (Researcher / Computer Scientist): </strong>Menghasilkan tenaga ahli yang profesional di bidang Peneliti / Ilmuwan Komputer.
                    </li>
                    <li>
                        <strong>Spesialis Jaringan dan Keamanan (Network & Security Specialist): </strong>Menghasilkan tenaga ahli yang profesional di bidang Spesialis Jaringan dan Keamanan.
                    </li>
                </ul>
            </motion.div>
        </ProfilLayout>
    );
}