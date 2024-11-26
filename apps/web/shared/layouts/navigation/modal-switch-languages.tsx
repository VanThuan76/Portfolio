"use client";

import ReactCountryFlag from "react-country-flag"

import dynamic from "next/dynamic";
import { cn } from "@repo/design-system/utils/tw";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useEffect, useState, useTransition } from "react";

import { useModal } from "@repo/hooks";
import { Separator } from "@repo/design-system/components/molecules/other-utils/separator";
import { LANGUAGE_CODES, LANGUAGE_CODES_COUNTRY } from "@/shared/constants";
import { useLocale, useTranslations } from "next-intl";

const Modal = dynamic(
    () =>
        import(
            "@repo/design-system/components/molecules/modals/animated-modal"
        ).then((mod) => mod.Modal),
    { ssr: false },
);
const ModalBody = dynamic(
    () =>
        import(
            "@repo/design-system/components/molecules/modals/animated-modal"
        ).then((mod) => mod.ModalBody),
    { ssr: false },
);

const ModalSwitchLanguages = () => {
    const router = useRouter();
    const params = useParams();
    const pathname = usePathname();
    const locale = useLocale()
    const tLanguage = useTranslations("languages");

    const [isPending, startTransition] = useTransition();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { isOpen, type, onClose } = useModal();

    const onSelectLanguage = (locale: string) => {
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript sẽ xác nhận params khớp với pathname.
                { pathname, params },
                { locale },
            );
            onClose();
        });
    };

    useEffect(() => {
        if (isOpen && type === "switch-languages") {
            setIsModalOpen(true);
        } else {
            setIsModalOpen(false);
        }
    }, [isOpen, type]);

    return (
        <Modal open={isModalOpen} setClose={onClose}>
            <ModalBody className={cn("relative p-3 md:p-6 w-full md:max-w-[50%]")}>
                <h1>{tLanguage('select_language')}</h1>
                <Separator className="w-full h-[1px] my-2" />
                <div className="grid items-center justify-start grid-cols-1 gap-4 md:grid-cols-3">
                    {LANGUAGE_CODES.map((item, index) => {
                        return (
                            <div key={index} className={cn("flex items-center justify-start gap-1 cursor-pointer px-2 rounded-md", locale === item ? "bg-[#EAE1D6]" : "")} onClick={() => onSelectLanguage(item)}>
                                <ReactCountryFlag
                                    svg
                                    cdnSuffix="svg"
                                    countryCode={LANGUAGE_CODES_COUNTRY[item] as string}
                                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                                    title={LANGUAGE_CODES_COUNTRY[item] as string}
                                    className="cursor-pointer rounded-xs"
                                />
                                <p>{tLanguage(item)}</p>
                            </div>
                        )
                    })}
                </div>
            </ModalBody>
        </Modal>
    );
};

export default ModalSwitchLanguages;
