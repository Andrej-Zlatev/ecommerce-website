// import { Product } from "./types/product";

import HomeBanner from "./components/common/HomeBanner/HomeBanner";
import CategorySection from "./components/common/CategorySection/CategorySection";
import RandomProducts from "./components/Home/RandomProducts";

// async function getProducts() {
//   const res = await fetch("http://localhost:3001/products");
//   return res.json();
// }

export default async function Home() {
  // const products = await getProducts();

  // Filter products where 'new' is true
  // const newProducts = products.filter(
  //   (product: Product) => product.new === true
  // );

  return (
    <>
      <HomeBanner />
      <div className="py-24">
        <CategorySection />
        <RandomProducts />
      </div>
    </>
  );
}
