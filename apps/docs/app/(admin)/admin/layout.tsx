import * as React from "react";

import Head from "./@components/head";
import VerticalNavbar from "./@components/vertical-navbar";

export default async function LayoutAdmin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex justify-start items-start gap-5 min-h-screen w-full bg-white dark:bg-[#030712] rounded-md p-2">
      <VerticalNavbar />
      <div className="w-full h-full">
        {/* @ts-ignore */}
        <Head />
        {children}
      </div>
    </div>
  );
}
