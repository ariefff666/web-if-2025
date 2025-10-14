import ProfilLayout from '@/Layouts/ProfilLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function VisiMisi() {
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
                    <h2 className="text-2xl font-semibold mb-4">1. Sikap dan Tata Nilai (S)</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>S1:</strong> Bertaqwa kepada Tuhan Yang Maha Esa dan mampu menunjukkan sikap religius;</li>
                        <li><strong>S2:</strong> Menjunjung tinggi nilai kemanusiaan dalam menjalankan tugas berdasarkan agama, moral, dan etika;</li>
                        <li><strong>S3:</strong> Berkontribusi dalam peningkatan mutu kehidupan bermasyarakat, berbangsa, bernegara, dan kemajuan peradaban berdasarkan Pancasila;</li>
                        <li><strong>S4:</strong> Berperan sebagai warga negara yang bangga dan cinta tanah air, memiliki nasionalisme serta rasa tanggung jawab pada negara dan bangsa;</li>
                        <li><strong>S5:</strong> Menghargai keanekaragaman budaya, pandangan, agama, dan kepercayaan, serta pendapat atau temuan orisinal orang lain;</li>
                        <li><strong>S6:</strong> Bekerjasama dan memiliki kepekaan sosial serta kepedulian terhadap masyarakat dan lingkungan;</li>
                        <li><strong>S7:</strong> Taat hukum dan disiplin dalam kehidupan bermasyarakat dan bernegara;</li>
                        <li><strong>S8:</strong> Menginternalisasi nilai, norma, dan etik akademik;</li>
                        <li><strong>S9:</strong> Menunjukkan sikap bertanggung jawab atas pekerjaan di bidang keahliannya secara mandiri;</li>
                        <li><strong>S10:</strong> Menginternalisasi semangat kemandirian, kejuangan, dan kewirausahaan;</li>
                    </ul>
                </section>

                {/* Aspek 2: Pengetahuan */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">2. Pengetahuan (P)</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>P1:</strong> Mampu menguasai konsep manajemen layanan sistem dan teknologi informasi yang komprehensif termasuk penanganan risiko, keamanan dan audit sistem informasi.</li>
                        <li><strong>P2:</strong> Mampu menguasai konsep teknologi terkini sebagai solusi bisnis.</li>
                        <li><strong>P3:</strong> Mampu menguasai konsep pembuatan program komputer.</li>
                        <li><strong>P4:</strong> Mampu menguasai konsep komunikasi, mempengaruhi antar personal.</li>
                        <li><strong>P5:</strong> Mampu menguasai konsep pemodelan data dan cara menganalisis hasilnya dalam pendukung pengambilan keputusan.</li>
                        <li><strong>P6:</strong> Mampu menguasai konsep pengembangan sistem informasi.</li>
                        <li><strong>P7:</strong> Mampu menguasai konsep cara menganalisis kebutuhan bisnis.</li>
                        <li><strong>P8:</strong> Mampu menguasai tren bisnis model.</li>
                        <li><strong>P9:</strong> Mampu menguasai konsep kerangka kerja pemodelan bisnis.</li>
                    </ul>
                </section>

                {/* Aspek 3: Keterampilan */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">3. Keterampilan</h2>

                    {/* Keterampilan Umum */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">a. Keterampilan Umum (KU)</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>KU1:</strong> Mampu mengembangkan pemikiran logis, kritis, sistematis, dan kreatif melalui penelitian ilmiah...</li>
                            <li><strong>KU2:</strong> Mampu melakukan validasi akademik atau kajian sesuai bidang keahliannya dalam menyelesaikan masalah di masyarakat atau industri...</li>
                            <li><strong>KU3:</strong> Mampu menyusun ide, hasil pemikiran, dan argumen saintifik secara bertanggung jawab...</li>
                            <li><strong>KU4:</strong> Mampu mengidentifikasi bidang keilmuan yang menjadi obyek penelitiannya...</li>
                            <li><strong>KU5:</strong> Mampu mengambil keputusan dalam konteks menyelesaikan masalah pengembangan ilmu pengetahuan...</li>
                            <li><strong>KU6:</strong> Mampu mengelola, mengembangkan dan memelihara jaringan kerja dengan kolega, sejawat, dan komunitas penelitian.</li>
                            <li><strong>KU7:</strong> Mampu meningkatkan kapasitas pembelajaran secara mandiri.</li>
                            <li><strong>KU8:</strong> Mampu mendokumentasikan, menyimpan, mengamankan, dan menemukan kembali data hasil penelitian...</li>
                        </ul>
                    </div>

                    {/* Keterampilan Khusus */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">b. Keterampilan Khusus (KK)</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>KK1:</strong> Mampu mengimplementasikan manajemen layanan sistem dan teknologi informasi...</li>
                            <li><strong>KK2:</strong> Mampu menggunakan teknologi terkini sebagai solusi bisnis.</li>
                            <li><strong>KK3:</strong> Mampu membuat program komputer.</li>
                            <li><strong>KK4:</strong> Mampu membangun komunikasi, mempengaruhi antar personal.</li>
                            <li><strong>KK5:</strong> Mampu merancang pemodelan data dan menganalisis hasilnya dalam pendukung pengambilan keputusan.</li>
                            <li><strong>KK6:</strong> Mampu menerapkan konsep pengembangan sistem informasi.</li>
                            <li><strong>KK7:</strong> Mampu menganalisis kebutuhan bisnis.</li>
                            <li><strong>KK8:</strong> Mampu membandingkan tren bisnis model.</li>
                            <li><strong>KK9:</strong> Mampu menggunakan kerangka kerja pemodelan bisnis.</li>
                        </ul>
                    </div>
                </section>
            </motion.div>
        </ProfilLayout>
    );
}
