import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APP PORTFOLIO | Andika Permana Putra",
  description:
    "Portfolio website of Andika Permana Putra - Fullstack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Fullstack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "Andika Permana Putra",
  ],
  authors: [{ name: "Andika Permana Putra" }],
  openGraph: {
    title: "APP PORTFOLIO | Andika Permana Putra",
    description:
      "Portfolio website of Andika Permana Putra - Fullstack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
