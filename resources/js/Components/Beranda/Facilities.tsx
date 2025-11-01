import { FacilitiesData } from '@/types';

const SectionHeader = ({ title }: { title: string }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
        <div className="relative w-84 h-1 mx-auto my-4">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300"></div>
            <div className="relative w-24 h-1 bg-sky-600 mx-auto rounded"></div>
        </div>
        <p className="text-lg text-gray-600 mt-2">Menyediakan lingkungan belajar yang modern dan kondusif.</p>
    </div>
);

export default function Facilities({facilitiesData} : {facilitiesData: FacilitiesData[]}) {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-32">
                <SectionHeader title="Fasilitas Jurusan" />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {facilitiesData.map((facility, index) => (
                        <div key={index} className="relative group overflow-hidden shadow-lg">
                            <img 
                                src={facility.facilities_image_path} 
                                alt={facility.name}
                                className="w-full h-64 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <p className="text-white text-lg font-semibold text-center">{facility.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}