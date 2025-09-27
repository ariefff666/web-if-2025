import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function TopHeader() {
    return (
        <header className="bg-sky-600 text-white text-sm">
            <div className="container mx-auto sm:px-6 xl:px-52 py-2 flex justify-between items-center">
                {/* Bagian Kiri: Info Kontak */}
                <div className="flex items-center space-x-6">
                    <a href="tel:+62711379249" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
                        <FaPhoneAlt className="text-yellow-500" />
                        <span>+62711379249</span>
                    </a>
                    <a href="mailto:humas@ilkom.unsri.ac.id" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
                        <FaEnvelope />
                        <span>humas@ilkom.unsri.ac.id</span>
                    </a>
                </div>

                {/* Bagian Kanan: Ikon Sosial Media */}
                <div className="flex items-center space-x-4">
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-yellow-400 transition-colors">
                        <FaYoutube size={18} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-400 transition-colors">
                        <FaInstagram size={18} />
                    </a>
                </div>
            </div>
        </header>
    );
}