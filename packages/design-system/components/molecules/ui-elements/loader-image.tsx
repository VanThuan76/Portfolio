"use client";
import Image, { ImageLoader, ImageProps } from "next/image";
import { freepikLoader } from "@repo/design-system/helpers/freepik";

interface LoaderImageProps extends ImageProps {
  isLoader: boolean;
}

export function LoaderImage({ isLoader, ...props }: LoaderImageProps) {
  const loader: ImageLoader | undefined = isLoader ? freepikLoader : undefined;

  return (
    <Image
      loader={loader}
      {...props}
      loading="eager"
      priority
      decoding="sync"
      quality={props.quality || 60}
    />
  );
}
