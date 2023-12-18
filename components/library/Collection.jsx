import React, { useContext, useState } from "react";
import { IconFolder, IconFolderFilled, IconPlus } from "@tabler/icons-react";
import { DataContext } from "../../context/context";
function Collection(props) {
  const {
    collection,
    setDisplayPopup,
    selectedCollection,
    setSelectedCollection,
  } = props;
  const { setOverlay, overlay } = useContext(DataContext);
  return (
    <div className="border-r-[1px] lg:w-[25%] min-h-max max-h-full overflow-hidden ">
      <div className="[&>*]:px-4 mb-5 h-max">
        <h1 className="font-semibold text-xl py-4">My Library</h1>

        <span className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">COLLECTION</h1>
          <div
            onClick={() => {
              setDisplayPopup(true);
              setOverlay("bg-[#81818165]");
            }}
            className="p-2 rounded-[100%] hover:bg-gray-100 cursor-pointer transition-all"
          >
            <IconPlus stroke={1.5} className="text-gray-600 " />
          </div>
        </span>
      </div>

      <ul className="[&>*]:px-4 [&>*]:py-2  [&>*:hover]:cursor-pointer text-gray-600  h-[80%] overflow-y-auto ">
        {collection.map((folder, index) => {
          return (
            <li
              key={index}
              onClick={() => setSelectedCollection(index)}
              className={`flex gap-2 transition-all ${
                index === selectedCollection
                  ? `bg-primary-50 `
                  : `hover:bg-gray-100 transition-all duration-300`
              } `}
            >
              {index === selectedCollection ? (
                <IconFolderFilled />
              ) : (
                <IconFolder />
              )}
              <p>{folder.collectionName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Collection;
