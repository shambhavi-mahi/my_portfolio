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
  title: "Shambhavi — Full-Stack Developer",
  description:
    "B.Tech CSE Student & Full-Stack Developer building software that disappears into the experience. Explore projects in Java, Python, React, and more.",
  keywords: [
    "Full-Stack Developer",
    "Java",
    "Python",
    "React",
    "Spring Boot",
    "Flask",
    "Portfolio",
    "Shambhavi",
  ],
  authors: [{ name: "Shambhavi" }],
  openGraph: {
    type: "website",
    title: "Shambhavi — Full-Stack Developer",
    description:
      "Building software that disappears into the experience. Explore projects in Java, Python, React, and more.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shambhavi — Full-Stack Developer",
    description: "Building software that disappears into the experience.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Prevent flash of wrong theme */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',t||(d?'dark':'light'));}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ background: "var(--background)", color: "var(--foreground)" }}>{children}</body>
    </html>
  );
}
