import { Product } from "@/app/types/product";
import Image from "next/image";
import AppContainer from "../../layout/AppContainer";
import AppSection from "../../layout/AppSection";
import Overline from "../../typography/Overline";
import Heading2 from "../../typography/Heading2";
import Button1 from "../../ui/Button1";
interface ProductCardProps {
  product: Product;
  index: number;
}
const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <AppContainer>
      <AppSection>
        <div
          className={`flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="w-[50%]">
            <Image
              src={product.image.desktop}
              width={540}
              height={560}
              alt={product.name}
              key={product.id}
              className="w-full rounded-[8px]"
            />
          </div>
          <div className="flex items-center justify-center w-[50%]">
            <div className="w-[445px] gap-y-6 flex flex-col">
              <Overline color={"text-primary"}>New Product</Overline>
              <Heading2>{product.name}</Heading2>
              <p>{product.description}</p>
              <Button1>See product</Button1>
            </div>
          </div>
        </div>
      </AppSection>
    </AppContainer>
  );
};
export default ProductCard;
