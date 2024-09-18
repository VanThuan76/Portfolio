import type {
    AppRouterInstance,
    NavigateOptions,
} from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

type EventsTypes = "routeStart" | "routeComplete" | "routeError";

class EventsHandler {
    private static _instance: EventsHandler;

    private constructor() {
        this.handlers = {
            routeStart: undefined,
            routeComplete: undefined,
            routeError: undefined,
        };
    }

    public static get getInstance() {
        // Return the instance if it exists, otherwise create a new one
        return this._instance || (this._instance = new this());
    }

    handlers: Record<EventsTypes, Function | undefined>;

    on(event: EventsTypes, handler: Function) {
        if (this.handlers[event]) {
            throw new Error(`Event ${event} already has a handler, please use off() to remove it first.`);
        }

        this.handlers[event] = handler;
    }

    off(event: EventsTypes) {
        if (this.handlers[event]) {
            this.handlers[event] = undefined;
        }
    }

    emit(event: EventsTypes, ...args: any[]) {
        if (this.handlers[event]) {
            const handler = this.handlers[event];
            handler?.(...args); // Call the handler
        }
    }
}


type RouterWithEvents = AppRouterInstance & {
    events: EventsHandler & {
        onRouteStart?: () => boolean;
        onRouteComplete?: () => void;
    };
};

const injectEvents = (
    router: RouterWithEvents,
    link: string | null,
    callback: () => void
) => {
    const { events } = router;

    // emit the routeChangeStart event
    events.emit("routeStart", link);

    // when onRouteStart is defined and returns false, stop the navigation
    if (events.onRouteStart && events.onRouteStart() === false) {
        return;
    }

    // listen if routeError event is emitted
    events.on("routeError", (error: any) => {
        console.error(error);
        return;
    });

    // call the callback
    try {
        callback();
    } catch (error) {
        events.emit("routeError", error);
    }

    // emit the routeChangeComplete event
    events.emit("routeComplete", link);

    // when onRouteComplete is defined, call it after the navigation is complete
    if (events.onRouteComplete) {
        events.onRouteComplete();
    }

    // remove the routeError event listener
    events.off("routeError");
};

const useRouterWithEvents = (): RouterWithEvents => {
    const nextRouter = useRouter();

    const router: RouterWithEvents = {
        ...nextRouter,
        events: EventsHandler.getInstance,
        /**
         * Original Navigate to the previous history entry functionality with events.
         */
        back: () => {
            injectEvents(router, null, () => {
                // navigate back
                nextRouter.back();
            });
        },
        /**
         * Original Refresh the current page functionality with events.
         */
        refresh: () => {
            injectEvents(router, null, () => {
                // refresh the page
                nextRouter.refresh();
            });
        },
        /**
         * Original Navigate to the next history entry functionality with events.
         */
        forward: () => {
            injectEvents(router, null, () => {
                // navigate forward
                nextRouter.forward();
            });
        },
        /**
         * Original Navigate to the provided href functionality with events.
         */
        push: (href: string, options?: NavigateOptions) => {
            injectEvents(router, href, () => {
                // navigate to the path
                nextRouter.push(href, options);
            });
        },
        /**
         * Original Navigate to the provided href functionality with events.
         */
        replace: (href: string, options?: NavigateOptions) => {
            injectEvents(router, href, () => {
                // replace the path
                nextRouter.replace(href, options);
            });
        },
        /**
         * Original Prefetch the provided href functionality with events.
         */
        prefetch: (href: string, options?: any) => {
            injectEvents(router, href, () => {
                // prefetch the path
                nextRouter.prefetch(href, options);
            });
        },
    };

    return router;
};

export default useRouterWithEvents;
