import { Product } from "@/app/types/product";
import ProductCard from "../common/ProductCard/ProductCard";

interface ProductsProps {
  products: Product[];
}

const ProductList = ({ products }: ProductsProps) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} index={product.id} />
      ))}
    </>
  );
};

export default ProductList;
