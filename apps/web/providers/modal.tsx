"use client";

import React from "react";
import dynamic from "next/dynamic";

const CookieConsentModal = dynamic(() => import("@/shared/utils/cookie-consent-modal"),
    { ssr: false }
);

const ModalAuth = dynamic(() => import("@repo/auth/components/modal"), {
    ssr: false,
});

const ModalSwitchLanguages = dynamic(
    () => import("@/shared/layouts/navigation/modal-switch-languages"),
    {
        ssr: false,
    },
);

const ModalBlog = dynamic(
    () => import("../app/[locale]/(pages)/blog/components/modals/blog"),
    { ssr: false },
);

const ModalProvider = () => {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return (
        <React.Fragment>
            <CookieConsentModal />
            <ModalBlog />
            <ModalSwitchLanguages />
            <ModalAuth />
        </React.Fragment>
    );
};

export default ModalProvider;
