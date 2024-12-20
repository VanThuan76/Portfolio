import { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const headerNext = await headers();
  const locale = headerNext.get("x-my-locale") || "en";

  const baseUrl = `https://www.austinvu.tech/${locale}/project`;

  return {
    title: {
      default: "Project",
      template: `%s | Project`,
    },
    description:
      "Discover our innovative projects, showcasing the latest technologies and creative solutions.",
    openGraph: {
      title: "Project",
      description:
        "Explore our range of projects, highlighting cutting-edge technologies and innovative approaches.",
      url: baseUrl,
      images: ["https://www.austinvu.tech/banner-light.png"],
    },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-full h-screen bg-[url('/images/project/bg.jpg')] bg-cover bg-center bg-no-repeat"
      data-lenis-prevent="true"
    >
      {children}
    </div>
  );
}
