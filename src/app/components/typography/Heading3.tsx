import { TypographyProps } from "@/app/types/typography";

const Heading3 = ({ children, color }: TypographyProps) => {
  return (
    <h3
      className={`text-[32px] leading-[36px] tracking-[1.15px] font-bold uppercase font-manrope ${color}`}
    >
      {children}
    </h3>
  );
};

export default Heading3;
