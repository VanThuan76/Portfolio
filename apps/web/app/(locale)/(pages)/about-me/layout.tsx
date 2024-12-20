import { Metadata } from "next";
import { headers } from "next/headers";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const headerNext = await headers();
  const locale = headerNext.get("x-my-locale") || "en";

  const tMetadataAboutMe = await getTranslations("metadata.aboutMe");

  const baseUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/${locale}/about-me`;

  return {
    title: {
      default: tMetadataAboutMe("pageTitle"),
      template: `%s | ${tMetadataAboutMe("pageTitle")}`,
    },
    description: tMetadataAboutMe("pageDescription"),
    openGraph: {
      title: tMetadataAboutMe("openGraphTitle"),
      description: tMetadataAboutMe("openGraphDescription"),
      url: baseUrl,
      images: [`${process.env.NEXT_PUBLIC_WEB_URL}/banner-light.png`],
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
