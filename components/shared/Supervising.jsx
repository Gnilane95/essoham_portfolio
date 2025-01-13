import React from "react";
import { supervisings } from "../../data/siteData";
import SupervisingCard from "./SupervisingCard";
import SiteHeader from "./SiteHeader";


export default function Supervising() {
  return (
    <div className="xl:px-56h lg:px-2h8 sm:px-7h md:px-16h text-justify mt-10">
      <section className="mt-20">
        <SiteHeader title={"Supervising Master students"}/>

        <div className="my-10">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {
                supervisings.map((student) =>(
                    <SupervisingCard student={student} key={student.id}/>
                ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}
