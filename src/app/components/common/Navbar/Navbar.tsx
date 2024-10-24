"use client";
import Image from "next/image";
import AppContainer from "../../layout/AppContainer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { categories } from "../CategorySection/CategorySection";
import Button3 from "../../ui/Button3";
import Heading6 from "../../typography/Heading6";
import AppSection from "../../layout/AppSection";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setMenu(false);
  };
  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden"; // Prevent body scroll
    } else {
      document.body.style.overflow = "auto"; // Restore body scroll when menu is closed
    }
  }, [menu]);

  return (
    <div className="bg-dark relative">
      <AppContainer>
        <header className="flex justify-between border-b border-neutral-600 py-8">
          {/* Hamburger Icon */}
          <Image
            src="/assets/shared/tablet/icon-hamburger.svg"
            width={16}
            height={15}
            alt="icon-hamburger"
            className="lg:hidden cursor-pointer"
            onClick={toggleMenu}
          />

          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/shared/desktop/logo.svg"
              width={143}
              height={25}
              alt="logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="text-white gap-x-8 text-[13px] font-bold uppercase tracking-[2px] hidden lg:flex">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Link href="/headphones" className="hover:text-primary">
              Headphones
            </Link>
            <Link href="/speakers" className="hover:text-primary">
              Speakers
            </Link>
            <Link href="/earphones" className="hover:text-primary">
              Earphones
            </Link>
          </ul>

          {/* Cart Icon */}
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            width={23.33}
            height={20}
            alt="icon-cart"
          />
        </header>
      </AppContainer>

      {/* Hamburger Menu & Overlay */}
      {menu && (
        <div className="absolute top-[89.59px] left-0 w-full h-[calc(100vh-89.59px)] lg:hidden flex md:items-center bg-white z-30 overflow-y-auto  pt-[3rem] md:pt-0">
          <AppContainer>
            <AppSection>
              <div className="grid grid-cols-1 gap-y-24 pb-20 md:grid-cols-3 md:gap-x-[30px]">
                {categories.map((category) => (
                  <div
                    className="bg-lightGray h-[210px] rounded-[8px] relative flex justify-center items-center text-center"
                    key={category.id}
                  >
                    <Image
                      src={category.image}
                      width={178}
                      height={160}
                      alt="category-image"
                      className="absolute top-[-30%] left-[50%] translate-x-[-50%] "
                    />
                    <div className="mt-[6rem]">
                      <Heading6>{category.category}</Heading6>
                      <Link href={category.link} onClick={handleLinkClick}>
                        <Button3>SHOP</Button3>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </AppSection>
          </AppContainer>
        </div>
      )}
    </div>
  );
};

export default Navbar;
