import Negotiator from 'negotiator';

import { match } from '@formatjs/intl-localematcher';
import { NextResponse } from "next/server";
import { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies';

import { createMiddlewareClient } from "@repo/supabase/utils/middleware";

const COOKIE_LOCALE_NAME = 'NEXT_LOCALE';
const defaultLocale = 'en';
const locales = ["en", "vi", "ja", "hi", "zh", "es", "fr", "de", "pt"]

function getAcceptLanguageLocale(
    requestHeaders: Headers,
    locales: Array<string>,
    defaultLocale: string
) {
    let locale;

    const languages = new Negotiator({
        headers: {
            'accept-language': requestHeaders.get('accept-language') || undefined,
        },
    }).languages();
    try {
        locale = match(languages, locales, defaultLocale);
    } catch (e) {
    }

    return locale;
}

function resolveLocale(
    locales: Array<string>,
    defaultLocale: string,
    requestHeaders: Headers,
    requestCookies: RequestCookies
) {
    let locale;

    if (requestCookies) {
        if (requestCookies.has(COOKIE_LOCALE_NAME)) {
            const value = requestCookies.get(COOKIE_LOCALE_NAME)?.value;
            if (value && locales.includes(value)) {
                locale = value;
            }
        }
    }

    if (!locale && requestHeaders) {
        locale = getAcceptLanguageLocale(requestHeaders, locales, defaultLocale);
    }

    if (!locale) {
        locale = defaultLocale;
    }

    return locale;
}

export async function middleware(request) {
    try {
        const { supabase, response: supabaseResponse } = createMiddlewareClient(request);
        const { data: session, error } = await supabase.auth.getSession();

        if (error) {
            console.error("Error fetching session:", error.message);
            return supabaseResponse;
        }

        if (!session) {
            console.log("No active session found");
            return NextResponse.redirect("/auth/signin");
        }

        const locale = resolveLocale(locales, defaultLocale, request.headers, request.cookies);

        const response = NextResponse.next();

        if (request.cookies.get(COOKIE_LOCALE_NAME)?.value !== locale) {
            response.cookies.set(COOKIE_LOCALE_NAME, locale, {
                sameSite: "strict",
            });
        }

        response.headers.set("x-my-locale", locale);

        supabaseResponse.headers.forEach((value, key) => {
            response.headers.set(key, value);
        });

        return response;
    } catch (err) {
        console.error("Middleware error:", err);
        return NextResponse.redirect("/error");
    }
}


export const config = {
    matcher: [
        "/",
        "/((?!_next|_vercel|.*\\..*).*)",
        "/((?!api|_next/static|_next/image|favicon.ico|draco|.*\\.(?:svg|png|jpg|jpeg|gif|webp|glb|drc|mp3|mp4)$).*)",
    ],
};
