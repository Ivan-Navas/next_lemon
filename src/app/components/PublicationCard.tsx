import React from "react";
import Image from "next/image";
import { BiSolidComment, BiShareAlt, BiSolidHeart, BiBarChart } from "react-icons/bi";

function PublicationCard() {
  return (
    <div className="flex">
      <div>
        <Image
          className="rounded-full"
          src={
            "https://res.cloudinary.com/ivannavas/image/upload/v1723778090/red_social/perfil_images/yjnufaycsjyphf62p5bj.jpg"
          }
          width={50}
          height={50}
          alt="UserImage"
        />
      </div>
      <div className="w-100 ml-15">
        <div>
          <h2 className="text-title text-20 font-medium dark:text-white">
            Ivan navas
          </h2>
          <h2 className="text-title text-10 font-medium dark:text-9f">@ivanrng | 09/09/2023</h2>
          <h2 className="text-title text-20 font-medium mt-10 dark:text-white">
            Encabezado de la publicacion
          </h2>
        </div>
        <div className="pr-65 mt-13">
          <Image
            src={
              "https://res.cloudinary.com/ivannavas/image/upload/v1723912531/red_social/publication/a4ydt53akgvhx4hnp0cq.jpg"
            }
            width={661}
            height={264}
            alt="publicationFile"
            className="min-w-661 max-w-100 min-h-264 rounded-16"
          />
          <div className="flex justify-around mt-13">
          <div>
            <button className="flex items-center justify-center">
              <BiSolidComment className="text-title text-20 dark:text-lBackMain" />
              <h2 className="text-10 text-title font-medium dark:text-lBackMain">20</h2>
            </button>
          </div>
          <div>
            <button className="flex items-center justify-center">
              <BiShareAlt className="text-title text-20 dark:text-lBackMain" />
              <h2 className="text-10 text-title font-medium dark:text-lBackMain">20</h2>
            </button>
          </div>
          <div>
            <button className="flex items-center justify-center">
              <BiSolidHeart className="text-title text-20 dark:text-lBackMain" />
              <h2 className="text-10 text-title font-medium dark:text-lBackMain">20</h2>
            </button>
          </div>
          <div>
            <button className="flex items-center justify-center">
              <BiBarChart className="text-title text-20 dark:text-lBackMain" />
              <h2 className="text-10 text-title font-medium dark:text-lBackMain">20</h2>
            </button>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default PublicationCard;
