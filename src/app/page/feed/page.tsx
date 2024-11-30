"use client";
import SearchCard from "@/app/components/ui/feedComponents/SearchCard";
import UserCard from "@/app/components/ui/feedComponents/UserCard";
import React, { useEffect } from "react";
import UserExplorer from "@/app/components/ui/feedComponents/UserExplorer";
import PublicationComponent from "@/app/components/ui/feedComponents/PublicationComponent";
import ModalUser from "@/app/components/ModalUser";
import ModalComment from "@/app/components/ModalComment";

function Page() {
  useEffect(() => {
    document.title = "Lemon • Home";
  }, []);
  return (
    <div className="flex justify-between bg-lBackMain dark:bg-title">
      <div className="w-421 relative">
        <ModalComment />
        <ModalUser />
        <div className="pt-16 pl-16">
        <UserCard />
        <UserExplorer />
        </div>
      </div>
      <div className="w-65% pt-16 pr-16">
        <SearchCard />
        <PublicationComponent />
      </div>
    </div>
  );
}

export default Page;
