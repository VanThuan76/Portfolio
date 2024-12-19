import ReactCountryFlag from "react-country-flag";
import { getTranslations } from "next-intl/server";

import { LANGUAGE_CODES_COUNTRY } from "@/shared/constants";

type Params = Promise<{ locale: string }>;

export default async function Page({ params }: { params: Params }) {
    const { locale } = await params;

    const t = await getTranslations("privacy-policy");
    const childSections = await getTranslations();

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold md:text-5xl">{t('title')}</h1>
            <div className="flex items-center justify-start gap-2">
                <p>{new Date().toLocaleDateString(locale)}</p>
                <ReactCountryFlag
                    svg
                    cdnSuffix="svg"
                    countryCode={LANGUAGE_CODES_COUNTRY[locale] as string}
                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                    title={LANGUAGE_CODES_COUNTRY[locale] as string}
                    className="text-xl cursor-pointer rounded-xs"
                />
            </div>

            {childSections.raw('privacy-policy.sections').map((section, index) => (
                <div key={index}>
                    <h2 className="font-semibold">{index + 1}. {section.title}</h2>
                    <p>{section.content}</p>
                </div>
            ))}
            <div className="flex flex-col items-end justify-end">
                <p>{t('lastUpdated')}</p>
                <p>Austin Vu</p>
            </div>
        </div>
    )
}
