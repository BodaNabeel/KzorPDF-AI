import React, { useEffect, useState } from "react";
import Collection from "./Collection";
import Popup from "./Popup";
import CollectionItems from "./CollectionItems";
import { useRouter } from "next/router";
function Library(props) {
  const { folderData, documentData } = props;
  const [collection, setCollection] = useState(folderData);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState();
  const router = useRouter();
  const [selected, setSelected] = useState(router.query.collection);

  useEffect(() => {
    if (!selected && folderData) {
      setSelected(folderData[0]?.folder_id);
      // router.query.collection = folderData[0].folder_id;
      // router.push(`?collection=${folderData[0].folder_id}`);
    } else {
      setSelected(router.query.collection);
    }
  }, [router.query.collection]);

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
        selected={selected}
      />

      <CollectionItems
        collection={collection}
        setCollection={setCollection}
        selectedCollection={selectedCollection}
        setSelectedCollection={setSelectedCollection}
        documentData={documentData}
        selected={selected}
      />
    </section>
  );
}

export default Library;
