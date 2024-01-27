import React, { useContext } from "react";
import { DataContext } from "../../context/context";

function Information() {
  const { documentCount, chatCount, bookmarkCount, collectionCount } =
    useContext(DataContext);
  const objective = {
    "Collections Created": collectionCount,
    "PDFs Uploaded": documentCount,
    "Chat Generated": chatCount,
    "Bookmarks Saved": bookmarkCount,
  };

  const ReturnObjectives = () => {
    return Object.entries(objective).map(([key, value]) => (
      <div
        key={key}
        className=" border-2 border-primary-100 lg:px-4 lg:py-2 rounded-lg lg:mr-10 mr-2 lg:mb-0 mb-2 lg:w-fit w-28 py-[2px] px-[4px]"
      >
        <h3 className="font-semibold lg:mb-2 ">{key}</h3>
        <h2 className="lg:text-3xl font-bold text-primary-700">{value}</h2>
      </div>
    ));
  };

  return (
    <section className="flex flex-wrap mb-5 lg:ml-0 ml-2">
      <ReturnObjectives />
    </section>
  );
}

export default Information;
