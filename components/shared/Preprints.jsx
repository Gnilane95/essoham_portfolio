import React from 'react'
import { submitJounalPaPer } from "../../data/siteData";
import { FaChalkboardTeacher } from "react-icons/fa";
import SiteHeader from "../shared/SiteHeader";

export default function Preprints() {
  return (
    <div className="xl:px-56 lg:px-28 sm:px-7 md:px-16 text-justify my-16">
    <SiteHeader title={"Preprints, submitted journal papers"}/>
    <div className="mt-9">
      <ul className="divide-y divide-gray-200 dark:divide-gray-200">
        {submitJounalPaPer.map((paper) => {
          const { id, title,authors } = paper;
          return (
            <li key={id} className="py-5">
              <article>
                <div className="">
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl italic tracking-tight flex flex-wrap mb-2">
                          <span className=""> {title}</span>
                        </h2>
                        <div className="flex flex-wrap">
                          Authors:
                          {authors.map((author) => (
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
  )
}
