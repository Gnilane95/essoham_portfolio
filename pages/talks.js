import React from "react";
import Layout from "../components/layout/Layout";
import Navbar from "../components/header/Navbar";
import { NextSeo } from "next-seo";

export default function talks() {
  return (
    <Layout>
      <NextSeo
        title="Essoham ALI | Talks"
        titleTemplate="Essoham ALI"
        defaultTitle="Essoham ALI"
        description="Welcome to my portfolio, I'm Essoham ALI, Ph.D. in Applied Mathematics. In this page, you will see my conferences, seminars and my research stays abroad."
        canonical="https://www.aliessoham-maths.fr/talks"
        openGraph={{
          url: "https://www.aliessoham-maths.fr/talks",
          title: "Essoham ALI | Talks",
          description:
            "Welcome to my portfolio, I'm Essoham ALI, Ph.D. in Applied Mathematics. In this page, you will see my conferences, seminars and my research stays abroad.",
          site_name: "Essoham ALI",
        }}
      />
      <Navbar />
      <div className="my-16">
        <h1 className="uppercase text-center font-black underline sm:text-3xl md:text-4xl lg:text-3xl text-amber-700">
          Talks
        </h1>
        <div className="lg:mx-28 xl:mx-44 sm:mx-10 md:mx-24">
          {/* Conférences et séminaires */}
          <div className="mt-16">
            <h2 className="font-bold sm:text-lg md:text-2xl lg:text-lg uppercase">
              Conferences and seminars
            </h2>
            <hr className="bg-amber-800 h-1 w-72 rounded" />
            <div className="shadow-lg p-7 rounded-lg mt-2">
              {/* Conférences internationales */}
              <div className="">
                <span className="btn bg-slate-500 sm:text-base md:text-xl lg:text-base hover:bg-amber-700 cursor-none border-r-2 border-b-2 border-r-amber-800 border-b-amber-800 border-t-0 border-l-0">
                  International conferences
                </span>
                <div className="mt-5">
                  <ul className="leading-loose pl-5 sm:text-base md:text-xl lg:text-base">
                    <li className="list-disc">
                      03-2022: De la Statistique à la Data Science pour
                      l’économie et l’entreprise du futur.
                    </li>
                    <li className="list-disc pt-3">
                      12-2020 : Rencontres des Jeunes Chercheurs Africains en
                      France.
                    </li>
                    <li className="list-disc pt-3">
                      12-2019 : EMA « Mathématiques pour les réseaux »
                      Madagascar
                    </li>
                    <li className="list-disc pt-3">
                      12-2019 : 3rd edition of "Journées Mathématiques du
                      Sénégal" UGB Saint-Louis.
                    </li>
                    <li className="list-disc pt-3">
                      06-2019 : Summer School in Statistics and Data Science.
                    </li>
                    <li className="list-disc pt-3">
                      09-2018 : CIMPA " Statistiques des durées de vie et
                      statistiques spatiales " Togo.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Séminaires */}
              <div className="mt-10">
                <span className="btn bg-slate-500 sm:text-base md:text-xl lg:text-base hover:bg-amber-700 cursor-none border-r-2 border-b-2 border-r-amber-800 border-b-amber-800 border-t-0 border-l-0">
                  Seminars
                </span>
                <div className="mt-5">
                  <ul className="leading-loose pl-5 sm:text-base md:text-xl lg:text-base">
                    <li className="list-disc">
                      12-2022 : 7èmes Rencontres Statistique - Sciences des
                      données: Environnement et climat.
                    </li>
                    <li className="list-disc pt-3">
                      03-2022 : Séminaire de groupe de travail de statistique au
                      LMRS, Université de Rouen.
                    </li>
                    <li className="list-disc pt-3">
                      01-2022 : Exposé au groupe de travail de statistique au
                      LMRS, Université de Rouen.
                    </li>
                    <li className="list-disc pt-3">
                      05-2019 : 15ème Journée de Statistique de Rennes «
                      Statistique et données »
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Séjours de recherche à l’étranger */}
          <div className="mt-16">
            <h2 className="font-bold sm:text-lg md:text-2xl lg:text-lg uppercase">
              Research stays abroad
            </h2>
            <hr className="bg-amber-800 h-1 lg:w-96 sm:w-64 rounded" />
            <div className="shadow-lg p-12 rounded-lg mt-2">
              <ul className="leading-loose sm:text-base md:text-xl lg:text-base">
                <li className="list-disc">
                  Erasmus+ mobility grant winner, host laboratory: Institut de
                  Recherche des Mathématiques de Rennes (IRMAR), France from
                  February 26 to May 31, 2021 under the supervision of
                  Jean-François DUPUY ( Professor at INSA of Rennes)
                </li>
                <li className="list-disc pt-3">
                  Laureate of the mobility grant of the CEAMITIC project, host
                  laboratory: Institut de Recherche des Mathématiques de Rennes
                  (IRMAR), France from March 11 to June 11, 2019 under the
                  supervision of Jean-François DUPUY ( Professor at INSA of
                  Rennes).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
