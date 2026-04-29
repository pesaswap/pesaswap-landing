import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/lenis";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Pesaswap — Payment Orchestration Infrastructure for East Africa",
  description: "The rail powering cross-border commerce into Africa. Smart routing, real-time FX settlement, and 3-way automated reconciliation across 15+ direct integrations."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bricolage.variable} ${figtree.variable} antialiased w-full min-h-screen overflow-x-hidden`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-on-primary focus:px-4 focus:py-2 focus:rounded-[10px] focus:text-sm focus:font-medium">
          Skip to main content
        </a>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
