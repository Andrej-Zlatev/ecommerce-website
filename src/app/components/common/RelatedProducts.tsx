import { Product } from "@/app/types/product";
import AppContainer from "../layout/AppContainer";
import AppSection from "../layout/AppSection";
import Image from "next/image";
import Heading3 from "../typography/Heading3";
import Heading5 from "../typography/Heading5";
import Link from "next/link";
interface RelatedProps {
  product: Product;
}

const RelatedProducts = ({ product }: RelatedProps) => {
  return (
    <AppContainer>
      <AppSection>
        <div className="text-center mb-12">
          <Heading3>you may also like</Heading3>
        </div>
        <div className="grid lg:grid-cols-3  grid-cols-1 gap-x-[30px] gap-y-[30px]">
          {product.others.map((other, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between h-[471px] "
            >
              <Image
                src={other.image.desktop}
                width={148}
                height={193}
                alt="product-img"
                className="w-full h-[318px]"
              />
              <Heading5>{other.name}</Heading5>
              <Link
                href={`/${product.category}/${other.slug}`}
                className={
                  "w-[160px] h-[48px] bg-primary hover:bg-secondary text-white uppercase tracking-widest   flex justify-center items-center"
                }
              >
                see product
              </Link>
            </div>
          ))}
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default RelatedProducts;
