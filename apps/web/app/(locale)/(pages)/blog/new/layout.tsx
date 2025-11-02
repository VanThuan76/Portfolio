import { BlogNewProviders } from "./providers";

export default async function BlogNewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BlogNewProviders>{children}</BlogNewProviders>;
}
