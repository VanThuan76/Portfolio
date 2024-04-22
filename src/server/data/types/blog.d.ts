export interface IBlog {
    id: string;
    title: string;
    image_url: string;
    content: string;
    is_published: boolean;
    is_premium: boolean;
    created_at: Date;
    updated_at: Date;
}
export interface IBlogCreate {
    title: string;
    image_url: string;
    content: string;
    is_published: boolean;
    is_premium: boolean;
}