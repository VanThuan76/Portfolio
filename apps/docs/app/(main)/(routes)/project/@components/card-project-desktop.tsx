"use client";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

import { IProject } from "@server/data/types/project";

import { TracingBeam } from "@ui/molecules/effects/tracing-beam";
import RetroGrid from "@ui/molecules/frame/retro-grid";

import CardParallax from "@ui/organisms/cards/card-parallax";

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
            className="relative hidden w-full h-full md:block"
        >
            <div ref={container} className="z-50 w-full h-full">
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
