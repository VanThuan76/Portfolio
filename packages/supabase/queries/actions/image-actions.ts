import { getSupabaseBrowserClient } from "@repo/supabase/utils/client";

const supabase = getSupabaseBrowserClient();

export async function uploadImageToStorage(file: File): Promise<string | null> {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error("User not authenticated for photo upload");

    const filePath = `images/${user.id}/${file.name}`;
    const bucket = supabase.storage.from("images");

    const { data: existingFiles, error: listError } = await bucket.list(
      `images/${user.id}`,
      { search: file.name },
    );

    if (listError) throw listError;

    if (existingFiles?.length) {
      return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${filePath}`;
    }

    // Upload file nếu chưa tồn tại
    const { data, error } = await bucket.upload(filePath, file);
    if (error) throw error;

    return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${data.path}`;
  } catch (error) {
    console.error("Image upload failed:", error);
    return null;
  }
}
