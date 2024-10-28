import CategoryBanner from "../components/common/CategoryBanner/CategoryBanner";
import CategorySection from "../components/common/CategorySection/CategorySection";
import ProductList from "../components/common/ProductList/ProductList";
import BestGearSection from "../components/Home/BestGearSection";
import { Product } from "../types/product";
import data from "../data/data.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earphones & In-Ear Headphones | Superior Sound on the Go",
  description:
    "Shop our collection of earphones and in-ear headphones that provide clear, immersive audio. Designed for comfort and portability, they’re ideal for music lovers who need quality sound on the go.",
};

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
