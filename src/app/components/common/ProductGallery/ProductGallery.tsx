import { Product } from "@/app/types/product";
import Image from "next/image";
import AppContainer from "../../layout/AppContainer";
import AppSection from "../../layout/AppSection";

interface ImageProps {
  product: Product;
}
const ProductGallery = ({ product }: ImageProps) => {
  return (
    <AppContainer>
      <AppSection>
        <div className="lg:gap-x-[30px] gap-y-[20px] gap-x-[20px] md:flex-row flex-col flex ">
          <div className="md:w-[40%]  justify-between flex flex-col gap-y-[20px]">
            <Image
              src={product.gallery.first.desktop}
              alt={product.name}
              width={445}
              height={280}
              className="rounded-lg w-full h-[280px] lg:block hidden"
            />
            <Image
              src={product.gallery.first.tablet}
              alt={product.name}
              width={445}
              height={280}
              className="rounded-lg w-full lg:h-[280px] h-[174px] hidden md:block lg:hidden"
            />
            <Image
              src={product.gallery.first.mobile}
              alt={product.name}
              width={445}
              height={280}
              className="rounded-lg w-full lg:h-[280px] h-[174px]  md:hidden block lg:hidden"
            />
            <Image
              src={product.gallery.second.desktop}
              alt={product.name}
              width={445}
              height={280}
              className="rounded-lg w-full h-[280px] lg:block hidden"
            />
            <Image
              src={product.gallery.second.tablet}
              alt={product.name}
              width={445}
              height={280}
              className="rounded-lg w-full lg:h-[280px] h-[174px] md:block hidden lg:hidden"
            />
            <Image
              src={product.gallery.second.mobile}
              alt={product.name}
              width={445}
              height={280}
              className="rounded-lg w-full lg:h-[280px] h-[174px] md:hidden block lg:hidden"
            />
          </div>
          <div className="md:w-[60%]">
            {" "}
            <Image
              src={product.gallery.third.desktop}
              alt={product.name}
              width={635}
              height={592}
              className="rounded-lg w-full lg:h-[592px] h-[368px] hidden lg:block"
            />
            <Image
              src={product.gallery.third.tablet}
              alt={product.name}
              width={635}
              height={368}
              className="rounded-lg w-full lg:h-[592px] h-[368px] md:block hidden lg:hidden"
            />
            <Image
              src={product.gallery.third.mobile}
              alt={product.name}
              width={635}
              height={368}
              className="rounded-lg w-full lg:h-[592px] h-[368px] md:hidden block lg:hidden"
            />
          </div>
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default ProductGallery;
