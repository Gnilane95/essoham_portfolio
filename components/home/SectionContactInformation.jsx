import React from "react";
import SiteHeader from "../shared/SiteHeader";
import ProfileAli from "../shared/ProfileAli";
import { cvlink, personalData } from "../../data/siteData";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";

export default function SectionContactInformation() {
  return (
    <div className="xl:px-56f lg:px-28f sm:px-7f md:px-16f text-justify pb-20">
      <SiteHeader title={"Contact information"} />
      <div className="mt-5">
        <div className="my-2">
         
          <p className="flex flex-wrap font-bold mr-2"> <MdLocationOn className="mr-3" /> Address </p>
          <span className="whitespace-nowrap">
            Université Catholique de l’Ouest, Angers <br/>
            Institut de Mathématiques Appliquée <br/>
            3 Place André Leroy, 49000 Angers
          </span>
        </div>
        <p className="flex flex-wrap leading-4 my-2">
          <HiOfficeBuilding className="mr-3" />
          <span className="font-bold mr-2">Office location</span>
          <span>{personalData.Bureau}</span>
        </p>
        <p className="flex flex-wrap leading-4 my-2">
          <IoMdMail className="mr-3" />
          <span className="font-bold mr-2"> Email</span>
          <Link href={`mailto:${personalData.email}`}>
            {personalData.email}
          </Link>
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
  );
}
