// resources/js/Components/Footer/Footer.tsx

import { Link } from '@inertiajs/react';
import { FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const logoPath = '/LOGO_UNSRI_IF.png';

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Kolom 1: Identitas & Media Sosial */}
                    <div className="mb-6 lg:mb-0">
                        <div className="flex items-center mb-4">
                            <img src={logoPath} alt="Logo Teknik Informatika Unsri" className="h-10 mr-3" />
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                            Menjadi program studi unggul dalam inovasi teknologi informasi yang berkontribusi pada pembangunan bangsa.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/hmif.unsri/" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                            <a href="https://www.youtube.com/@hmifunsri/featured" className="text-gray-400 hover:text-white"><FaYoutube /></a>
                        </div>
                    </div>

                    {/* Kolom 2: Navigasi */}
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase">Navigasi</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-white">Beranda</Link></li>
                            <li><Link href="/visi-misi" className="hover:text-white">Profil</Link></li>
                            <li><Link href="/berita" className="hover:text-white">Berita</Link></li>
                            <li><Link href="/kurikulum" className="hover:text-white">Akademik</Link></li>
                            <li><Link href="/panduan-sop/panduan" className="hover:text-white">Panduan & SOP</Link></li>
                        </ul>
                    </div>

                    {/* Kolom 3: Tautan Terkait */}
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase">Tautan Terkait</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="https://unsri.ac.id" target="_blank" className="hover:text-white">Universitas Sriwijaya</a></li>
                            <li><a href="https://ilkom.unsri.ac.id" target="_blank" className="hover:text-white">Fakultas Ilmu Komputer</a></li>
                            <li><a href="https://akademik.unsri.ac.id" target="_blank" className="hover:text-white">Portal Akademik</a></li>
                            <li><a href="https://pmb.unsri.ac.id" target="_blank" className="hover:text-white">Penerimaan Mahasiswa Baru</a></li>
                        </ul>
                    </div>

                    {/* Kolom 4: Kontak */}
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase">Kontak</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                                <span>Jl. Palembang - Prabumulih No.KM. 32, Indralaya, Ogan Ilir, Sumatera Selatan 30662</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-3" />
                                <span>informatika@unsri.ac.id</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Garis Pemisah & Copyright */}
                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Teknik Informatika Universitas Sriwijaya. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}