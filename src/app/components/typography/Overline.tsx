import { TypographyProps } from "@/app/types/typography";

const Overline = ({ children }: TypographyProps) => {
  return (
    <span className="text-[14px] leading-[19px] tracking-[10px] font-regular uppercase font-manrope text-primary">
      {children}
    </span>
  );
};

export default Overline;
