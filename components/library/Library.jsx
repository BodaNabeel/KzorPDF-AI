import React, { useContext, useState } from "react";
import Collection from "./Collection";
import Popup from "./Popup";
import CollectionItems from "./CollectionItems";
import { DataContext } from "../../context/context";
function Library(props) {
  const { selectedFolder } = props;
  // const [collection, setCollection] = useState(folderData);
  const [displayPopup, setDisplayPopup] = useState(false);
  const { documents, setDocuments, folders, setFolders } =
    useContext(DataContext);
  const [selectedCollection, setSelectedCollection] = useState(selectedFolder);

  return (
    <div className="h-full lg:flex lg:items-center lg:justify-center">
      <section className="md:border-[1px] lg:flex border-2 lg:h-[600px] overflow-hidden lg:w-[90%]">
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
    </div>
  );
}

export default Library;
