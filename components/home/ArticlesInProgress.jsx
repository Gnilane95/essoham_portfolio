import React from "react";
import Link from "next/link";
import { articlesInprogress } from "../../data/siteData";
import SiteHeader from "../shared/SiteHeader";


export default function ArticlesInprogress() {
  return (
    <div className="xl:px-56g lg:px-20g sm:px-7g md:px-16g text-justify my-10">
      <SiteHeader title={"Articles in progress"}/>
      <div className="mt-7">
        <ol className="list-decimal list-outside pl-4">
          {articlesInprogress.map((articleInprogress) => {
            const{id,authors, article, journal_name, link_to_article} = articleInprogress;
            return (
              <li key={id} className="">
                <span>{authors}</span>
                <Link href={link_to_article}>
                  <span className="underline text-blue-500 pl-1 italic">{article}</span>
                </Link>  
                <span className="pl-1">{journal_name}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
