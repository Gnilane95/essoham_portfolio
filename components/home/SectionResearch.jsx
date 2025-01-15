import React from "react";
import SiteHeader from "../shared/SiteHeader";
import { researchs } from "../../data/siteData";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

export default function SectionResearch() {
  return (
    <>
      <div className="xl:px-56f lg:px-28f sm:px-7f md:px-1f6 text-justify pb-10">
        <SiteHeader title={"Research interests"}/>
        <p className="sm:leading-relaxed lg:leading-relaxed md:leading-loose md:text-2xl lg:text-base pb-2">
         My main research focus lies at the intersection of theory and application of zero-inflated count models, missing data, and statistical learning. I am particularly interested in the challenges related to count data, especially when these data exhibit zero-inflation and multicollinearity phenomena, as well as handling missing data in these contexts.
        </p>
        <p className="sm:leading-relaxed lg:leading-relaxed md:leading-loose md:text-2xl lg:text-base">
          More specifically, I work on developing and analyzing the properties of methodologies to solve estimation problems in count models with potential nonresponse, using tools from statistical learning. I am also interested in situations where the number of covariates is particularly large (high-dimensional scenarios), which further complicates the analysis of the data.
        </p>
      </div>
    </>
  );
}
