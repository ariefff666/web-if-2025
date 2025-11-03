import ProfilLayout from '@/Layouts/ProfilLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ProfilLulusans } from '@/types';

export default function VisiMisi({profilLulusans}: {profilLulusans: ProfilLulusans[]}) {
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
                    {profilLulusans.map((profilLulusan, index) => (
                        <li key={index} className='text-justify'>{profilLulusan.content}</li>
                    ))}
                </ul>
            </motion.div>
        </ProfilLayout>
    );
}