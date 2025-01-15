import React from "react";
import Link from "next/link";
import { curentResearch } from "../../data/siteData";
import { FaChalkboardTeacher } from "react-icons/fa";
import SiteHeader from "../shared/SiteHeader";
import { IoLocationSharp } from "react-icons/io5";


export default function PeerReviewedPublications() {
  return (
    <div className="xl:px-56g lg:px-20g sm:px-7g md:px-16g text-justify my-10">
      <SiteHeader title={"Peer-reviewed publications"}/>
      <div className="mt-7">
        <ol className="list-decimal list-outside pl-4">
              <li className="">
                Hubert Bassene, El Hadji Amadou Niang, Florence Fenollar, Dipankar Bachar, Souleymane Doucour´e, Essoham Ali, Caroline Michelle, Didier Raoult, Cheickh Sokhna and Oleg Mediannikov (2018). <Link href='https://pubmed.ncbi.nlm.nih.gov/30350766/' className="underline text-blue-500">16S metagenomic comparison of Plasmo-dium falciparum infected and non-infected Anopheles gambiae and Anopheles funestus Microbiota from Senegal</Link>. American Journal of Tropical Medicine Hygiene 99(6):1489-1498.
                 
              </li>
              <li className="pt-3">
                Ali E., Diop A., Dupuy J.-F.(2022) <Link href='https://www.tandfonline.com/doi/abs/10.1080/03610926.2020.1861296' className="underline text-blue-500">A constrained marginal zero-inflated binomial regression model</Link>. Communications in Statistics - Theory and Methods, 51:18, 6396-6422.
              </li>
              <li className="pt-3">
                Essoham Ali (2022). <Link href='https://www.tandfonline.com/doi/abs/10.1080/03610918.2022.2025840' className="underline text-blue-500">A simulation-based study of ZIP regression with various zero-inflated submodels</Link>. Communications in Statistics - Simulation and Computation. Doi: 10.1080/03610918.2022.2025840
              </li>
              <li className="pt-3">
              Essoham Ali, Mamadou Lamine Diop, Aliou Diop.(2022) <Link href='https://link.springer.com/article/10.3103/S1066530722030012' className="underline text-blue-500">Statistical inference in a Zero-Inflated Bell regression model</Link>. Mathematical Methods of Statistics Vol. 31, No. 3,91–104
              </li>
              <li className="pt-3">
              Essoham Ali & Kim-Hung Pho (06 Aug 2024): <Link href='https://www.tandfonline.com/doi/full/10.1080/03610918.2024.2384574' className="underline text-blue-500">A novel model for count data: zero-inflated Probit Bell model with applications</Link>, Communications in Statistics - Simulation and Computation, DOI: 10.1080/03610918.2024.2384574 
              </li>
        </ol>
      </div>
    </div>
  );
}
