import { type MetadataRoute } from "next";

import { siteConfig } from "@shared/constants/config";

const locale = "en"; // Đặt ngôn ngữ mặc định của trang web của bạn

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig(locale).url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig(locale).url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${siteConfig(locale).url}/project`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
