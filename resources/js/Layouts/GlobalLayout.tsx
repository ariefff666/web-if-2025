import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import TopHeader from '@/Components/Navbar/TopHeader';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function GlobalLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <TopHeader />
            <Navbar />
            <main className=" sm:pt-0"> {/* Memberi jarak dari atas */}
                {children}
            </main>
            <Footer />
        </div>
    );
}
