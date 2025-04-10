import React from "react";
import Link from "next/link";
import { interdisciplinaryArticles } from "../../data/siteData";
import SiteHeader from "../shared/SiteHeader";


export default function InterdisciplinaryArticles() {
  return (
    <div className="xl:px-56g lg:px-20g sm:px-7g md:px-16g text-justify my-10">
      <SiteHeader title={"Interdisciplinary article"}/>
      <div className="mt-7">
        <ol className="ulist-decimal ilist-outside pl-4">
          {interdisciplinaryArticles.map((interdisciplinaryArticle) => {
            const{id,authors_date, article, journal, link_to_article} = interdisciplinaryArticle;
            return (
              <li key={id} className="">
                <span>{authors_date}</span>
                <Link href={link_to_article}>
                  <span className="underline text-blue-500 pl-1">{article}</span>
                </Link>  
                <span className="pl-1">{journal}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
