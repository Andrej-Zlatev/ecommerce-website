import { ButtonProps } from "@/app/types/buttonProps";

const Button2 = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        "w-[160px] h-[48px] bg-white text-black hover:text-white hover:bg-black uppercase tracking-widest border border-black"
      }
    >
      {children}
    </button>
  );
};

export default Button2;
