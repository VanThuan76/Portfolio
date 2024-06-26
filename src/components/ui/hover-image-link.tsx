"use client";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface HoverImageLinkProps {
  imgSrc: string;
  children: React.ReactNode;
  position?: "left" | "right";
}

const HoverImageLink: React.FC<HoverImageLinkProps> = ({
  imgSrc,
  children,
  position = "left",
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const transformValue = position === "left" ? "-50%" : "50%"; // Xác định giá trị transform dựa trên vị trí

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();

    if (rect) {
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    }
  };

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative transition-colors duration-500 hover:border-neutral-50"
    >
      {children}
      <motion.img
        style={{
          top,
          [position]: "50%", // Sử dụng vị trí đã được xác định
          translateX: "-200%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover"
        alt={`Image representing a link for smth`}
      />
    </motion.a>
  );
};
export default HoverImageLink;
