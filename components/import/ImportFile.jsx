import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React, { useCallback, useEffect, useState } from "react";
import Dropzone from "../../utils/Dropzone";
import { fetchFolderData } from "../../utils/apiUtils";

export default function ImportFile() {
  const [file, setFile] = useState();
  const [folders, setFolders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const folderDataFromAPI = await fetchFolderData();
      setFolders(folderDataFromAPI);
    };

    fetchData();
  }, []);
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white z-50 rounded-lg lg:w-[30%] flex flex-col w-[90%]">
      <h1 className="bg-primary-100 text-center rounded-t-lg p-3">
        UPLOAD FILE
      </h1>
      <div className="lg:mx-10 my-10 mx-2 p-10 border-2 border-dashed border-s_grey-200">
        <Dropzone setFile={setFile} file={file} />
      </div>
      <div className="m-10">
        <div>
          <p>SELECT COLLECTION:</p>

          <select className="mt-1 border-2 border-s_grey-200 w-[60%] text-lg px-2 py-2 rounded-md cursor-pointer">
            {folders?.map((element, index) => {
              return (
                <option className="cursor-pointer" key={index}>
                  {element.folder_name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="self-end lg:mr-10 mr-2 flex lg:gap-3 gap-1 pb-3">
        <button className="bg-primary-100 text-primary-700 px-2 py-1 lg:px-4 lg:py-2 rounded-md">
          Cancel
        </button>

        <button
          type="submit"
          className={` flex gap-2 items-center lg:px-4 lg:py-2 px-2 py-1 rounded-md


              bg-primary-800 text-primary-100  
              
              `}
        >
          Upload
        </button>
      </div>
    </div>
  );
}
