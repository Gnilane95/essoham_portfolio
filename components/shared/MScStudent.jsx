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
          const {id, description} = MScStudent;
          return (
            <li key={id}>{description}</li>
          );
        })}
      </ul>
    </div>
  );
};
