"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AudioPlayer: React.FC = () => {
  const [audioData, setAudioData] = useState<number[]>(Array(10).fill(100));
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const animationIdRef = useRef<number | null>(null);

  const setupAudio = () => {
    if (audioContextRef.current) return;

    audioContextRef.current = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    const audio = audioElementRef.current!;

    sourceRef.current = audioContextRef.current.createMediaElementSource(audio);

    analyserRef.current = audioContextRef.current.createAnalyser();
    analyserRef.current.fftSize = 64;

    sourceRef.current.connect(analyserRef.current);
    analyserRef.current.connect(audioContextRef.current.destination);

    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);

    const updateAudioData = () => {
      analyserRef.current!.getByteFrequencyData(dataArray);

      const normalizedData = Array.from(dataArray)
        .slice(0, 10)
        .map((val) => {
          return ((val / 255) * 200 + 100) / 2;
        });

      setAudioData(normalizedData);

      animationIdRef.current = requestAnimationFrame(updateAudioData);
    };

    animationIdRef.current = requestAnimationFrame(updateAudioData);
  };

  useEffect(() => {
    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      if (audioContextRef.current) {
        if (sourceRef.current) {
          sourceRef.current.disconnect();
        }
        audioContextRef.current.close();
      }
    };
  }, []);

  const handleVisualizerClick = () => {
    const audio = audioElementRef.current!;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };
  return (
    <div className="size-full center flex-col">
      <audio
        ref={audioElementRef}
        src="/audios/music.mp3"
        onPlay={setupAudio}
        controls
        className="hidden"
        autoPlay
        loop
      />
      <div className="flex items-end h-24 cursor-pointer" onClick={handleVisualizerClick}>
        {audioData.map((height, index) => (
          <motion.div
            key={index}
            className="bg-gray-400 w-[5px] mx-0.5 rounded-2xl"
            animate={{
              height: `${height / 4}px`,
              backgroundColor: height > 100 ? "#fff" : "#fff5",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AudioPlayer;
