import { ButtonProps } from "@/app/types/buttonProps";

const Button1 = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        "w-[160px] h-[48px] bg-primary hover:bg-secondary text-white uppercase tracking-widest"
      }
    >
      {children}
    </button>
  );
};

export default Button1;
