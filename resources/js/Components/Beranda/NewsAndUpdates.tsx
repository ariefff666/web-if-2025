const SectionHeader = ({ title }: { title: string }) => {
    let accentLineWidthClass;

    if (title === "Berita") {
        accentLineWidthClass = 'w-20';
    } else if (title === "Pengumuman") {
        accentLineWidthClass = 'w-46';
    } else { // Untuk "Prestasi Mahasiswa"
        accentLineWidthClass = 'w-68';
    }

    return (
        <div className="flex items-center mb-6">
            <div className="flex-shrink-0 mr-4 sm:mr-6">
                {/* Ukuran teks diubah menjadi responsif */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 whitespace-nowrap">{title}</h2>
                <div className={`h-1 bg-sky-600 mt-2 rounded ${accentLineWidthClass}`}></div>
            </div>
            <div className="w-full h-px bg-gray-300"></div>
        </div>
    );
};

const EmptyState = ({ message }: { message: string }) => (
    <div className="text-center py-12 px-6 bg-gray-50 rounded-lg border">
        <p className="text-gray-500">{message}</p>
    </div>
);

export default function NewsAndUpdates() {
    return (
        <section className="bg-white py-8">
            {/* Padding horizontal diubah menjadi responsif */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                    
                    {/* --- Kolom Berita --- */}
                    <div className="lg:col-span-2">
                        <SectionHeader title="Berita" />
                        <div className="space-y-4">
                            <EmptyState message="Belum ada berita untuk saat ini." />
                        </div>
                    </div>

                    {/* --- Kolom Pengumuman --- */}
                    <div className="lg:col-span-1">
                        <SectionHeader title="Pengumuman" />
                        <div className="space-y-4">
                            <EmptyState message="Tidak ada pengumuman baru." />
                        </div>
                    </div>

                    {/* --- Baris Prestasi Mahasiswa --- */}
                    <div className="lg:col-span-3 mt-8 md:mt-12">
                        <SectionHeader title="Prestasi Mahasiswa" />
                        <div className="space-y-4">
                            <EmptyState message="Belum ada prestasi yang tercatat." />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}