"use client";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { Auth } from "@/helpers/interfaces/user";

export default function Home() {
  useEffect(() => {
    const cookies = Cookies.get("auth");
    const auth: Auth = cookies ? JSON.parse(cookies) : null;
    if (auth) {
      window.location.href = "/page/feed";
    } else {
      window.location.href = "/page/login";
    }
  }, []);
  return <main></main>;
}
