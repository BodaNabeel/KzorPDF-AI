import React, { useContext, useState } from "react";
import Collection from "./Collection";
import Popup from "./Popup";
import CollectionItems from "./CollectionItems";
import { DataContext } from "../../context/context";
function Library(props) {
  const { folderData } = props;
  // const [collection, setCollection] = useState(folderData);
  const [displayPopup, setDisplayPopup] = useState(false);
  const { documents, setDocuments, folders, setFolders } =
    useContext(DataContext);
  const [selectedCollection, setSelectedCollection] = useState(
    folderData[0]?.folder_id
  );

  return (
    <section className="lg:border-[1px] lg:flex border-2 lg:h-[650px] overflow-hidden h-screen">
      {displayPopup ? (
        <Popup
          setCollection={setFolders}
          collection={folders}
          displayPopup={displayPopup}
          setDisplayPopup={setDisplayPopup}
          setSelectedCollection={setSelectedCollection}
        />
      ) : null}

      <Collection
        collection={folders}
        displayPopup={displayPopup}
        setDisplayPopup={setDisplayPopup}
        selectedCollection={selectedCollection}
        setSelectedCollection={setSelectedCollection}
      />

      <CollectionItems
        collection={folders}
        setCollection={setFolders}
        selectedCollection={selectedCollection}
        setSelectedCollection={setSelectedCollection}
        documents={documents}
        setDocuments={setDocuments}
      />
    </section>
  );
}

export default Library;
