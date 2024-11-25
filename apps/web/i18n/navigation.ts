import { appConfig } from "./config";

import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: appConfig.locales,
  localePrefix: appConfig.localePrefix,
  defaultLocale: appConfig.defaultLocale,
});

export const { usePathname, useRouter } = createNavigation(routing);
