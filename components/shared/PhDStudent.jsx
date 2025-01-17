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
      <ul className="pt-1 space-y-1 list-disc">
        {phdStudents.map((PhDStudent) => {
          const {id, description} = PhDStudent;
          return (
            <li key={id}>{description}</li>
          );
        })}
      </ul>
    </div>
  );
};
