import { supabaseBrowser } from "@shared/lib/supabase/browser";

const supabase = supabaseBrowser();
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
