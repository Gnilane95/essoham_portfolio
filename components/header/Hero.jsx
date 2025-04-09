import React from "react";
import Link from "next/link";
// import Typical from "react-typical";
import { MdArrowForward } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import { cvlink, personalData } from "../../data/siteData";
import { IoMdMail } from "react-icons/io";
import ProfileAli from "../shared/ProfileAli";
export default function hero() {
  return (
    <div className="sticky top-0 mb-10 w-full md:pl-16">
      <div className="md:flex md:items-center md:flex-col pt-10">
        {/* iamge */}
        <div className="flex justify-center items-center">
          <img
            src="../assets/essoham3.jpg"
            alt="Photo d'Essoham Ali"
            className="rounded-full object-cover w-60 h-60 md:h-40 md:w-40 border border-x-2 border-y-2 border-slate-500"
          />
        </div>
        {/* Informations */}
        <div className="flex items-center flex-col">
          <div className="text-center">
            <h1 className="text-gray-600 text-xl font-bold pt-4">Essoham ALI</h1>
            <p className="text-gray-600 sm:hidden md:flex">Lecturer and Researcher in Statistics at<br />Université Catholique de l'Ouest, Angers.</p>
            <p className=" text-gray-600 md:hidden">Lecturer and Researcher in Statistics at Université Catholique de l'Ouest, Angers.</p>
          </div>
          <div className="">
            <div className="my-2">
              <p className="flex items-center flex-wrap mr-2 text-center"> <MdLocationOn className="mr-3" /><span className="text-gray-600">Institute of Applied Mathematics</span> </p>
            </div>
            <p className="flex flex-wrap leading-4 my-4">
              <HiOfficeBuilding className="mr-3" />
              <span className="mr-2 text-gray-600">{personalData.Bureau}</span>
              {/* <span>{personalData.Bureau}</span> */}
            </p>
            <p className="flex flex-wrap leading-4 my-4">
              <IoMdMail className="mr-3" />
              <span className="mr-2 text-gray-600"> <Link href={`mailto:${personalData.email}`}>
                {personalData.email}
              </Link></span>
            </p>
            <ProfileAli />
            <div className="mt-2">
              <Link
                href={cvlink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-link text-gray-600 font-semibold hover:bg-slate-50 hover:text-slate-900">
                Download my CV <MdArrowForward className="ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
