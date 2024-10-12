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
    <div className="w-screen min-h-screen max-h-100 bg-lBackMain p-16 dark:bg-title">
      <div className="w-100% h-192 flex justify-between">
        <UserCard />
        <SearchCard />
      </div>
      <div className="w-100% flex justify-between mt-33">
        <UserExplorer />
        <PublicationComponent />
      </div>
    </div>
  );
}

export default Page;
