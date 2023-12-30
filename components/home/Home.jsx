import React, { useContext } from "react";
import Import from "./Import";
import Recent from "./Recent";
import ImportFile from "../import/ImportFile";
import { DataContext } from "../../context/context";

function HomePage() {
  const { overlay } = useContext(DataContext);
  return (
    <>
      {overlay ? <ImportFile /> : null}
      <div className="mb-5">
        <h1 className="font-bold text-lg">Welcome, Nabeel</h1>
      </div>
      <Import />
    </>
  );
}

export default HomePage;
