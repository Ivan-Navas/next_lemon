import React from "react";
import Image from "next/image";
import { BiSolidEditAlt } from "react-icons/bi";
import Cookies from "js-cookie";
import { Auth } from "@/helpers/interfaces/user";

function UserCard() {
  const cookies = Cookies.get("auth");
  const auth: Auth = cookies ? JSON.parse(cookies) : null;
  return (
    <div className="w-30% h-100 bg-white rounded-16 px-16 py-8 flex items-start dark:bg-back">
      <button
        type="button"
        aria-label="iconUser"
        className="p-1 bg-button rounded-100%"
      >
        <Image
          className="rounded-100%"
          src={auth.image}
          width={70}
          height={70}
          alt="userImage"
        />
      </button>
      <div className="w-100 ml-43 pt-8">
        <div className="flex">
          <div className="w-100 h-35 bg-lBackMain flex items-center dark:bg-backL">
            <h2 className="text-title text-30 font-medium dark:text-white">
              {auth.nickName}
            </h2>
          </div>
          <button className="w-36 h-36" type="button" aria-label="editUser">
            <BiSolidEditAlt className="w-36 h-36 text-title" />
          </button>
        </div>
        {auth.bio && (
          <p className="text-12 text-title font-medium dark:text-lBackMain">
            {auth.bio}
          </p>
        )}
        <div className="w-100% h-22 bg-lBackMain flex items-center mt-24 dark:bg-backL">
          <h2 className="text-20 text-title font-medium dark:text-lBackMain">
            {auth.follower?.length}{" "}
            {auth.follower?.length !== 1 ? <>Seguidores</> : <>Seguidor</>}
          </h2>
        </div>
        <div className="w-100% h-22 bg-lBackMain flex items-center mt-8 dark:bg-backL">
          <h2 className="text-20 text-title font-medium dark:text-lBackMain">
            {auth.following?.length}{" "}
            {auth.following?.length !== 1 ? <>Seguidos</> : <>Seguido</>}
          </h2>
        </div>
        <div className="w-100% h-22 bg-lBackMain flex items-center mt-8 dark:bg-backL">
          <h2 className="text-20 text-title font-medium dark:text-lBackMain">
            {auth.post?.length}{" "}
            {auth.post?.length !== 1 ? <>Publicaciónes</> : <>Publicacion</>}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
