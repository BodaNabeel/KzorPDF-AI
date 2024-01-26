import React, { useContext, useEffect, useState } from "react";
import Import from "./Import";
import Recent from "./Recent";
import ImportFile from "../import/ImportFile";
import { DataContext } from "../../context/context";
import { fetchFolderData } from "../../utils/apiUtils";
import {
  IconBookFilled,
  IconDiscountCheckFilled,
  IconNotebook,
  IconThumbUpFilled,
} from "@tabler/icons-react";

function HomePage({ folderData, userName }) {
  const { overlay } = useContext(DataContext);
  const [selectedFolder, setSelectedFolder] = useState(
    folderData[0]?.colelction_id
  );

  return (
    <main className="min-h-screen">
      {overlay ? (
        <ImportFile
          folderData={folderData}
          setSelectedFolder={setSelectedFolder}
          selectedFolder={selectedFolder}
        />
      ) : null}
      <div className="mb-5">
        <h1 className="font-semibold lg:text-xl lg:mt-10 lg:ml-0 mt-5 ml-3">
          Welcome {userName}!
        </h1>
      </div>
      <section className="bg-gray-100 px-8 py-8 rounded-3xl border-[1px] border-primary-100 w-[90%]">
        <div>
          <div className="flex items-center mb-11">
            <IconThumbUpFilled
              size={75}
              className="border-2 rounded-full p-4 bg-primary-700 text-white"
            />
            <div className="ml-5">
              <h1 className="text-2xl font-semibold">Analyze PDF</h1>
              <p className="w-[60%] text-s_grey-500 mt-2 font-medium">
                With AI model, analyze your PDFs, bookmark important points.
              </p>
            </div>
          </div>
          <Import />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
