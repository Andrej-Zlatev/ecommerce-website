import { TypographyProps } from "@/app/types/typography";

const Heading1 = ({ children, color }: TypographyProps) => {
  return (
    <h1
      className={`text-[56px] leading-[58px] tracking-[2px] font-bold uppercase font-manrope ${color}`}
    >
      {children}
    </h1>
  );
};

export default Heading1;
