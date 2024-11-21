"use client";

import React from "react";

import ModalAuth from "@repo/auth/components/modal";

import ModalBlog from "../app/[locale]/(pages)/blog/components/modals/blog";

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
