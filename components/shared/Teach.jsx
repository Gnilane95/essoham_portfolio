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
              <div className="">
                <div className="">
                  {/* Year and university */}
                  <div className="flex items-center space-x-1 text-lg">
                    <div className="">
                      <time dateTime={year}>{year}</time>
                    </div>
                    <span>/</span>
                    <h2 className="">
                    {university}
                    </h2>
                  </div>
                  {/* Courses */}
                  <ol className="list-disc ml-4 md:ml-0">
                      <div className="">
                        <div className="">
                          {courses.map((course) => (
                            <li>
                              <div
                                className="md:flex md:flex-wrap my-3"
                                key={course.id}
                                >
                                <span className="">{course.type} : </span>
                                <span className="md:ml-3">{course.topic}</span>
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
