import React from "react";
import { IconDots } from "@tabler/icons-react";
import Image from "next/image";

function Folder(props) {
  const { selectedFolder, folders } = props;
  function DisplayCollectionItems() {
    if (folders[selectedFolder].collectionItems.length <= 0) {
      return <h1>No items have been found mate</h1>;
    } else {
      return folders[selectedFolder].collectionItems.map((element, index) => {
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
              <IconDots className="" />
            </span>
          </div>
        );
      });
    }
  }

  return (
    <div className=" w-[75%]">
      <div className="border-b-[1px] flex justify-between px-4 py-2 items-center">
        <span>
          <p className="text-lg font-medium">
            {folders[selectedFolder].collectionName}
          </p>
          <p className="text-s_grey-600 text-sm font-medium">
            {folders[selectedFolder].collectionItems.length} items
          </p>
        </span>
        <span className="text-s_grey-600 cursor-pointer">
          <IconDots className="" />
        </span>
      </div>
      <div className="py-2">{<DisplayCollectionItems />}</div>
    </div>
  );
}

export default Folder;
