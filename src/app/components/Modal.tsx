import React from "react";
import { useAppContext } from "@/context";
import { BiX } from "react-icons/bi";

function Modal({ children }: any) {
  const { setModalState } = useAppContext();
  return (
    <div className="w-421 h-screen fixed top-0 left-0 z-30 p-26 bg-white dark:bg-back">
      <button
        type="button"
        aria-label="ButtonModal"
        className="w-29 h-29 absolute top-4 right-4"
        onClick={() => setModalState(false)}
      >
        <BiX className="w-29 h-29 text-title dark:text-white" />
      </button>
      {children}
    </div>
  );
}

export default Modal;
