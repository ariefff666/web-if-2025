import ApplicationLogo from '@/Components/ApplicationLogo';
import Navbar from '@/Components/GlobalNavbar/Navbar';
import TopHeader from '@/Components/GlobalNavbar/TopHeader';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function GlobalLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <TopHeader />
            <Navbar />
            {children}
        </div>
    );
}
