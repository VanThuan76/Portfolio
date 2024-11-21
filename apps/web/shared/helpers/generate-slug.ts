export function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/á|à|ả|ã|ạ/g, "a")
    .replace(/é|è|ẻ|ẽ|ẹ/g, "e")
    .replace(/i/g, "i")
    .replace(/ó|ò|ỏ|õ|ọ/g, "o")
    .replace(/ú|ù|ủ|ũ|ụ/g, "u")
    .replace(/ý|ỳ|ỷ|ỹ|ỵ/g, "y")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .trim();
}
