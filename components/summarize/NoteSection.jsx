import { DataContext } from "@/context/context";
import { IconBookmarkOff } from "@tabler/icons-react";
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
    return notes.map((element, index) => {
      return (
        <div key={index} className=" mb-5 w-[77%] self-start flex px-4 pt-2">
          <div className="bg-[#f9f9fe]  rounded-md rounded-tl-none  border-[1px] px-2 py-4 ">
            {element.note.map((text, index) => (
              <div key={index}>
                {text} <br />
              </div>
            ))}
          </div>
          <button onClick={() => removeNote(element.id)}>
            <IconBookmarkOff />
          </button>
        </div>
      );
    });
  } else {
    return <h1>No notes mate</h1>;
  }
}

export default NoteSection;
