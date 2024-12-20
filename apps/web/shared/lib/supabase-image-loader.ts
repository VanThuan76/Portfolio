interface ImageLoaderProps {
    src: string;
    width: number;
    quality?: number;
}

const projectId = process.env.SUPABASE_PROJECT_REF || '';

export default function supabaseLoader({ src, width, quality = 75 }: ImageLoaderProps): string {
    if (!projectId) {
        throw new Error('NEXT_PUBLIC_SUPABASE_PROJECT_ID is not defined');
    }

    return `https://${projectId}.supabase.co/storage/v1/render/image/public/${src}?width=${width}&quality=${quality}`;
}
