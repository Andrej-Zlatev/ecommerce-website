import CategoryBanner from "../components/common/CategoryBanner/CategoryBanner";
import CategorySection from "../components/common/CategorySection/CategorySection";
import ProductList from "../components/Headphones/ProductList";
import BestGearSection from "../components/Home/BestGearSection";
import { Product } from "../types/product";
const Headphones = async () => {
  const response = await fetch("http://localhost:3001/products");
  const data: Product[] = await response.json();
  const headphones = await data.filter(
    (product) => product.category === "headphones"
  );

  return (
    <>
      <CategoryBanner category={"headphones"} />
      <div className="py-16">
        <ProductList products={headphones} />
        <CategorySection />
        <BestGearSection />
      </div>
    </>
  );
};

export default Headphones;
