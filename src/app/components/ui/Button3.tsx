import { ButtonProps } from "@/app/types/buttonProps";
import Image from "next/image";

const Button3 = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        "w-[160px] h-[48px] bg-white text-lightGray hover:text-primary uppercase tracking-widest flex justify-center items-center"
      }
    >
      {children}{" "}
      <Image
        src={"/assets/shared/desktop/icon-arrow-right.svg"}
        width={5}
        height={10}
        alt="path-icon"
        className="ms-4"
      />
    </button>
  );
};

export default Button3;
