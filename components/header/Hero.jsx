import React from "react";
import Link from "next/link";
import Typical from "react-typical";
import { MdArrowForward } from "react-icons/md";
import {uco, lmba, memberOfMAPP} from "../../data/siteData";

export default function hero() {
  return (
    <div className="bg-slate-800 h-[50%] w-full lg:px-40 xl:px-48 sm:px-5 md:px-24 lg:pb-36 sm:pb-16 relative text-white">
      <div className="lg:flex lg:justify-between lg:items-center pt-10">
        <div className="flex flex-col">
          {/* img for sm */}
          <div className="flex items-center justify-center">
          <div className=" rounded-full shadow-lg pb-3 px-2 border-b-2 mb-5 lg:hidden ">
            <img
              src="../assets/essoham.jpg"
              alt=""
              className="rounded-full h-48 w-48 md:w-72 md:h-72"
            />
          </div>{" "}

          </div>
          <p className="text-base">Hey There 👋 I am </p>
          <h1 className="font-bold text-6xl md:text-6xl lg:text-6xl sm:text-3xl my-2">
            Essoham ALI
          </h1>
          {/* {t.hero.welcome} */}
          <h1 className="lg:text-lg sm:text-sm md:text-2xl pt-5  h-12 font-semibold">
            {" "}
            <Typical
              loop={Infinity}
              steps={[
                "Ph.D. in Applied Mathematics",
                "",
                2000,
              ]}
            />
          </h1>
          <p className="pt-5 text-base">
            Research Lecturer at the Catholic <Link  target="_blank" rel="noreferrer" href={uco} className="hover:text-amber-700">University of the West UCO Angers</Link>
            <br />
            Member of the <Link  target="_blank" rel="noreferrer" href={memberOfMAPP} className="hover:text-amber-700">Applied Mathematics Institute of Angers</Link><br/>
            Member of <Link  target="_blank" rel="noreferrer" href={lmba} className="hover:text-amber-700">Laboratoire de Mathématique 
            Bretagne Atlantique (LMBA, Statistics group)</Link>
          </p>
          <div className="mt-10 flex gap-x-6">
            <Link
              href="/research"
              className="btn  px-6 bg-amber-700 rounded-full hover:bg-slate-50 hover:text-slate-900"
            >
              my Research <MdArrowForward className="ml-3" />
            </Link>
          </div>
        </div>
        {/* img for lg */}
        <div className=" lg:rounded-full lg:flex lg:shadow-lg lg:pb-3 lg:px-2 lg:border-b-2 lg:mr-28 sm:hidden">
          <img
            src="../assets/essoham.jpg"
            alt="Essoham Ali"
            className="lg:rounded-full lg:h-64 lg:w-64"
          />
        </div>
      </div>
      <img
        src="../assets/shape-bg.png"
        alt=""
        className="absolute bottom-0 z-50 lg:h-32 w-screen left-0 "
      />
    </div>
  );
}
