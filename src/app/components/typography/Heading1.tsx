import { TypographyProps } from "@/app/types/typography";

const Heading1 = ({ children }: TypographyProps) => {
  return (
    <h1 className="text-[56px] leading-[58px] tracking-[2px] font-bold uppercase font-manrope">
      {children}
    </h1>
  );
};

export default Heading1;
