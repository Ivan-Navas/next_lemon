import React from "react";
import Image from "next/image";
import {
  BiSolidComment,
  BiShareAlt,
  BiHeart,
  BiBarChart,
} from "react-icons/bi";
import { useAppContext } from "@/context";
import { Stat } from "@/helpers/interfaces/post";
import InfoUserPublication from "./ui/InfoUserPublication";

interface Props {
  id: number;
  title: string;
  user: string;
  nickName: string;
  userImage: string;
  date: string;
  image?: string;
  comment: Stat[];
  share: Stat[];
  like: Stat[];
  view: Stat[];
}

function PublicationCard({
  id,
  title,
  user,
  nickName,
  userImage,
  date,
  image,
  comment,
  share,
  like,
  view,
}: Props) {
  const { formatDate, getUserInfo } = useAppContext();
  return (
    <div className="px-18 py-34">
      <InfoUserPublication
        date={date}
        id={id}
        nickName={nickName}
        title={title}
        user={user}
        userImage={userImage}
        image={image}
      />
      <div className="pr-65 mt-13">
        <div className="flex justify-around mt-13">
          <div>
            <button type="button" className="flex items-center justify-center">
              <BiSolidComment className="text-title text-20 dark:text-lBackMain" />
              <h2 className="text-10 text-title font-medium dark:text-lBackMain">
                {comment.length}
              </h2>
            </button>
          </div>
          <div>
            <button type="button" className="flex items-center justify-center">
              <BiShareAlt className="text-title text-20 dark:text-lBackMain" />
              <h2 className="text-10 text-title font-medium dark:text-lBackMain">
                {share.length}
              </h2>
            </button>
          </div>
          <div>
            <button className="flex items-center justify-center">
              <BiHeart className="text-title text-20 dark:text-lBackMain" />
              <h2 className="text-10 text-title font-medium dark:text-lBackMain">
                {like.length}
              </h2>
            </button>
          </div>
          <div>
            <button className="flex items-center justify-center">
              <BiBarChart className="text-title text-20 dark:text-lBackMain" />
              <h2 className="text-10 text-title font-medium dark:text-lBackMain">
                {view.length}
              </h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicationCard;
