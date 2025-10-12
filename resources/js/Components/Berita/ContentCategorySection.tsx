// resources/js/Components/ContentCategorySection.tsx

import { NewsAnnouncementsAchievements } from '@/types';
import { LatestItemCard, PopularItemCard } from './ContentCards';

const SectionHeader = ({ title }: { title: string }) => {
    return (
        <div className="flex items-center mb-6">
            <div className="flex-shrink-0 mr-4 sm:mr-6">
                {/* Ukuran teks diubah menjadi responsif */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 whitespace-nowrap">{title}</h2>
                <div className={`h-1 bg-sky-600 mt-2 rounded w-full`}></div>
            </div>
            <div className="w-full h-px bg-gray-300"></div>
        </div>
    );
};

interface ContentCategorySectionProps {
    categoryTitle: string;
    latestItems: NewsAnnouncementsAchievements[];
    popularItems: NewsAnnouncementsAchievements[];
}

export default function ContentCategorySection({ categoryTitle, latestItems, popularItems }: ContentCategorySectionProps) {
    return (
        <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Kolom Kiri: Konten Terbaru */}
                <div className="lg:col-span-2">
                    <SectionHeader title={`${categoryTitle} Terbaru`} />
                    <div className="bg-gray-100 shadow-inner rounded-lg border p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[34rem] overflow-y-auto scrollbar-auto pr-2">
                        {latestItems.length > 0 ? (
                            latestItems.map(item => <LatestItemCard key={item.id} item={item} />)
                        ) : (
                            <p className="sm:col-span-2 md:col-span-3 text-gray-500">Belum ada konten terbaru.</p>
                        )}
                    </div>
                </div>

                {/* Kolom Kanan: Konten Populer */}
                <div className="lg:col-span-1">
                    <SectionHeader title={`${categoryTitle} Populer`} />
                    <div className="bg-gray-100 flex flex-col space-y-2 border rounded-lg shadow-sm p-4 shadow-inner">
                        {popularItems.length > 0 ? (
                            popularItems.map(item => <PopularItemCard key={item.id} item={item} />)
                        ) : (
                            <p className="text-gray-500">Belum ada konten populer.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}