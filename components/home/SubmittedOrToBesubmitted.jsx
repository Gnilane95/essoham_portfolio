import React from "react";
import Link from "next/link";
import { curentResearch } from "../../data/siteData";
import { FaChalkboardTeacher } from "react-icons/fa";
import SiteHeader from "../shared/SiteHeader";
import { IoLocationSharp } from "react-icons/io5";


export default function SubmittedOrToBesubmitted() {
  return (
    <div className="xl:px-56g lg:px-20g sm:px-7g md:px-16g text-justify my-10">
      <SiteHeader title={"Submitted or to be submitted"}/>
      <div className="mt-7">
        <ol className="list-decimal list-outside pl-4">
              <li className="">
                Essoham Ali & Adewale F.  Lukman (2025) <Link href=''>A New Ridge and Liu Estimator for Hermite Regression</Link> 
              </li>
              <li className="pt-3">
                Agnondji GNON SIYA, Essoham ALI, Aliou DIOP (2025). <Link href=''>Marginal effects for zero-inflated semi-continuous data</Link>
              </li>
              <li className="pt-3">
                Essoham Ali & Adewale F.  Lukman (2024) <Link href=''>Ridge-Penalized Zero-Inflated Probit Bell model for multicollinearity in count data</Link>
              </li>
              <li className="pt-3">
                Solym Mawaki Manou-Abi, Essoham Ali, Yousri Slaoui, Julien Balicchi (2024) <Link href=''>Estimation of contact matrices with a new count data model and surveys</Link>
              </li>
              <li className="pt-3">
                Konan Jean Geoffroy KOUAKOU &  Essoham ALI (2023). <Link href=''>Inverse probability weighting for missing covariates in Zero-Inflated modified Borel-Tanner model Peer-reviewed publications</Link>
              </li>
        </ol>
      </div>
    </div>
  );
}
