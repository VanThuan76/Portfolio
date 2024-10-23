"use client";

import { m } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 19,
      mass: 1.2,
    },
  },
};

function Container({
  children,
  className,
  isActive,
}: React.HTMLProps<HTMLDivElement> & { isActive: boolean }) {
  return (
    <m.div
      variants={container}
      initial="hidden"
      animate={isActive ? "show" : "hidden"}
      className={className}
    >
      {children}
    </m.div>
  );
}

function Item({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <m.div className={className} variants={item}>
      {children}
    </m.div>
  );
}

export { Container, Item };
