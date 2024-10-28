import Features from "@/app/components/common/Features/Features";
import ProductCardDetail from "@/app/components/common/ProductCardDetail/ProductCardDetail";
import ProductGallery from "@/app/components/common/ProductGallery/ProductGallery";
import data from "../../data/data.json";
import { Metadata } from "next";

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const product = data.products.find(
    (product) => product.id === Number(params.slug)
  );
  return {
    title: product?.name,
    description: product?.description,
  };
};

const ProductDetail = async ({ params }: { params: { slug: string } }) => {
  const product = data.products.find(
    (product) => product.id === Number(params.slug)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <ProductCardDetail product={product} />
      <Features product={product} />
      <ProductGallery product={product} />
    </>
  );
};

export default ProductDetail;
