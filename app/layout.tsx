import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Supreet Singh | Full Stack Developer",
  description:
    "Portfolio of Supreet Singh — Full Stack Developer specializing in React.js, Next.js, TypeScript, and Node.js.",
  keywords: [
    "Supreet Singh",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Supreet Singh" }],
  openGraph: {
    title: "Supreet Singh | Full Stack Developer",
    description:
      "Portfolio of Supreet Singh — Full Stack Developer specializing in React.js, Next.js, TypeScript, and Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.variable}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
