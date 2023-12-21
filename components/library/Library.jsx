import React, { useState } from "react";
import Collection from "./Collection";
import Popup from "./Popup";
import CollectionItems from "./CollectionItems";
function Library(props) {
  const { folderData } = props;
  const [collection, setCollection] = useState(folderData);
  const [displayPopup, setDisplayPopup] = useState(true);
  const [selectedCollection, setSelectedCollection] = useState(0);

  return (
    <section className="lg:border-[1px] lg:flex lg:h-[650px] ">
      <Popup
        setCollection={setCollection}
        collection={collection}
        displayPopup={displayPopup}
        setDisplayPopup={setDisplayPopup}
        setSelectedCollection={setSelectedCollection}
      />

      <Collection
        collection={collection}
        displayPopup={displayPopup}
        setDisplayPopup={setDisplayPopup}
        selectedCollection={selectedCollection}
        setSelectedCollection={setSelectedCollection}
        folderData={folderData}
      />

      <CollectionItems
        collection={collection}
        setCollection={setCollection}
        selectedCollection={selectedCollection}
        setSelectedCollection={setSelectedCollection}
      />
    </section>
  );
}

export default Library;
