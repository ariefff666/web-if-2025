// resources/js/Pages/Berita.tsx

import { Head } from '@inertiajs/react';
import GlobalLayout from "@/Layouts/GlobalLayout";
import ContentCategorySection from '@/Components/Berita/ContentCategorySection';

// --- DATA DUMMY (Nantinya akan diganti dengan data dari controller) ---
const dummyNews = {
    latest: [
        { id: 1, title: 'Jurnal Universitas Telah Terakreditasi SINTA', date: '24 Maret 2025', imageUrl: '/storage/berita/jurnal.jpg', url: '#' },
        { id: 2, title: 'Seminar Peluang Cloud Engineer di Era Cloud', date: '21 Mei 2025', imageUrl: '/storage/berita/jurnal.jpg', url: '#' },
        { id: 3, title: 'Kerja Sama Industri dengan Perusahaan Teknologi Ternama', date: '18 April 2025', imageUrl: '/storage/berita/jurnal.jpg', url: '#' },
        { id: 4, title: 'Jurnal Universitas Telah Terakreditasi SINTA', date: '24 Maret 2025', imageUrl: '/storage/berita/jurnal.jpg', url: '#' },
        { id: 5, title: 'Seminar Peluang Cloud Engineer di Era Cloud', date: '21 Mei 2025', imageUrl: '/storage/berita/jurnal.jpg', url: '#' },
        { id: 6, title: 'Kerja Sama Industri dengan Perusahaan Teknologi Ternama', date: '18 April 2025', imageUrl: '/storage/berita/jurnal.jpg', url: '#' },
        { id: 7, title: 'Seminar Peluang Cloud Engineer di Era Cloud', date: '21 Mei 2025', imageUrl: '/storage/berita/jurnal.jpg', url: '#' },
        { id: 8, title: 'Kerja Sama Industri dengan Perusahaan Teknologi Ternama', date: '18 April 2025', imageUrl: '/storage/berita/jurnal.jpg', url: '#' },
    ],
    popular: [
        { id: 10, title: 'Panduan Lengkap Meraih Beasiswa Unggulan', date: '10 Jan 2025', imageUrl: '/storage/berita/jurnal.jpg', url: '#' },
        { id: 11, title: 'Tips & Trik Lulus Ujian Sertifikasi Internasional', date: '15 Feb 2025', imageUrl: '/storage/berita/jurnal.jpg', url: '#' },
        { id: 12, title: 'Panduan Lengkap Meraih Beasiswa Unggulan', date: '10 Jan 2025', imageUrl: '/storage/berita/jurnal.jpg', url: '#' },
        { id: 13, title: 'Tips & Trik Lulus Ujian Sertifikasi Internasional', date: '15 Feb 2025', imageUrl: '/storage/berita/jurnal.jpg', url: '#' },
    ]
};

const dummyAnnouncements = {
    latest: [
        { id: 4, title: 'Jadwal Ujian Akhir Semester Ganjil 2025/2026', date: '30 Oktober 2025', imageUrl: '/images/announcements/ann-1.jpg', url: '#' },
        { id: 5, title: 'Batas Akhir Pengisian KRS Semester Genap', date: '28 Oktober 2025', imageUrl: '/images/announcements/ann-2.jpg', url: '#' },
    ],
    popular: [
        { id: 12, title: 'Kalender Akademik Tahun 2025-2026', date: '01 Sep 2025', imageUrl: '/images/announcements/popular-ann-1.jpg', url: '#' },
    ]
};

const dummyAchievements = {
    latest: [
        { id: 6, title: 'Juara 1 Lomba Competitive Programming Nasional', date: '15 September 2025', imageUrl: '/images/achievements/ach-1.jpg', url: '#' },
        { id: 7, title: 'Medali Emas pada Kompetisi UI/UX Design Internasional', date: '10 September 2025', imageUrl: '/images/achievements/ach-2.jpg', url: '#' },
    ],
    popular: [] // Contoh data populer kosong
};

export default function Berita() {
    return (
        <GlobalLayout>
            <Head title="Berita & Informasi" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-32 py-12">
                <ContentCategorySection 
                    categoryTitle="Berita"
                    latestItems={dummyNews.latest}
                    popularItems={dummyNews.popular}
                />
                <ContentCategorySection 
                    categoryTitle="Pengumuman"
                    latestItems={dummyAnnouncements.latest}
                    popularItems={dummyAnnouncements.popular}
                />
                <ContentCategorySection 
                    categoryTitle="Prestasi"
                    latestItems={dummyAchievements.latest}
                    popularItems={dummyAchievements.popular}
                />
            </div>
        </GlobalLayout>
    );
}