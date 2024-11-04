/*eslint-disable react/prop-types */
export const PrimaryButton = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#FEBF00] text-black px-2 py-1 text-md font-bold  ${className}`}
    >
      {children}
    </button>
  );
};
