import PanduanSopLayout from '@/Layouts/PanduanSopLayout';
import { Head, usePage } from '@inertiajs/react';
import { PageProps as InertiaPageProps } from '@inertiajs/core';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

interface PanduanItem {
    title: string;
    slug: string;
}

interface CurrentPanduanItem extends PanduanItem {
    file_url: string;
}

interface CustomPageProps extends InertiaPageProps {
    title: string;
    currentPanduan: CurrentPanduanItem;
    auth: {
        user: any;
    };
    [key: string]: any;
}

export default function Show() {
    const { title, currentPanduan } = usePage<CustomPageProps>().props;

    return (
        <PanduanSopLayout>
            <Head title={title} />

            <div className="w-full">
                <h2 className="text-3xl font-bold text-sky-600 mb-6 border-l-4 border-yellow-400 pl-4">
                    {currentPanduan.title}
                </h2>
                <div className="w-full h-[100vh] rounded-lg overflow-hidden border border-gray-200 shadow-inner">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                        <Viewer fileUrl={currentPanduan.file_url} />
                    </Worker>
                </div>
            </div>
        </PanduanSopLayout>
    );
}