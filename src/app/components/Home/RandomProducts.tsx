import AppContainer from "../layout/AppContainer";
import AppSection from "../layout/AppSection";
import Image from "next/image";
import Heading1 from "../typography/Heading1";
import Button4 from "../ui/Button4";
import Heading4 from "../typography/Heading4";
import Button2 from "../ui/Button2";
import Link from "next/link";
const RandomProducts = () => {
  return (
    <AppContainer>
      <AppSection>
        <div className="flex flex-col gap-y-9">
          <div className="lg:grid grid-cols-2 gap-x-16 bg-primary h-[560px] bg-patternCircles bg-no-repeat rounded-md  hidden ">
            <div className="relative overflow-hidden">
              <Image
                src={"/assets/home/desktop/image-speaker-zx9.png"}
                alt={"speaker-img"}
                width={410}
                height={493}
                className="absolute bottom-[-2%] left-[60%] translate-x-[-50%] "
              />
            </div>
            <div className=" flex items-center justify-center">
              <div className="text-white mx-auto w-[349px] space-y-[2rem]">
                <Heading1>ZX9 SPEAKER</Heading1>
                <p>
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <Link href={"/speakers/zx9-speaker"}>
                  <Button4>See product</Button4>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:flex bg-primary h-[720px] bg-patternCircles bg-no-repeat rounded-md bg-bottom lg:hidden hidden">
            <div className="flex flex-col items-center justify-center text-center text-white mx-auto w-[349px] space-y-[2rem]">
              <Image
                src={"/assets/home/tablet/image-speaker-zx9.png"}
                alt={"speaker-img"}
                width={197}
                height={237}
              />
              <Heading1>ZX9 SPEAKER</Heading1>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link href={"/speakers/zx9-speaker"}>
                <Button4>See product</Button4>
              </Link>
            </div>
          </div>
          <div className="flex bg-primary h-[720px] bg-patternCircles bg-no-repeat rounded-md bg-bottom lg:hidden md:hidden">
            <div className="flex flex-col items-center justify-center text-center text-white mx-auto w-[349px] space-y-[2rem]">
              <Image
                src={"/assets/home/mobile/image-speaker-zx9.png"}
                alt={"speaker-img"}
                width={197}
                height={237}
              />
              <Heading1>ZX9 SPEAKER</Heading1>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link href={"/speakers/zx9-speaker"}>
                <Button4>See product</Button4>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block bg-zx7Desktop h-[320px] bg-cover rounded-md">
            <div className="w-[40%]  h-full flex items-center justify-center">
              <div className="w-[204px] space-y-[2rem]">
                <Heading4>ZX7 SPEAKER</Heading4>
                <Link href={"/speakers/zx7-speaker"}>
                  <Button2>See product</Button2>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:hidden md:block bg-zx7Tablet h-[320px] bg-cover bg-no-repeat rounded-md">
            <div className="w-[40%]  h-full flex items-center justify-center">
              <div className="w-[204px] space-y-[2rem]">
                <Heading4>ZX7 SPEAKER</Heading4>
                <Link href={"/speakers/zx7-speaker"}>
                  <Button2>See product</Button2>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden lg:hidden block bg-zx7Mobile h-[320px] bg-cover bg-center bg-no-repeat rounded-md">
            <div className="w-[70%]  h-full flex items-center justify-center">
              <div className="w-[204px] space-y-[2rem]">
                <Heading4>ZX7 SPEAKER</Heading4>
                <Link href={"/speakers/zx7-speaker"}>
                  <Button2>See product</Button2>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-x-[30px]">
            <div className="rounded-md h-full overflow-hidden">
              <Image
                src={"/assets/home/desktop/image-earphones-yx1.jpg"}
                width={540}
                height={320}
                alt={"earphones-yx1-pic"}
                className="w-full "
              />
            </div>
            <div className="h-full flex items-center justify-center bg-lightGray rounded-md">
              <div className="w-[204px] space-y-[2rem]">
                <Heading4>YX1 EARPHONES</Heading4>
                <Link href={"/earphones/yx1-earphones"}>
                  <Button2>See product</Button2>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-x-[15px]">
            <div className="rounded-md h-full overflow-hidden">
              <Image
                src={"/assets/home/tablet/image-earphones-yx1.jpg"}
                width={540}
                height={320}
                alt={"earphones-yx1-pic"}
                className="w-full "
              />
            </div>
            <div className="h-full flex items-center justify-center bg-lightGray rounded-md">
              <div className="w-[250px] space-y-[2rem]">
                <Heading4>YX1 EARPHONES</Heading4>
                <Link href={"/earphones/yx1-earphones"}>
                  <Button2>See product</Button2>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid  md:hidden lg:hidden gap-y-9">
            <div className="rounded-md overflow-hidden  h-[200px] ">
              <Image
                src={"/assets/home/mobile/image-earphones-yx1.jpg"}
                width={540}
                height={320}
                alt={"earphones-yx1-pic"}
                className="w-full "
              />
            </div>
            <div className=" flex items-center justify-center bg-lightGray rounded-md  h-[200px] ">
              <div className="w-[340px] space-y-[2rem]">
                <Heading4>YX1 EARPHONES</Heading4>
                <Link href={"/earphones/yx1-earphones"}>
                  <Button2>See product</Button2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default RandomProducts;
