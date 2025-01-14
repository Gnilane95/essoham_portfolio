import React from "react";
import { teachings } from "../../data/siteData";
import { FaUniversity } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";


export default function Teach() {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {teachings.map((teach) => {
        const { id, year, university, comments, courses } = teach;
        return (
          <li key={id} className="pb-7 text-gray-600">
            <article>
              <div className="space-y-2 xl:gridh xl:grid-cols-4j xl:items-baseline xl:space-y-0">
                <dl className="pt-5 pb-3">
                  {/* <dt className="sr-onlyd">Published on</dt> */}
                  <dd className="text-2xl  font-black leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={year}>{year}</time>
                  </dd>
                </dl>
                <div className="space-y-5f xl:col-span-3">
                  <div className="space-y-6f">
                    <div>
                      <h2 className="text-2xl font-bold">
                      {university}
                      </h2>
                      {/* <div className="flex flex-wrap">
                        {comments && <div className="text-amber-700">{comments}</div>}
                      </div> */}
                    </div>
                    <div className="">
                      {/* <div className="flex flex-wrap">
                        <FaBook className="mr-3"/>
                        <span>Courses:</span>
                      </div> */}
                      <div className="ml-6j">
                        {courses.map((course) => (
                         
                          <div
                            className="flex flex-wrap my-3"
                            key={course.id}
                          >
                            {/* <FaDotCircle /> */}
                            <span className="badgeh badge-outlineh ml-3j p-3g font-semibold">{course.type} : </span>
                            <span className="ml-3">{course.topic}</span>
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
  );
};
