import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

import { createMiddlewareClient } from "@repo/supabase/utils/middleware";

import { routing } from "./i18n/navigation";

const localeMiddleware = createMiddleware(routing);

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
    "/((?!_next|_vercel|.*\\..*).*)",
    "/((?!api|_next/static|_next/image|favicon.ico|draco|.*\\.(?:svg|png|jpg|jpeg|gif|webp|glb|drc|mp3|mp4)$).*)",
  ],
};
