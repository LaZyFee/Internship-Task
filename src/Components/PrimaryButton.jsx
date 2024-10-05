export const PrimaryButton = ({ children }) => {
  return (
    <button className="rounded-full bg-primary-gradient px-6 py-2 text-sm font-medium text-white">
      {children}
    </button>
  );
};
