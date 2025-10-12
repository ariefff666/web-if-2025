// resources/js/Pages/Berita/Show.tsx

import { Head, Link } from '@inertiajs/react';
import GlobalLayout from "@/Layouts/GlobalLayout";
import { NewsAnnouncementsAchievements } from '@/types';

// Komponen baru untuk kartu di sidebar
const PopularItemCard = ({ item }: { item: NewsAnnouncementsAchievements }) => (
    <Link
        href={`/berita/${item.slug}`}
        className="flex rounded-xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow duration-200"
    >
        {/* Gambar di sisi kiri */}
        <div className="w-32 h-28 flex-shrink-0">
            <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-full object-cover"
            />
        </div>

        {/* Konten teks di sisi kanan */}
        <div className="p-4 flex flex-col justify-center">
            <p className="text-xs font-medium text-slate-400 uppercase mb-1">
                {item.date}
            </p>
            <h4 className="text-base font-semibold text-slate-800 leading-snug line-clamp-2">
                {item.title}
            </h4>
        </div>
    </Link>
);

export default function Show({ berita, popularItems }: { berita: NewsAnnouncementsAchievements, popularItems: NewsAnnouncementsAchievements[] }) {
    // Menentukan judul sidebar berdasarkan kategori berita saat ini
    const sidebarTitle = `Populer di ${berita.category.charAt(0).toUpperCase() + berita.category.slice(1)}`;

    return (
        <GlobalLayout>
            <Head title={berita.title} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-32 py-12">
                {/* Layout utama dengan 2 kolom */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    
                    {/* Kolom Kiri: Konten Utama Berita (mengambil 2 bagian) */}
                    <article className="lg:col-span-2 rounded-lg border p-4 bg-gray-50 shadow-inner">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            {berita.title}
                        </h1>
                        <p className="text-gray-500 mb-6">
                            Dipublikasikan pada {berita.date}
                        </p>
                        {berita.image_url && (
                            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-8">
                                <img src={berita.image_url} alt={berita.title} className="w-full h-full object-cover" />
                            </div>
                        )}
                        {berita.student_name && (
                            <p className="text-sm text-yellow-500 mb-4">Mahasiswa Berprestasi: {berita.student_name}</p>
                        )}
                        <div 
                            className="prose lg:prose-xl max-w-none text-justify"
                            dangerouslySetInnerHTML={{ __html: berita.body }}
                        />
                    </article>

                    {/* Kolom Kanan: Sidebar (mengambil 1 bagian) */}
                    <aside className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <div className="flex-shrink-0 mr-4 sm:mr-6">
                            {/* Ukuran teks diubah menjadi responsif */}
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 whitespace-nowrap">{sidebarTitle}</h2>
                                <div className={`h-1 bg-sky-600 mt-2 rounded w-full`}></div>
                            </div>
                        <div className="w-full h-px bg-gray-300"></div>
                        </div>
                        <div className="bg-gray-100 flex flex-col space-y-2 border rounded-lg shadow-sm p-4 shadow-inner">
                            {popularItems.length > 0 ? (
                                popularItems.map(item => <PopularItemCard key={item.id} item={item} />)
                            ) : (
                                <p className="text-gray-500">Belum ada konten populer.</p>
                            )}
                        </div>
                    </aside>

                </div>
            </div>
        </GlobalLayout>
    );
}