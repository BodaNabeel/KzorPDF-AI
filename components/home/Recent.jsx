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
      <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap justify-center md:justify-normal md:mx-10 lg:mx-0 w-full">
        <Card recentDocuments={recentDocuments} />
      </div>
    </div>
  );
}
