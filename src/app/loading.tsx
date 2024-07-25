"use client";

import BoxReveal from "@/components/ui/box-reveal";

export default function Loading() {
  return (
    <BoxReveal boxColor={"#555"} duration={0.3}>
      <div className="w-full min-h-screen rounded-md"></div>
    </BoxReveal>
  );
}
