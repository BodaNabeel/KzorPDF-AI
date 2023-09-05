import React, { useState } from "react";
import Collection from "./Collection";
import Popup from "./Popup";
import Folder from "./CollectionItems";
function Library({ overlay, setOverlay }) {
  const tempCollection = [
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
  const [collection, setcollection] = useState(tempCollection);
  const [displayPopup, setDisplayPopup] = useState(true);
  const [selectedCollection, setselectedCollection] = useState(0);

  return (
    <section className="border-[1px] flex h-[650px] ">
      <Popup
        setcollection={setcollection}
        collection={collection}
        overlay={overlay}
        setOverlay={setOverlay}
        displayPopup={displayPopup}
        setDisplayPopup={setDisplayPopup}
      />

      <Collection
        collection={collection}
        displayPopup={displayPopup}
        setDisplayPopup={setDisplayPopup}
        setOverlay={setOverlay}
        selectedCollection={selectedCollection}
        setselectedCollection={setselectedCollection}
      />

      <Folder selectedCollection={selectedCollection} collection={collection} />
    </section>
  );
}

export default Library;
