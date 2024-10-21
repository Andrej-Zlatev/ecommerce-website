import Features from "@/app/components/common/Features/Features";
import ProductCardDetail from "@/app/components/common/ProductCardDetail/ProductCardDetail";
import ProductGallery from "@/app/components/common/ProductGallery/ProductGallery";

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
        <Features product={product} />
        <ProductGallery product={product} />
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
