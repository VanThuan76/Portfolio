import { useCallback, useEffect } from "react";

function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T["addEventListener"]> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement["addEventListener"]>),
    );
  }
}

function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args:
    | Parameters<T["removeEventListener"]>
    | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(
      ...(args as Parameters<HTMLElement["removeEventListener"]>),
    );
  }
}

export const isBrowser = typeof window !== "undefined";

export const isNavigator = typeof navigator !== "undefined";

export const useBeforeUnload = (
  enabled: boolean | (() => boolean) = true,
  message?: string,
) => {
  const handler = useCallback(
    (event: BeforeUnloadEvent) => {
      const finalEnabled = typeof enabled === "function" ? enabled() : true;

      if (!finalEnabled) {
        return;
      }

      event.preventDefault();

      if (message) {
        event.returnValue = message;
      }

      return message;
    },
    [enabled, message],
  );

  const popStateHandler = useCallback(
    (event: PopStateEvent) => {
      const finalEnabled = typeof enabled === "function" ? enabled() : true;

      if (
        finalEnabled &&
        !window.confirm(message || "Are you sure you want to leave?")
      ) {
        event.preventDefault();
        window.history.pushState(null, "", window.location.href);
      }
    },
    [enabled, message],
  );

  useEffect(() => {
    if (!enabled) {
      return;
    }

    on(window, "beforeunload", handler);

    on(window, "popstate", popStateHandler);

    return () => {
      off(window, "beforeunload", handler);
      off(window, "popstate", popStateHandler);
    };
  }, [enabled, handler, popStateHandler]);
};
