import ApplicationLogo from '@/Components/ApplicationLogo';
import Navbar from '@/Components/Navbar';
import TopHeader from '@/Components/TopHeader';
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
