"use client";

import dynamic from "next/dynamic";
import { cn } from "@utils/tw";

const AudioPlayer = dynamic(() => import("./_components/audio-player"), {
  ssr: false,
});
const Timer = dynamic(() => import("./_components/timer"), { ssr: false });

type Props = {
  className?: string;
};

const HeadMain = ({ className }: Props) => {
  return (
    <div className={cn("absolute top-0 right-0", className)}>
      <AudioPlayer audioSrc="/audios/music.mp3" />
      <Timer />
    </div>
  );
};

export default HeadMain;
