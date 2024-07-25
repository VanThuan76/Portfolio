"use client";
import { useEffect, useRef } from "react";
import { IProject } from "@/server/data/types/project";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

import { TracingBeam } from "@/components/ui/tracing-beam";
import CardParallax from "@/components/ui/card-parallax";
import RetroGrid from "@/components/ui/retro-grid";

interface Props {
  projects: IProject[];
}
const CardProjectDesktop = ({ projects }: Props) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <TracingBeam
      refProp={container}
      className="relative hidden md:block w-full h-full"
    >
      <div ref={container} className="w-full h-full z-50">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          const arrTech = project.tech_stack.split(",");
          const techStacks = arrTech.map((item) => ({
            title: item,
            img: item && `/icon-techstack/${item.toLocaleLowerCase()}.svg`,
          }));
          return (
            <CardParallax
              techStacks={techStacks}
              key={`p_${i}`}
              i={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              {...project}
            />
          );
        })}
      </div>
      <RetroGrid className="fixed top-0 left-0" />
    </TracingBeam>
  );
};

export default CardProjectDesktop;
