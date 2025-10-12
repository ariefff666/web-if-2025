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
    };
};

export type Testimonial = {
    id: number;
    name: string;
    title: string;
    major: string;
    avatar: string | null; // Bisa jadi null jika tidak ada foto
    text: string;
};

export type Lecturer = {
    id: number;
    name: string;
    title: string;
    photoUrl: string;
}