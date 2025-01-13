import React from "react";
import { publicationsData } from "../../data/siteData";
import Link from "next/link";
import { FaChalkboardTeacher } from "react-icons/fa";
import SiteHeader from "./SiteHeader";


export const Publication = () => {
  return (
    <div className="xl:px-56g lg:px-28g sm:px-7g md:px-16j text-justify my-16">
      <SiteHeader title={"Publications"} />
      <p className="my-6"></p>
      <div className="">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {publicationsData.map((pubsh) => {
            const { title, journal, authors, to, id, slug, publishAt} = pubsh;
            return (
              <li key={id} className="py-12">
                <article>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl italic leading-8 tracking-tight">
                              {title} 
                          </h2>
                          <div className="flex flex-wrap">{journal} , {publishAt}</div>
                        </div>
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
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={to}
                          className="btn rounded-full sm:btn-sm lg:btn-sm md:btn-md border-none bg-amber-700 px-20 hover:bg-slate-100 hover:text-gray-800"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more <span className="ml-5">&rarr;</span>
                        </Link>
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
};
