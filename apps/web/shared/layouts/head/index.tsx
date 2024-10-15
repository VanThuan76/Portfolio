"use client";

import dynamic from "next/dynamic";
import { cn } from "@utils/tw";

const AudioPlayer = dynamic(() => import("./_components/audio-player"), {
  ssr: false,
});

type Props = { className?: string };

const HeadMain = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "absolute bottom-5 right-5 hidden md:block z-50",
        className,
      )}
    >
      <AudioPlayer />
    </div>
  );
};

export default HeadMain;
