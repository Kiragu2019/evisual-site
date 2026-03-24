import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Import your Navbar and Footer
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Visual Studios",
  description: "Creative Visual Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-[#1a1c1e]">
        {/* 2. Place Navbar here so it shows on every page */}
        <Navbar />
        
        {/* 3. The 'children' represents the content of whatever page you are on */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 4. Place Footer here so it shows on every page */}
        <Footer />
      </body>
    </html>
  );
}