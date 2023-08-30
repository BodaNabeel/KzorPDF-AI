import Link from "next/link";
import React, { useState } from "react";
import {
  IconHome,
  IconBooks,
  IconBolt,
  IconMessage,
  IconMenu2,
  IconDotsCircleHorizontal,
} from "@tabler/icons-react";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const pathname = router.pathname;
  const formattedPathName = pathname.replace("/", "");
  const [selectdPath, setSelectedPath] = useState(formattedPathName);
  const assignedRoutes = ["Home", "Library", "Summarize PDF", "Chat with PDF"];
  const iconMap = {
    home: IconHome,
    library: IconBooks,
    summarizepdf: IconBolt,
    chatwithpdf: IconMessage,
  };

  return (
    <div className="drawer lg:drawer-open w-min ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden w-screen flex justify-start rounded-none bg-[#4865ff] border-none"
        >
          <IconMenu2 stroke={1.5} className="h-6 w-6 text-white left-0" />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <div className="menu p-4 w-80 min-h-screen max-h-max lg:h-screen  text-base-content bg-white items-center flex-nowrap  text-lg ">
          <header className="mb-10 font-source_sans">Logo of Company</header>
          <nav className="mb-10 flex flex-col w-[80%] gap-5  justify-self-center font-medium">
            {assignedRoutes.map((route) => {
              const formattedPath = route.replace(/ /g, "").toLowerCase();
              const IconComponent = iconMap[formattedPath];

              return (
                <Link
                  className={`flex gap-3  py-[5px] px-[10px] rounded-md   items-start ${
                    selectdPath.toLowerCase() === formattedPath.toLowerCase()
                      ? "bg-primary-50 text-primary-700 "
                      : null
                  }`}
                  href={`/${formattedPath}`}
                  onClick={() => setSelectedPath(route)}
                >
                  <IconComponent stroke={1.5} />

                  <p>{route}</p>
                </Link>
              );
            })}
          </nav>
          <div className="bg-gradient-to-r from-primary-700 to-primary-300  py-10 w-[90%] text-white rounded-md  h-max flex flex-col items-center mb-10">
            <p className="w-[90%] mb-2">
              Elevate with Premium: Effortlessly import PDFs, plus get 1-month
              free trial. Simplify tasks and boost productivity – make the
              switch now!
            </p>
            <button className="bg-white mt-12 py-1 px-3 rounded-md w-[90%]">
              <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-300 font-source_sans">
                Upgrade to Pro
              </h1>
            </button>
          </div>
          <div className=" m w-[80%] font-medium gap-5 flex flex-col justify-self-end h-full justify-end">
            <div className="flex gap-3 items-end">
              {
                <IconDotsCircleHorizontal
                  stroke={1.5}
                  className="h-6 w-6 text-blac"
                />
              }
              <button>Help & Information</button>
            </div>
            <div className="flex gap-3 items-end">
              {
                <IconDotsCircleHorizontal
                  stroke={1.5}
                  className="h-6 w-6 text-black"
                />
              }{" "}
              <button>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
