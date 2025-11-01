import { FaQuoteRight } from 'react-icons/fa';
import { WelcomeMessageData } from '@/types';

const headOfProgramImagePath = '/storage/dosen/hadi-purnawan.jpeg'; 

export default function WelcomeMessage({welcomeMessageData} : {welcomeMessageData: WelcomeMessageData}) {
    return (

        <section className="bg-gradient-to-b from-sky-600 from-0% to-white to-100% py-8 px-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-32">
                {/* Kartu utama yang membungkus semua konten */}
                <div className="relative bg-white rounded-2xl shadow-lg p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        
                        {/* Kolom Kiri: Foto Ketua Prodi */}
                        <div className="lg:col-span-1 flex justify-center">
                            <img 
                                src={welcomeMessageData.kajur_image_path} 
                                alt="Ketua Program Studi Teknik Informatika"
                                className="w-64 h-auto object-cover rounded-lg shadow-md"
                            />
                        </div>

                        {/* Kolom Kanan: Teks Sambutan dan Tanda Tangan */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                {welcomeMessageData.title}
                            </h2>
                            <div className="relative w-84 h-1 mx-auto mb-4">
                                <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300"></div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                                {welcomeMessageData.paragraph_1}
                            </p>
                            <p className="text-gray-600 leading-relaxed text-justify">
                                {welcomeMessageData.paragraph_2}
                            </p>
                            
                            {/* Bagian Tanda Tangan Digital */}
                            <div className="mt-8">
                                <p className="font-bold text-gray-900">{welcomeMessageData.name}</p>
                                <p className="font-semibold text-yellow-500">Ketua Program Studi Teknik Informatika</p>
                            </div>
                        </div>
                    </div>
                    
                    <FaQuoteRight className="absolute bottom-12 right-12 text-yellow-400 opacity-20 text-8xl" />
                </div>
            </div>
        </section>
    );
}