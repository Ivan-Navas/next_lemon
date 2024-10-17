import React, { useEffect } from "react";
import PublicationCard from "@/app/components/PublicationCard";
import { useAppContext } from "@/context";

function PublicationComponent() {
  const { feed } = useAppContext();
  return (
    <div className="w-100% mt-33 bg-white rounded-16 dark:bg-back">
      {feed.map((post) => {
        return (
          <div key={post.id}>
            <PublicationCard
              id={post.author.id}
              title={post.data}
              user={post.author.name}
              nickName={post.author.nickName}
              userImage={post.author.image}
              date={post.date}
              image={post.image}
            />
            <hr className="h-1 border-none bg-lBackMain dark:bg-title" />
          </div>
        );
      })}
    </div>
  );
}

export default PublicationComponent;
