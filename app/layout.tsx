import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Francis Cejas | Full-Stack & Backend Systems Engineer",
  description:
    "Systems portfolio of Francis Cejas, a full-stack and backend engineer building dependable APIs, data workflows, and cloud products.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {`try{const saved=localStorage.getItem("portfolio-theme");const theme=saved||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch{}`}
        </Script>
        <Toaster richColors theme="system" position="top-right" />
        {children}
      </body>
    </html>
  );
}
