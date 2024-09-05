import React from "react";

function Input({ ...rest }: any) {
  return (
    <>
      <input
        className="w-363 h-20 outline-none font-bold border border-transparent text-inputText bg-back placeholder:text-inputText placeholder:font-bold"
        {...rest}
      />
      <hr className="h-1 border-none bg-button" />
    </>
  );
}

export default Input;
