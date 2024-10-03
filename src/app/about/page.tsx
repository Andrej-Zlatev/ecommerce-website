import productData from "../data/data.json";
import Image from "next/image";

const ProductImage = ({ product }) => {
  return (
    <div>
      <Image
        src={product.image.mobile} // Fallback for smaller devices
        alt={product.name}
        width={500} // Set width for mobile
        height={300} // Set height for mobile
        className="block md:hidden" // Show only on mobile
      />
      <Image
        src={product.image.tablet} // Fallback for tablet
        alt={product.name}
        width={800} // Set width for tablet
        height={500} // Set height for tablet
        className="hidden md:block lg:hidden" // Show only on tablet
      />
      <Image
        src={product.image.desktop} // Fallback for desktop
        alt={product.name}
        width={1200} // Set width for desktop
        height={800} // Set height for desktop
        className="hidden lg:block" // Show only on desktop
      />
    </div>
  );
};

const About = () => {
  return (
    <div>
      {productData.map((product) => (
        <ProductImage key={product.id} product={product} />
      ))}
    </div>
  );
};

export default About;
