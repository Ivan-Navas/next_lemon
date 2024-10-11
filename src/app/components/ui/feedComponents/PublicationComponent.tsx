import React, { useEffect } from "react";
import PublicationCard from "@/app/components/PublicationCard";
import { useAppContext } from "@/context";

function PublicationComponent() {
  const { feed } = useAppContext();
  return (
    <div className="w-65% px-18 py-34 bg-white rounded-16 dark:bg-back">
      {feed.map((post) => {
        return (
          <>
            <PublicationCard
              title={post.data}
              user={post.author.name}
              nickName={post.author.nickName}
              userImage={post.author.image}
              date={post.date}
              image={post.image}
            />
          </>
        );
      })}
    </div>
  );
}

export default PublicationComponent;
