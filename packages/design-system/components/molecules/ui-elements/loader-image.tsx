"use client";

import Image, { ImageProps } from "next/image";
interface LoaderImageProps extends ImageProps {
  isLoader: boolean;
}

export function LoaderImage({ isLoader, ...props }: LoaderImageProps) {
  return <Image priority quality={props.quality || 60} {...props} />;
}
