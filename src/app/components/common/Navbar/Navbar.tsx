import Image from "next/image";
import AppContainer from "../../layout/AppContainer";
import Link from "next/link";

const links = [
  { label: "Home", link: "/" },
  { label: "Headphones", link: "/headphones" },
  { label: "Speakers", link: "/speakers" },
  { label: "Earphones", link: "/earphones" },
];

const Navbar = () => {
  return (
    <div className="bg-dark">
      <AppContainer>
        <header className="flex justify-between border-b border-lightGray py-8 ">
          <Image
            src={"/assets/shared/tablet/icon-hamburger.svg"}
            width={16}
            height={15}
            alt="icon-hamburger"
            className="lg:hidden"
          />
          <Image
            src={"/assets/shared/desktop/logo.svg"}
            width={143}
            height={25}
            alt="logo"
          />

          <ul className="text-white  gap-x-8 text-[13px] font-bold uppercase tracking-[2px]  hidden  lg:flex">
            {links.map((link, index) => (
              <Link href={link.link} key={index} className="hover:text-primary">
                {link.label}
              </Link>
            ))}
          </ul>
          <Image
            src={"/assets/shared/desktop/icon-cart.svg"}
            width={23.33}
            height={20}
            alt="icon-cart"
          />
        </header>
      </AppContainer>
    </div>
  );
};

export default Navbar;
