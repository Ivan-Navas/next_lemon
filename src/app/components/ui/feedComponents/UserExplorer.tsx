import React from "react";
import UserExplorerCard from "@/app/components/UserExplorerCard";
import { useAppContext } from "@/context";

function UserExplorer() {
  const { userExplorer } = useAppContext();

  return (
    <div className="w-100%  rounded-16 bg-white pb-18 pt-10 mt-33 dark:bg-back">
      <h2 className="font-medium text-20 text-title text-center dark:text-white">
        Usuarios
      </h2>
      {userExplorer.map((user) => {
        return (
          <div key={user.id}>
            <UserExplorerCard
              id={user.id}
              image={user.image}
              name={user.name} 
              nickName={user.nickName} />
          </div>
        );
      })}
    </div>
  );
}

export default UserExplorer;
