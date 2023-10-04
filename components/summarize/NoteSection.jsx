import { DataContext } from "@/context/context";
import { IconBookmarkOff } from "@tabler/icons-react";
import Image from "next/image";
import React, { useContext } from "react";

function NoteSection() {
  const { documentData, setDocumentData } = useContext(DataContext);
  const notes = documentData[0]?.abc.notes;
  const temporaryData = [...documentData];

  function removeNote(noteID) {
    const temporaryNotes = [...documentData[0].abc.notes];
    const noteIndex = temporaryNotes.findIndex((note) => note.id === noteID);
    temporaryNotes.splice(noteIndex, 1);
    temporaryData[0].abc.notes = temporaryNotes;
    setDocumentData(temporaryData);
  }
  console.log(notes);
  if (notes.length > 0) {
    return (
      <div className="overflow-y-auto flex flex-col  px-4 pt-2 h-[100%] ">
        {notes.map((element, index) => {
          return (
            <div
              key={index}
              className=" mb-5 w-[90%] self-start flex px-4 pt-2"
            >
              <div className="bg-[#f9f9fe]  rounded-md rounded-tl-none  border-[1px] px-2 py-4 ">
                {element.note.map((text, index) => (
                  <div key={index}>
                    {text} <br />
                  </div>
                ))}
              </div>
              <div className="flex items-center">
                <button onClick={() => removeNote(element.id)}>
                  <IconBookmarkOff />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
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

export default NoteSection;
