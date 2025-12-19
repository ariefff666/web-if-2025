import React from 'react';
import { Link } from '@inertiajs/react';
import { FaArrowRight } from 'react-icons/fa';
import { HeroData } from '@/types';

const InfoLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link
        href={href}
        className="relative overflow-hidden bg-white/90 text-gray-800 font-semibold p-4 rounded-lg flex justify-between items-center w-full hover:text-yellow-600 transition-colors duration-300 shadow 
                   before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-yellow-500 before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:origin-center"
    >
        <span className="relative z-10">{children}</span>
        <FaArrowRight className="relative z-10" />
    </Link>
);

export default function Hero({ heroData }: { heroData: HeroData }) {
    return (
        <section className="relative w-full h-auto sm:h-[85vh] bg-sky-600">

            <img
                src={heroData.hero_image_path || ''}
                alt="Gedung Fakultas Teknik Informatika"
                className="w-full sm:absolute sm:inset-0 sm:h-full object-cover"
            />

            <div className="relative sm:absolute sm:inset-0 sm:flex sm:items-end">
                <div className="w-full bg-sky-600 sm:bg-sky-600/85">
                    <div className="container mx-auto w-full px-4 sm:px-6 lg:px-32 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            <div className="md:col-span-2 text-white">
                                <h2 className="text-3xl sm:text-4xl font-bold mb-4">{heroData.title}</h2>
                                <p className="mb-4 text-gray-200 leading-relaxed text-justify">
                                    {heroData.paragraph_1}
                                </p>
                                <p className="text-gray-200 leading-relaxed text-justify">
                                    {heroData.paragraph_2}
                                </p>
                            </div>

                            <div className="md:col-span-1 flex flex-col space-y-4">
                                <InfoLink href="/profil-lulusan">Profil Lulusan</InfoLink>
                                <InfoLink href="/kurikulum">Kurikulum Akademik</InfoLink>
                                <InfoLink href="/panduan-sop/sop">SOP MBKM</InfoLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}