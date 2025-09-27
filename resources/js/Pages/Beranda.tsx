import { Head } from '@inertiajs/react';
import GlobalLayout from '@/Layouts/GlobalLayout';

export default function Beranda() {
    return (
        <GlobalLayout>
            <Head title="Beranda" /> {/* yellow */}
            <div className="p-6 h-lvh">
                <h1 className="text-2xl font-bold">Ini Halaman Beranda</h1>
            </div>
        </GlobalLayout>
    );
}