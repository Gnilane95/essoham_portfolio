import React from "react";
import SiteHeader from "../shared/SiteHeader";
import {
  personalData,
  univgastonBerger,
  aliouDiopPortfolio,
  jeanFrancoisDupy,
} from "../../data/siteData";
import Link from "next/link";


export default function SectionContact() {
  return (
    <>
      <div className="xl:px-56 lg:px-28 sm:px-7 md:px-16 text-justify pb-20">
        <SiteHeader title={"Current position"} />
        <p>
          Since September 2023, I am a lecturer and researcher in Applied
          Mathematics and Statistics at the Université Catholique de l'Ouest
          (UCO), Angers France. I give lectures in the Institute of Applied
          Mathematics (IMA). My research work is carried out within the
          probability and statistics team of the Laboratoire de Mathématiques de
          Bretagne Atlantique (LMBA), where I am an associate member.
        </p>
        <p className="mt-5">
          I obtained my PhD in July 2021 at the{" "}
          <Link href={univgastonBerger} className="font-bold">
            Université Gaston Berger de Saint-Louis
          </Link>
          , Senegal, under the supervision of{" "}
          <Link href={aliouDiopPortfolio} className="font-bold">
            Aliou Diop{" "}
          </Link>
          and{" "}
          <Link href={jeanFrancoisDupy} className="font-bold">
            Jean-François Dupuy
          </Link>
          .
        </p>
      </div>
    </>
  );
}
