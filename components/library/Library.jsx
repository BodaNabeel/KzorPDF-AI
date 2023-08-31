import { IconPlus } from "@tabler/icons-react";
import React, { useRef, useState } from "react";
import { IconFolder, IconFolderFilled } from "@tabler/icons-react";
function Library({ overlay, setOverlay }) {
  const tempFolders = [
    "Untitled collection",
    "Physics",
    "Mathematics",
    "Chemistry",
    "OOPs in C++",
    "Hackathon ASoC",
    "Javascipt",
    "Medical Bills",
  ];
  const [folders, setFolders] = useState(tempFolders);
  const [selectedFolder, setSelectedFolder] = useState(0);
  const [folderName, setFolderName] = useState();
  const [displayPopup, setDisplayPopup] = useState(true);
  const inputRef = useRef();
  function updateFolderName(name) {
    setFolderName(name);
  }
  function saveFolder(e) {
    e.preventDefault();
    console.log(folderName);
    if (!folderName) {
      console.log("You need to enter a name");
    } else {
      const arr = [...folders];
      arr.push(folderName);
      setFolders(arr);
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
  return (
    <section className="border-[1px] flex h-[650px] ">
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
              className="w-[100%] border-[1px] mt-2 mb-5 p-2"
              type="text"
              id="folder-name"
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
      <div className="border-r-[1px] w-[25%] h-full overflow-hidden">
        <div className="[&>*]:px-4 mb-5 h-max">
          <h1 className="font-semibold text-xl py-4">My Library</h1>

          <span className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">COLLECTION</h1>
            <div
              onClick={() => {
                setDisplayPopup(true);
                setOverlay(true);
              }}
              className="p-2 rounded-[100%] hover:bg-gray-100 cursor-pointer transition-all"
            >
              <IconPlus stroke={1.5} className="text-gray-600 " />
            </div>
          </span>
        </div>

        <ul className="[&>*]:px-4 [&>*]:py-2  [&>*:hover]:cursor-pointer text-gray-600  h-[80%] overflow-y-auto ">
          {folders.map((folder, index) => {
            return (
              <li
                key={index}
                onClick={() => setSelectedFolder(index)}
                className={`flex gap-2 transition-all ${
                  index === selectedFolder
                    ? `bg-primary-50 `
                    : `hover:bg-gray-100 transition-all duration-300`
                } `}
              >
                {index === selectedFolder ? (
                  <IconFolderFilled />
                ) : (
                  <IconFolder />
                )}
                <p>{folder}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <div>
          <span>
            <p>NextJS</p>
            <p>3 Items</p>
          </span>
          <span>. . .</span>
        </div>
        <div>
          <div>
            <span>🔗</span>
            <span>
              <h1>NTCC Nabeel Boda A2305222027 Semester 2nd</h1>
              <p>26 July, 2023</p>
            </span>
            <span>. . .</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Library;
