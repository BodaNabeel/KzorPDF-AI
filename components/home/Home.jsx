import React, { useContext, useEffect, useState } from "react";
import ImportFile from "../import/ImportFile";
import { DataContext } from "../../context/context";

import HeroSection from "./HeroSection";
import Information from "./Information";
import Recent from "./Recent";
import BooksPage from "../book/Books";

function HomePage({ folderData, userName }) {
  const { overlay } = useContext(DataContext);
  const [selectedFolder, setSelectedFolder] = useState(
    folderData[0]?.collection_id
  );

  return (
    <main className="min-h-screen lg:h-screen lg:border-[1px] lg:border-transparent">
      {overlay ? (
        <ImportFile
          folderData={folderData}
          setSelectedFolder={setSelectedFolder}
          selectedFolder={selectedFolder}
        />
      ) : null}
      <h1 className="font-semibold lg:text-xl lg:mt-5 lg:ml-0 mt-5 ml-3 mb-5">
        Welcome {userName}!
      </h1>
      <Information />
      <HeroSection />
      <Recent />
    </main>
  );
}

export default HomePage;
