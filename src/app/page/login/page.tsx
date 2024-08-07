import Link from "next/link";
import React from "react";
import { image } from "@/helpers/images";
import { BiHide, BiShow } from "react-icons/bi";

function Page() {
  return (
    <div className="w-screen h-screen grid items-center justify-center ">
      <div className="w-1000 h-700 bg-back rounded-16 grid grid-cols-login ">
        <div className="rounded-l-16  bg-login flex items-center justify-center">
          <div className="w-300 h-300 rounded-50% bg-glass border border-white grid items-center justify-center relative ">
            <img
              className="w-207 h-192 absolute top-50 left-50"
              src={image.logo}
              alt="LogoImage"
            />
            <img
              className="absolute top-185 left-175"
              src={image.name}
              alt="nameWeb"
            />
          </div>
        </div>
        <div className="relative ">
          <h2 className="text-center text-40 font-bold mt-35">
            Iniciar sesíon
          </h2>
          <form className="grid items-center justify-center">
            <input
              className="w-363 h-20 outline-none font-bold border border-transparent border-b-inputBorder text-inputText bg-back mt-131 placeholder:text-inputText placeholder:font-bold "
              type="email"
              placeholder="Correo"
              name="email"
              autoFocus
            />
            <div className="relative">
              <input
                className="w-363 h-20 outline-none font-bold border border-transparent border-b-inputBorder text-inputText bg-back  mt-63 inputLogin passwordInput placeholder:text-inputText placeholder:font-bold "
                type="password"
                placeholder="Contraseña"
                maxLength={16}
                autoComplete="none"
                name="password"
              />
              <button className="w-20 h-20 absolute bottom-0 right-0 cursor-pointer border-none bg-transparent">
                <BiHide className="text-rose" />
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
            <button className="w-363 h-45 flex items-center justify-center text-center text-back text-16 font-bold rounded-16 bg-button  mt-40 ">
              Confirmar
            </button>
            <p className="text-16 text-inputText font-bold mt-17">
              ¿No tienes cuenta?
              <Link className="text-rose text-16 ml-1" href="/register">
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
              <img className="w-36 h-36" src={image.google} alt="GoogleIcon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
