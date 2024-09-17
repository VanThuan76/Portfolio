"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function usePageLoading() {
  const pathname = usePathname();
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    setIsPageLoading(true);

    const timeout = setTimeout(() => {
      setIsPageLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return isPageLoading;
}

export default usePageLoading;
