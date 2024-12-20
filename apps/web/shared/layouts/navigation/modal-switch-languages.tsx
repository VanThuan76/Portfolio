"use client";

import ReactCountryFlag from "react-country-flag";
import dynamic from "next/dynamic";
import { toast } from "sonner";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { cn } from "@repo/design-system/utils/tw";
import { axiosOwnInstanceNoAuth } from "@/shared/utils/axios";

import { useModal } from "@repo/hooks";
import { Separator } from "@repo/design-system/components/molecules/other-utils/separator";
import { LANGUAGE_CODES, LANGUAGE_CODES_COUNTRY } from "@/shared/constants";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

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
    const locale = useLocale();
    const router = useRouter()
    const tLanguage = useTranslations("languages");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { isOpen, type, onClose } = useModal();

    const { mutate: changeLanguage } = useMutation({
        mutationFn: async (newLocale: string) => {
            return await axiosOwnInstanceNoAuth.post("/update-locale", { locale: newLocale });
        },
        onMutate: () => {
            toast.message(`${tLanguage('switch_language')}`, {
                duration: Infinity,
                icon: "🌐",
            });
        },
        onSuccess: () => {
            router.refresh();
            toast.dismiss();
            toast.success(`${tLanguage('switch_language_successful')}`);
            onClose();
        },
        onError: (error) => {
            toast.dismiss();
            console.error("Change language error:", error);
        },
    });

    const onSelectLanguage = (newLocale: string) => {
        changeLanguage(newLocale);
    };

    useEffect(() => {
        setIsModalOpen(isOpen && type === "switch-languages");
    }, [isOpen, type]);

    return (
        <Modal open={isModalOpen} setClose={onClose}>
            <ModalBody className={cn("relative p-3 md:p-6 w-full md:max-w-[50%]")}>
                <h1>{tLanguage("select_language")}</h1>
                <Separator className="w-full h-[1px] my-2" />
                <div className="grid items-center justify-start grid-cols-1 gap-4 md:grid-cols-3">
                    {LANGUAGE_CODES.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={cn(
                                    "flex items-center justify-start gap-1 cursor-pointer px-2 rounded-md",
                                    locale === item ? "bg-[#EAE1D6]" : "",
                                )}
                                onClick={() => onSelectLanguage(item)}
                            >
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
                        );
                    })}
                </div>
            </ModalBody>
        </Modal>
    );
};

export default ModalSwitchLanguages;
