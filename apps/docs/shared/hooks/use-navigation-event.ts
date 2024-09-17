"use client";

import { usePathname } from "next/navigation";
import { useContext, useEffect, useTransition } from "react";
import { ActionQueueContext } from "next/dist/shared/lib/router/action-queue";

import { addPageToCache } from "@store/app-slice";
import { useAppDispatch } from "@store/index";

export function useNavigationEvent() {
  const dispatch = useAppDispatch();
  const pathName = usePathname();

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

  useEffect(() => {
    if (!isPending) {
      dispatch(addPageToCache(pathName));
    }
  }, [isPending, pathName]);

  return isPending;
}
