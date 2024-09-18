interface TransitionHelperArg {
    skipTransition?: boolean;
    classNames?: string[];
    updateDOM: () => Promise<void> | void;
}


export function transitionHelper({
    skipTransition = false,
    classNames = [],
    updateDOM,
}: TransitionHelperArg) {
    // @ts-ignore
    if (skipTransition || !document.startViewTransition) {
        const updateCallbackDone = Promise.resolve(updateDOM()).then(() => { });
        const ready = Promise.reject(Error("View transitions unsupported"));

        // Avoid spamming the console with this error unless the promise is used.
        ready.catch(() => { });

        return {
            ready,
            updateCallbackDone,
            finished: updateCallbackDone,
            skipTransition: () => { },
        };
    }

    document.documentElement.classList.add(...classNames);

    // @ts-ignore
    const transition = document.startViewTransition(updateDOM);

    transition.finished.finally(() =>
        document.documentElement.classList.remove(...classNames)
    );

    return transition;
}
