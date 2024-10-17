import React from "react";
import { BiUserPlus } from "react-icons/bi";
import Image from "next/image";
import Cookies from "js-cookie";
import { Auth } from "@/helpers/interfaces/user";
import { useAppContext } from "@/context";

interface Props {
  id: number;
  image: string;
  name: string;
  nickName: string;
}

function UserExplorerCard({ id, image, name, nickName }: Props) {
  const cookies = Cookies.get("auth");
  const auth: Auth = cookies ? JSON.parse(cookies) : null;
  const { getUserInfo } = useAppContext();
  return (
    <div>
      <div className="my-18 flex px-14">
        <div className="w-50 h-50 relative">
          <button
            type="button"
            aria-label="uerExploreButton"
            className="w-50 h-50 z-10"
            onClick={() => getUserInfo(id)}
          >
            <Image
              className="rounded-100%"
              src={image}
              width={50}
              height={50}
              alt="userImage"
            />
          </button>

          {auth.id !== id && (
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
          )}
        </div>
        <div className="ml-15">
          <h2 className="text-20 text-title font-medium dark:text-white">
            {name}
          </h2>
          <h2 className="text-10 text-title font-medium dark:text-9f">
            @{nickName}
          </h2>
        </div>
      </div>
      <hr className="h-1 border-none bg-button" />
    </div>
  );
}

export default UserExplorerCard;
