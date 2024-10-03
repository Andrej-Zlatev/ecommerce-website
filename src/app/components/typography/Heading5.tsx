import { TypographyProps } from "@/app/types/typography";

const Heading5 = ({ children }: TypographyProps) => {
  return (
    <h5 className="text-[24px] leading-[33px] tracking-[1.7px] font-bold uppercase font-manrope">
      {children}
    </h5>
  );
};

export default Heading5;
