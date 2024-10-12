import { ButtonProps } from "@/app/types/buttonProps";

const Button4 = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        "w-[160px] h-[48px]  bg-black text-white hover:bg-[#4C4C4C] uppercase tracking-widest border border-none"
      }
    >
      {children}
    </button>
  );
};

export default Button4;
