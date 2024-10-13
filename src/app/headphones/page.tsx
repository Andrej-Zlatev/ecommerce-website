import ProductCard from "../components/common/ProductCard/ProductCard";
import Heading2 from "../components/typography/Heading2";
import { Product } from "../types/product";
import Image from "next/image";
const Headphones = async () => {
  const response = await fetch("http://localhost:3001/products");
  const data: Product[] = await response.json();
  const headphones = await data.filter(
    (product) => product.category === "headphones"
  );

  return (
    <>
      <div className="bg-dark flex justify-center items-center py-16">
        <Heading2 color="text-white">headphones</Heading2>
      </div>
      {headphones.map((headphone) => (
        <ProductCard product={headphone} key={headphone.id} />
      ))}
    </>
  );
};

export default Headphones;
