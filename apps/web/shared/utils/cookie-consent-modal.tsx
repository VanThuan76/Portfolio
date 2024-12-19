"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { useModal } from "@repo/hooks";

import {
    Modal,
    ModalBody,
} from "@repo/design-system/components/molecules/modals/animated-modal";
import { Button } from "@repo/design-system/components/atoms/button";
import { Separator } from "@repo/design-system/components/molecules/other-utils/separator";

const supportedLanguages = ["en", "hi", "zh", "es", "fr", "de", "pt"];

const CookieConsentModal = () => {
    const t = useTranslations("cookie-consent");
    const currentLang = useLocale()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const { isOpen, type, onOpen, onClose } = useModal();

    useEffect(() => {
        const consentGiven = localStorage.getItem("cookieConsent");
        if (!consentGiven) {
            onOpen("cookie-consent");
        }
    }, [])

    useEffect(() => {
        const consentGiven = localStorage.getItem("cookieConsent");
        if (isOpen && type === "cookie-consent" && !consentGiven && supportedLanguages.includes(currentLang)) {
            setIsModalOpen(true);
        } else {
            setIsModalOpen(false);
        }
    }, [isOpen, type, currentLang]);

    const handleConsent = (consent: boolean) => {
        localStorage.setItem("cookieConsent", consent.toString());
        if (consent) {
            console.log("Cookies accepted");
        } else {
            console.log("Cookies rejected");
        }
        onClose();
    };

    if (!supportedLanguages.includes(currentLang)) {
        return null;
    }

    return (
        <Modal open={isModalOpen} setClose={onClose}>
            <ModalBody className="relative flex flex-col justify-start gap-2 p-4">
                <h1>{t('title')}</h1>
                <p>{t('description')}</p>
                <Separator />
                <div className="grid gap-4 py-4">
                    <p className="text-sm text-muted-foreground">
                        {t('by_accepting_cookies')}
                    </p>
                </div>
                <div className="flex gap-2 sm:justify-start">
                    <Button variant="outline" onClick={() => handleConsent(false)}>
                        {t('reject')}
                    </Button>
                    <Button onClick={() => handleConsent(true)}>{t('accept')}</Button>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default CookieConsentModal;
