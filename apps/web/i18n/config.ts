import { LocalePrefixMode } from "next-intl/routing";

const localePrefix: LocalePrefixMode = "always";

export const appConfig = {
  name: "Austin Vu",
  locales: ["en", "vi", "ja", "hi", "zh", "es", "fr", "de", "pt"],
  defaultLocale: "en",
  localePrefix,
};
