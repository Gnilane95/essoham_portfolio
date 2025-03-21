import { useState } from "react"; //use to track the event
import Link from "next/link";

export default function FullscreenNavbar() {
  const [open, setOpen] = useState(false); // initial stage is false because the button is not open
  return (
    <nav className="flexg md:hidden">
      <div className="">
        <MobileNav open={open} setOpen={setOpen} />
        <div className="lg:hidden w-11/12 flex justify-end items-center">
          <div
            className=" group z-50 relative sm:w-6 sm:h-6 md:w-10 mt-10 md:h-8 cursor-pointer flex-col justify-between items-center flex"
            onClick={() => {
              setOpen(!open);
            }}>
            {/* hamburger btn */}
            <span
              className={`h-1 w-full bg-gray-500 rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-full bg-gray-500 rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "w-0" : "w-full"
              }`}
            ></span>
            <span
              className={`h-1 w-full bg-gray-500 rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
// Mobile view
function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`lg:hidden absolute z-50 top-0 left-0 w-screen bg-white transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter`}
    >
      <div className="flex flex-col justify-center sm:space-y-7 md:space-y-16 items-center mt-20 mb-10">
        <Link
          href="/publications"
          className="hover:text-gray-600 text-gray-500 sm:text-xl md:text-4xl font-semibold"
        >
          Publications
        </Link>
        <Link
          href="/teaching"
          className="hover:text-gray-600 text-gray-500 sm:text-xl md:text-4xl font-semibold"
        >
          Teaching
        </Link>
        <Link
          href="/talks"
          className="hover:text-gray-600 text-gray-500 sm:text-xl md:text-4xl font-semibold"
        >
          Talks
        </Link>
        <Link
          href="/students"
          className="hover:text-gray-600 text-gray-500 sm:text-xl md:text-4xl font-semibold"
        >
          Students
        </Link>
      </div>
    </div>
  );
}
