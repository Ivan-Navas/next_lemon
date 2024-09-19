import React from "react";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function ButtonFormGlass({ children, ...props }: Props) {
  return (
    <button
      className="w-36 h-36 bg-glassDark absolute top-10 right-10 rounded-4 flex items-center justify-center dark:bg-glass"
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonFormGlass;
