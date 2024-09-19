"use client";
import LogoForm from "@/app/components/LogoForm";
import { useAppContext } from "@/context";
import { BiHide, BiShow, BiMoon, BiSun, BiLeftArrowAlt } from "react-icons/bi";
import React from "react";
import RegisterForm from "@/app/components/RegisterForm";
import Link from "next/link";

function Page() {
  const { theme, handleChangeTheme } = useAppContext();
  return (
    <div className="w-screen h-screen bg-lBackMain grid items-center justify-center dark:bg-title">
      <div className="w-1000 h-700 bg-lBack rounded-16 grid grid-cols-login dark:bg-back ">
        <LogoForm />
        <div className="relative ">
          <div className="w-36 h-36 bg-glassDark absolute top-10 right-10 rounded-4 flex items-center justify-center dark:bg-glass">
            <button
              type="button"
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
          <div className="w-36 h-36 bg-glassDark absolute top-10 left-10 rounded-4 flex items-center justify-center dark:bg-glass">
            <Link
              href={"/page/login"}
              className="w-20 h-20 flex items-center justify-center"
            >
              {theme === "light" ? (
                <BiLeftArrowAlt className="w-20 h-20 text-title" />
              ) : (
                <BiLeftArrowAlt className="w-20 h-20 text-white" />
              )}
            </Link>
          </div>
          <h2 className="text-center text-title text-40 font-bold mt-35 dark:text-white">
            Registrate
          </h2>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default Page;
