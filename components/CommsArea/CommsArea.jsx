import React from "react";

function CommsArea() {
  return (
    <section className="min-h-screen max-h-screen  w-[100%] flex">
      <div className="container-one bg-red-500 min-h-[100%] lg:w-[50%] border-r-4 border-gray-600">
        <div className="h-[15%]">
          <h1> this is going to be pdf area</h1>
        </div>
        <div className="h-[70%] overflow-y-auto">
          <div className="h-[320rem] bg-black"></div>
        </div>
        <div className="h-[15%]">
          <h1> this is going to be pdf area</h1>
        </div>
      </div>
      <div className="container-one bg-red-500 min-h-[100%] lg:w-[50%] ">
        <div className="h-[15%]">
          <h1> this is going to be pdf area</h1>
        </div>
        <div className="h-[70%] overflow-y-auto">
          <div className="h-[320rem] bg-black"></div>
        </div>
        <div className="h-[15%]">
          <h1> this is going to be pdf area</h1>
        </div>
      </div>
    </section>
  );
}

export default CommsArea;
