import React, { useContext } from "react";
import { IconUpload } from "@tabler/icons-react";
import { DataContext } from "../../context/context";
function Import() {
  const { setOverlay } = useContext(DataContext);
  const features = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam veniam nesciunt eum velit officiis, ",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam veniam nesciunt ",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam veniam nesciunt eum velit officiis, suscipit nemo esse qui quas saepe soluta cupiditate",
  ];
  return (
    <section className="bg-gray-100 px-8 py-8 rounded-3xl border-[1px] border-primary-100">
      <div className="flex justify-between items-center mb-10">
        <h2 className="">Import new PDF</h2>
        <button
          onClick={() => setOverlay("bg-[#000000]")}
          className="flex bg-primary-700 px-4 py-2 rounded-md items-start text-white cursor-pointer justify-between w-32 shadow-[0px_6px_14px_-6px_#08235e] "
        >
          {<IconUpload stroke={1.5} height={20} />}
          <p className="font-source_sans">IMPORT</p>
        </button>
      </div>
    </section>
  );
}

export default Import;
