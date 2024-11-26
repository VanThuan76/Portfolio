"use client";

import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const ReCaptchaProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            scriptProps={{
                async: true,
                defer: true,
                appendTo: "head",
            }}
        >
            {children}
        </GoogleReCaptchaProvider>
    );
};

export default ReCaptchaProvider;
