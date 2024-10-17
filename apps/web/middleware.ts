import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { updateSession } from "@shared/utils/supabase/middlerware";

const localeMiddleware = createMiddleware({
  locales: ["en", "vi", "ja"],
  defaultLocale: "en",
  localeDetection: false,
  localePrefix: "always",
});

export async function middleware(request: NextRequest) {
  const response = await updateSession(request);
  const localeResponse = localeMiddleware(request);

  if (!response) {
    return localeResponse;
  }

  response.headers.forEach((value, key) => {
    localeResponse.headers.set(key, value);
  });

  return localeResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - .glb files (3D models)
     * - .mp3 and .mp4 files (audio and video)
     */
    "/",
    "/(vi|en|ja)/:path*",
    "/((?!_next/static|_next/image|favicon.ico|draco|.*\\.(?:svg|png|jpg|jpeg|gif|webp|glb|drc|mp3|mp4)$).*)",
  ],
};
