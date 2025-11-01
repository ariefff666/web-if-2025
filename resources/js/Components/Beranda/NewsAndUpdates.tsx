import { Link } from '@inertiajs/react';
import { FaCalendarAlt, FaBullhorn, FaTrophy } from 'react-icons/fa';

const dummyNews = [
    {
        id: 1,
        title: "Jurnal Universitas Sriwijaya Telah Terakreditasi SINTA",
        date: "Senin, 24 Maret 2025",
        imageUrl: "/storage/berita/jurnal.jpg",
        category: "Akademik",
        excerpt: "Sebuah pencapaian baru bagi dunia akademik universitas dengan terakreditasinya jurnal ilmiah oleh SINTA..."
    },
    {
        id: 2,
        title: "Seminar 'Peluang Cloud Engineer di Era Cloud'",
        date: "Selasa, 21 Mei 2025",
        imageUrl: "/storage/berita/pelatihan1_arduino.jpg",
        category: "Seminar",
        excerpt: "Jurusan Teknik Informatika sukses menggelar seminar nasional membahas prospek karir di bidang cloud computing..."
    },
];

const dummyAnnouncements = [
    { id: 1, text: "Pendaftaran Program Hibah Penelitian BIMA telah dibuka.", date: "29 Oktober 2025" },
    { id: 2, text: "Jadwal Ujian Akhir Semester Ganjil 2025/2026.", date: "25 Oktober 2025" },
    { id: 3, text: "Batas akhir pengisian KRS semester genap.", date: "20 Oktober 2025" },
];

const dummyAchievements = [
    { id: 1, text: "Juara 1 Lomba Competitive Programming tingkat Nasional.", student: "Ahmad Farhan R." },
    { id: 2, text: "Medali Emas pada kompetisi UI/UX Design Internasional.", student: "Sheryl Jesselyn" },
    { id: 3, text: "Finalis Gemastik XVI cabang Keamanan Siber.", student: "Grimaldie William" },
];

const SectionHeader = ({ title }: { title: string }) => {
    return (
        <div className="flex items-center mb-6">
            <div className="flex-shrink-0 mr-4 sm:mr-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 whitespace-nowrap">{title}</h2>
                <div className={`h-1 bg-sky-600 mt-2 rounded w-full`}></div>
            </div>
            <div className="w-full h-px bg-gray-300"></div>
        </div>
    );
};

const EmptyState = ({ message }: { message: string }) => (
    <div className="text-center py-12 px-6 bg-gray-50 rounded-lg border">
        <p className="text-gray-500">{message}</p>
    </div>
);

const NewsCard = ({ news }: { news: any }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
        <div className="relative">
            <img src={news.imageUrl} alt={news.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
            <span className="absolute top-4 left-4 bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded">{news.category}</span>
        </div>
        <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">{news.date}</p>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-400 transition-colors">
                <Link href={`/berita/${news.id}`}>{news.title}</Link>
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2">{news.excerpt}</p>
        </div>
    </div>
);

const AnnouncementCard = ({ announcement }: { announcement: any }) => (
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 border rounded-lg bg-white shadow-sm transition-colors">
        <div className="flex-shrink-0 bg-sky-100 p-3 rounded-full">
            <FaBullhorn className="text-sky-600" />
        </div>
        <div>
            <p className="text-gray-700">{announcement.text}</p>
            <p className="text-xs text-gray-500 mt-1">{announcement.date}</p>
        </div>
    </div>
);

const AchievementCard = ({ achievement }: { achievement: any }) => (
    <div className="flex items-center space-x-4 p-4 border rounded-lg bg-white shadow-sm">
        <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full">
            <FaTrophy className="text-yellow-500" />
        </div>
        <div>
            <p className="font-semibold text-gray-800">{achievement.text}</p>
            <p className="text-sm text-yellow-500">Oleh: {achievement.student}</p>
        </div>
    </div>
);

export default function NewsAndUpdates() {
    return (
        <section className="bg-white py-8">
            {/* Padding horizontal diubah menjadi responsif */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                    
                    {/* --- Kolom Berita --- */}
                    <div className="lg:col-span-2">
                        <SectionHeader title="Berita" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-100 rounded-lg border p-4 shadow-inner">
                            {dummyNews.length > 0 ? (
                                dummyNews.map(news => <NewsCard key={news.id} news={news} />)
                            ) : (
                                <div className="sm:col-span-2">
                                    <EmptyState message="Belum ada berita untuk saat ini." />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* --- Kolom Pengumuman --- */}
                    <div className="lg:col-span-1">
                        <SectionHeader title="Pengumuman" />
                        <div className="bg-gray-100 flex flex-col space-y-2 border rounded-lg shadow-sm p-4 shadow-inner">
                             {dummyAnnouncements.length > 0 ? (
                                dummyAnnouncements.map(ann => <AnnouncementCard key={ann.id} announcement={ann} />)
                            ) : (
                                <EmptyState message="Tidak ada pengumuman baru." />
                            )}
                        </div>
                    </div>

                    {/* --- Baris Prestasi Mahasiswa --- */}
                    <div className="lg:col-span-3">
                        <SectionHeader title="Prestasi Mahasiswa" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border rounded-lg shadow-sm p-4 bg-gray-100 shadow-inner">
                             {dummyAchievements.length > 0 ? (
                                dummyAchievements.map(ach => <AchievementCard key={ach.id} achievement={ach} />)
                            ) : (
                                <div className="md:col-span-2">
                                    <EmptyState message="Belum ada prestasi yang tercatat." />
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}