"use client";
import { useTransform, useScroll, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { LoaderImage } from "@/components/custom/loader-image";
import { convertStringDay } from "@/utils/helpers/convert-time";
import { Spline } from "lucide-react";

type Props = {
  i: number;
  title: string;
  finished_date: string;
  description?: string;
  image_url: string;
  progress: any;
  range: [number, number];
  targetScale: number;
  techStacks?: { title: string; img: string }[];
};

const CardParallax = ({
  i,
  title,
  finished_date,
  description,
  image_url,
  progress,
  range,
  targetScale,
  techStacks,
}: Props) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);


  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      ref={container}
      className="min-h-[90vh] w-full flex justify-center items-start sticky top-20 left-0"
    >
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 50}px)` }}
        className="group relative bg-white dark:bg-black flex flex-col w-full h-[370px] px-4 py-2 rounded-md border-2 border-black dark:border-white text-neutarl-700 text-sm shadow-[8px_8px_0px_0px_rgba(0,0,0)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255)] transition duration-200 origin-top"
        onMouseMove={handleMouseMove}
      >
        <h2 className="text-center uppercase m-0 text-2xl font-medium">
          {title}
        </h2>
        <div className="flex h-full mt-4 gap-12">
          <div className="w-[40%] relative top-3">
            <p className="text-base">
              <span className="text-4xl font-title">
                {description && description.charAt(0)}
              </span>
              {description && description.slice(1)}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {techStacks &&
                techStacks.map((tech, i) => {
                  return (
                    <button
                      key={i}
                      className="relative inline-flex h-7 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-between gap-2 rounded-md bg-zinc-200 dark:bg-slate-950 px-3 py-1 text-sm font-medium text-black dark:text-white backdrop-blur-3xl">
                        <LoaderImage
                          src={tech.img}
                          alt={tech.title}
                          isLoader={false}
                          width={50}
                          height={50}
                          className="object-contain w-full h-full"
                        />
                        {tech.title}
                      </span>
                    </button>
                  );
                })}
            </div>
          </div>
          <div className="relative w-[60%] h-full rounded-lg overflow-hidden">
            <motion.div
              className="w-full h-[300px]"
              style={{ scale: imageScale }}
            >
              <LoaderImage
                isLoader={false}
                src={image_url}
                alt={"image"}
                width={355}
                height={300}
                className="object-cover object-top w-full h-full"
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
          }}
        />
      </motion.div>
      <div
        style={{ bottom: `calc(${i * 10 + 224}px)` }}
        className="absolute left-0 bg-white dark:bg-[#222222] w-full p-4 shadow-md rounded-md"
      >
        {description}
      </div>
      <div
        style={{ marginTop: `${i * 20}px` }}
        className="absolute top-1/4 -right-56"
      >
        <div className="w-full relative">
          {i !== 0 && (
            <Spline className="absolute -top-4 -right-5 rotate-[105deg]" />
          )}
        </div>
        {convertStringDay(finished_date)}
      </div>
    </div>
  );
};

export default CardParallax;
