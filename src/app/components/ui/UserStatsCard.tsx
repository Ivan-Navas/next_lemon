import React from "react";
import {
  BiBookOpen,
  BiGroup,
  BiTime,
  BiUserVoice,
} from "react-icons/bi";

interface Props {
  followers: number | undefined;
  following: number | undefined;
  publications: number | undefined;
  date: string | undefined;
}

function UserStatsCard({ followers, following, publications, date }: Props) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <BiGroup className="text-back dark:text-9f w-20 h-20" />
          <h2 className="text-back dark:text-9f text-10 font-semibold ml-1">
            Seguidores
          </h2>
        </div>
        <h2 className="text-10 text-title dark:text-white font-semibold">
          {followers}
        </h2>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center justify-center">
          <BiUserVoice className="text-back dark:text-9f w-20 h-20" />
          <h2 className="text-back dark:text-9f text-10 font-semibold ml-1">
            Seguidos
          </h2>
        </div>
        <h2 className="text-10 text-title dark:text-white font-semibold">
          {following}
        </h2>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center justify-center">
          <BiBookOpen className="text-back dark:text-9f w-20 h-20" />
          <h2 className="text-back dark:text-9f text-10 font-semibold ml-1">
            Publicaciones
          </h2>
        </div>
        <h2 className="text-10 text-title dark:text-white font-semibold">
          {publications}
        </h2>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center justify-center">
          <BiTime className="text-back dark:text-9f w-20 h-20" />
          <h2 className="text-back dark:text-9f text-10 font-semibold ml-1">
            Se unió
          </h2>
        </div>
        <h2 className="text-10 text-title dark:text-white font-semibold">
          {date}
        </h2>
      </div>
    </div>
  );
}

export default UserStatsCard;
