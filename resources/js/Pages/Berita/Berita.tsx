import { Head } from '@inertiajs/react';
import GlobalLayout from "@/Layouts/GlobalLayout";
import ContentCategorySection from '@/Components/Berita/ContentCategorySection';
import { NewsAnnouncementsAchievements } from '@/types';

interface CategoryData {
    latest: NewsAnnouncementsAchievements[];
    popular: NewsAnnouncementsAchievements[];
}

interface BeritaPageProps {
    news: CategoryData;
    announcements: CategoryData;
    achievements: CategoryData;
}

export default function Berita({news, announcements, achievements}: BeritaPageProps) {
    return (
        <GlobalLayout>
            <Head title="Berita & Informasi" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-32 py-12">
                <ContentCategorySection 
                    categoryTitle="Berita"
                    latestItems={news.latest}
                    popularItems={news.popular}
                />
                <ContentCategorySection 
                    categoryTitle="Pengumuman"
                    latestItems={announcements.latest}
                    popularItems={announcements.popular}
                />
                <ContentCategorySection 
                    categoryTitle="Prestasi"
                    latestItems={achievements.latest}
                    popularItems={achievements.popular}
                />
            </div>
        </GlobalLayout>
    );
}