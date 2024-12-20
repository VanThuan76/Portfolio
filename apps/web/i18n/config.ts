import { LocalePrefixMode } from "next-intl/routing";

const localePrefix: LocalePrefixMode = "never";

export const appConfig = {
    name: "Austin Vu",
    locales: ["en", "vi", "ja", "hi", "zh", "es", "fr", "de", "pt"],
    defaultLocale: "en",
    localePrefix,
    localeDetection: false
};
