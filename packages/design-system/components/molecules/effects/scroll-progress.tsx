import { useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const [scaleX, setScaleX] = useState(0);

  useLenis(({ scroll }) => {});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollProgress = scrollTop / (docHeight - winHeight);
      setScaleX(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`fixed inset-x-0 top-0 z-[999999] h-1 origin-left bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 ${className}`}
      style={{ transform: `scaleX(${scaleX})` }}
    />
  );
}
