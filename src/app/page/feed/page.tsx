"use client";
import SearchCard from "@/app/components/ui/feedComponents/SearchCard";
import UserCard from "@/app/components/ui/feedComponents/UserCard";
import React, { useEffect } from "react";

function Page() {
  useEffect(() => {
    document.title = "Lemon • Home";
  }, []);
  return (
    <div className="w-screen h-screen bg-lBackMain p-16 flex justify-between dark:bg-title">
      <div className="w-screen h-192 flex justify-between">
        <UserCard />
        <SearchCard />
      </div>
      <div>
      </div>
    </div>
  );
}

export default Page;
