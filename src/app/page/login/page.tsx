"use client";
import Link from "next/link";
import React, { useState } from "react";
import { image } from "@/helpers/images";
import { BiHide, BiShow, BiMoon, BiSun } from "react-icons/bi";
import Image from "next/image";
import { useAppContext } from "@/context";
import LogoForm from "@/app/components/LogoForm";
import LoginForm from "@/app/components/LoginForm";

function Page() {
  const { theme, handleChangeTheme } = useAppContext();
  return (
    <div className="w-screen h-screen bg-lBackMain grid items-center justify-center dark:bg-title ">
      <div className="w-1000 h-700 bg-lBack rounded-16 grid grid-cols-login dark:bg-back ">
        <LogoForm />
        <div className="relative ">
          <div className="w-36 h-36 bg-glassDark absolute top-10 right-10 rounded-4 flex items-center justify-center dark:bg-glass">
            <button
              aria-label="theme"
              className="w-20 h-20 flex items-center justify-center"
              onClick={handleChangeTheme}
            >
              {theme === "light" ? (
                <BiMoon className="w-20 h-20 text-title" />
              ) : (
                <BiSun className="w-20 h-20 text-white" />
              )}
            </button>
          </div>
          <h2 className="text-center text-title text-40 font-bold mt-35 dark:text-white">
            Iniciar sesíon
          </h2>
          <LoginForm />
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
