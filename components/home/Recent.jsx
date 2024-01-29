import React, { useContext } from "react";
import { DataContext } from "../../context/context";
import formattedDate from "../../utils/formattedDate";
import Link from "next/link";
import Card from "./Card";

export default function Recent() {
  const { recentDocuments } = useContext(DataContext);
  return (
    <div className="">
      <div className="divider divider-start mb-5">Recent</div>
      <div className="flex flex-wrap items-center justify-center lg:justify-normal w-full lg:flex-nowrap">
        <Card recentDocuments={recentDocuments} />
      </div>
    </div>
  );
}
