"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function usePageLoading() {
  const pathname = usePathname();
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    // Bắt đầu tải trang khi pathname thay đổi
    setIsPageLoading(true);

    // Đợi một khoảng thời gian ngắn để mô phỏng thời gian tải
    const timeout = setTimeout(() => {
      setIsPageLoading(false);
    }, 500); // Điều chỉnh thời gian phù hợp với thời gian tải của trang

    // Dọn dẹp timeout khi pathname thay đổi hoặc khi thành phần unmount
    return () => clearTimeout(timeout);
  }, [pathname]);

  return isPageLoading;
}

export default usePageLoading;
