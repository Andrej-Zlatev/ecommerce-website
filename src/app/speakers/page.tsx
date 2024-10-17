import CategoryBanner from "../components/common/CategoryBanner/CategoryBanner";
import CategorySection from "../components/common/CategorySection/CategorySection";
import ProductList from "../components/common/ProductList/ProductList";
import BestGearSection from "../components/Home/BestGearSection";
import { Product } from "../types/product";

const Speakers = async () => {
  const response = await fetch("http://localhost:3001/products");
  const data: Product[] = await response.json();
  const speakers = data.filter((product) => product.category === "speakers");
  const categoryName = speakers[0].category;
  console.log(categoryName);

  return (
    <>
      <CategoryBanner category={categoryName} />
      <div className="py-16">
        <ProductList products={speakers} />
        <CategorySection />
        <BestGearSection />
      </div>
    </>
  );
};

export default Speakers;
