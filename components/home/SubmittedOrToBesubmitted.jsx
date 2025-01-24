import React from "react";
import Link from "next/link";
import { submitteds } from "../../data/siteData";
import SiteHeader from "../shared/SiteHeader";


export default function SubmittedOrToBesubmitted() {
  return (
    <div className="xl:px-56g lg:px-20g sm:px-7g md:px-16g text-justify mb-10">
      <SiteHeader title={"Submitted or to be submitted"}/>
      <div className="mt-7">
        <ol className="list-decimal list-outside pl-4">
          {submitteds.map((submitted) => {
            const{id,authors, article, link_to_article} = submitted;
            const shouldUnderline = link_to_article !== "#";
            return (
              <li key={id} className="">
                <span>{authors}</span>
                <Link href={link_to_article}>
                  <span className={shouldUnderline ? "underline text-blue-500" : ""}>{article}</span>
                </Link>  
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
