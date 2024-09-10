"use client";
import { Auth, AuthRequest } from "@/helpers/interfaces/user";
import { ContextType } from "@/types/indexTypes";
import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext<ContextType>({
  authMessage: "",
  setAuthMessage: () => {},
  hidePassword: true,
  setHidePassword: () => {},
  theme: "light",
  setTheme: () => {},
  handleChangeTheme: () => {},
  login: () => {},
});

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [hidePassword, setHidePassword] = useState<boolean>(true)
  const [authMessage, setAuthMessage] = useState<string>("");
  const [theme, setTheme] = useState<string>(()=> {
    if(window.matchMedia("(prefers-color-schema: dark)")){
      return "dark"
    }
    return "light"
  });
  const [auth, setAuth] = useState<Auth>({
    email: "",
    id: 0,
    name: "",
    nickName: "",
    post: [],
  });

  useEffect(()=>{
    if(theme === "dark") document.querySelector("html")?.classList.add("dark")
      else document.querySelector("html")?.classList.remove("dark")
  },[theme])

  const login = async (e: any) => {
    e.preventDefault();
    const data = {
      email: "test@gmail.com",
      password: "test",
    };
    try {
      const request = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const requestData: AuthRequest = await request.json();
      console.log(requestData)
      if (requestData.status === "success") {
        setAuth(requestData.user);
        setAuthMessage("success");
      } else {
        setAuthMessage("error");
      }
    } catch (error) {
      setAuthMessage("error");
      console.log(error);
    }
  };

  const handleChangeTheme = ()=>{
    if(theme === "light") setTheme("dark");
    if(theme === "dark") setTheme("light");
  }

  return (
    <AppContext.Provider
      value={{
        authMessage,
        setAuthMessage,
        hidePassword,
        setHidePassword,
        theme,
        setTheme,
        handleChangeTheme,
        login,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
