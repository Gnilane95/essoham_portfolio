import React from "react";
import { curentResearch } from "../../data/siteData";
import { FaChalkboardTeacher } from "react-icons/fa";
import SiteHeader from "../shared/SiteHeader";
import { IoLocationSharp } from "react-icons/io5";


export default function SectionSearchInProgress() {
  return (
    <div className="xl:px-56g lg:px-20g sm:px-7g md:px-16g text-justify my-10">
      <SiteHeader title={"Some work in progress"}/>
      <div className="mt-7">
        <ul className="divide-y divide-gray-200 dark:divide-gray-200">
          {curentResearch.map((talk) => {
            const { id, topic, town, contributors } = talk;
            return (
              <li key={id} className="py-5">
                <article>
                  <div className="">
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-base italicd tracking-tight flex flex-wrap mb-2">
                            <span className=""> {topic}</span>
                          </h2>
                          <div className="">
                            {town && (
                              <div className="text-amber-700 font-bold mt-2 flex flex-wrap">
                                <IoLocationSharp />
                                {town}
                              </div>
                            )}
                          </div>
                          <div className="flex flex-wrap">
                            Authors:
                            {contributors.map((author) => (
                              <div
                                className="badge badge-outline gap-2 mx-1 p-3 mb-2"
                                key={author}
                              >
                                <FaChalkboardTeacher className="inline-block w-4 h-4 stroke-current" />
                                {author}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}

        </ul>
      </div>
    </div>
  );
}
