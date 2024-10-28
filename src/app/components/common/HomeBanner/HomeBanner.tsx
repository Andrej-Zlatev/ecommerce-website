import AppContainer from "../../layout/AppContainer";
import Overline from "../../typography/Overline";
import Heading1 from "../../typography/Heading1";
import Button1 from "../../ui/Button1";
import Heading3 from "../../typography/Heading3";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="bg-dark">
      <AppContainer>
        <div
          className="bg-bannerDesktop bg-cover bg-top bg-no-repeat lg:flex items-center hidden"
          style={{ height: "calc(100vh - 89.6px)" }}
        >
          <div className="w-[40%] flex flex-col gap-6">
            <Overline color="text-neutral-600">New product</Overline>
            <Heading1 color="text-white">XX99 Mark II Headphones</Heading1>
            <p className="text-neutral-400">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link href={"/headphones/4"}>
              <Button1>See product</Button1>
            </Link>
          </div>
        </div>
        <div
          className="bg-bannerTablet text-center  justify-center bg-cover bg-bottom bg-no-repeat md:flex items-center lg:hidden  hidden"
          style={{ height: "calc(100vh - 89.6px)" }}
        >
          <div className="w-[40%] items-center flex flex-col gap-y-6">
            <Overline color="text-neutral-600">New product</Overline>
            <Heading1 color="text-white">XX99 Mark II Headphones</Heading1>
            <p className="text-neutral-400">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link href={"/headphones/4"}>
              <Button1>See product</Button1>
            </Link>
          </div>
        </div>
        <div
          className="bg-bannerMobile text-center  justify-center bg-cover bg-bottom bg-no-repeat flex md:hidden items-center lg:hidden  "
          style={{ height: "calc(100vh - 89.59px)" }}
        >
          <div className="w-[70%] items-center flex flex-col gap-y-6">
            <Overline color="text-neutral-600">New product</Overline>
            <Heading3 color="text-white">XX99 Mark II Headphones</Heading3>
            <p className="text-neutral-400">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link href={"/headphones/4"}>
              <Button1>See product</Button1>
            </Link>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};

export default HomeBanner;
