import { headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
    const headerNext = await headers()
    const locale = headerNext.get('x-my-locale') || 'en';

    return {
        locale,
        messages: (
            await (locale === "en"
                ? import("../messages/en.json")
                : import(`../messages/${locale}.json`))
        ).default,
    };
});
