import AppContainer from "../../layout/AppContainer";
import AppSection from "../../layout/AppSection";
import Image from "next/image";
import Heading6 from "../../typography/Heading6";
import Button3 from "../../ui/Button3";
import { categoryProps } from "@/app/types/categoryProps";
import Link from "next/link";

const categories: categoryProps[] = [
  {
    category: "headphones",
    id: 1,
    image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    link: "/headphones",
  },
  {
    category: "speakers",
    id: 2,
    image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    link: "speakers",
  },
  {
    category: "earphones",
    id: 3,
    image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    link: "earphones",
  },
];

const CategorySection = () => {
  return (
    <AppContainer>
      <AppSection>
        <div className="grid grid-cols-1 gap-y-24 md:grid-cols-3 md:gap-x-[30px]">
          {categories.map((category) => (
            <div
              className="bg-lightGray h-[210px] rounded-[8px] relative flex justify-center items-center text-center"
              key={category.id}
            >
              <Image
                src={category.image}
                width={178}
                height={160}
                alt="category-image"
                className="absolute top-[-30%] left-[50%] translate-x-[-50%] "
              />
              <div className="mt-[6rem]">
                <Heading6>{category.category}</Heading6>
                <Link href={category.link}>
                  <Button3>SHOP</Button3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default CategorySection;
