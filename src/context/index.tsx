"use client";
import {
  Auth,
  AuthRequest,
  Message,
  RegisterUser,
  User,
  UserExplorer,
  UserExplorerRequest,
} from "@/helpers/interfaces/user";
import { ContextType } from "@/types/indexTypes";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { FeedRequest, Post } from "@/helpers/interfaces/post";

const AppContext = createContext<ContextType>({
  authMessage: "",
  setAuthMessage: () => {},
  registerMessage: {
    status: "",
    message: "",
  },
  setRegisterMessage: () => {},
  hidePassword: true,
  setHidePassword: () => {},
  theme: "light",
  setTheme: () => {},
  handleChangeTheme: () => {},
  login: () => {},
  register: () => {},
  auth: {
    id: 0,
    email: "",
    name: "",
    nickName: "",
    image: "",
    bio: "",
  },
  handleInputChange: () => {},
  handleInputRegisterChange: () => {},
  getFeed: () => {},
  userExplorer: [],
  setUserExplorer: () => {},
  feed: [],
  setFeed: () => {},
  formatDate: () => "",
  modalState: false,
  setModalState: ()=>{},
});

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [formLoginData, setFormLoginData] = useState<User>({
    email: "",
    password: "",
  });
  const [formRegisterData, setFormRegisterData] = useState<RegisterUser>({
    name: "",
    nickName: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [authMessage, setAuthMessage] = useState<string>("");
  const [registerMessage, setRegisterMessage] = useState<Message>({
    status: "",
    message: "",
  });
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
  const [userExplorer, setUserExplorer] = useState<UserExplorer[]>([]);
  const [feed, setFeed] = useState<Post[]>([]);
  const [modalState, setModalState] = useState<boolean>(true);

  useEffect(() => {
    //if (theme === "dark") document.querySelector("html")?.classList.add("dark");
    //else document.querySelector("html")?.classList.remove("dark");
    getFeed();
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

  const register = async (e: any) => {
    e.preventDefault();
    try {
      const request = await fetch("/api/user/register", {
        method: "POST",
        body: JSON.stringify(formRegisterData),
      });
      const requestData: AuthRequest = await request.json();
      setRegisterMessage({
        status: requestData.status,
        message: requestData.message,
      });
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
        setTimeout(() => {
          window.location.href = "/page/feed";
        }, 1000);
      }
    } catch (error) {
      setRegisterMessage({
        status: "error",
        message: "Ocurrio un error, intentalo nuevamente",
      });
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

  const handleInputRegisterChange = (e: any) => {
    const { name, value } = e.target;
    setFormRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getFeed = async () => {
    try {
      const request = await fetch("/api/publication/feed", {
        method: "GET",
      });
      const userRequest = await fetch("/api/user/user-explorer", {
        method: "GET",
      });
      const feedData: FeedRequest = await request.json();
      const userData: UserExplorerRequest = await userRequest.json();
      setFeed(feedData.feed);
      setUserExplorer(userData.list);
    } catch (error) {
      console.log("Ocurrió un error", error);
    }
  };

  function formatDate(date: Date) {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  return (
    <AppContext.Provider
      value={{
        authMessage,
        setAuthMessage,
        registerMessage,
        setRegisterMessage,
        hidePassword,
        setHidePassword,
        theme,
        setTheme,
        handleChangeTheme,
        login,
        register,
        auth,
        handleInputChange,
        handleInputRegisterChange,
        userExplorer,
        setUserExplorer,
        getFeed,
        feed,
        setFeed,
        formatDate,
        modalState,
        setModalState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
