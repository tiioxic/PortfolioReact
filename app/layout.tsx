import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({ subsets: ["latin"],
  variable: "--font-caption",
 });

export const metadata: Metadata = {
  title: "Antoine Le Jean • Software Engineer",
  description: "Developer about React, Symfony and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className={cn(GeistSans.variable, AnekTelugu.variable, "font-sans h-full bg-background text-foreground")}>{children}</body>
    </html>
  );
}
