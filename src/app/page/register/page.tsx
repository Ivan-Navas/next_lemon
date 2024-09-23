"use client";
import LogoForm from "@/app/components/LogoForm";
import { useAppContext } from "@/context";
import { BiMoon, BiSun, BiLeftArrowAlt } from "react-icons/bi";
import React, { useEffect } from "react";
import RegisterForm from "@/app/components/RegisterForm";
import Link from "next/link";
import ButtonFormGlass from "@/app/components/ui/ButtonFormGlass";

function Page() {
  const { theme, handleChangeTheme } = useAppContext();
  useEffect(()=>{
    document.title = "Lemon • Register"
  },[])
  return (
    <div className="w-screen h-screen bg-lBackMain grid items-center justify-center dark:bg-title">
      <div className="w-1000 h-700 bg-lBack rounded-16 grid grid-cols-login dark:bg-back ">
        <LogoForm />
        <div className="relative ">
          <ButtonFormGlass onClick={handleChangeTheme}>
            {theme === "light" ? (
              <BiMoon className="w-20 h-20 text-title" />
            ) : (
              <BiSun className="w-20 h-20 text-white" />
            )}
          </ButtonFormGlass>
          <Link
            href={"/page/login"}
            className="w-36 h-36 bg-glassDark absolute top-10 left-10 rounded-4 flex items-center justify-center dark:bg-glass"
          >
            {theme === "light" ? (
              <BiLeftArrowAlt className="w-20 h-20 text-title" />
            ) : (
              <BiLeftArrowAlt className="w-20 h-20 text-white" />
            )}
          </Link>
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
