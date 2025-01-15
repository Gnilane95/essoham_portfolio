import React from "react";
import { teachings } from "../../data/siteData";

export default function Teach() {
  return (
    <ul className="">
      {teachings.map((teach) => {
        const { id, year, university, comments, courses } = teach;
        return (
          <li key={id} className="pb-3 text-gray-600">
            <article>
              <div className="xl:col-span-3f">
                <div className="space-y-6f">
                  {/* Year and university */}
                  <div className="flex items-center space-x-1 text-lg font-semibold">
                    <div className="">
                      <time dateTime={year}>{year}</time>
                    </div>
                    <span>/</span>
                    <h2 className="">
                    {university}
                    </h2>
                  </div>
                  {/* Courses */}
                  <ol className="list-disc ">
                      <div className="">
                        <div className="ml-6j">
                          {courses.map((course) => (
                            <li>
                              <div
                                className="flex flex-wrap my-3"
                                key={course.id}
                                >
                                <span className="badgeh badge-outlineh ml-3j p-3g font-semiboldg">{course.type} : </span>
                                <span className="ml-3">{course.topic}</span>
                              </div>
                            </li>
                          ))}
                        </div>
                      </div>
                  </ol>
                </div>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
};
