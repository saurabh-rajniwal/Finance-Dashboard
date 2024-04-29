// eslint-disable-next-line react/prop-types
function Button({ children, variation = "primary", rightSlot = null }) {
  const ghostStyles = `bg-white text-custom-light-grey hover:bg-gray-200`;
  const primaryStyle = `bg-custom-purple text-white hover:bg-purple-800`;
  return (
    <button
      className={`flex justify-center items-center gap-2 p-2 rounded-full text-sm min-w-[140px]   transition-all  ${
        variation === "ghost" ? ghostStyles : primaryStyle
      }`}
    >
      {children}
      {rightSlot}
    </button>
  );
}

export default Button;
