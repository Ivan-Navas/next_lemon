"use client";
import React, { useState } from "react";
import { BiPaperclip, BiSolidSend } from "react-icons/bi";

function PublicArea() {
  const [file, setFile] = useState<any>(null);
  return (
    <form
      className="w-100 mt-13 grid"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        const request = await fetch("/api/publication/create", {
          method: "POST",
          body: formData,
        });
        const data = await request.json();
      }}
    >
      <textarea
        placeholder="¿Que estas pensando?"
        name="data"
        id="data"
        autoComplete="off"
        className="w-100 h-92 rounded-t-16 pl-13 pt-8 bg-lBackMain text-title text-12 font-medium mb-0 outline-none resize-none dark:bg-title dark:text-lFontMain dark:placeholder:text-lFontMain"
      ></textarea>
      <div className="bg-lBackMain rounded-b-16 mt-0 flex justify-end dark:bg-title">
        <input
          type="file"
          title="file"
          onChange={(e) => {
            if (e.target && e.target.files && e.target.files.length > 0) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <div className="flex items-center justify-center">
          <BiPaperclip className="w-21 h-21 text-title dark:text-lFontMain" />
        </div>
        <button type="submit" aria-label="submit" className="mr-28 ml-7">
          <BiSolidSend className="w-21 h-21 text-title dark:text-lFontMain" />
        </button>
      </div>
    </form>
  );
}

export default PublicArea;
