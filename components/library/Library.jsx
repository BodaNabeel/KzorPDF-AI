import React, { useState } from "react";
import Collection from "./Collection";
import Popup from "./Popup";
import CollectionItems from "./CollectionItems";
function Library(props) {
  const { folderData, documentData } = props;
  const [collection, setCollection] = useState(folderData);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(
    folderData[0].folder_id
  );

  return (
    <section className="lg:border-[1px] lg:flex border-2 lg:h-[650px] overflow-hidden ">
      {displayPopup ? (
        <Popup
          setCollection={setCollection}
          collection={collection}
          displayPopup={displayPopup}
          setDisplayPopup={setDisplayPopup}
          setSelectedCollection={setSelectedCollection}
        />
      ) : null}

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
        documentData={documentData}
      />
    </section>
  );
}

export default Library;
