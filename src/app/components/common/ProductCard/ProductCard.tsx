import { Product } from "@/app/types/product";
import Image from "next/image";
interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <Image
        src={product.image.desktop}
        width={50}
        height={50}
        alt={product.name}
        key={product.id}
      />
    </div>
  );
};
export default ProductCard;
