"use client";

import { useContext, useEffect, useTransition } from "react";
import { ActionQueueContext } from "next/dist/shared/lib/router/action-queue";
import { LoaderIcon } from "lucide-react";

export default function NavigationEvents() {
  const actionQueue = useContext(ActionQueueContext);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!actionQueue) {
      return;
    }
    const originalDispatch = actionQueue.dispatch;
    actionQueue.dispatch = (...args) => {
      startTransition(() => {
        originalDispatch.apply(actionQueue, args);
      });
    };
    return () => {
      actionQueue.dispatch = originalDispatch;
    };
  }, [actionQueue]);

  if (!isPending) {
    return null;
  }

  return (
    <div className="z-[99] fixed bottom-24 md:bottom-8 right-4 md:right-16 rounded border bg-slate-50 dark:bg-slate-700/50 p-4 shadow-2xl">
      <div className="flex items-center gap-2 font-bold">
        <LoaderIcon className="text-ba animate-spin" size={14} />
        The page is redirecting
      </div>
      <span className="text-sm">Wait a minute, bro!</span>
    </div>
  );
}
