import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../context/context";
import toast from "react-hot-toast";
import { ClipLoader, FadeLoader } from "react-spinners";
import { useRouter } from "next/router";
import { updateSelectedCollection } from "../../utils/updateSelectedCollection";
function Popup(props) {
  const {
    setCollection,
    displayPopup,
    setDisplayPopup,
    setSelectedCollection,
  } = props;
  const inputRef = useRef();
  const [folderName, setFolderName] = useState();
  const { setOverlay, overlay } = useContext(DataContext);
  const [sendingReq, setSendingReq] = useState(false);
  const router = useRouter();
  const createCollection = async (folder) => {
    const response = await fetch("/api/folder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: folder,
      }),
    });
    const responseGetData = await fetch("/api/folder", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await responseGetData.json();
    if (response.status === 200) {
      setFolderName("");
      setSendingReq(false);
      setOverlay(false);
      setDisplayPopup(false);
      inputRef.current.value = "";

      const len = data.length - 1;
      setCollection(data);

      const folderID = data[len].folder_id;
      // setSelectedCollection(data[len].folder_id);
      updateSelectedCollection(
        setSelectedCollection,
        router,
        data[len].folder_id
      );
    }
    if (response.status === 400) {
      toast.error("Folder name already exist");
      setSendingReq(false);
    }
  };
  function saveFolder(e) {
    e.preventDefault();
    if (!folderName) {
    } else {
      createCollection(folderName);
      setSendingReq(true);
    }
  }
  function cancelFolder(e) {
    setDisplayPopup(false);
    setOverlay(false);
    e.preventDefault();
  }
  function handleInputChange() {
    const inputValue = inputRef.current.value.trim();
    if (inputValue !== null || inputValue !== "") {
      setFolderName(inputValue);
    }
  }

  return (
    <div
      className={`lg:left-[50%] lg:top-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:m-0  w-[90%] mx-4 top-[20%] border-2 border-s_grey-100 lg:w-[30%] p-4 bg-white shadow-[0px_0px_40px_5px_#00000024]  z-50 ${
        displayPopup && overlay ? "absolute" : "hidden"
      }`}
    >
      <h1 className="font-semibold mb-5">Create new collection</h1>
      <div className="">
        <p>Collection Name:</p>
        <form>
          <input
            onChange={() => handleInputChange()}
            ref={inputRef}
            className="w-[100%] border-[1px] mt-2 mb-5 p-2 outline-1 outline-primary-100 bg-transparent"
            type="text"
            placeholder="E.g. Object Oriented Programming"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveFolder(e);
              }
            }}
          />
          <div className="flex justify-end gap-5">
            <button
              onClick={(e) => cancelFolder(e)}
              className="bg-primary-100 text-primary-700 px-4 py-2 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-200 transition-75"
            >
              Cancel
            </button>

            <button
              type="submit"
              onClick={(e) => saveFolder(e)}
              className={`flex gap-2 items-center px-4 py-2 rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-200 transition-75 ${
                !folderName || sendingReq
                  ? "bg-s_grey-100 text-s_grey-600 cursor-not-allowed"
                  : "bg-primary-800 text-primary-100"
              }`}
            >
              {sendingReq ? (
                <ClipLoader size={20} color="hsl(221,84%,70%)" />
              ) : null}
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;
