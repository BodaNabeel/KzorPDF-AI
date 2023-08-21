import React from "react";

function CommsArea() {
  const initialZoom = 50;

  return (
    <section className="min-h-screen max-h-screen  w-[100%] flex">
      <div className="container-one  min-h-[100%] lg:w-[50%] border-r-4 border-gray-600">
        <div className="  flex justify-between px-2 py-2">
          <h1 className="font-semibold">Notes of OOPs for second semester </h1>
        </div>
        <div className="h-[95%] overflow-y-auto">
          <iframe
            className="w-[90%] h-[100%] mx-auto"
            id="pdf"
            src={`/final_report.pdf#zoom=${initialZoom}`}
          />
        </div>
      </div>
      <div className="container-one bg-red-500 min-h-[100%] lg:w-[50%] ">
        <div className="h-[15%]">
          <h1> this is going to be pdf area</h1>
        </div>
        <div className="h-[70%] overflow-y-auto">
          <div className="h-[320rem] bg-black"></div>
        </div>
      </div>
    </section>
  );
}

export default CommsArea;
