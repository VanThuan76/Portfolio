import { useEffect, useState, MutableRefObject } from "react";
import { useThrottleFn } from "../utils/use-throttle-fn";

// Types for utility functions and components
type TargetType = HTMLElement | Element | Window | Document | EventTarget;
type TargetValue<T> = T | undefined | null;
export type BasicTarget<T extends TargetType = Element> =
  | (() => TargetValue<T>)
  | TargetValue<T>
  | MutableRefObject<TargetValue<T>>;

// Helper function to get the target element
function getTargetElement<T extends TargetType>(
  target: BasicTarget<T>,
  defaultElement?: T,
) {
  if (typeof window === "undefined") return undefined;
  if (!target) return defaultElement;

  return typeof target === "function"
    ? target()
    : "current" in target
      ? target.current
      : target;
}

// Scroll parent utility
const scrollCache = new Map<Element, Element>();
function getScrollParent(
  axis: "x" | "y",
  node: Element | null,
): Element | null {
  if (!node) return null;
  if (scrollCache.has(node)) return scrollCache.get(node) || null;

  let parent = node.parentElement;
  while (parent && !isScrollElement(axis, parent)) {
    parent = parent.parentElement;
  }
  if (parent) scrollCache.set(node, parent);
  return parent;
}

function isScrollElement(axis: "x" | "y", node: Element): boolean {
  const overflow = getComputedStyle(node)[`overflow${axis.toUpperCase()}`];
  return overflow === "auto" || overflow === "scroll";
}

// Sticky hook
export interface UseStickyParams {
  axis?: "x" | "y";
  nav: number;
}

export function useSticky(
  targetElement: BasicTarget<HTMLElement>,
  { axis = "y", nav = 0 }: UseStickyParams,
  scrollElement?: BasicTarget<HTMLElement>,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [isSticky, setSticky] = useState(false);

  const { run: scrollHandler } = useThrottleFn(() => {
    const element = getTargetElement(targetElement);
    if (!element) {
      return;
    }
    const rect = element.getBoundingClientRect();
    if (axis === "y") {
      setSticky(rect?.top <= nav);
    } else {
      setSticky(rect?.left <= nav);
    }
  }, 50);

  useEffect(() => {
    const element = getTargetElement(targetElement) || null;
    const scrollParent =
      getTargetElement(scrollElement) || getScrollParent(axis, element);
    if (!element || !scrollParent) {
      return;
    }

    scrollParent.addEventListener("scroll", scrollHandler);
    scrollHandler();
    return () => {
      scrollParent.removeEventListener("scroll", scrollHandler);
    };
  }, [axis, targetElement, scrollElement, scrollHandler]);
  return [isSticky, setSticky];
}
