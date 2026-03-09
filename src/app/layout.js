import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Belal Bahaa | MERN Stack Developer",
  description:
    "Portfolio of Belal Bahaa — a MERN Stack Developer specializing in high-performance web applications with React, Next.js, and Tailwind CSS.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased selection:bg-crema-500 selection:text-espresso-900`}
      >
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
