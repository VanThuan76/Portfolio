import { Suspense } from "react";
import { cn } from "@/lib/tw";
import { Ellipsis } from "lucide-react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "@/components/custom/toogle-theme";
import { TypographyP } from "@/components/ui/typography-p";
import { ThemeProvider } from "@/utils/theme-provider";
import { NavigationEvents } from "@/hooks/navigation-event";
import "./globals.css";

const nextFont = Roboto({
  subsets: ['vietnamese'],
  display: 'swap',
  weight: ['400', '500', '700', '300', '900'],
});

export const metadata: Metadata = {
  title: "Thuan Austin Web",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(nextFont.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className='relative mx-auto flex w-[100vw] min-h-[100vh] flex-col items-center justify-center pb-8 p-4 md:px-8 md:py-10 lg:px-20 lg:py-[80px] bg-[#E2E2E2] dark:bg-[#222222] overflow-auto'>
            {children}
            <TypographyP title={`© Copyright ${new Date().getFullYear()} - Hip`} className="absolute bottom-0 md:bottom-24 right-1/2 translate-x-1/2 text-sm mt-2" />
            <Suspense fallback={null}>
              <NavigationEvents />
            </Suspense>
          </main>
          <DropdownMenuApp />
        </ThemeProvider>
      </body>
    </html>
  );
}

export function DropdownMenuApp() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="fixed bottom-5 right-5 p-1 rounded-xl border border-black bg-dark dark:bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 cursor-pointer" style={{ position: "-webkit-sticky" }}>
          <Ellipsis color="#555" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <ModeToggle />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Resume</DropdownMenuItem>
        <DropdownMenuItem disabled>Chat AI</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
