import AppContainer from "../layout/AppContainer";
import AppSection from "../layout/AppSection";
import Heading2 from "../typography/Heading2";
import Image from "next/image";
const BestGearSection = () => {
  return (
    <AppContainer>
      <AppSection>
        <div className="lg:grid grid-cols-2 gap-x-[30px] hidden ">
          <div className="flex justify-center items-center">
            <div className="w-[445px] space-y-[2rem]">
              <Heading2>
                Bringing you the <span className="text-primary">best </span>
                audio gear
              </Heading2>
              <p>
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
          </div>
          <div>
            <Image
              src={"/assets/shared/desktop/image-best-gear.jpg"}
              width={540}
              height={588}
              alt={"best-gear-image"}
              className="rounded-md w-full"
            />
          </div>
        </div>
        <div className="md:flex gap-x-[30px] hidden lg:hidden  flex-col-reverse gap-y-12">
          <div className="flex justify-center items-center">
            <div className="w-[573px] space-y-[2rem] text-center">
              <Heading2>
                Bringing you the <span className="text-primary">best </span>
                audio gear
              </Heading2>
              <p>
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
          </div>
          <div>
            <Image
              src={"/assets/shared/tablet/image-best-gear.jpg"}
              width={540}
              height={588}
              alt={"best-gear-image"}
              className="rounded-md w-full"
            />
          </div>
        </div>
        <div className="flex gap-x-[30px] md:hidden lg:hidden  flex-col-reverse gap-y-12">
          <div className="flex justify-center items-center">
            <div className=" space-y-[2rem] text-center">
              <Heading2>
                Bringing you the <span className="text-primary">best </span>
                audio gear
              </Heading2>
              <p>
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
          </div>
          <div>
            <Image
              src={"/assets/shared/mobile/image-best-gear.jpg"}
              width={540}
              height={588}
              alt={"best-gear-image"}
              className="rounded-md w-full"
            />
          </div>
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default BestGearSection;
