import React from "react";
import UserExplorerCard from "@/app/components/UserExplorerCard";
import { useAppContext } from "@/context";

function UserExplorer() {
  const { userExplorer } = useAppContext();

  return (
    <div className="w-30% h-100 rounded-16 bg-white pb-18 pt-10 dark:bg-back">
      <h2 className="font-medium text-20 text-title text-center dark:text-white">
        Usuarios
      </h2>
      {userExplorer.map((user) => {
        return (
          <>
            <UserExplorerCard
              image={user.image}
              name={user.name} 
              nickName={user.nickName} />
          </>
        );
      })}
    </div>
  );
}

export default UserExplorer;
