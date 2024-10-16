import React, { useState } from "react";
import Input from "@/app/components/Input";
import { useAppContext } from "@/context";
import { BiHide, BiShow } from "react-icons/bi";

function RegisterForm() {
  const { handleInputRegisterChange, register } = useAppContext();
  const [hidePassword, setHidePassword] = useState<Boolean>(true);
  const [confirmHidePassword, setConfirmHidePassword] = useState<Boolean>(true);
  return (
    <form className="mt-1 grid items-center justify-center">
      <div className="mb-51">
        <Input
          type="text"
          placeholder="Nombre"
          name="name"
          autoComplete="off"
          onChange={handleInputRegisterChange}
        />
      </div>
      <div className="mb-51">
        <Input
          type="text"
          placeholder="Usuario"
          name="nickName"
          autoComplete="off"
          onChange={handleInputRegisterChange}
        />
      </div>
      <div className="mb-51">
        <Input
          type="email"
          placeholder="Correo"
          name="email"
          autoComplete="off"
          onChange={handleInputRegisterChange}
        />
      </div>
      <div className="relative mb-51">
        <Input
          type={hidePassword === true ? "password" : "text"}
          placeholder="Contraseña"
          name="password"
          autoComplete="off"
          onChange={handleInputRegisterChange}
        />
        <button
          aria-label="hidePassword"
          type="button"
          className="w-24 h-24 absolute bottom-0 right-0 cursor-pointer border-none bg-transparent"
          onClick={() => setHidePassword(!hidePassword)}
        >
          {hidePassword === true ? (
            <BiHide className="w-24 h-24  text-rose" />
          ) : (
            <BiShow className="w-24 h-24  text-rose" />
          )}
        </button>
      </div>
      <div className="relative mb-59">
        <Input
          type={confirmHidePassword === true ? "password" : "text"}
          placeholder="Confirmar contraseña"
          name="confirm"
          autoComplete="off"
          onChange={handleInputRegisterChange}
        />
        <button
          aria-label="hidePassword"
          type="button"
          className="w-24 h-24 absolute bottom-0 right-0 cursor-pointer border-none bg-transparent"
          onClick={() => setConfirmHidePassword(!confirmHidePassword)}
        >
          {confirmHidePassword === true ? (
            <BiHide className="w-24 h-24  text-rose" />
          ) : (
            <BiShow className="w-24 h-24  text-rose" />
          )}
        </button>
      </div>
      <button
        onClick={(e) => {
          register(e);
        }}
        type="submit"
        className="w-363 h-45 flex items-center justify-center text-center text-back text-16 font-bold rounded-16 bg-button"
      >
        Confirmar
      </button>
    </form>
  );
}

export default RegisterForm;
