import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface StrukturPimpinanData {
    id: number;
    content: string;
}

export interface ProfilLulusanData {
    id: number;
    content: string;
}

export interface WelcomeData {
    id: number;
    title: string;
    paragraph_1: string;
    paragraph_2: string | null;
    name: string;
    kajur_image_path: string | null;
}

export interface HeroData {
    id: number;
    title: string;
    paragraph_1: string;
    paragraph_2: string | null;
    hero_image_path: string | null;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
    flash: {
        success?: string;
    }
};

export type Testimonial = {
    id: number;
    name: string;
    title: string;
    major: string;
    avatar: string | null;
    text: string;
}

export type Lecturer = {
    id: number;
    name: string;
    title: string;
    photoUrl: string;
}

export type NewsAnnouncementsAchievements = {
    id: number;
    title: string;
    slug: string;
    category: 'berita' | 'pengumuman' | 'prestasi';
    is_popular?: boolean | null;
    excerpt?: string | null;
    body: string | TrustedHTML;
    image_url: string | undefined;
    student_name?: string | null;
    date?: string | null;
    published_at?: string | null;
    created_at: string;
    updated_at: string;
}

export type FacilitiesData = {
    id: number;
    name: string;
    facilities_image_path: string;
}

export type Visi = {
    id: number;
    content: string;
}

export type Misi = {
    id: number;
    content: string;
}

export type ProfilLulusan = {
    id:number;
    content: string;
}

export type StrukturPimpinan = {
    id:number;
    content: string;
}

export type CPL = {
    id: number
    kode: string
    kategori: string
    sub_kategori: string
    deskripsi: string
    created_at: string | null
    updated_at: string | null
}

export type Akademik = {
    id: number
    title: string
    slug: string
    file_path: string
    created_at: Date
}

export type AkademikDokumen = {
    id: number
    title: string
    file_path: string
}

export type PanduanSop = {
    id: number
    title: string
    created_at: Date
    file_path: string
}