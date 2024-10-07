import { ReactNode } from "react";

interface ButtonProps {
  color: string;
  children: ReactNode;
}
const Overline = ({ children, color }: ButtonProps) => {
  return (
    <span
      className={`text-[14px] leading-[19px] tracking-[10px] font-regular uppercase font-manrope ${color}`}
    >
      {children}
    </span>
  );
};

export default Overline;
