"use client";
import Image, { ImageLoader, ImageProps } from "next/image";
import { freepikLoader } from "@utils/helpers/freepik";

interface LoaderImageProps extends ImageProps {
  isLoader: boolean;
}

export function LoaderImage({ isLoader, ...props }: LoaderImageProps) {
  const loader: ImageLoader | undefined = isLoader ? freepikLoader : undefined;

  return (
    <Image loader={loader} {...props} priority quality={props.quality || 60} />
  );
}
