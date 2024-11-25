import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale } = await params;

  const baseUrl = `https://www.austinvu.tech/${locale}/about-me`;

  return {
    title: {
      default: "About Me",
      template: `%s | About Me`,
    },
    description:
      "Learn more about my journey, skills, and passions that drive my work.",
    openGraph: {
      title: "About Me",
      description:
        "Discover my background, expertise, and what inspires me in my work.",
      url: baseUrl,
      images: ["https://www.austinvu.tech/banner-light.png"],
    },
  };
}

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full" data-lenis-prevent="true">
      {children}
    </div>
  );
}
