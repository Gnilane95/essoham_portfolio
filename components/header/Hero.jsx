import React from "react";
import Link from "next/link";
// import Typical from "react-typical";
import { MdArrowForward } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import { cvlink, personalData } from "../../data/siteData";
import { IoMdMail } from "react-icons/io";
import ProfileAli from "../shared/ProfileAli";
import SiteHeader from "../shared/SiteHeader";
import {uco, lmba, memberOfMAPP} from "../../data/siteData";

export default function hero() {
  return (
    <div className="sticky top-0 h-screen w-full lg:px-40k xl:px-4d8 sm:px-5d md:px-24d lg:pb-36d sm:pb-16d   lg:pl-16">
      <div className="lg:flex lg:items-center lg:flex-col pt-10">
        {/* img for lg */}
        <div className=" lg:rounded-fullh sm:hiddenh flex justify-center items-center">
          <img
            src="../assets/essoham3.jpg"
            alt="Essoham Ali"
            className="lg:rounded-full object-cover w-full h-full lg:shadow-mdh lg:h-40 lg:w-40 lg:border lg:border-x-2 lg:border-y-2 lg:border-slate-500"
          />
        </div>
        {/* Informations */}
        <div className="flex items-center flex-col">
          <div className="text-center">
            <h1 className="text-gray-600 text-xl font-bold pt-4">Essoham ALI</h1>
            <p className="text-gray-600">Lecturer and Researcher in Statistics at<br />Catholic University of the West, Angers.</p>
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
                className="btn btn-link text-gray-600 font-semibold hover:bg-slate-50 hover:text-slate-900"
              >
                Download my CV <MdArrowForward className="ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
