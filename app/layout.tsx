import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import BackgroundOrbs from "@/components/Background-Orbs";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "france's portfolio",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-full flex flex-col antialiased pt-10`}>
        <BackgroundOrbs />
        <Toaster richColors position="top-right" />
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}