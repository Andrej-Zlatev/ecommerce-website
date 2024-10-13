import type { Metadata } from "next";

import "./globals.css";
import { Manrope } from "@next/font/google";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased text-[15px] leading-[25px]  font-medium`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
