// Button5.tsx
interface Props {
  onClick: () => void;
  children: React.ReactNode; // Add children prop
}

const Button5 = ({ onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-lightGray p-3 text-[#979797] hover:text-primary"
    >
      {children}
    </button>
  );
};

export default Button5;
