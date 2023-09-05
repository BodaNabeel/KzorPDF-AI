import React, { useRef, useState } from "react";

function Popup(props) {
  const {
    folders,
    setFolders,
    overlay,
    setOverlay,
    displayPopup,
    setDisplayPopup,
  } = props;
  const inputRef = useRef();
  const [folderName, setFolderName] = useState();
  function saveFolder(e) {
    e.preventDefault();
    console.log(folderName);
    if (!folderName) {
      console.log("You need to enter a name");
    } else {
      const arr = [...folders];
      arr.push({ collectionName: folderName, collectionItems: [] });
      setFolders(arr);
      //   const arr = [...folders];
      //   arr.push(folderName);
      //   setFolders(arr);
      inputRef.current.value = "";
      setFolderName("");
      setDisplayPopup(false);
      setOverlay(false);
    }
  }
  function cancelFolder(e) {
    setDisplayPopup(false);
    setOverlay(false);
    e.preventDefault();
  }
  function updateFolderName(name) {
    setFolderName(name);
  }

  return (
    <div
      className={`left-[40%] top-[40%]  border-2 border-s_grey-100 w-[30%] p-4 bg-white shadow-[0px_0px_40px_5px_#00000024]  z-50 ${
        displayPopup && overlay ? "absolute" : "hidden"
      }`}
    >
      <h1 className="font-semibold mb-5">Create new collection</h1>
      <div className="">
        <p>Collection Name:</p>
        <form>
          <input
            onChange={() => updateFolderName(inputRef.current.value)}
            ref={inputRef}
            className="w-[100%] border-[1px] mt-2 mb-5 p-2 outline-1 outline-primary-100 bg-transparent"
            type="text"
            placeholder="E.g. Object Oriented Programming"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveFolder(e);
              }
            }}
          />
          <div className="flex justify-end gap-5">
            <button
              onClick={(e) => cancelFolder(e)}
              className="bg-primary-100 text-primary-700 px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={(e) => saveFolder(e)}
              className={` px-4 py-2 rounded-md ${
                !folderName
                  ? "bg-s_grey-100 text-s_grey-600 cursor-not-allowed "
                  : "bg-primary-800 text-primary-100  "
              }`}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;
