import React from "react";
import { mScStudents } from "../../data/siteData";

export default function MScStudent() {
  return (
    <div className="text-gray-600">
      <div className="flex items-center space-x-1 text-lg font-semibold mt-5">
        <h2 className="">
        M.Sc. Students
        </h2>
      </div>
      <ul className="pt-1 space-y-1 list-disc">
        {mScStudents.map((MScStudent) => {
          const {id, student, supervisor, date, title, location} = MScStudent;
          return (
            <li key={id}>
              <span>{student}</span>
              <span className="ml-1">{supervisor}</span>
              <span className="ml-1">{date}</span>
              <span className="italic ml-1 font-semibold">{title}</span>
              <span className="ml-1">{location}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
