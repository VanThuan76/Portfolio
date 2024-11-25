"use client";

import React from "react";
import dynamic from "next/dynamic";

const ModalAuth = dynamic(() => import("@repo/auth/components/modal"), {
  ssr: false,
});
const ModalBlog = dynamic(
  () => import("../app/[locale]/(pages)/blog/components/modals/blog"),
  { ssr: false },
);

const ModalProvider = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <React.Fragment>
      <ModalBlog />
      <ModalAuth />
    </React.Fragment>
  );
};

export default ModalProvider;
