import HomeBanner from "./components/common/HomeBanner";
import { Product } from "./types/product";

async function getProducts() {
  const res = await fetch("http://localhost:3001/products");
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  // Filter products where 'new' is true
  const newProducts = products.filter(
    (product: Product) => product.new === true
  );

  return (
    <>
      <HomeBanner />
    </>
  );
}
