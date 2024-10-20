import { Product } from "@/app/types/product";
import AppContainer from "../../layout/AppContainer";
import AppSection from "../../layout/AppSection";
import Heading3 from "../../typography/Heading3";

interface FeaturesProps {
  product: Product;
}

const Features = ({ product }: FeaturesProps) => {
  return (
    <AppContainer>
      <AppSection>
        <div className="flex md:flex-row flex-col gap-y-8">
          <div className="md:w-[50%] space-y-7">
            <Heading3>Features</Heading3>
            <p>{product.features}</p>
          </div>
          <div className=" md:w-[50%] flex  md:justify-center ">
            <div className="lg:w-[350px] space-y-7">
              <Heading3>in the box</Heading3>
              <div className="flex flex-col gap-y-2">
                {product.includes.map((item, index) => (
                  <div key={index} className=" flex gap-x-4">
                    <span className="text-primary">{item.quantity}x</span>
                    <span>{item.item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default Features;
