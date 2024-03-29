import React, { useContext, useState } from "react";
import { IconSquareRoundedX, IconTrashX } from "@tabler/icons-react";
import Image from "next/image";
import { IconCircleMinus } from "@tabler/icons-react";
import toast from "react-hot-toast";
import formattedDate from "../../utils/formattedDate";
import { IconTrash } from "@tabler/icons-react";
import { deleteFileFromStorageDB, deleteFolder } from "../../utils/apiUtils";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { DataContext } from "../../context/context";
import { updateSelectedCollection } from "../../utils/updateSelectedCollection";

function Folder(props) {
  const {
    collection,
    setCollection,
    selectedCollection,
    setSelectedCollection,
    documents,
    setDocuments,
  } = props;
  const router = useRouter();
  const [displayFilesList, setDisplayFilesList] = useState();
  useEffect(() => {
    const toDisplayDocument = documents?.filter(
      (el) => el.collection_id === selectedCollection
    );
    setDisplayFilesList(toDisplayDocument);
  }, [selectedCollection, documents]);

  const deleteFile = async (documentID, folderID, documentPath) => {
    const tempArr = [...documents];
    const newList = tempArr.filter(
      (element) => element.document_id !== documentID
    );
    setDocuments(newList);
    const res = await deleteFileFromStorageDB(
      folderID,
      documentID,
      documentPath
    );
    if (res !== 200) {
      setDocuments(tempArr);
      toast.error(
        "An error occurred while deleting the file. Please try again."
      );
    }
  };

  const deleteCollection = async () => {
    const tempCollection = [...collection];
    const updateCollection = [...collection];
    updateCollection.map((element, index) => {
      if (element.collection_id === selectedCollection) {
        let newFolderId;
        if (index === 0) {
          newFolderId = updateCollection[index + 1]?.collection_id;
        } else {
          newFolderId = updateCollection[index - 1]?.collection_id;
        }
        updateSelectedCollection(setSelectedCollection, router, newFolderId);
        updateCollection.splice(index, 1);
        setCollection(updateCollection);
      }
    });

    const response = await deleteFolder(selectedCollection);
    if (response !== 200) {
      // setSelectedCollection(tempSelectedCollection);
      updateSelectedCollection(setSelectedCollection, router, tempCollection);

      setCollection(tempCollection);
      toast.error(
        "An error occurred while deleting the folder. Please try again."
      );
    }
  };

  function DisplayCollectionItems() {
    if (!displayFilesList) {
      return <h1>No items have been found mate</h1>;
    } else {
      return (
        <div className="md:overflow-y-auto md:h-[90%]">
          {displayFilesList?.map((element, index) => {
            return (
              <div
                key={index}
                className="flex justify-between px-4 py-2 hover:bg-gray-100 transition-all duration-300 "
              >
                <Link
                  href={`/summarize/${element.collection_id}/${element.document_id}/${element.document_path}`}
                  className="flex gap-4 transition-all duration-300  hover:text-primary-400 cursor-pointer"
                >
                  <Image
                    src="/images/pdf.svg"
                    height={24}
                    width={24}
                    alt="image of pdf"
                  />
                  <span>
                    <p className="font-medium ">{element.document_name}</p>
                    <p className="text-sm ">
                      {formattedDate(element.created_at)}
                    </p>
                  </span>
                </Link>
                <span
                  onClick={() =>
                    deleteFile(
                      element.document_id,
                      element.collection_id,
                      element.document_path
                    )
                  }
                  className="text-s_grey-600 cursor-pointer self-center hover:text-s_red-400 transition-all"
                >
                  <IconSquareRoundedX />
                </span>
              </div>
            );
          })}
        </div>
      );
    }
  }

  return (
    <div className=" lg:w-[75%] md:min-h-max md:max-h-full">
      {selectedCollection ? (
        <div className="border-b-[1px] flex px-4 py-4 md:h-[10%]  items-center justify-between">
          <span className=" ">
            <p className="text-lg font-medium">
              {collection[selectedCollection]?.collectionName}
            </p>
            <p className="text-s_grey-600 font-semibold ">
              {displayFilesList?.length}{" "}
              {displayFilesList?.length > 1 ? "itmes" : "item"}
            </p>
          </span>

          <span
            onClick={deleteCollection}
            className="cursor-pointer flex border border-s_red-400 text-s_red-400 px-3 py-1 gap-2 rounded-md"
          >
            <IconTrash stroke={1.3} />
            <p className="font-medium">Delete Collection</p>
          </span>
        </div>
      ) : null}

      <DisplayCollectionItems />
    </div>
  );
}

export default Folder;
