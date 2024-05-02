import * as React from "react";
import VerticalNavbar from "@/app/(admin)/admin/@components/vertical-navbar";
import Head from "@/app/(admin)/admin/@components/head";

export default async function LayoutAdmin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex justify-start items-start gap-5 min-h-screen w-full bg-white dark:bg-[#030712] rounded-md p-2">
      <VerticalNavbar />
      <div className="w-full h-full">
        <Head />
        {children}
      </div>
    </div>
  );
}
