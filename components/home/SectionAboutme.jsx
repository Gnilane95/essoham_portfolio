import React from "react";
import SiteHeader from "../shared/SiteHeader";
import {
  personalData,
  univgastonBerger,
  aliouDiopPortfolio,
  jeanFrancoisDupy,
} from "../../data/siteData";
import Link from "next/link";


export default function SectionAboutme() {
  return (
    <>
      <div className="text-justify pb-9">
        <SiteHeader title={"About me"} className />
        <p className="sm:leading-relaxed lg:leading-relaxed md:leading-loose  md:text-base pb-2">
          I am a Lecture-Researcher in Statistics at the Institute of Applied Mathematics at the Catholic University of the West, Angers. My office is located in the Science building (2 Bd de Lavoisier, 49000 Angers).
          Previously, I was a postdoctoral researcher at the University of Rouen and then a Temporary Lecturer and Researcher at the Department of Mathematics and Statistics at the University of Southern Brittany.
          I did my PhD in Mathematics at the Mathematics Laboratory of the Gaston Berger University of Saint-Louis, under the supervision of Professors Aliou Diop from Gaston Berger University of Saint-Louis and <Link href={'https://dupuy.perso.math.cnrs.fr/'} className='underline font-semibold'>Jean-François Dupuy</Link> from INSA Rennes.
          On July 21, 2021, I defended my PhD thesis titled Marginal Regression Models for Zero-Inflated Count Data.
        </p>
      </div>
    </>
  );
}
