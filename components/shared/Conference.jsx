import React from "react";
import { conferences, seminaires, researchAbroad } from "../../data/siteData";
import { FcConferenceCall } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { GiArchiveResearch } from "react-icons/gi";
import { formatDate, formatMonthYear } from "../../utils/formater";


export default function Conference() {
  const { title: conferenceTitle, talks: conferenceTalk } = conferences;
  const { title: seminaireTitle, talks: seminaireTalk } = seminaires;
  const {title: reserchAbroadTitle, talks: abroadTalks } = researchAbroad;
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <h2 className="text-2xl font-bold leading-8 tracking-tight flex flex-wrap">
          <FcConferenceCall className="mr-3" />
          {conferenceTitle}
        </h2>
        <div className="my-9">
        <ul className="divide-y divide-gray-200 dark:divide-gray-200 ml-12">
            {
                conferenceTalk.map((talk) => {
                    const { id , year, subject, location } = talk;
                    return(
                        <li key={id} className="py-5">
                        <article>
                          <div className="">
                            <div className="space-y-5 xl:col-span-3">
                              <div className="space-y-6">
                                <div>
                                  <h2 className=" font-bold tracking-tight flex flex-wrap">
                                  < RiKakaoTalkFill className=""/>
                                  <span className="badge badge-outline ml-3 p-3 font-black">{formatMonthYear(year)}</span>
                                  <span className="ml-3"> {subject}</span>
                                 
                                  </h2>
                                  <div className="">
                                    {location && <div className="text-amber-700 font-bold mt-2 flex flex-wrap">
                                    <IoLocationSharp/>{location}</div>}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                    )
                }
                    
                )
            }
        </ul>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <h2 className="text-2xl font-bold leading-8 tracking-tight flex flex-wrap">
          <FcConferenceCall className="mr-3" />
          {seminaireTitle}
        </h2>
        <div className="my-9">
        <ul className="divide-y divide-gray-200 dark:divide-gray-200 ml-12">
            {
                seminaireTalk.map((talk) => {
                    const { id , year, subject, location } = talk;
                    return(
                        <li key={id} className="py-5">
                        <article>
                          <div className="">
                            <div className="space-y-5 xl:col-span-3">
                              <div className="space-y-6">
                                <div>
                                  <h2 className=" font-bold tracking-tight flex flex-wrap">
                                  < RiKakaoTalkFill className=""/>
                                  <span className="badge badge-outline ml-3 p-3 font-black">{ formatMonthYear(year)}</span>
                                  <span className="ml-3"> {subject}</span>
                                 
                                  </h2>
                                  <div className="">
                                    {location && <div className="text-amber-700 font-bold mt-2 flex flex-wrap">
                                    <IoLocationSharp/>{location}</div>}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                    )
                }
                    
                )
            }
            </ul>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <h2 className="text-2xl font-bold leading-8 tracking-tight flex flex-wrap">
          <GiArchiveResearch className="mr-3" />
          {reserchAbroadTitle}
        </h2>
        <div className="my-9">
        <ul className="divide-y divide-gray-200 dark:divide-gray-200 ml-12">
            {
                abroadTalks.map((talk) => {
                    const { id , topic, location, town, supervisor, from, to } = talk;
                    return(
                        <li key={id} className="py-5">
                        <article>
                          <div className="">
                            <div className="space-y-5 xl:col-span-3">
                              <div className="space-y-6">
                                <div>
                                  <h2 className=" font-bold tracking-tight flex flex-wrap">
                                  < RiKakaoTalkFill className=""/>
                                  <span className="badge badge-outline ml-3 p-3 font-black">{formatDate(from)} &nbsp; to &nbsp;{formatDate(to)} </span>
                                  <span className="ml-3"> {topic}</span>
                                 
                                  </h2>
                                  <div className="">
                                    {location && <div className="text-amber-700 font-bold mt-2 flex flex-wrap">
                                    <IoLocationSharp/>{location} - {town}</div>}
                                  </div>
                                  <div className="flex flex-wrap ml-2">Supervisor: <span className="ml-3 font-bold">{supervisor}</span></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                    )
                }
                    
                )
            }
        </ul>
        </div>
      </div>
    </>
  );
}
