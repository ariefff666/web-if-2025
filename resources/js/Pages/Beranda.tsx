import { Head } from '@inertiajs/react';
import GlobalLayout from '@/Layouts/GlobalLayout';
import Hero from '@/Components/Beranda/Hero';
import WelcomeMessage from '@/Components/Beranda/WelcomeMessage';
import NewsAndUpdates from '@/Components/Beranda/NewsAndUpdates';
import AlumniTestimonials from '@/Components/Beranda/AlumniTestimonials';
import LecturerSection from '@/Components/Beranda/LecturerSection';
import Facilities from '@/Components/Beranda/Facilities';
import { Testimonial, Lecturer } from '@/types';

export default function Beranda({testimonials, lecturers}: {testimonials: Testimonial[], lecturers: Lecturer[]}) {
    return (
        <GlobalLayout>
            <Head title="Beranda" /> {/* yellow */}
            <Hero />
            <WelcomeMessage />
            <NewsAndUpdates />
            <AlumniTestimonials testimonials={testimonials || []}/>
            <LecturerSection lecturers={lecturers || []} />
            <Facilities />
        </GlobalLayout>
    );
}