/* import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prijavi Problem",
  description: "Sistem za prijavu i evidenciju problema u lokalnoj zajednici",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>Prijavi Problem</h1>
        </header>
        <main className="container">{children}</main>
        <footer>
          <p>&copy; 2025 Prijavi Problem. Sva prava zadržana.</p>
        </footer>
      </body>
    </html>
  );
}
 */


/* "use client"; */
/* 
import './globals.css';
import React from 'react';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-900 text-white">
        <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
          <h1 className="text-xl font-bold">Meško Development</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
} */

  import './globals.css';
import React from 'react';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-900 text-white">
        <Navbar />
        <main >{children}</main> {/* pt-20 zbog fiksiranog navbar-a */}
        <Footer />
      </body>
    </html>
  );
}
