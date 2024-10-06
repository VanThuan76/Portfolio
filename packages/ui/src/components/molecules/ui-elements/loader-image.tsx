"use client";
import Image, { ImageLoader } from "next/image";
import { freepikLoader } from "@utils/helpers/freepik";

export function LoaderImage(props: {
    isLoader: boolean;
    src: string;
    alt: string;
    className?: string;
    width: number;
    height: number;
    onClick?: () => void;
    style?: React.CSSProperties;
}) {
    const loader: ImageLoader | undefined = props.isLoader
        ? freepikLoader
        : undefined;

    return (
        <Image
            loader={loader}
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            priority
            quality={60}
            sizes="100vw"
            onClick={props.onClick && props.onClick}
            className={props.className}
            style={props.style}
        />
    );
}
