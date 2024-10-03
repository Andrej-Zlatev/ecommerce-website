import { ContainerProps } from "@/app/types/containerProps";

const AppContainer: React.FC<ContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default AppContainer;
