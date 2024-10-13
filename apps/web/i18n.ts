import { notFound } from "next/navigation";
const { getRequestConfig } = require("next-intl/server");

const locales = ["en", "vi", "ja"];

// @ts-ignore
export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./public/translate/${locale}.json`)).default,
  };
});
