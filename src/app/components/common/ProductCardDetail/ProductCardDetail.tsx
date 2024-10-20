import AppContainer from "../../layout/AppContainer";
import AppSection from "../../layout/AppSection";
import Image from "next/image";
import Button1 from "../../ui/Button1";
import Button5 from "../../ui/Button5";
import Heading6 from "../../typography/Heading6";
import Heading2 from "../../typography/Heading2";
import { Product } from "@/app/types/product";
import Overline from "../../typography/Overline";

interface ProductCardDetailProps {
  product: Product;
}

const ProductCardDetail = ({ product }: ProductCardDetailProps) => {
  return (
    <AppContainer>
      <AppSection>
        <div className={"lg:flex-row  flex-col flex"}>
          <div className="lg:w-[50%]">
            <Image
              src={product.categoryImage.desktop}
              width={540}
              height={560}
              alt={product.name}
              key={product.id}
              className="w-full rounded-[8px] hidden lg:block"
            />
            <Image
              src={product.categoryImage.tablet}
              width={540}
              height={352}
              alt={product.name}
              key={product.id}
              className=" w-full rounded-[8px] hidden md:block lg:hidden mb-12"
            />
            <Image
              src={product.categoryImage.mobile}
              width={540}
              height={352}
              alt={product.name}
              key={product.id}
              className=" w-full rounded-[8px] block md:hidden lg:hidden mb-12"
            />
          </div>
          <div className="flex items-center justify-center lg:w-[50%]">
            <div className="md:w-[445px] w-[327px] gap-y-6 flex flex-col items-center text-center lg:text-left lg:items-start">
              {product.new === true && (
                <Overline color={"text-primary"}>New Product</Overline>
              )}
              <Heading2>{product.name}</Heading2>
              <p>{product.description}</p>
              <Heading6>{`$${product.price}`}</Heading6>
              <div className=" flex gap-x-4">
                <Button5 />
                <Button1>add to card</Button1>
              </div>
            </div>
          </div>
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default ProductCardDetail;
