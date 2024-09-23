import React from "react";
import Image from "next/image";
import { BiSolidEditAlt } from "react-icons/bi";

function UserCard() {
  return (
    <div className="w-30% h-100 bg-white rounded-16 px-16 py-8 flex items-start dark:bg-back">
      <button
        type="button"
        aria-label="iconUser"
        className="p-1 bg-button rounded-100%"
      >
        <Image
          className="rounded-100%"
          src={
            "https://res.cloudinary.com/ivannavas/image/upload/v1723778090/red_social/perfil_images/yjnufaycsjyphf62p5bj.jpg"
          }
          width={70}
          height={70}
          alt="userImage"
        />
      </button>
      <div className="w-100 ml-43 pt-8">
        <div className="flex">
          <div className="w-100 h-35 bg-lBackMain flex items-center dark:bg-backL">
            <h2 className="text-title text-30 font-medium dark:text-white">
              ivanrng
            </h2>
          </div>
          <button className="w-36 h-36" type="button" aria-label="editUser">
            <BiSolidEditAlt className="w-36 h-36 text-title" />
          </button>
        </div>
        <p className="text-12 text-title font-medium dark:text-lBackMain">
          alert(`esta es mi biografia`)
        </p>
        <div className="w-100% h-22 bg-lBackMain flex items-center mt-24 dark:bg-backL">
          <h2 className="text-20 text-title font-medium dark:text-lBackMain">
            12 Seguidores
          </h2>
        </div>
        <div className="w-100% h-22 bg-lBackMain flex items-center mt-8 dark:bg-backL">
          <h2 className="text-20 text-title font-medium dark:text-lBackMain">
            4 Seguidos
          </h2>
        </div>
        <div className="w-100% h-22 bg-lBackMain flex items-center mt-8 dark:bg-backL">
          <h2 className="text-20 text-title font-medium dark:text-lBackMain">
            8 Publicaciones
          </h2>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
