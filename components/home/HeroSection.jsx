import React from "react";
import { IconThumbUpFilled } from "@tabler/icons-react";
import Import from "./Import";
export default function Hero() {
  return (
    <section className="bg-gray-100 px-8 py-8 rounded-3xl border-[1px] border-primary-100 lg:w-[90%] mb-16 lg:mx-0  w-[95%] lg:ml-0 ml-2">
      <div>
        <div className="flex items-center mb-11 ">
          <IconThumbUpFilled
            size={75}
            className="border-2 rounded-full p-4 bg-primary-700 text-white hidden lg:block"
          />
          <div className="lg:ml-5">
            <h1 className="lg:text-2xl text-xl font-semibold">Analyze PDF</h1>
            <p className="w-[60%] text-s_grey-500 mt-2 font-medium">
              With AI model, analyze your PDFs, bookmark important points.
            </p>
          </div>
        </div>
        <Import />
      </div>
    </section>
  );
}
