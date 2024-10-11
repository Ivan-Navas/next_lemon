import React from "react";
import Image from "next/image";
import {
  BiSolidComment,
  BiShareAlt,
  BiSolidHeart,
  BiBarChart,
} from "react-icons/bi";
import { useAppContext } from "@/context";

interface Props {
  title: string;
  user: string;
  nickName: string;
  userImage: string;
  date: string;
  image?: string;
}

function PublicationCard({
  title,
  user,
  nickName,
  userImage,
  date,
  image,
}: Props) {
  const { formatDate } = useAppContext();
  return (
    <div className="flex px-18 py-34">
      <div>
        <Image
          className="rounded-full"
          src={userImage}
          width={50}
          height={50}
          alt="UserImage"
        />
      </div>
      <div className="w-100 ml-15">
        <div>
          <h2 className="text-title text-20 font-medium dark:text-white">
            {user}
          </h2>
          <h2 className="text-title text-10 font-medium dark:text-9f">
            @{nickName} | {formatDate(new Date(date))}
          </h2>
          <h2 className="text-title text-20 font-medium mt-10 dark:text-white">
            {title}
          </h2>
        </div>
        <div className="pr-65 mt-13">
          {image && (
            <Image
              src={image}
              width={661}
              height={264}
              alt="publicationFile"
              className="min-w-661 max-w-100 min-h-264 rounded-16"
            />
          )}
          <div className="flex justify-around mt-13">
            <div>
              <button className="flex items-center justify-center">
                <BiSolidComment className="text-title text-20 dark:text-lBackMain" />
                <h2 className="text-10 text-title font-medium dark:text-lBackMain">
                  20
                </h2>
              </button>
            </div>
            <div>
              <button className="flex items-center justify-center">
                <BiShareAlt className="text-title text-20 dark:text-lBackMain" />
                <h2 className="text-10 text-title font-medium dark:text-lBackMain">
                  20
                </h2>
              </button>
            </div>
            <div>
              <button className="flex items-center justify-center">
                <BiSolidHeart className="text-title text-20 dark:text-lBackMain" />
                <h2 className="text-10 text-title font-medium dark:text-lBackMain">
                  20
                </h2>
              </button>
            </div>
            <div>
              <button className="flex items-center justify-center">
                <BiBarChart className="text-title text-20 dark:text-lBackMain" />
                <h2 className="text-10 text-title font-medium dark:text-lBackMain">
                  20
                </h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicationCard;
