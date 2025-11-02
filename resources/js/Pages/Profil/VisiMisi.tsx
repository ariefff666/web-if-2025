import ProfilLayout from '@/Layouts/ProfilLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Visi, Misi } from '@/types';

export default function VisiMisi({title, visis, misis}: {title: string,visis: Visi, misis: Misi[]}) {
    return (
        <ProfilLayout>
            <Head title={title} />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-3xl font-bold text-sky-600 mb-6 border-l-4 border-yellow-400 pl-4">
                    Visi
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8 text-justify">
                    {visis.content}
                </p>

                <h2 className="text-3xl font-bold text-sky-600 mb-6 border-l-4 border-yellow-400 pl-4">
                    Misi
                </h2>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-3">
                    {misis.map((misi, index) => (
                        <li key={index} className='text-justify'>{misi.content}</li>
                    ))}
                </ul>
            </motion.div>
        </ProfilLayout>
    );
}