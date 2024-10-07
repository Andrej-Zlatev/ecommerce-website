import { TypographyProps } from "@/app/types/typography";

const Heading2 = ({ children, color }: TypographyProps) => {
  return (
    <h2
      className={`text-[40px] leading-[44px] tracking-[1.5px] font-bold uppercase font-manrope ${color}`}
    >
      {children}
    </h2>
  );
};

export default Heading2;
