"use client";
import AppContainer from "../../layout/AppContainer";
import AppSection from "../../layout/AppSection";
import Image from "next/image";
import Button1 from "../../ui/Button1";
import Button5 from "../../ui/Button5";
import Heading6 from "../../typography/Heading6";
import Heading2 from "../../typography/Heading2";
import { Product } from "@/app/types/product";
import Overline from "../../typography/Overline";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import toast from "react-hot-toast";

interface ProductCardDetailProps {
  product: Product;
}

const ProductCardDetail = ({ product }: ProductCardDetailProps) => {
  const [quantity, setQuantity] = useState(1); // State for managing quantity
  const { addItemToCart } = useCart(); // Get addItemToCart function from context

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Function to decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Function to handle adding to cart
  const handleAddToCart = () => {
    // Create the item object according to your CartItem structure
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      slug: product.slug,
    };

    addItemToCart(itemToAdd); // Call addItemToCart with the item
    setQuantity(1); // Reset quantity after adding to cart
    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <AppContainer>
      <AppSection>
        <div className={"lg:flex-row flex-col flex"}>
          <div className="lg:w-[50%]">
            <Image
              src={product.categoryImage.desktop}
              width={540}
              height={560}
              alt={product.name}
              key={product.id}
              className="w-full rounded-[8px] hidden lg:block"
            />
            <Image
              src={product.categoryImage.tablet}
              width={540}
              height={352}
              alt={product.name}
              key={product.id}
              className="w-full rounded-[8px] hidden md:block lg:hidden mb-12"
            />
            <Image
              src={product.categoryImage.mobile}
              width={540}
              height={352}
              alt={product.name}
              key={product.id}
              className="w-full rounded-[8px] block md:hidden lg:hidden mb-12"
            />
          </div>
          <div className="flex items-center justify-center lg:w-[50%]">
            <div className="md:w-[445px] w-[327px] gap-y-6 flex flex-col items-center text-center lg:text-left lg:items-start">
              {product.new && (
                <Overline color={"text-primary"}>New Product</Overline>
              )}
              <Heading2>{product.name}</Heading2>
              <p>{product.description}</p>
              <Heading6>{`$${product.price}`}</Heading6>
              <div className="flex gap-x-4 items-center">
                <div className="flex items-center border rounded-md overflow-hidden">
                  <Button5 onClick={decreaseQuantity}>-</Button5>
                  <span className="px-2">{quantity}</span>
                  <Button5 onClick={increaseQuantity}>+</Button5>
                </div>
                <Button1 onClick={handleAddToCart}>Add to Cart</Button1>
              </div>
            </div>
          </div>
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default ProductCardDetail;
