import type { Metadata } from "next";
import NavBar from "@/components/layout/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Francis Cejas — Developer, Debater & Explorer",
  description:
    "Computer Science student building practical software and exploring mathematics, artificial intelligence, and ideas worth debating.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">
        <Toaster richColors position="top-right" />
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
