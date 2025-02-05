const Button = ({ children, width }) => {
  return (
    <button
      className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold flex justify-center items-center gap-2"
      style={{ width }}
    >
      {children}
    </button>
  );
};
export default Button;
