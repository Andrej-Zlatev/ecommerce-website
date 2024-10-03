import { TypographyProps } from "@/app/types/typography";

const Heading4 = ({ children }: TypographyProps) => {
  return (
    <h4 className="text-[28px] leading-[38px] tracking-[2px] font-bold uppercase font-manrope">
      {children}
    </h4>
  );
};

export default Heading4;
