import { X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface PdfPreviewModalProps {
    file_path: string;
    onClose: () => void;
}

export default function PdfPreviewModal({ file_path, onClose }: PdfPreviewModalProps) {
    const [isLoading, setIsLoading] = useState(true);

    if (!file_path) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col relative"
                    onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
                >
                    <div className="flex justify-between items-center p-4 border-b">
                        <h3 className="text-lg font-semibold text-gray-700">
                            {isLoading ? 'Memuat Pratinjau...' : 'Pratinjau Dokumen'}
                        </h3>
                        <motion.button 
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            onClick={onClose} className="text-gray-500 hover:text-gray-800 transition">
                            <X size={24} />
                        </motion.button>
                    </div>
                    <div className="flex-grow relative">
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-b-lg">
                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                                    <Loader2 className="text-sky-500" size={48} />
                                </motion.div>
                            </div>
                        )}
                        <iframe
                            src={file_path}
                            title="PDF Preview"
                            className={`w-full h-full border-0 rounded-b-lg ${isLoading ? 'invisible' : 'visible'}`}
                            onLoad={() => setIsLoading(false)}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
