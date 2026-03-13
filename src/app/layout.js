import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Belal Bahaa | MERN Stack Developer",
    template: "%s | Belal Bahaa",
  },
  description:
    "Portfolio of Belal Bahaa — a MERN Stack Developer specializing in high-performance web applications with React, Next.js, and Tailwind CSS.",
  keywords: [
    "Belal Bahaa",
    "Belal",
    "Bahaa",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "Full Stack Developer",
  ],
  authors: [{ name: "Belal Bahaa", url: "https://github.com/belal-bahaa" }],
  creator: "Belal Bahaa",
  publisher: "Belal Bahaa",
  alternates: {
    canonical: "/",
  },
  metadataBase: new URL("https://belal-bahaa.vercel.app/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://belal-bahaa.vercel.app/",
    title: "Belal Bahaa | MERN Stack Developer",
    description:
      "Portfolio of Belal Bahaa — a MERN Stack Developer specializing in high-performance web applications with React, Next.js, and Tailwind CSS.",
    siteName: "Belal Bahaa Portfolio",
    images: [
      {
        url: "/og-image.png", // Assuming user will add this or I'll suggest it
        width: 1200,
        height: 630,
        alt: "Belal Bahaa Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Belal Bahaa | MERN Stack Developer",
    description:
      "Portfolio of Belal Bahaa — a MERN Stack Developer specializing in high-performance web applications with React, Next.js, and Tailwind CSS.",
    creator: "@belalbahaa", // Placeholder or real handle
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport = {
  themeColor: "#0a0a0a", // Dark theme color
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body suppressHydrationWarning>
        <div
          className={`${inter.className} antialiased selection:bg-crema-500 selection:text-espresso-900`}
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
