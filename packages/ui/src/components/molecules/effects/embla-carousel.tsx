import React, { useCallback, useEffect, useRef } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import useEmblaCarousel from "embla-carousel-react";

import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import { cn } from "@utils/tw";

const TWEEN_FACTOR_BASE = 0.2;
const AUTOPLAY_INTERVAL = 1000;

type SlideType = {
  url: string;
  alt: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
  className?: string;
  isBasic?: boolean;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, className, isBasic = true } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    WheelGesturesPlugin(),
  ]);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__parallax__layer") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap &&
          slidesInSnap.forEach((slideIndex) => {
            if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

            if (engine.options.loop) {
              engine.slideLooper.loopPoints.forEach((loopItem) => {
                const target = loopItem.target();

                if (slideIndex === loopItem.index && target !== 0) {
                  const sign = Math.sign(target);

                  if (sign === -1) {
                    diffToTarget = scrollSnap - (1 + scrollProgress);
                  }
                  if (sign === 1) {
                    diffToTarget = scrollSnap + (1 - scrollProgress);
                  }
                }
              });
            }

            const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
            const tweenNode = tweenNodes.current[slideIndex];
            if (tweenNode)
              tweenNode.style.transform = `translateX(${translate}%)`;
          });
      });
    },
    [],
  );

  const autoplay = useCallback(() => {
    if (!emblaApi || !isBasic) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);

    autoplayRef.current = setInterval(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    }, AUTOPLAY_INTERVAL);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax);

    autoplay();

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [emblaApi, tweenParallax, autoplay]);

  return (
    <div className={cn("max-w-2xl", isBasic ? "mr-auto" : "mx-auto")}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex" style={{ marginLeft: "calc(1rem * -1)" }}>
          {slides.map((item, index) => (
            <div
              className={cn(
                "pl-4 transform flex-shrink-0",
                isBasic ? "min-w-[50px]" : "min-w-[350px]",
              )}
              key={index}
            >
              <div
                className={cn(
                  "relative flex justify-center h-full overflow-hidden",
                  isBasic ? "w-auto rounded-md" : "w-[350px] rounded-2xl",
                )}
              >
                <LoaderImage
                  isLoader={false}
                  src={item.url}
                  alt={item.alt}
                  width={350}
                  height={300}
                  className={cn(
                    "block object-cover w-full h-full max-w-none",
                    className,
                  )}
                  style={
                    !isBasic
                      ? {
                          marginRight: ".84rem",
                          WebkitMaskImage: "url(/mask-project.svg)",
                          maskImage: "url(/mask-project.svg)",
                          WebkitMaskSize: "cover",
                          maskSize: "cover",
                          overflow: "hidden",
                          position: "relative",
                          transition: "width 0.5s",
                          width: "100%",
                          height: "100%",
                        }
                      : {}
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
