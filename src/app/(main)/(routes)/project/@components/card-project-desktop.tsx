"use client";
import { IProject } from "@/server/data/types/project";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import CardParallax from "@/components/ui/card-parallax";

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
    <div
      ref={container}
      className="hidden md:block w-full lg:w-[80%] h-full relative mt-12"
    >
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
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default CardProjectDesktop;
