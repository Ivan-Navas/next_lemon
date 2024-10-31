import { useAppContext } from "@/context";
import React from "react";
import Image from "next/image";

interface Props {
  id: number;
  userImage: string;
  user: string;
  nickName: string;
  date: string;
  title: string;
  image?: string;
}

function InfoUserPublication({
  id,
  userImage,
  user,
  nickName,
  date,
  title,
  image,
}: Props) {
  const { getUserInfo, formatDate } = useAppContext();
  return (
    <div className="flex">
      <div>
        <button
          aria-label="userImage"
          type="button"
          onClick={() => getUserInfo(id)}
        >
          <Image
            className="rounded-full"
            src={userImage}
            width={50}
            height={50}
            alt="UserImage"
          />
        </button>
      </div>
      <div className="w-100 ml-15">
        <div>
          <button
            type="button"
            aria-label="userName"
            onClick={() => getUserInfo(id)}
          >
            <h2 className="text-title text-20 font-medium dark:text-white hover:underline">
              {user}
            </h2>
          </button>

          <h2 className="text-title text-10 font-medium dark:text-9f">
            @{nickName} | {formatDate(new Date(date))}
          </h2>
          <h2 className="text-title text-20 font-medium mt-10 dark:text-white">
            {title}
          </h2>
        </div>
        {image && (
          <Image
            src={image}
            width={661}
            height={264}
            alt="publicationFile"
            className="min-w-661 max-w-100 min-h-264 rounded-16"
          />
        )}
      </div>
    </div>
  );
}

export default InfoUserPublication;
