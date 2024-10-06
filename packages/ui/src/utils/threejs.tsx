"use client";

import React from "react";
import { r3f } from "@utils/r3f";

export const Three = ({ children }: { children: React.ReactNode }) => {
  return <r3f.In>{children} </r3f.In>;
};
