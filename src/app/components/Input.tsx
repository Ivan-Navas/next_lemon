import React from "react";

function Input({ ...rest }: any) {
  return (
    <>
      <input
        className="w-363 h-20 inputL outline-none font-bold border border-transparent text-textL bg-lBack placeholder:text-textL placeholder:font-bold dark:bg-back dark:text-inputText dark:placeholder:text-inputText dark:inputDark"
        {...rest}
      />
      <hr className="h-1 border-none bg-button" />
    </>
  );
}

export default Input;
