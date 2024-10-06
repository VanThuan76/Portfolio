"use client";

import { useState, useRef, useEffect } from "react";

interface AudioPlayerProps {
  audioSrc: string;
}

export default function AudioPlayer({ audioSrc }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (audioSrc && canvasRef.current) {
      const audio = new Audio(audioSrc);
      audioRef.current = audio; // Lưu trữ audio vào ref

      const audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaElementSource(audio);

      source.connect(analyser);
      analyser.connect(audioContext.destination);

      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray: any = new Uint8Array(bufferLength);
      const canvas = canvasRef.current;
      const canvasCtx = canvas.getContext("2d");

      const draw = () => {
        const WIDTH = canvas.width;
        const HEIGHT = canvas.height;

        requestAnimationFrame(draw);

        analyser.getByteFrequencyData(dataArray);

        const barWidth = (WIDTH / bufferLength) * 1.5;
        let barHeight;
        let x = 0;

        // Vẽ các cột sóng với màu đen và trắng xen kẽ
        for (let i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i] / 2;
          canvasCtx!.fillStyle =
            i % 2 === 0 ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"; // Màu trắng và đen xen kẽ
          canvasCtx!.fillRect(x, HEIGHT - barHeight, barWidth, barHeight); // Sử dụng barHeight thay vì chia đôi
          x += barWidth + 1; // Cách đều các cột
        }
      };

      draw();

      // Tự động phát âm thanh khi có tương tác (click)
      const playAudio = async () => {
        try {
          await audio.play();
        } catch (err) {
          console.error("Auto-play was prevented:", err);
        }
      };

      canvas.addEventListener("click", playAudio);

      return () => {
        audio.pause(); // Dừng âm thanh khi component bị unmount
        canvas.removeEventListener("click", playAudio);
      };
    }
  }, [audioSrc]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Thêm sự kiện click cho canvas để toggle âm thanh
  const handleCanvasClick = () => {
    togglePlayPause();
  };

  return (
    <>
      {audioSrc && (
        <div className="mb-4">
          <canvas
            ref={canvasRef}
            className="w-full h-20"
            onClick={handleCanvasClick}
          ></canvas>
          <p onClick={() => handleCanvasClick()}>Nhạc</p>
        </div>
      )}
    </>
  );
}
