import React, { useState } from "react";
import Collection from "./Collection";
import Popup from "./Popup";
import Folder from "./Folder";
function Library({ overlay, setOverlay }) {
  const collection = [
    {
      collectionName: "Untitled collection",
      collectionItems: [
        "NTCC Semester II, A2305222027 - Nabeel Boda",
        "Medical Bills 2022-23",
        "Semester fee receipt II",
      ],
    },
    {
      collectionName: "Physics",
      collectionItems: ["Motion in 1D", "Motion in 2D", "Gravitation"],
    },
    {
      collectionName: "Javascript",
      collectionItems: [
        "Arrays",
        "Functions",
        "Closure",
        "Higher order function",
      ],
    },
    {
      collectionName: "Hackathons",
      collectionItems: ["Google Apr 23", "Meta May 23", "X Jan 24"],
    },
  ];
  const [folders, setFolders] = useState(collection);
  const [displayPopup, setDisplayPopup] = useState(true);
  const [selectedFolder, setSelectedFolder] = useState(0);

  return (
    <section className="border-[1px] flex h-[650px] ">
      <Popup
        setFolders={setFolders}
        folders={folders}
        overlay={overlay}
        setOverlay={setOverlay}
        displayPopup={displayPopup}
        setDisplayPopup={setDisplayPopup}
      />

      <Collection
        folders={folders}
        displayPopup={displayPopup}
        setDisplayPopup={setDisplayPopup}
        setOverlay={setOverlay}
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
      />

      <Folder selectedFolder={selectedFolder} folders={folders} />
    </section>
  );
}

export default Library;
