import ProductCardDetail from "@/app/components/common/ProductCardDetail/ProductCardDetail";
import AppContainer from "@/app/components/layout/AppContainer";
import AppSection from "@/app/components/layout/AppSection";
import Heading2 from "@/app/components/typography/Heading2";
import Heading6 from "@/app/components/typography/Heading6";
import Overline from "@/app/components/typography/Overline";
import Button1 from "@/app/components/ui/Button1";
import Button5 from "@/app/components/ui/Button5";
import Image from "next/image";

const ProductDetail = async ({ params }: { params: { slug: string } }) => {
  try {
    const response = await fetch(
      `http://localhost:3001/products/${params.slug}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        return (
          <div>
            <h1>Product Not Found</h1>
            <p>The product you are looking for does not exist.</p>
          </div>
        );
      }
      throw new Error(`Failed to fetch product. Status: ${response.status}`);
    }

    const product = await response.json();

    return (
      <>
        <ProductCardDetail product={product} />
      </>
    );
  } catch (error) {
    const errorMessage = (error as Error).message;
    return (
      <div>
        <h1>Error</h1>
        <p>Failed to load product details. Please try again later.</p>
        <p>Error details: {errorMessage}</p>
      </div>
    );
  }
};

export default ProductDetail;
