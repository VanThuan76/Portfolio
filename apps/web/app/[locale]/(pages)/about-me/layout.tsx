import { Metadata } from "next";
import Page from "./page";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale;

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

export default Page;
