import CategoryBanner from "../components/common/CategoryBanner/CategoryBanner";
import CategorySection from "../components/common/CategorySection/CategorySection";
import ProductList from "../components/common/ProductList/ProductList";
import BestGearSection from "../components/Home/BestGearSection";
import { Product } from "../types/product";

import data from "../data/data.json";

const Headphones = () => {
  const headphones = data.products.filter(
    (product: Product) => product.category === "headphones"
  );

  const categoryName = headphones[0].category;

  return (
    <>
      <CategoryBanner category={categoryName} />
      <div className="py-16">
        <ProductList products={headphones} />
        <CategorySection />
        <BestGearSection />
      </div>
    </>
  );
};

export default Headphones;
