// resources/js/Components/Beranda/AlumniTestimonials.tsx

import { useState } from 'react';

// Impor komponen dan modul Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Impor file CSS Swiper
import 'swiper/css';
import 'swiper/css/pagination';

import BackGroundAnimation from './BackGroundAnimation';

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

export default function AlumniTestimonials() {
    // 2. State untuk menampung referensi ke elemen pagination
    const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);

    return (
        <section className="relative py-20">
            <BackGroundAnimation />

            <div className="container mx-auto px-4 sm:px-6 lg:px-32 py-8 md:py-10 lg:py-8 bg-zinc-200/50 rounded-3xl backdrop-blur-sm">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Cerita Sukses Alumni</h2>
                    <div className="relative w-84 h-1 mx-auto my-4">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300"></div>
                        <div className="relative w-24 h-1 bg-sky-600 mx-auto rounded"></div>
                    </div>
                    <p className="text-lg text-gray-600 mt-2">
                        Mereka sudah merasakan manfaat nyata dari serunya belajar di kampus.
                    </p>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true, el: paginationEl }} 
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="pb-4" 
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="pb-4">
                            <div className="bg-white p-8 rounded-xl shadow-lg h-[28rem] flex flex-col">
                                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-6 text-justify">
                                    "{testimonial.text}"
                                </p>
                                <div className="border-t border-gray-200 pt-6">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800">{testimonial.name}</p>
                                            <p className="text-xs text-yellow-500">{testimonial.title}</p>
                                            <p className="text-xs text-gray-500 mt-1">{testimonial.major}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div ref={setPaginationEl} className="relative mt-8 flex justify-center"></div>
            </div>
        </section>
    );
}