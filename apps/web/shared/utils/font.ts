import { Edu_VIC_WA_NT_Beginner, Nunito_Sans } from "next/font/google";

export const mainFont = Edu_VIC_WA_NT_Beginner({
  display: "swap",
  weight: ["500", "600", "700"],
  preload: true,
  subsets: ["latin"],
});

export const fontBlog = Nunito_Sans({
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  preload: true,
  subsets: ["latin"],
});
