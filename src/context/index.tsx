"use client";
import { Auth, AuthRequest, User } from "@/helpers/interfaces/user";
import { ContextType } from "@/types/indexTypes";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AppContext = createContext<ContextType>({
  authMessage: "",
  setAuthMessage: () => {},
  hidePassword: true,
  setHidePassword: () => {},
  theme: "light",
  setTheme: () => {},
  handleChangeTheme: () => {},
  login: () => {},
  auth: {
    id: 0,
    email: "",
    name: "",
    nickName: "",
    image: "",
    bio: "",
  },
  handleInputChange: () => {},
});

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [formLoginData, setFormLoginData] = useState<User>({
    email: "",
    password: "",
  });
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [authMessage, setAuthMessage] = useState<string>("");
  const [theme, setTheme] = useState<string>(() => {
    if (window.matchMedia("(prefers-color-schema: dark)")) {
      return "dark";
    }
    return "light";
  });
  const [auth, setAuth] = useState<Auth>({
    email: "",
    id: 0,
    name: "",
    nickName: "",
    image: "",
    bio: "",
    post: [],
  });

  useEffect(() => {
    if (theme === "dark") document.querySelector("html")?.classList.add("dark");
    else document.querySelector("html")?.classList.remove("dark");
  }, [theme]);

  const login = async (e: any) => {
    e.preventDefault();
    try {
      const request = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify(formLoginData),
      });
      const requestData: AuthRequest = await request.json();
      if (requestData.status === "success") {
        const authRequest = await fetch(
          `/api/user/auth/${requestData.user.id}`,
          {
            method: "GET",
          }
        );
        const authData: AuthRequest = await authRequest.json();
        setAuth(authData.user);
        Cookies.set("auth", JSON.stringify(authData.user), { expires: 30 });
        setAuthMessage("success");
        setTimeout(() => {
          window.location.href = "/page/feed";
        }, 1000);
      } else {
        setAuthMessage("error");
      }
    } catch (error) {
      setAuthMessage("error");
      console.log(error);
    }
  };

  const handleChangeTheme = () => {
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
        auth,
        handleInputChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
