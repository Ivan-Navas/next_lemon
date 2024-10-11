import React from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { Auth } from "@/helpers/interfaces/user";
import { BiUserPlus } from "react-icons/bi";

function UserExplorer() {
  const cookies = Cookies.get("auth");
  const auth: Auth = cookies ? JSON.parse(cookies) : null;
  return (
    <div className="w-30% h-100 rounded-16 bg-white pb-18 pt-10 dark:bg-back">
      <h2 className="font-medium text-20 text-title text-center dark:text-white">
        Usuarios
      </h2>
      <div className="my-18 flex px-14">
        <div className="w-50 h-50 relative">
          <button
            type="button"
            aria-label="uerExploreButton"
            className="w-50 h-50 z-10"
            onClick={() => {
              alert("userExplore");
            }}
          >
            <Image
              className="rounded-100%"
              src={auth.image}
              width={50}
              height={50}
              alt="userImage"
            />
          </button>
          <button
            type="button"
            aria-label="followUser"
            className="w-20 h-20 absolute -top-4 -right-4 flex items-center justify-center bg-button rounded-100% border border-white z-20 pointer-events-none dark:border-back "
            onClick={() => {
              alert("userFollow");
            }}
          >
            <BiUserPlus className="w-15 h-15 text-title" />
          </button>
        </div>
        <div className="ml-15">
          <h2 className="text-20 text-title font-medium dark:text-white">
            {auth.name}
          </h2>
          <h2 className="text-10 text-title font-medium dark:text-9f">
            @{auth.nickName}
          </h2>
        </div>
      </div>
      <hr className="h-1 border-none bg-button" />
    </div>
  );
}

export default UserExplorer;
