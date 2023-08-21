import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

function BookmarkPage() {
  const [displayBooks, setDisplayBooks] = useState(true);
  const [displayPDF, setDisplayPDF] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <div
        className={` w-[100%] h-max bg-white rounded-md border-b-4 border-black `}
      >
        <div
          onClick={() => setDisplayBooks((prevState) => !prevState)}
          className="flex justify-between px-5 py-5 cursor-pointer border-b-1 "
        >
          <h1>Books</h1>
          <ChevronDownIcon
            className={`h-6 w-6 text-black transition-all ease-in-out duration-300 ${
              displayBooks ? `-rotate-180` : "rotate-0"
            }`}
          />
        </div>
        <div
          className={`overflow-x-auto overflow-y-hidden transition-max-height ease-in-out duration-300 ${
            displayBooks ? "max-h-[40rem] " : "max-h-0 "
          }`}
        >
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="">
                <th></th>
                <th>Title</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="hover cursor-pointer">
                <th>1</th>
                <td>Atomic Habits</td>
                <td>26 July, 2023</td>
                <td>Delete</td>
              </tr>
              {/* row 2 */}
              <tr className="hover cursor-pointer">
                <th>2</th>
                <td>
                  Hart Hagerty of the witch world that never designed to be
                  ended in certain way
                </td>
                <td>Desktop Support Technician</td>
                <td>Delete</td>
              </tr>
              {/* row 3 */}
              <tr className="hover cursor-pointer">
                <th>3</th>
                <td>
                  Hart Hagerty of the witch world that never designed to be
                  ended in certain way
                </td>
                <td>Desktop Support Technician</td>
                <td>Delete</td>
              </tr>
              {/* row 4 */}
              <tr className="hover cursor-pointer">
                <th>4</th>
                <td>
                  Hart Hagerty of the witch world that never designed to be
                  ended in certain way
                </td>
                <td>Desktop Support Technician</td>
                <td>Delete</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="  w-[100%]  bg-white rounded-md border-b-4 border-black">
        <div
          onClick={() => setDisplayPDF((prevState) => !prevState)}
          className="flex justify-between px-5 py-5 cursor-pointer border-b-1 "
        >
          <h1>PDFs</h1>

          <ChevronDownIcon
            className={`h-6 w-6 text-black  transition-all ease-in-out duration-300 ${
              displayPDF ? `-rotate-180` : "rotate-0"
            }`}
          />
        </div>
        <div
          className={`overflow-x-auto overflow-y-hidden transition-max-height ease-in-out duration-300 ${
            displayPDF ? "max-h-[40rem] " : "max-h-0 "
          }`}
        >
          <table className="table">
            {/* head */}
            <thead>
              <tr className="">
                <th></th>
                <th>Title</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="hover cursor-pointer">
                <th>1</th>
                <td>Atomic Habits</td>
                <td>26 July, 2023</td>
                <td>Delete</td>
              </tr>
              {/* row 2 */}
              <tr className="hover cursor-pointer">
                <th>2</th>
                <td>
                  Hart Hagerty of the witch world that never designed to be
                  ended in certain way
                </td>
                <td>Desktop Support Technician</td>
                <td>Delete</td>
              </tr>
              {/* row 3 */}
              <tr className="hover cursor-pointer">
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BookmarkPage;
