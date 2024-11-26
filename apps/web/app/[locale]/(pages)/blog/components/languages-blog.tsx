'use client'

import ReactCountryFlag from "react-country-flag"

import { useModal } from "@repo/hooks";

import { LANGUAGE_CODES, LANGUAGE_CODES_COUNTRY } from "@/shared/constants";

const LanguagesBlog = () => {
    const { onOpen } = useModal();

    return (
        <div className="relative flex max-w-[100vw] overflow-hidden gap-1 cursor-pointer" onClick={() => onOpen("switch-languages")}>
            {LANGUAGE_CODES.map((item, index) => {
                return (
                    <ReactCountryFlag
                        svg
                        key={index}
                        cdnSuffix="svg"
                        countryCode={LANGUAGE_CODES_COUNTRY[item] as string}
                        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                        title={LANGUAGE_CODES_COUNTRY[item] as string}
                        className="rounded-xs"
                    />
                )
            })}
        </div>
    );
}

export default LanguagesBlog
