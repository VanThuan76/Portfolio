import { Metadata } from "next";
import Page from "./page";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale;

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

export default Page;
