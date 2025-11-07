// 📁 resources/js/Layouts/PanduanSopLayout.tsx

import { ReactNode } from 'react';
import { Link, usePage } from '@inertiajs/react'; // Pastikan Link diimpor

// --- TAMBAHKAN BAGIAN INI ---

// 1. Definisikan tipe data untuk satu item navigasi
//    (Ini harus cocok dengan 'AkademikItem' di Show.tsx)
interface NavigationItem {
    title: string;
    slug: string;
}

// 2. Definisikan semua props yang diterima oleh Layout ini
interface PanduanSopLayoutProps {
    children: ReactNode; // 'children' adalah konten halaman (PDF viewer, dll)
    navigationItems: NavigationItem[]; // Ini prop yang kita kirim dari Show.tsx
}

// --- AKHIR TAMBAHAN ---


// 3. Ubah definisi fungsi Anda untuk menerima props
export default function PanduanSopLayout({ children, navigationItems }: PanduanSopLayoutProps) {
    
    // (Opsional) Dapatkan URL saat ini untuk menandai link yang aktif
    const { url } = usePage();

    return (
        // (Saya asumsikan struktur layout Anda seperti ini)
        <div className="flex">
            
            {/* SIDEBAR NAVIGASI */}
            <aside className="w-64 p-4">
                <nav>
                    <ul>
                        {/* 4. Ini adalah baris (mungkin baris 47) yang menyebabkan error 'map' sebelumnya.
                             Sekarang kita gunakan 'navigationItems' yang sudah didefinisikan.
                             Kita juga tambahkan (|| []) untuk keamanan jika array-nya kosong.
                        */}
                        {(navigationItems || []).map((item) => {
                            // Tentukan rute berdasarkan slug. 
                            // Misal slug "jadwal" akan menjadi rute "akademik.jadwal"
                            const routeName = `akademik.${item.slug}`;
                            
                            // Cek apakah link ini sedang aktif
                            const isActive = url.startsWith(`/akademik/${item.slug}`);

                            return (
                                <li key={item.slug}>
                                    <Link
                                        // Gunakan helper route() dari Ziggy/Laravel
                                        // @ts-ignore 
                                        href={route(routeName)}
                                        className={isActive ? 'font-bold text-sky-600' : ''}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>

            {/* KONTEN UTAMA HALAMAN */}
            <main className="flex-1 p-6">
                {/* 'children' akan merender <div className="w-full">...</div> dari Show.tsx */}
                {children}
            </main>

        </div>
    );
}