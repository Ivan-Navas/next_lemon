"use client";
import Link from "next/link";
import React, { useState } from "react";
import { image } from "@/helpers/images";
import { BiHide, BiShow } from "react-icons/bi";
import Image from "next/image";
import Input from "@/app/components/Input";
import { useAppContext } from "@/context";

function Page() {
  const { authMessage, setAuthMessage, hidePassword, setHidePassword, login } =
    useAppContext();
  return (
    <div className="w-screen h-screen grid items-center justify-center ">
      <div className="w-1000 h-700 bg-back rounded-16 grid grid-cols-login ">
        <div className="rounded-l-16  bg-login flex items-center justify-center">
          <div className="w-300 h-300 rounded-50% bg-glass border border-white grid items-center justify-center relative ">
            <Image
              className="absolute top-50 left-50"
              src={image.logo}
              alt="LogoImage"
              width={207}
              height={192}
            />
            <Image
              className="w-auto h-auto absolute top-185 left-175"
              src={image.name}
              alt="nameWeb"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="relative ">
          <h2 className="text-center text-40 font-bold mt-35">
            Iniciar sesíon
          </h2>

          <div className="h-20 mt-109 flex items-center justify-center">
            {authMessage === "success" && (
              <h2 className="text-16 text-green-500 font-bold">
                Iniciando sesíon...
              </h2>
            )}
            {authMessage === "error" && (
              <h2 className="text-16 text-red-500 font-bold">
                La contraseña o correo son incorrectos
              </h2>
            )}
          </div>

          <form className="grid items-center justify-center">
            <div className="mt-16">
              <Input type="email" placeholder="Correo" name="email" />
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
              <Link
                className="text-right text-inputText font-12 font-light absolute right-0 hover:decoration-slice"
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
            <p className="text-16 text-inputText font-bold mt-17">
              ¿No tienes cuenta?
              <Link className="gradient-text text-16 ml-1" href="/page/register">
                Crea una.
              </Link>
            </p>
            <div className="grid grid-cols-oLine items-center justify-between ">
              <hr className="h-1 border-none bg-button " />
              <b className="text-16 text-center font-bold p-6 ">O</b>
              <hr className="h-1 border-none bg-button  " />
            </div>
          </form>
          <div className="w-full flex items-center justify-center">
            <Link
              className="w-363 h-45 flex items-center justify-center text-center text-back text-16 font-bold rounded-16 bg-button  mt-40 "
              href=""
            >
              <Image
                width={36}
                height={36}
                src={image.google}
                alt="GoogleIcon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
