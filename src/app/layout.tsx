import type { Metadata } from "next";

import "./globals.css";
import { Manrope } from "@next/font/google";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import ScrollToTopButton from "./components/common/ScrollToTopButton/ScrollToTopButton";
import { CartProvider } from "./context/CartContext";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: " Premium Audio Products | Speakers, Headphones & Earphones",
  description:
    "Explore our curated collection of premium audio products, from high-quality speakers to versatile headphones and earphones. Designed for exceptional sound and style, our products bring immersive audio experiences to your home and on the go.",
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
        <CartProvider>
          <Navbar />
          {children}
          <ScrollToTopButton />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
