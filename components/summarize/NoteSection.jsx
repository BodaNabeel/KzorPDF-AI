import { DataContext } from "../../context/context";
import { IconBookmarkOff } from "@tabler/icons-react";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

function NoteSection() {
  const { chatData, setChatData } = useContext(DataContext);
  const [hasBookmarks, setHasBookmarks] = useState(false);
  //
  // console.log(bookmarkedChat);

  async function deleteBookmark(chatID, index) {
    const tempChatData = [...chatData];
    tempChatData[index].is_bookmarked = false;
    setChatData(tempChatData);
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
      const tempChatData = [...chatData];
      tempChatData[index].is_bookmarked = true;
      setChatData(tempChatData);
    }
  }
  function Note({ element, index }) {
    if (chatData.length > 0) {
      if (element.is_bookmarked) {
        setHasBookmarks(true);
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
      }
    }
    // } else {
    //   return (
    //     <div className="flex items-center flex-col justify-center  h-full">
    //       <Image
    //         src="/images/empty.svg"
    //         height={150}
    //         width={150}
    //         alt="image of pdf"
    //       />
    //       <h1 className="mt-4 font-medium">
    //         Don't leave this space blank. Add your first bookmark now!
    //       </h1>
    //     </div>
    //   );
    // }
  }

  return (
    <>
      {chatData.map((element, index) => {
        return <Note element={element} index={index} />;
      })}
      {!hasBookmarks && (
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
      )}
    </>
  );
  // function Note(element, index) {
  //   return (
  // <div key={index} className=" mb-5 w-[90%] self-start flex px-4 pt-2">
  //   <div className="bg-[#f9f9fe]  rounded-md rounded-tl-none  border-[1px] px-2 py-4 ">
  //     <h1>{element.content}</h1>
  //   </div>
  //   <div className="flex items-center">
  //     <button>
  //       <IconBookmarkOff />
  //     </button>
  //   </div>
  // </div>
  //   );
  // }
  // // const notes = documentData[0]?.abc.notes;
  // // const temporaryData = [...documentData];

  // // function removeNote(noteID) {
  // //   const temporaryNotes = [...documentData[0].abc.notes];
  // //   const noteIndex = temporaryNotes.findIndex((note) => note.id === noteID);
  // //   temporaryNotes.splice(noteIndex, 1);
  // //   temporaryData[0].abc.notes = temporaryNotes;
  // //   setDocumentData(temporaryData);
  // // }
  // if (chatData.length > 0) {
  //   return (
  //     <div className="overflow-y-auto flex flex-col  px-4 pt-2 h-[100%] ">
  //       {chatData.map((element, index) => {
  //         if(element.isBookmarked) {
  //           return {
  //             (

  //               <div key={index} className=" mb-5 w-[77%] self-start flex">
  //               <div className="bg-[#f9f9fe]  rounded-md rounded-tl-none  border-[1px] px-2 py-4 ">
  //                 <h1>{element.content}</h1>
  //               </div>
  //               <div className="flex items-center">
  //                 <button onClick={() => deleteBookmark(data.chat_id, index)}>
  //                   <IconBookmarkOff />
  //                 </button>
  //               </div>
  //             </div>

  //             )
  //           }
  //         }

  //       })}
  //     </div>
  //   );
  // } else {
  //   return (
  // <div className="flex items-center flex-col justify-center  h-full">
  //   <Image
  //     src="/images/empty.svg"
  //     height={150}
  //     width={150}
  //     alt="image of pdf"
  //   />
  //   <h1 className="mt-4 font-medium">
  //     Don't leave this space blank. Add your first bookmark now!
  //   </h1>
  // </div>
  //   );
  // }
}

export default NoteSection;
