import { TypographyProps } from "@/app/types/typography";

const Subtitle = ({ children }: TypographyProps) => {
  return (
    <h6 className="text-[13px] leading-[25px] tracking-[1px] font-bold uppercase font-manrope">
      {children}
    </h6>
  );
};

export default Subtitle;
