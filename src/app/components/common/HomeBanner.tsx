import { Product } from "@/app/types/product";
import AppContainer from "../layout/AppContainer";
import AppSection from "../layout/AppSection";
export interface HomeBannerProps {
  products: Product[];
}
const HomeBanner = ({ products }: HomeBannerProps) => {
  return (
    <div className="bg-dark">
      <AppContainer>
        <AppSection>
          {products.map((product) => (
            <p key={product.id} className="text-white">
              {product.category}
            </p>
          ))}
        </AppSection>
      </AppContainer>
    </div>
  );
};

export default HomeBanner;
