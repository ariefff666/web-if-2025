import { Head } from '@inertiajs/react';
import GlobalLayout from '@/Layouts/GlobalLayout';
import Hero from '@/Components/Beranda/Hero';
import WelcomeMessage from '@/Components/Beranda/WelcomeMessage';
import NewsAndUpdates from '@/Components/Beranda/NewsAndUpdates';
import AlumniTestimonials from '@/Components/Beranda/AlumniTestimonials';
import LecturerSection from '@/Components/Beranda/LecturerSection';
import Facilities from '@/Components/Beranda/Facilities';
import { Testimonial, Lecturer, HeroData, WelcomeMessageData, NewsAnnouncementsAchievements } from '@/types';

export default function Beranda({ testimonials, lecturers, heroData, welcomeMessageData, news, announcements, achievements }: { 
    testimonials: Testimonial[], 
    lecturers: Lecturer[],
    heroData: HeroData, // (Sudah diperbaiki dari sebelumnya)
    welcomeMessageData: WelcomeMessageData, // (Sudah diperbaiki dari sebelumnya)
    news: NewsAnnouncementsAchievements[], 
    announcements: NewsAnnouncementsAchievements[], 
    achievements: NewsAnnouncementsAchievements[] 
}) {
    return (
        <GlobalLayout>
            <Head title="Beranda" /> {/* yellow */}
            <Hero heroData={heroData}/>
            <WelcomeMessage welcomeMessageData={welcomeMessageData}/>
            <NewsAndUpdates newsData={{ news, announcements, achievements }}/>
            <AlumniTestimonials testimonials={testimonials || []}/>
            <LecturerSection lecturers={lecturers || []} />
            <Facilities />
        </GlobalLayout>
    );
}