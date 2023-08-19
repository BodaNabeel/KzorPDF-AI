import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/20/solid";

function HomePage(props) {
  const { data } = props;
  const [fetchedData, setFetchedData] = useState(data);
  function handler(id) {
    const tempData = [...fetchedData]
    tempData.splice(id,1)
    setFetchedData(tempData);
  }

  return (
    <div className="">
      {fetchedData.map((data, index) => {
        return (
          <div
            key={index}
            className="flex py-4 px-7 justify-between bg-white rounded-lg cursor-pointer bg-gradient-to-r from-[#e2e6f3] to-[#e9e1fa] mb-10"
          >
            <div className=" w-[70%]">
              <h3 className="font-semibold">{data.title}</h3>
            </div>
            <div className="flex gap-10 items-center">
              <div>
                <p className="font-semibold">{data.date}</p>
              </div>
              <div>
                <TrashIcon
                  onClick={() => handler(index)}
                  className="h-6 w-6 text-gray-500 cursor-pointer hover:text-red-600 transition ease-in-out delay-100 "
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
