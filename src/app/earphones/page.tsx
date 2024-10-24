import CategoryBanner from "../components/common/CategoryBanner/CategoryBanner";
import CategorySection from "../components/common/CategorySection/CategorySection";
import ProductList from "../components/common/ProductList/ProductList";
import BestGearSection from "../components/Home/BestGearSection";
import { Product } from "../types/product";
import data from "../data/data.json";

const Earphones = async () => {
  const earphones = data.products.filter(
    (product: Product) => product.category === "earphones"
  );

  const categoryName = earphones[0].category;

  return (
    <>
      <CategoryBanner category={categoryName} />
      <div className="py-16">
        <ProductList products={earphones} />
        <CategorySection />
        <BestGearSection />
      </div>
    </>
  );
};

export default Earphones;
