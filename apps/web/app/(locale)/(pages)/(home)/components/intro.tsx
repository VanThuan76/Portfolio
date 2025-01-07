"use client";

import { useTranslations } from "next-intl";
import { useEffect, useMemo } from "react";

import { GooeyText } from "@repo/design-system/components/molecules/effects/text-gooey-morphing";

function Intro({ onEnd }: { onEnd: () => void }) {
  const t = useTranslations("intro_detail");

  const texts = [
    t("durable"),
    t("determination"),
    t("commitment"),
    t("creativity"),
  ];
  const morphTime = 1;
  const cooldownTime = 0.25;
  const bufferTime = 1.25;

  const totalTime = useMemo(() => {
    const transitions = texts.length;
    return (transitions * (morphTime + cooldownTime) + bufferTime) * 1000;
  }, [texts, morphTime, cooldownTime, bufferTime]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onEnd();
    }, totalTime);

    return () => clearTimeout(timer);
  }, [onEnd, totalTime]);

  return (
    <div className="flex items-center justify-center h-full min-h-screen">
      <GooeyText
        texts={texts}
        morphTime={morphTime}
        cooldownTime={cooldownTime}
        className="font-bold"
      />
    </div>
  );
}

export default Intro;
