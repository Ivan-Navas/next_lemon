import React from 'react'
import Link from "next/link";
import { BiHide, BiShow } from "react-icons/bi";
import Input from "@/app/components/Input";
import { useAppContext } from '@/context';

function LoginForm() {
  const { hidePassword, setHidePassword, authMessage, login } = useAppContext();
  return (
    <form className="mt-131 grid items-center justify-center">
            <div className="">
              <Input
                type="email"
                placeholder="Correo"
                name="email"
                autoComplete="off"
              />
            </div>
            <div className="relative mt-63">
              <Input
                type={hidePassword === true ? "password" : "text"}
                placeholder="Contraseña"
                name="password"
                autoComplete="off"
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
            <div className="w-full relative mt-16 flex">
              {authMessage === "success" && (
                <h2 className="text-12 text-success font-bold">
                  Iniciando sesíon...
                </h2>
              )}
              {authMessage === "error" && (
                <div className="w-1/2">
                  <h2 className="text-12 text-error font-bold">
                    La contraseña o correo son incorrectos
                  </h2>
                </div>
              )}
              <Link
                className="text-right text-textL font-12 font-light absolute right-0 hover:decoration-slice dark:text-inputText"
                href=""
              >
                Olvidé mi contraseña
              </Link>
            </div>
            <button
              onClick={(e) => {
                login(e);
              }}
              type="submit"
              className="w-363 h-45 flex items-center justify-center text-center text-back text-16 font-bold rounded-16 bg-button  mt-40 "
            >
              Confirmar
            </button>
            <p className="text-16 text-textL font-bold mt-17 dark:text-inputText">
              ¿No tienes cuenta?
              <Link
                className="gradient-text text-16 ml-1"
                href="/page/register"
              >
                Crea una.
              </Link>
            </p>
            <div className="grid grid-cols-oLine items-center justify-between ">
              <hr className="h-1 border-none bg-button " />
              <b className="text-16 text-center text-title font-bold p-6 dark:text-white ">
                O
              </b>
              <hr className="h-1 border-none bg-button  " />
            </div>
          </form>
  )
}

export default LoginForm