"use client";

import React from "react";
import ModalComment from "../app/[locale]/blog/_components/modal-comment";
import ModalBlog from "../app/[locale]/blog/_components/modal-blog";

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
      <ModalComment />
      <ModalBlog />
    </React.Fragment>
  );
};

export default ModalProvider;
