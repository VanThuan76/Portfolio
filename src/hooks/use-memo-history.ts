"use client";

import { useEffect } from "react";
import { useLocalStorage } from "./use-local";

type Page = string;

function useMemoHistoryPage() {
  const [recentPages, setRecentPages] = useLocalStorage<Page[]>(
    "recentPages",
    [],
  );

  useEffect(() => {
    function updateRecentPages(newPage: Page) {
      const existingIndex = recentPages.findIndex((page) => page === newPage);
      if (existingIndex !== -1) {
        const updatedPages = [
          newPage,
          ...recentPages.slice(0, existingIndex),
          ...recentPages.slice(existingIndex + 1),
        ];
        setRecentPages(updatedPages);
      } else {
        const updatedPages = [newPage, ...recentPages.slice(0, 2)];
        setRecentPages(updatedPages);
      }
    }

    function handleRouteChange() {
      const currentPage = window.location.pathname;
      updateRecentPages(currentPage);
    }

    window.addEventListener("routechange", handleRouteChange);

    return () => {
      window.removeEventListener("routechange", handleRouteChange);
    };
  }, [recentPages, setRecentPages]);

  return recentPages;
}

export default useMemoHistoryPage;
