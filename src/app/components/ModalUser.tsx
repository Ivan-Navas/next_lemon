import Image from "next/image";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { Auth } from "@/helpers/interfaces/user";
import Modal from "./Modal";
import {
  BiUserPlus,
  BiBookOpen,
  BiShare,
  BiHeart,
  BiCog,
  BiMessageDots,
  BiLogOut,
} from "react-icons/bi";
import ButtonUserPage from "./ui/ButtonUserPage";
import UserStatsCard from "./ui/UserStatsCard";
import { useAppContext } from "@/context";

function ModalUser() {
  const { formatDate, modalState, userInfo, logOut } = useAppContext();
  const cookies = Cookies.get("auth");
  const auth: Auth = cookies ? JSON.parse(cookies) : null;
  return (
    <>
      {modalState && (
        <Modal>
          <button
            type="button"
            aria-label="ButtonModal"
            className="absolute top-4 left-4"
          >
            <BiMessageDots className="w-29 h-29 text-title dark:text-white" />
          </button>
          <button
            type="button"
            aria-label="ButtonModal"
            className="absolute bottom-4 right-4 flex items-center justify-center"
            onClick={() => logOut()}
          >
            <BiLogOut className="w-20 h-20 text-title dark:text-white" />
            <h2 className="text-12 text-title dark:text-white font-bold">
              Cerrar sesíon
            </h2>
          </button>
          <div className="mt-92">
            <div className="w-100 flex items-center justify-center">
              <Image
                width={70}
                height={70}
                src={userInfo.image}
                alt="userImage"
                className="rounded-50%"
              />
            </div>
            <h2 className="text-30 text-title text-center font-extrabold dark:text-lFontMain">
              {userInfo.nickName}
            </h2>
          </div>
          {userInfo.bio && (
            <h2 className="text-14 text-title font-light mt-18 dark:text-lBackMain">
              {userInfo.bio}
            </h2>
          )}
          <div className="w-100 mt-31 flex items-center justify-between">
            {auth.id !== userInfo.id && (
              <ButtonUserPage>
                <BiUserPlus className="w-19 h-19 text-title dark:text-white" />
                <h2 className="text-12 text-title font-extrabold dark:text-white">
                  Seguir
                </h2>
              </ButtonUserPage>
            )}

            <ButtonUserPage>
              <BiBookOpen className="w-19 h-19 text-title dark:text-white" />
              <h2 className="text-12 text-title font-extrabold dark:text-white">
                Publicaciones
              </h2>
            </ButtonUserPage>
            <ButtonUserPage>
              <BiShare className="w-19 h-19 text-title dark:text-white" />
              <h2 className="text-12 text-title font-extrabold dark:text-white">
                Compartir
              </h2>
            </ButtonUserPage>
          </div>
          <hr className="w-100 h-1 bg-button mt-18 mb-34 border-none" />
          <div>
            <UserStatsCard
              followers={userInfo.follower?.length}
              following={userInfo.following?.length}
              publications={userInfo.post?.length}
              date={formatDate(new Date(userInfo.date))}
            />
          </div>
          <hr className="w-100 h-1 bg-button mt-34 mb-41 border-none" />
          {auth.id === userInfo.id && (
            <button type="button" className="flex items-center justify-center">
              <BiHeart className="w-20 h-20 text-title dark:text-white" />
              <h2 className="text-16 text-title dark:text-white font-extrabold ml-2">
                Favoritos
              </h2>
            </button>
          )}
          <button
            type="button"
            className="flex items-center justify-center mt-19"
          >
            <BiCog className="w-20 h-20 text-title dark:text-white" />
            <h2 className="text-16 text-title dark:text-white font-extrabold ml-2">
              Configuración
            </h2>
          </button>
        </Modal>
      )}
    </>
  );
}

export default ModalUser;
