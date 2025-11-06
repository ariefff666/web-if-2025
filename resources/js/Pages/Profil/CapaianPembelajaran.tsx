import ProfilLayout from '@/Layouts/ProfilLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { CPL } from '@/types';

export default function VisiMisi({ cpl }: { cpl: CPL[] }) {
    const grouped = {
        S: cpl.filter(item => item.kategori === 'S'),
        P: cpl.filter(item => item.kategori === 'P'),
        KU: cpl.filter(item => item.kategori === 'KU'),
        KK: cpl.filter(item => item.kategori === 'KK'),
    };

    return (
        <ProfilLayout>
            <Head title="CPL" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-3xl font-bold text-sky-600 mb-6 border-l-4 border-yellow-400 pl-4">
                    Capaian Pembelajaran Lulusan (CPL)
                </h2>

                {/* Aspek 1: Sikap dan Tata Nilai */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        1. Sikap dan Tata Nilai (S)
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        {grouped.S.map((item) => (
                            <li key={item.id}>
                                <strong>{item.kode}:</strong> {item.deskripsi}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Aspek 2: Pengetahuan */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        2. Pengetahuan (P)
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        {grouped.P.map((item) => (
                            <li key={item.id}>
                                <strong>{item.kode}:</strong> {item.deskripsi}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Aspek 3: Keterampilan */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        3. Keterampilan
                    </h2>

                    {/* Keterampilan Umum */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">
                            a. Keterampilan Umum (KU)
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                            {grouped.KU.map((item) => (
                                <li key={item.id}>
                                    <strong>{item.kode}:</strong> {item.deskripsi}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Keterampilan Khusus */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            b. Keterampilan Khusus (KK)
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                            {grouped.KK.map((item) => (
                                <li key={item.id}>
                                    <strong>{item.kode}:</strong> {item.deskripsi}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </motion.div>
        </ProfilLayout>
    );
}
