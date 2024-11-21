import { MutableRefObject, useEffect, useMemo, useRef } from "react";
import type { ThrottleSettings } from "lodash.throttle";
import throttle from "lodash.throttle";

function useLatest<T>(value: T): MutableRefObject<T> {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

function useUnmount(fn: () => void) {
  const fnRef = useLatest(fn);
  useEffect(() => () => fnRef.current(), [fnRef]);
}

const isDev =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test";

export function useThrottleFn<T extends (...args: any) => any>(
  fn: T,
  wait = 100,
  options?: ThrottleSettings,
) {
  if (isDev && typeof fn !== "function") {
    console.error(`useThrottleFn expected a function, got ${typeof fn}`);
  }

  const fnRef = useLatest(fn);
  const throttled = useMemo(
    () =>
      throttle(
        (...args: Parameters<T>) => fnRef.current(...args),
        wait,
        options,
      ),
    [wait, options],
  );

  useUnmount(throttled.cancel);

  return { run: throttled, cancel: throttled.cancel, flush: throttled.flush };
}
