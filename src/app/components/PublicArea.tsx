"use client";
import React from "react";
import { BiPaperclip, BiSolidSend } from "react-icons/bi";

function PublicArea() {
  return (
    <form className="w-100 mt-13 grid">
      <textarea
        placeholder="¿Que estas pensando?"
        name="data"
        id="data"
        autoComplete="off"
        className="w-100 h-92 rounded-t-16 pl-13 pt-8 bg-lBackMain text-title text-12 font-medium mb-0 outline-none resize-none dark:bg-title dark:text-lFontMain dark:placeholder:text-lFontMain"
      ></textarea>
      <div className="bg-lBackMain rounded-b-16 mt-0 flex justify-end dark:bg-title">
        <button type="button" aria-label="file" className="">
          <BiPaperclip className="w-21 h-21 text-title dark:text-lFontMain"/>
        </button>
        <button type="submit" aria-label="submit" className="mr-28 ml-7">
          <BiSolidSend className="w-21 h-21 text-title dark:text-lFontMain"/>
        </button>
      </div>
    </form>
  );
}

export default PublicArea;
