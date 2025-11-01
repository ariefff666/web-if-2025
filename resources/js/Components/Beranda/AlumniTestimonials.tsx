// resources/js/Components/Beranda/AlumniTestimonials.tsx

import { useState, useRef } from 'react';

// Impor komponen dan modul Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperCore } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Testimonial } from '@/types';

interface TestimonialProps {
    testimonials: Testimonial[];
}

const SectionHeader = ({ title, swiperRef, isBeginning, isEnd }: { 
    title: string, 
    swiperRef: React.MutableRefObject<SwiperCore | null>,
    isBeginning: boolean,
    isEnd: boolean
}) => (
    <div>
        <div className="flex justify-between items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
            </div>
            {/* Tombol Navigasi Kustom */}
            <div className="flex gap-3">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    disabled={isBeginning}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-sm shadow-md transition disabled:bg-gray-200"
                    aria-label="Sebelumnya"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    disabled={isEnd}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-sm shadow-md transition disabled:bg-gray-200"
                    aria-label="Berikutnya"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
        {/* Garis Dekoratif */}
        <div className="relative w-full h-1 mx-auto my-4 mb-12">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300"></div>
        </div>
    </div>
);


export default function AlumniTestimonials({ testimonials }: TestimonialProps) {
    const paginationRef = useRef<HTMLDivElement | null>(null);
    const swiperRef = useRef<SwiperCore | null>(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <section className="relative py-8 bg-gradient-to-t from-sky-50 from-30% to-white to-100%">
            <div className="container mx-auto px-4 sm:px-6 lg:px-28 py-8 md:py-10 lg:py-8">
                <SectionHeader 
                    title="Apa Kata Alumni" 
                    swiperRef={swiperRef} 
                    isBeginning={isBeginning} 
                    isEnd={isEnd} 
                />

                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    modules={[Pagination, Autoplay, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        el: paginationRef.current,
                    }}
                    // Opsi navigasi di sini dihapus, karena sudah dikontrol manual
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="pb-8"
                >
                    {testimonials.map((t) => (
                        <SwiperSlide key={t.id} className="pb-8 h-auto">
                            <div className="bg-white p-8 rounded-xl shadow-lg h-[28rem] flex flex-col">
                                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-6 text-justify">
                                    "{t.text}"
                                </p>
                                <div className="border-t border-gray-200 pt-6">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-full bg-gray-200 mr-4" />
                                        <div>
                                            <p className="font-bold text-gray-800">{t.name}</p>
                                            <p className="text-xs text-yellow-500">{t.title}</p>
                                            <p className="text-xs text-gray-500 mt-1">{t.major}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div ref={paginationRef} className="relative mt-8 flex justify-center" />
            </div>
        </section>
    );
}