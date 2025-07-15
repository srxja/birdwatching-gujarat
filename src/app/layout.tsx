import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'; // <-- I fixed the import syntax for you

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// I've updated the title and description to match your project
export const metadata: Metadata = {
  title: "Birdwatching in Gujarat",
  description: "Your guide to the amazing birds of Gujarat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* <-- 1. The Navbar component is added here */}
        
        {/* 2. We wrap the page content in a <main> tag with padding */}
        <main className="pt-20"> 
          {children}
        </main>
      </body>
    </html>
  );
}