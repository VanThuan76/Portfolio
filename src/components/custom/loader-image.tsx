"use client"
import { freepikLoader } from "@/utils/helpers/freepik";
import Image, { ImageLoader } from "next/image";

export function LoaderImage(props: {
    isLoader: boolean;
    src: string;
    alt: string;
    className?: string;
    width: number;
    height: number;
}) {
    const loader: ImageLoader | undefined = props.isLoader ? freepikLoader : undefined;
    return (
        <Image
            loader={loader}
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            quality={60}
            sizes="100vw"
            className={props.className}
        />
    );
}