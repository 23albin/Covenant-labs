
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import "./icon.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Covenant Research — Open Reports for Curious Minds",
  description:
    "Clear, carefully sourced reports on new ideas in science, mathematics, and computing. Independent research, free for everyone.",

  verification: {
    google: "TGzvwljpsdhfTrGUYdMDkqZFYS1cHDW6mvl7k--5tuc",
  },

  openGraph: {
    title: "Covenant Research — Open Reports for Curious Minds",
    description:
      "Explore thoughtful, free-to-read reports on science, mathematics, and computing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/icon.png?v=2" />
      </head>
      <body>{children}</body>
    </html>
  );
}
