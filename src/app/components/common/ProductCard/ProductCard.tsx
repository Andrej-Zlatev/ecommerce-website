import { Product } from "@/app/types/product";
import Image from "next/image";
import AppContainer from "../../layout/AppContainer";
import AppSection from "../../layout/AppSection";
import Overline from "../../typography/Overline";
import Heading2 from "../../typography/Heading2";
import Button1 from "../../ui/Button1";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <AppContainer>
      <AppSection>
        <div
          className={`lg:flex  flex-col flex ${
            index % 2 === 0 ? "lg:flex-row " : "lg:flex-row-reverse"
          }  `}
        >
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
              <Link href={`${product.category}/${product.slug}`}>
                <Button1>See product</Button1>
              </Link>
            </div>
          </div>
        </div>
      </AppSection>
    </AppContainer>
  );
};
export default ProductCard;
