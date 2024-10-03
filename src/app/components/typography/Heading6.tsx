import { TypographyProps } from "@/app/types/typography";

const Heading6 = ({ children }: TypographyProps) => {
  return (
    <h6 className="text-[18px] leading-[24px] tracking-[1.3px] font-bold uppercase font-manrope">
      {children}
    </h6>
  );
};

export default Heading6;
