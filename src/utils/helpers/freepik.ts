import type { ImageLoader } from "next/image";

export function normalizeFreepikUrl(src: string) {
  const freepikBaseUrl = "https://img.freepik.com/free-photo";

  if (src.slice(0, 4) === "http") {
    return new URL(src);
  } else {
    return new URL(`${freepikBaseUrl}/${src[0] === "/" ? src.slice(1) : src}`);
  }
}

export const freepikLoader: ImageLoader = ({ src, width, quality }) => {
  const url = normalizeFreepikUrl(src);

  const params = url.searchParams;

  params.set("auto", params.getAll("auto").join(",") || "format");
  params.set("fit", params.get("fit") || "max");
  params.set("w", params.get("w") || width.toString());

  if (quality) {
    params.set("q", quality.toString());
  }

  return url.href;
};
