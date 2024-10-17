import Heading2 from "../../typography/Heading2";

interface categoryProps {
  category: string;
}

const CategoryBanner = ({ category }: categoryProps) => {
  return (
    <div className="bg-dark py-16">
      <Heading2 color="text-white text-center">{category}</Heading2>
    </div>
  );
};

export default CategoryBanner;
