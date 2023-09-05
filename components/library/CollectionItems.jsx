import React, { useState } from "react";
import { IconDots, IconTrashX } from "@tabler/icons-react";
import Image from "next/image";
import { IconCircleMinus } from "@tabler/icons-react";

function Folder(props) {
  const { selectedCollection, collection } = props;
  const [collectionMenu, setCollectionMenu] = useState(false);
  function DisplayCollectionItems() {
    if (collection[selectedCollection].collectionItems.length <= 0) {
      return <h1>No items have been found mate</h1>;
    } else {
      return collection[selectedCollection].collectionItems.map(
        (element, index) => {
          return (
            <div
              key={index}
              className="flex cursor-pointer justify-between px-4 py-2 hover:bg-gray-100 transition-all duration-300"
            >
              <div className="flex gap-4">
                <Image src="/images/pdf.svg" height={24} width={24} />
                <span>
                  <p className="font-medium">{element}</p>
                  <p className="text-sm text-gray-500">26 July, 2023</p>
                </span>
              </div>

              <span className="text-s_grey-600 cursor-pointer self-center">
              <IconCircleMinus/>
              </span>
            </div>
          );
        }
      );
    }
  }

  return (
    <div className=" w-[75%]">
      <div className="border-b-[1px] flex px-4 py-2  items-center justify-between">
        <span className=" ">
          <p className="text-lg font-medium">
            {collection[selectedCollection].collectionName}
          </p>
          <p className="text-s_grey-600 text-sm font-medium">
            {collection[selectedCollection].collectionItems.length} items
          </p>
        </span>
      
          <span
          onClick={()=> setCollectionMenu(true)}
          className="text-s_grey-600 cursor-pointer">
            <IconTrashX/>
          </span>
       
      </div>
      <div className="py-2">{<DisplayCollectionItems />}</div>
    </div>
  );
}

export default Folder;
