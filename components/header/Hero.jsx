import React from "react";
import Link from "next/link";
import Typical from "react-typical";
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
    <div className="bg-slate-800g h-[50%]h w-full lg:px-40k xl:px-4d8 sm:px-5d md:px-24d lg:pb-36d sm:pb-16d relativej text-whiteh">
      <div className="lg:flex lg:items-center lg:flex-col pt-10">
        {/* img for lg */}
        <div className=" lg:rounded-full sm:hiddenh">
          <img
            src="../assets/essoham.jpg"
            alt="Essoham Ali"
            className="lg:rounded-full lg:shadow-mdh lg:h-40 lg:w-40 lg:border lg:border-x-2 lg:border-y-2 lg:border-slate-500"
          />
        </div>
        <div className="flex items-center flex-col">
          <h1 className="text-gray-700 text-xl font-bold pt-3">Essoham ALI</h1>
          <div className="mt-10">
            <h2 className="text-gray-700 text-xl font-bold text-center">Contact Information</h2>
            <hr class="border-gray-100 border-t-2"></hr>
            <div className="pl-12">
              <div className="mt-5">
                <div className="my-2">
                  <p className="flex flex-wrap mr-2"> <MdLocationOn className="mr-3" /> 3 Place André Leroy, 49000 Angers </p>
                </div>
                <p className="flex flex-wrap leading-4 my-4">
                  <HiOfficeBuilding className="mr-3" />
                  <span className="font-boldg mr-2">{personalData.Bureau}</span>
                  {/* <span>{personalData.Bureau}</span> */}
                </p>
                <p className="flex flex-wrap leading-4 my-4">
                  <IoMdMail className="mr-3" />
                  <span className="font-boldj mr-2"> <Link href={`mailto:${personalData.email}`}>
                    {personalData.email}
                  </Link></span>
                  {/* <Link href={`mailto:${personalData.email}`}>
                    {personalData.email}
                  </Link> */}
                </p>
                <ProfileAli />
              </div>
              <div className="mt-2">
                <Link
                  href={cvlink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-link text-amber-700 hover:bg-slate-50 hover:text-slate-900"
                >
                  Download my CV <MdArrowForward className="ml-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
