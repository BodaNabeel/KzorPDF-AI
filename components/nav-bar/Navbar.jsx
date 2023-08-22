import Link from "next/link";
import React, { useState } from "react";
import {
  HomeIcon as OutlineHomeIcon,
  BookOpenIcon as OutlineBookOpenIcon,
  BookmarkIcon as OutlineBookmarkIcon,
  EllipsisHorizontalCircleIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as SolidHomeIcon,
  BookOpenIcon as SolidBookOpenIcon,
  BookmarkIcon as SolidBookmarkIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const pathname = router.pathname;
  const formattedPathname = pathname.replace("/", "");
  const [selectdPath, setSelectedPath] = useState(formattedPathname);
  return (
    <div className="drawer lg:drawer-open w-min ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden w-screen flex justify-start rounded-none bg-[#4865ff] border-none"
        >
          <Bars3BottomLeftIcon className="h-6 w-6 text-white left-0" />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <div className="menu p-4 w-80 min-h-screen max-h-max lg:h-screen  text-base-content bg-white items-center flex-nowrap  text-lg ">
          <header className="mb-10">Logo of Company</header>
          <button className="mb-10 bg-[#4865ff]  rounded-md w-[90%] px-2 py-3 ">
            <p className="text-white font-semibold w-full">+ Create New</p>
          </button>
          <nav className="mb-10 flex flex-col w-[80%] gap-5  justify-self-center font-medium">
            <Link
              className="flex items-end gap-3"
              href={"/home"}
              onClick={() => setSelectedPath("home")}
            >
              {selectdPath === "home" ? (
                <SolidHomeIcon className="h-6 w-6 text-black" />
              ) : (
                <OutlineHomeIcon className="h-6 w-6 text-black" />
              )}
              <p>Home</p>
            </Link>
            <Link
              href={"/books"}
              className="flex items-end gap-3"
              onClick={() => setSelectedPath("books")}
            >
              {selectdPath === "books" ? (
                <SolidBookOpenIcon className="h-6 w-6 text-black" />
              ) : (
                <OutlineBookOpenIcon className="h-6 w-6 text-black" />
              )}
              <p>Books</p>
            </Link>
            <Link
              href={"/bookmarks"}
              className="flex items-end gap-3"
              onClick={() => setSelectedPath("bookmarks")}
            >
              {selectdPath === "bookmarks" ? (
                <SolidBookmarkIcon className="h-6 w-6 text-black" />
              ) : (
                <OutlineBookmarkIcon className="h-6 w-6 text-black" />
              )}
              <p>Bookmarks</p>
            </Link>
          </nav>
          <div className="bg-gradient-to-r from-[#4865ff] to-[#ae48ff]  py-10 w-[90%] text-white rounded-md font-semibold h-max flex flex-col items-center mb-10">
            <p className="w-[90%] mb-2">
              Elevate with Premium: Effortlessly import PDFs, plus get 1-month
              free trial. Simplify tasks and boost productivity – make the
              switch now!
            </p>
            <button className="bg-white mt-12 py-1 px-3 rounded-md w-[90%]">
              <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4865ff] to-[#ae48ff]">
                Upgrade to Pro
              </h1>
            </button>
          </div>
          <div className=" m w-[80%] font-medium gap-5 flex flex-col justify-self-end h-full justify-end">
            <div className="flex gap-3">
              {<EllipsisHorizontalCircleIcon className="h-6 w-6 text-blac" />}
              <button>Help & Information</button>
            </div>
            <div className="flex gap-3">
              {<EllipsisHorizontalCircleIcon className="h-6 w-6 text-black" />}
              <button>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
