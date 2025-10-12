// resources/js/Components/ContentCards.tsx

import { Link } from '@inertiajs/react';

// Kartu untuk item di grid kiri (Berita/Pengumuman/Prestasi Terbaru)
export const LatestItemCard = ({ item }: { item: any }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
        <Link href={item.url} className="block">
            <div className="relative aspect-video bg-gray-200">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                <h3 className="font-bold text-gray-800 group-hover:text-sky-600 transition-colors line-clamp-2">{item.title}</h3>
                {item.excerpt && (
                    <p className="text-gray-600 text-sm line-clamp-2 mt-2">{item.excerpt}</p>
                )}
                {item.student_name && (
                    <p className="text-sm text-yellow-500 mt-2">Oleh: {item.student_name}</p>
                )}
            </div>
        </Link>
    </div>
);

// Kartu untuk item di list kanan (Berita/Pengumuman/Prestasi Populer)
export const PopularItemCard = ({ item }: { item: any }) => (
    <Link
        href={item.url}
        className="flex rounded-xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow duration-200"
    >
        {/* Gambar di sisi kiri */}
        <div className="w-32 h-28 flex-shrink-0">
            <img
                src={item.imageUrl}
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