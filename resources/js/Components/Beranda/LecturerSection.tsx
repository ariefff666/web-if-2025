import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Lecturer } from "@/types";
import { Link } from "@inertiajs/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface LecturerProps {
    lecturers: Lecturer[];
}

const SectionHeader = ({ title }: { title: string }) => (
    <div>
        <div className="flex justify-between items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
            </div>
            {/* Tombol Navigasi Kustom */}
            <div className="flex gap-3">
                <button
                    className="swiper-button-prev-custom bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-sm shadow-md transition disabled:bg-gray-200"
                    aria-label="Sebelumnya"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    className="swiper-button-next-custom bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-sm shadow-md transition disabled:bg-gray-200"
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

const LecturerCard = ({ name, title, photoUrl }: { name: string; title: string; photoUrl: string; }) => (
    <div className="flex flex-col bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-[28rem]">
        <div className="flex flex-col gap-4">
            <img
                src={photoUrl}
                alt={`Foto ${name}`}
                className="w-full h-72 object-cover object-center rounded-xl"
            />
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <h3 className="text-lg font-bold border-l-4 border-gray-400 pl-3">
                    {name}
                </h3>
            </div>
            <p className="text-yellow-500 text-sm leading-relaxed">{title}</p>
        </div>
    </div>
);

export default function LecturerSection({ lecturers }: LecturerProps) {
    const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);
    const swiperRef = useRef<any>(null);

    return (
        <section className="bg-gradient-to-b from-sky-50 from-0% to-white to-100%">
            <div className="py-8 rounded-2xl container px-4 sm:px-6 lg:px-28 mx-auto">
                <SectionHeader title="Dosen Pengajar" />
                
                <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true, el: paginationEl }}
                    navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom",
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className="pb-8"
                >
                    {lecturers.map((lecturer, index) => (
                        <SwiperSlide key={index} className="pb-8 h-auto">
                            <LecturerCard
                                name={lecturer.name}
                                title={lecturer.title}
                                photoUrl={lecturer.photoUrl}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Wadah kustom untuk pagination (titik-titik) */}
                <div ref={setPaginationEl} className="relative mt-8 flex justify-center" />

                {/* Tombol "Selengkapnya" */}
                <div className="flex justify-end mt-2">
                    <Link
                        href="/profil-dosen"
                        className="swiper-button-prev-custom bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-sm shadow-md transition"
                    >
                        Selengkapnya
                    </Link>
                </div>
            </div>
        </section>
    );
}
