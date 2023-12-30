import React, { useState } from "react";
import { IconDots, IconTrashX } from "@tabler/icons-react";
import Image from "next/image";
import { IconCircleMinus } from "@tabler/icons-react";
import toast from "react-hot-toast";
import formattedDate from "../../utils/formattedDate";

function Folder(props) {
  const {
    collection,
    setCollection,
    selectedCollection,
    setSelectedCollection,
    documentData,
  } = props;
  console.log(collection);
  const toDisplayDocument = documentData?.filter(
    (el) => el.folder_id === selectedCollection
  );
  const deleteCollection = async () => {
    const tempCollection = [...collection];
    const tempSelectedCollection = selectedCollection;
    const updateCollection = [...collection];
    updateCollection.map((element, index) => {
      if (element.folder_id === selectedCollection) {
        const newFolderId = updateCollection[index - 1]?.folder_id;
        setSelectedCollection(newFolderId);
        updateCollection.splice(index, 1);
        setCollection(updateCollection);
      }
    });
    const response = await fetch("/api/folder", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: selectedCollection,
      }),
    });

    if (response.status === 400) {
      setSelectedCollection(tempSelectedCollection);
      setCollection(tempCollection);
      toast.error(
        "An error occurred while deleting the folder. Please try again."
      );
    }
  };
  function DisplayCollectionItems() {
    if (!toDisplayDocument) {
      return <h1>No items have been found mate</h1>;
    } else {
      return toDisplayDocument.map((element, index) => {
        return (
          <div
            key={index}
            className="flex cursor-pointer justify-between px-4 py-2 hover:bg-gray-100 transition-all duration-300"
          >
            <div className="flex gap-4">
              <Image
                src="/images/pdf.svg"
                height={24}
                width={24}
                alt="image of pdf"
              />
              <span>
                <p className="font-medium ">{element.document_name}</p>
                <p className="text-sm text-gray-500">
                  {formattedDate(element.created_at)}
                </p>
              </span>
            </div>
            <span
              // onClick={() => deleteCollectionItem(index)}
              className="text-s_grey-600 cursor-pointer self-center"
            >
              <IconCircleMinus />
            </span>
          </div>
        );
      });
    }
  }

  return (
    <div className=" lg:w-[75%] ">
      <div className="border-b-[1px] flex px-4 py-4  items-center justify-between">
        <span className=" ">
          <p className="text-lg font-medium">
            {collection[selectedCollection]?.collectionName}
          </p>
          <p className="text-s_grey-600 font-semibold ">
            {toDisplayDocument.length}{" "}
            {toDisplayDocument.length > 1 ? "itmes" : "item"}
          </p>
        </span>

        <span
          onClick={deleteCollection}
          className="text-s_grey-600 cursor-pointer"
        >
          <IconTrashX />
        </span>
      </div>
      <div className="py-2">{<DisplayCollectionItems />}</div>
    </div>
  );
}

export default Folder;
