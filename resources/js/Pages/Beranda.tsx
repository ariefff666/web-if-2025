import { Head } from '@inertiajs/react';
import GlobalLayout from '@/Layouts/GlobalLayout';
import Hero from '@/Components/Beranda/Hero';
import VideoProfile from '@/Components/Beranda/VideoProfile';
import WelcomeMessage from '@/Components/Beranda/WelcomeMessage';
import NewsAndUpdates from '@/Components/Beranda/NewsAndUpdates';
import AlumniTestimonials from '@/Components/Beranda/AlumniTestimonials';

export default function Beranda() {
    return (
        <GlobalLayout>
            <Head title="Beranda" /> {/* yellow */}
            <Hero />
            <VideoProfile />
            <WelcomeMessage />
            <NewsAndUpdates />
            <AlumniTestimonials />
        </GlobalLayout>
    );
}