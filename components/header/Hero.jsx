import React from 'react';
import Link from 'next/link';
import Typical from "react-typical";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";

export default function hero() {
  return (
    <div className="bg-slate-800 h-[50%] w-full lg:px-40 xl:px-48 sm:px-5 md:px-24 lg:pb-36 sm:pb-16 relative text-white">
          <div className="lg:flex lg:justify-between lg:items-center pt-10">
            <div className="flex flex-col items-center">
              {/* img for sm */}
              <div className=" rounded-full flex shadow-lg pb-3 px-2 border-b-2 mb-5 lg:hidden">
                <img
                  src="../assets/essoham.jpg"
                  alt=""
                  className="rounded-full h-48 w-48 md:w-72 md:h-72"
                />
              </div>{" "}
              <div className="flex text-3xl gap-2 mb-5">
                <Link href="https://scholar.google.com/citations?hl=fr&user=eUeEmdAAAAAJ&view_op=list_works&sortby=pubdate">
                  <SiGooglescholar />
                </Link>
                <Link href="#">
                  <AiFillLinkedin />
                </Link>
                <Link href="#">
                  <AiFillTwitterSquare />
                </Link>
              </div>
              <p className="text-xl md:text-2xl lg:text-xl">Hello, I'm Essoham ALI</p>
              <h1 className="lg:text-lg sm:text-sm md:text-2xl pt-5 sm:text-center h-12 font-semibold">
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ph.D. in Applied Mathematics",
                    2000,
                    "Attaché Temporaire d'enseignement et de recherche",
                    2000,
                  ]}
                />
              </h1>
              <p className="pt-5 sm:text-center md:text-2xl lg:text-xl">
                I am, currently, an temporary Research and Teaching <br /> Attached (ATER).
              </p>
              <div className="mt-10 flex justify-center">
                <Link
                  href="cv_EA.pdf"
                  download="CV Essoham ALI"
                  className="btn bg-amber-900 border-white px-16 rounded-2xl hover:bg-slate-50 hover:text-slate-900"
                >
                  Resume
                </Link>
              </div>
            </div>
            {/* img for lg */}
            <div className=" lg:rounded-full lg:flex lg:shadow-lg lg:pb-3 lg:px-2 lg:border-b-2 lg:mr-28 sm:hidden">
              <img src="../assets/essoham.jpg" alt="" className="lg:rounded-full lg:h-64 lg:w-64" />
            </div>
          </div>
        <img
          src="../assets/shape-bg.png"
          alt=""
          className="absolute bottom-0 z-50 lg:h-32 w-screen left-0"
        />
    </div>
  )
}
