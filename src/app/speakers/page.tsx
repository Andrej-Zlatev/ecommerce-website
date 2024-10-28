import { Metadata } from "next";
import CategoryBanner from "../components/common/CategoryBanner/CategoryBanner";
import CategorySection from "../components/common/CategorySection/CategorySection";
import ProductList from "../components/common/ProductList/ProductList";
import BestGearSection from "../components/Home/BestGearSection";
import data from "../data/data.json";

export const metadata: Metadata = {
  title: "High-Quality Speakers | Shop Premium Sound Systems",
  description:
    "Discover our range of premium speakers that deliver rich, high-fidelity sound. Perfect for audiophiles and home theater enthusiasts, our speakers enhance any listening experience with top-quality audio.",
};

const Speakers = () => {
  const speakers = data.products.filter(
    (product) => product.category === "speakers"
  );
  const categoryName = speakers[0].category;

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
