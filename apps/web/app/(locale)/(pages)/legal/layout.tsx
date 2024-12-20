import { ReactNode } from "react";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <main
      className="h-full max-w-4xl min-h-screen px-4 py-8 mx-auto overflow-y-auto"
      data-lenis-prevent="false"
    >
      {children}
    </main>
  );
}
