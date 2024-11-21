import { getSupabaseBrowserClient } from "@repo/supabase/utils/client";

const supabase = getSupabaseBrowserClient();

export async function uploadImageToStorage(file: any) {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error("User not authenticated for photo upload");

    const filePath = `images/${user.id}/${file.name}`;
    const { data, error } = await supabase.storage
      .from("images")
      .upload(filePath, file);
    if (error) throw error;

    return data;
  } catch (error) {
    console.error(error);
  }
}
