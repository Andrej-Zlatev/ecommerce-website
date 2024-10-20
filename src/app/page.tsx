// import { Product } from "./types/product";

import HomeBanner from "./components/common/HomeBanner/HomeBanner";
import CategorySection from "./components/common/CategorySection/CategorySection";
import RandomProducts from "./components/Home/RandomProducts";
import BestGearSection from "./components/Home/BestGearSection";

export default async function Home() {
  return (
    <>
      <HomeBanner />
      <div className="py-24">
        <CategorySection />
        <RandomProducts />
        <BestGearSection />
      </div>
    </>
  );
}
