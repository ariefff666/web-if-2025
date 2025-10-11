import { useState, useRef, useEffect } from 'react';

// Impor komponen dan modul Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Impor file CSS Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// Data dummy
const testimonials = [
    {
        name: 'Ahmad Farhan Rasyidin',
        title: 'Software Engineer @ Google',
        major: 'Teknik Informatika Angkatan \'23',
        avatar: '/images/avatars/avatar-1.png',
        text: 'Selama kuliah, saya mendapatkan pemahaman mendalam tentang berbagai aspek T.I, termasuk teori, media massa, public relations, dan komunikasi organisasi. Kuliah ini memberikan landasan yang kuat bagi karier saya di dunia teknologi. Proses penyusunan kurikulum didasarkan pada masukan dari berbagai pihak seperti industri dan alumni.'
    },
    {
        name: 'Sheryl Jesselyn',
        title: 'UI/UX Designer @ Gojek',
        major: 'Teknik Informatika Angkatan \'22',
        avatar: '/images/avatars/avatar-2.png',
        text: 'Proses penyusunan kurikulum didasarkan pada masukan dari berbagai pihak seperti industri dan alumni, untuk memastikan relevansinya dengan dunia kerja yang semakin kompleks. Ini sangat membantu saya saat pertama kali bekerja.'
    },
    {
        name: 'Stefanie Cho',
        title: 'Data Scientist @ Tokopedia',
        major: 'Teknik Informatika Angkatan \'21',
        avatar: '/images/avatars/avatar-3.png',
        text: 'Program studi ini berkomitmen kuat dalam meningkatkan mutu pendidikan. Kurikulum berbasis OBE memastikan setiap lulusan memiliki keterampilan praktis yang relevan dengan kebutuhan industri. Saya sangat merasakannya.'
    },
    {
        name: 'Zelia Valetzkya',
        title: 'Project Manager @ Traveloka',
        major: 'Teknik Informatika Angkatan \'20',
        avatar: '/images/avatars/avatar-4.png',
        text: 'Saya bersyukur telah menempuh program studi ini. Saya telah berhasil bekerja di beberapa perusahaan ternama dan mengaplikasikan pengetahuan dan keterampilan yang saya pelajari selama kuliah. Terima kasih Fasilkom Unsri!'
    },
    {
        name: 'Grimaldie William',
        title: 'Cybersecurity Analyst @ BSSN',
        major: 'Teknik Informatika Angkatan \'19',
        avatar: '/images/avatars/avatar-5.png',
        text: 'Selain teori, kami juga dibekali keterampilan praktis yang relevan dengan kebutuhan industri. Proses pembelajaran didasarkan pada masukan dari berbagai pihak seperti industri, alumni, dan asosiasi.'
    }
];

/*
|--------------------------------------------------------------------------
| Komponen SectionHeader
|--------------------------------------------------------------------------
| Header untuk section yang mencakup judul dan tombol navigasi kustom
| untuk Swiper. Tombol ini memiliki class name spesifik yang akan di-target
| oleh Swiper untuk fungsionalitasnya.
*/
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

export default function AlumniTestimonials() {
    /*
    |--------------------------------------------------------------------------
    | Component State & Hooks
    |--------------------------------------------------------------------------
    | - paginationRef: Hook 'useRef' untuk menyimpan referensi ke elemen DOM
    |   yang akan menjadi wadah pagination (titik-titik).
    | - swiperReady & useEffect: Trik untuk menunda render Swiper hingga
    |   komponen sudah di-mount. Ini untuk memastikan 'paginationRef.current'
    |   tidak null saat Swiper diinisialisasi.
    */
    const paginationRef = useRef<HTMLDivElement | null>(null);
    const [swiperReady, setSwiperReady] = useState(false);

    useEffect(() => {
        setSwiperReady(true);
    }, []);

    return (
        <section className="relative py-8 bg-gradient-to-t from-sky-100 from-30% to-white to-100%">
            <div className="container mx-auto px-4 sm:px-6 lg:px-28 py-8 md:py-10 lg:py-8">
                <SectionHeader title="Apa Kata Alumni" />

                {/* Conditional rendering untuk memastikan Swiper hanya dirender setelah 'ref' siap */}
                {swiperReady && (
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            el: paginationRef.current!, // Menggunakan referensi DOM
                        }}
                        navigation={{
                            // Menghubungkan tombol kustom dengan navigasi Swiper
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
                            1024: { slidesPerView: 4 },
                        }}
                        className="pb-8"
                    >
                        {testimonials.map((t, i) => (
                            <SwiperSlide key={i} className="pb-8">
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
                )}

                {/* Wadah kustom untuk pagination (titik-titik) */}
                <div ref={paginationRef} className="relative mt-8 flex justify-center" />
            </div>
        </section>
    );
}