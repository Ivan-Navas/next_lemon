"use client";
import SearchCard from "@/app/components/ui/feedComponents/SearchCard";
import UserCard from "@/app/components/ui/feedComponents/UserCard";
import React, { useEffect } from "react";
import UserExplorer from "@/app/components/ui/feedComponents/UserExplorer";
import PublicationComponent from "@/app/components/ui/feedComponents/PublicationComponent";

function Page() {
  useEffect(() => {
    document.title = "Lemon • Home";
  }, []);
  return (
    <div className="flex justify-between bg-lBackMain p-16 dark:bg-title">
      <div className="w-30%">
        <UserCard />
        <UserExplorer />
      </div>
      <div className="w-65%">
        <SearchCard />
        <PublicationComponent />
      </div>
    </div>
  );
}

export default Page;
