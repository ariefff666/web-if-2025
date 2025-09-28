import { Head } from '@inertiajs/react';
import GlobalLayout from '@/Layouts/GlobalLayout';
import Hero from '@/Components/Beranda/Hero';

export default function Beranda() {
    return (
        <GlobalLayout>
            <Head title="Beranda" /> {/* yellow */}
            <Hero /> {/* yellow */}
        </GlobalLayout>
    );
}