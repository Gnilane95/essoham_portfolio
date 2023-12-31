import React from "react";
import SiteHeader from "./SiteHeader";
import { topicOfSearch } from "../../data/siteData";
import { MdOutlineAccountTree } from "react-icons/md";


export default function Topic() {
  return (
    <div className=" mt-20 lg:flex lg:justify-between lg:space-x-32">
      <div className="lg:w-1/2">
        <div className="pb-10">
          <SiteHeader title={"My postdoc work"}/>
          <p className="mt-10 sm:leading-relaxed lg:leading-relaxed md:leading-loose text-justify sm:text-base md:text-2xl lg:text-base">
            In my post doc, i worked on stochastic processes applied to eye
            tracking problems. The objective of the work is to model the
            sequence of 2D coordinates of the point of gaze of a climber and the
            scan path of his/her visual intake during ascension on an artificial
            climbing wall, proposing different probabilistic/statistical
            technics for comparing different learning and developing a
            statistical methodology for analysing climbing (modelling,
            estimation).
          </p>
        </div>
      </div>

      <div className="lg:w-1/2">

        <SiteHeader title={"Research topics"}/>
        <ul class="w-99">
            {
              topicOfSearch.map((research) => (
                <li key={research.id} class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 flex flex-wrap">
                <MdOutlineAccountTree class="w-7 h-7 text-amber-700 mr-3" />
                <span className="font-bold">{research.topic}</span>
                
              </li>
              ))
            }
          </ul>
      </div>
    </div>
  );
}
