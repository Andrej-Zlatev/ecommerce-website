// components/Section.tsx
import { SectionProps } from "@/app/types/sectionProps";

const AppSection: React.FC<SectionProps> = ({
  children,
  className = "",
  id,
}) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      {children}
    </section>
  );
};

export default AppSection;
