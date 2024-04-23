export default function generateSlug(title: string): string {
  const normalizedTitle = title.toLowerCase().replace(/[^\w\s-]/g, "");
  const slug = normalizedTitle.replace(/\s+/g, "-");
  return slug;
}
