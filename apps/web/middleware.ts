import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

import { createMiddlewareClient } from "@repo/supabase/utils/middleware";

const localeMiddleware = createMiddleware({
  locales: ["en", "vi", "ja", "hi", "zh", "es", "fr", "de", "pt"],
  defaultLocale: "en",
  localeDetection: false,
  localePrefix: "always",
});

export async function middleware(request) {
  const localeResponse = localeMiddleware(request);

  const { supabase, response } = createMiddlewareClient(request);

  const { data: session, error } = await supabase.auth.getSession();

  if (error) {
    console.error("Error fetching session:", error.message);
    return response;
  }

  if (!session) {
    console.log("No active session found");
    return NextResponse.redirect("/auth/signin");
  }

  response.headers.forEach((value, key) => {
    localeResponse.headers.set(key, value);
  });

  return localeResponse;
}

export const config = {
  matcher: [
    "/",
    "/(vi|en|ja|hi|zh|es|fr|de|pt)/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico|draco|.*\\.(?:svg|png|jpg|jpeg|gif|webp|glb|drc|mp3|mp4)$).*)",
  ],
};
