import { DataContext } from "../../context/context";
import { IconBookmarkOff } from "@tabler/icons-react";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

function NoteSection() {
  const { chatData, setChatData, bookmark, setBookmark } =
    useContext(DataContext);

  let tempBookmark = [...bookmark];
  let disposalBookmark = [...bookmark];
  let tempChat = [...chatData];
  let disposalChat = [...chatData];

  async function deleteBookmark(chatID) {
    tempBookmark.map((element, index) => {
      if (element.chat_id === chatID) {
        tempBookmark.splice(index, 1);
        setBookmark(tempBookmark);
      }
    });
    tempChat.map((element, index) => {
      if (element.chat_id == chatID) {
        tempChat[index].is_bookmarked = false;
        setChatData(tempChat);
        console.log("working");
      }
    });
    const response = await fetch("/api/chat_db", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatID,
        creatingBookmark: false,
      }),
    });
    if (response.status === 400) {
      setChatData(disposalChat);
      setBookmark(disposalBookmark);
    }
  }
  function Note() {
    if (bookmark.length > 0) {
      return bookmark.map((element, index) => {
        return (
          <div key={index} className=" mb-5 w-[90%] self-start flex px-4 pt-2">
            <div className="bg-[#f9f9fe]  rounded-md rounded-tl-none  border-[1px] px-2 py-4 ">
              <h1>{element.content}</h1>
            </div>
            <div className="flex items-center">
              <button onClick={() => deleteBookmark(element.chat_id, index)}>
                <IconBookmarkOff />
              </button>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="flex items-center flex-col justify-center  h-full">
          <Image
            src="/images/empty.svg"
            height={150}
            width={150}
            alt="image of pdf"
          />
          <h1 className="mt-4 font-medium">
            Don't leave this space blank. Add your first bookmark now!
          </h1>
        </div>
      );
    }
  }

  return <Note />;
}

export default NoteSection;
