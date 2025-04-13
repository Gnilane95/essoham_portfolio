import React from "react";
import { conferences, seminaires, researchAbroad } from "../../data/siteData";
import { formatDate, formatMonthYear } from "../../utils/formater";


export default function Conference() {
  const { title: conferenceTitle, talks: conferenceTalk } = conferences;
  const { title: seminaireTitle, talks: seminaireTalk } = seminaires;
  const {title: reserchAbroadTitle, talks: abroadTalks } = researchAbroad;
  return (
    <>
      <div className="mb-9 ml-4 md:ml-0">
      <ul className="list-disc">
          {
            conferenceTalk.map((talk) => {
              const { id , year, subject, location } = talk;
              return(
                  <li key={id} className="py-1">
                  <article>
                    <div className=" text-gray-600">
                      <h2 className="md:flex md:flex-wrap">
                        <span className=" font-semibold">{formatMonthYear(year)} :</span>
                        <span className="md:ml-3 mr-1"> {subject}, </span>
                        <span className=""> {location}</span>
                      </h2>
                    </div>
                  </article>
                </li>
              )
            }
                
            )
          }
      </ul>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <h2 className="text-2xl font-black text-gray-600 pb-3">
          {seminaireTitle}
        </h2>
        <div className="py-7 ml-4 md:ml-0">
          <ul className="list-disc ">
            {
                seminaireTalk.map((talk) => {
                    const { id , year, subject, location } = talk;
                    return(
                        <li key={id} className="py-1 text-gray-600">
                        <article>
                          <div className="">
                            <h2 className="md:flex md:flex-wrap">
                              <span className="font-semibold">{ formatMonthYear(year)} :</span>
                              <span className="ml-3 mr-1"> {subject}, </span>
                              <span className=""> {location}</span>
                            </h2>
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
