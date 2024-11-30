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
    date: "",
  },
  handleInputChange: () => {},
  handleInputRegisterChange: () => {},
  getFeed: () => {},
  userExplorer: [],
  setUserExplorer: () => {},
  feed: [],
  setFeed: () => {},
  commentPost: {
    id: 0,
    author: {
      bio: "",
      date: "",
      email: "",
      id: 0,
      image: "",
      name: "",
      nickName: ""
    },
    authorId: 0,
    comment: [],
    data: "",
    date: "",
    image: "",
    like: [],
    share: [],
    view: [],
  },
  setCommentPost: () => {},
  formatDate: () => "",
  modalState: false,
  setModalState: () => {},
  modalCommentState: false,
  setModalCommentState: () => {},
  getUserInfo: () => {},
  userInfo: {
    id: 0,
    bio: "",
    email: "",
    image: "",
    name: "",
    nickName: "",
    date: "",
  },
  setUserInfo: () => {},
  logOut: () => {},
  likeFun: () => {}
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
    date: "",
  });
  const [userInfo, setUserInfo] = useState<Auth>({
    email: "",
    id: 0,
    name: "",
    nickName: "",
    image: "",
    bio: "",
    post: [],
    date: "",
  });

  const [userExplorer, setUserExplorer] = useState<UserExplorer[]>([]);
  const [feed, setFeed] = useState<Post[]>([]);
  const [modalState, setModalState] = useState<boolean>(false);
  const [modalCommentState, setModalCommentState] = useState<boolean>(false);
  const [commentPost, setCommentPost] = useState<Post>({
    author: {
      bio: "",
      date: "",
      email: "",
      id: 0,
      image: "",
      name: "",
      nickName: ""
      
    },
    authorId: 0,
    comment: [],
    data: "",
    date: "",
    id: 0,
    image: "",
    like: [],
    share: [],
    view: []
  });

  useEffect(() => {
    if (theme === "dark") document.querySelector("html")?.classList.add("dark");
    else document.querySelector("html")?.classList.remove("dark");
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
        Cookies.set("token", requestData.token, { expires: 30 });
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
        Cookies.set("token", requestData.token, { expires: 30 });
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

  const getUserInfo = async (id: number) => {
    try {
      const request = await fetch(`/api/user/auth/${id}`, {
        method: "GET",
      });
      const requestData: AuthRequest = await request.json();
      setUserInfo(requestData.user);
      if (requestData.status === "success") {
        setModalState(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const likeFun = async (postId: number, id: number) => {
    const request = await fetch(`/api/publication/like/${postId}/${id}`, {
      method: "POST",
    });
    const data = await request.json();
    if (data.message === "El like existe") {
      const request2 = await fetch(`/api/publication/dislike/${postId}/${id}`, {
        method: "DELETE",
      });
      const dataD = await request2.json();
    }
  };

  const logOut = () => {
    Cookies.remove("auth");
    Cookies.remove("token");
    setTimeout(() => {
      window.location.href = "/page/login";
    }, 1000);
  };

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
        commentPost,
        setCommentPost,
        formatDate,
        modalState,
        setModalState,
        modalCommentState,
        setModalCommentState,
        getUserInfo,
        userInfo,
        setUserInfo,
        logOut,
        likeFun,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
