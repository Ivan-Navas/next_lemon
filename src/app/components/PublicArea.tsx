"use client";
import { Auth } from "@/helpers/interfaces/user";
import React, { useState } from "react";
import { BiPaperclip, BiSolidSend } from "react-icons/bi";
import Cookies from "js-cookie";
import { Post, PostRequest } from "@/helpers/interfaces/post";
import { useAppContext } from "@/context";

function PublicArea() {
  const { feed, setFeed } = useAppContext();
  const cookies = Cookies.get("auth");
  const auth: Auth = cookies ? JSON.parse(cookies) : null;
  const [file, setFile] = useState<any>(null);
  const [publiData, setPubliData] = useState<string>();
  return (
    <form
      className="w-100 mt-13 grid"
      onSubmit={async (e) => {
        e.preventDefault();
        const request = await fetch(`/api/publication/create/${auth.id}`, {
          method: "POST",
          body: JSON.stringify({ data: publiData }),
        });
        const data: PostRequest = await request.json();

        if (file && data) {
          const formData = new FormData();
          formData.append("file", file);
          const addImageRequest = await fetch(
            `/api/publication/edit/${data.publication.id}`,
            {
              method: "PUT",
              body: formData,
            }
          );
          const addImageRes: PostRequest = await addImageRequest.json();
          setFeed([addImageRes.publication, ...feed]);
        } else {
          setFeed([data.publication, ...feed]);
        }
      }}
    >
      <textarea
        placeholder="¿Que estas pensando?"
        name="data"
        id="data"
        autoComplete="off"
        className="w-100 h-92 rounded-t-16 pl-13 pt-8 bg-lBackMain text-title text-12 font-medium mb-0 outline-none resize-none dark:bg-title dark:text-lFontMain dark:placeholder:text-lFontMain"
        onChange={(e) => {
          setPubliData(e.target.value);
        }}
      ></textarea>
      <div className="bg-lBackMain rounded-b-16 mt-0 flex justify-end dark:bg-title">
        <input
          className="hidden"
          type="file"
          title="file"
          id="file"
          onChange={(e) => {
            if (e.target && e.target.files && e.target.files.length > 0) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <label htmlFor="file">
        <BiPaperclip className="w-21 h-21 text-title dark:text-lFontMain inline-block cursor-pointer" />
        </label>
        <button type="submit" aria-label="submit" className="mr-28 ml-7">
          <BiSolidSend className="w-21 h-21 text-title dark:text-lFontMain" />
        </button>
      </div>
    </form>
  );
}

export default PublicArea;
