import AdminLayout from '@/Layouts/AdminLayout';
import { Testimonial } from '@/types';
import { Link } from '@inertiajs/react';
import { Plus, Trash2, Edit, UserCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Index({ testimonials }: { testimonials: Testimonial[] }) {
    return (
        <AdminLayout title="Kelola Testimonials">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8"
            >
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-slate-800">Daftar Testimonial</h1>
                    <Link
                        href={route('admin.testimonials.create')}
                        className="inline-flex items-center gap-2 bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-sky-700 transition"
                    >
                        <Plus size={20} />
                        <span>Tambah Testimonial</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    {testimonial.avatar ? (
                                        <img className="h-12 w-12 rounded-full object-cover" src={testimonial.avatar} alt={testimonial.name} />
                                    ) : (
                                        <UserCircle size={48} className="text-slate-400" />
                                    )}
                                    <div>
                                        <p className="font-bold text-slate-800">{testimonial.name}</p>
                                        <p className="text-sm text-slate-500">{testimonial.major}</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm mb-4">"{testimonial.text}"</p>
                                <div className="flex justify-end gap-2 mt-4">
                                    <Link href={route('admin.testimonials.edit', testimonial.id)} className="text-slate-500 hover:text-sky-600 transition">
                                        <Edit size={18} />
                                    </Link>
                                    <Link href={route('admin.testimonials.destroy', testimonial.id)} method="delete" as="button" className="text-slate-500 hover:text-red-600 transition">
                                        <Trash2 size={18} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </AdminLayout>
    );
}
