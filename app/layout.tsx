import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Bebas_Neue, Instrument_Serif } from "next/font/google";
import "./globals.css";

/* Light theme fonts (original portfolio) */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Dark / cinematic theme fonts */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display-face",
  display: "swap",
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif-face",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Shambhavi — Full-Stack Developer",
  description:
    "B.Tech CSE Student & Full-Stack Developer building modern web applications with Java, Python, React, and more.",
  keywords: ["Full-Stack Developer", "Java", "Python", "React", "Portfolio", "Shambhavi"],
  authors: [{ name: "Shambhavi" }],
  openGraph: {
    type: "website",
    title: "Shambhavi — Full-Stack Developer",
    description: "Building software that disappears into the experience.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${bebasNeue.variable} ${instrumentSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent flash of wrong theme — reads localStorage or system preference */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',t||(d?'dark':'light'));}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
