export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    }
}

export type HeroData = {
    id: number;
    title: string;
    paragraph_1: string;
    paragraph_2: string;
    hero_image_path: string;
}

export type WelcomeMessageData ={
    id: number;
    title: string;
    paragraph_1: string;
    paragraph_2: string;
    kajur_image_path: string;
    name: string;
}

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