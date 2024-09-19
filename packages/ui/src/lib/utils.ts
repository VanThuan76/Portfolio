import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function throttle(fn: (...args: any[]) => any, wait: number) {
    let shouldWait = false

    return function throttledFunction(this: any, ...args: any[]) {
        if (!shouldWait) {
            fn.apply(this, args)
            shouldWait = true
            setTimeout(() => (shouldWait = false), wait)
        }
    }
}
