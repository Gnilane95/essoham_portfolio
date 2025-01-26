import React from "react";
import { phdStudents } from "../../data/siteData";

export default function PhDStudent() {
  return (
    <div className="text-gray-600">
      <div className="flex items-center space-x-1 text-lg font-semibold">
        <h2 className="">
        Ph.D. Students
        </h2>
      </div>
      <ul className="pt-1 space-y-1 list-disc ml-4 md:ml-0">
        {phdStudents.map((PhDStudent) => {
          const {id, student, supervisor, date, title, location} = PhDStudent;
          return (
            <li key={id}>
              <span>{student}</span>
              <span className="ml-1">{date}</span>
              <span className="ml-1">{supervisor}</span>
              <span className="italic ml-1 font-semibold">{title}</span>
              <span className="ml-1">{location}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
