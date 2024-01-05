import React from "react";
import SiteHeader from "../shared/SiteHeader";
import { researchs } from "../../data/siteData";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

export default function SectionResearch() {
  return (
    <>
      <div className="xl:px-56 lg:px-28 sm:px-7 md:px-16 text-justify pb-10">
        <SiteHeader title={"Domain of research"}/>
        <p className="sm:leading-relaxed lg:leading-relaxed md:leading-loose md:text-2xl lg:text-base">
          I am broadly interested in statistical inference in count data models.
          I am interested both in theoretical results using several estimation
          methods, the comparison and application of these models on
          overdispersed data using machine learning algorithms. Below is a
          (non-exhaustive) list of more specific topics I have worked on:
        </p>
        <div className="flex flex-wrap mt-10">
          <ul className="list-disc w-99">
            {
              researchs.map((research) => (
                <li key={research.id} className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 flex flex-wrap">
                <span className="font-bold">&#x2022; {research.topic}</span>
                </li>
              ))
            }
          <div className="mt-10 flex">
            <Link
              href="/research"
              className="btn btn-link text-amber-700 hover:bg-slate-50 hover:text-slate-900"
            >
              see more about my recent research <MdArrowForward className="ml-3" />
            </Link>
          </div>
          </ul>
        </div>
      </div>
    </>
  );
}
