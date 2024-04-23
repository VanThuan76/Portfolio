"use client";
import * as React from "react";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import { m, LazyMotion, domAnimation } from "framer-motion";

interface Props {
  trigger: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  setIsOpen: any;
}
export function CollapsibleAnimate({
  trigger,
  content,
  isOpen,
  setIsOpen,
}: Props) {
  const animate = {
    transition: { type: "tween" },
    height: isOpen ? "auto" : 0,
  };
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <CollapsibleTrigger asChild>{trigger}</CollapsibleTrigger>
      <LazyMotion features={domAnimation} strict>
        <CollapsibleContent className="space-y-2">
          <m.div
            style={{ overflow: "hidden" }}
            initial={{ height: 0, opacity: 1 }}
            animate={animate}
            exit={{ height: 0, opacity: 1 }}
          >
            {content}
          </m.div>
        </CollapsibleContent>
      </LazyMotion>
    </Collapsible>
  );
}
