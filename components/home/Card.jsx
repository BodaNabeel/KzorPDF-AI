import Link from "next/link";
import React from "react";
import timeDifference from "../../utils/timeDifference";

export default function Card({ recentDocuments }) {
  return recentDocuments.map((element, index) => (
    <div
      key={index}
      className="border-2 border-primary-100  rounded-lg lg:mr-10  w-64  flex flex-col justify-between mb-2 mr-5 lg:h-72 h-60"
    >
      <p className="text-sm font-bold text-s_grey-700 self-end  mr-3 mt-3">
        {timeDifference(element.created_at)}
      </p>
      <h2 className="text-xl  font-semibold  leading-5 line-clamp-6 mx-3 lg:h-[65%] my-5">
        {element.document_path.replaceAll("_", " ")}
      </h2>
      <Link
        className="px-4 py-2 rounded-md transition-all duration-300    bg-[#edf2f7] font-semibold mx-3 mb-5 w-fit hover:bg-[#E2E8F0] focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-200 transition-75 outline-none"
        href={`/summarize/${element.collection_id}/${element.document_id}/${element.document_path}`}
      >
        Open
      </Link>
    </div>
  ));
}
