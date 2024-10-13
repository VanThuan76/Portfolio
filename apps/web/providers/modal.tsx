"use client";

import React from "react";
import ModalComment from "../app/[locale]/blog/_components/modal-comment";

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
    </React.Fragment>
  );
};

export default ModalProvider;
