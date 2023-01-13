import React from 'react'
import Layout from "../components/layout/Layout";
import NavbarPages from '../components/navigation/NavbarPages';

export default function talks() {
  return (
    <Layout title = 'Talks' metaContent ='Bienvenue sur ma page web, Je suis Essoham ALI, Ph.D. in Mathematics Applied' >
      <NavbarPages/>
      <div className='my-16'>
        <h1 className='uppercase text-center font-black underline sm:text-3xl md:text-4xl lg:text-3xl text-amber-700'>
          Talks
        </h1>
        <div className='lg:mx-28 xl:mx-44 sm:mx-10 md:mx-24'>
          {/* Conférences et séminaires */}
          <div className='mt-16'>
            <h2 className='font-bold sm:text-lg md:text-2xl lg:text-lg uppercase'>
              Conferences and seminars
            </h2>
            <hr className='bg-amber-800 h-1 w-72 rounded'/>
            <div className='shadow-lg p-7 rounded-lg mt-2'>
              {/* Conférences internationales */}
              <div className=''>
                <span className='btn bg-slate-500 sm:text-base md:text-xl lg:text-base hover:bg-amber-700 cursor-none border-r-2 border-b-2 border-r-amber-800 border-b-amber-800 border-t-0 border-l-0'>
                  International conferences
                </span>
                <div className='mt-5'>
                  <ul className='leading-loose pl-5 sm:text-base md:text-xl lg:text-base'>
                    <li className='list-disc'>
                      03-2022: From Statistics to Data Science for the Economy and Business of the Future.
                    </li>
                    <li className='list-disc pt-3'>12-2020 : Meetings of Young African Researchers in France.</li>
                    <li className='list-disc pt-3'>12-2019 : EMA "Mathematics for Networks" Madagascar.</li>
                    <li className='list-disc pt-3'>12-2019 : 3rd edition of the "Journées Mathématiques du Sénégal" UGB Saint-Louis.</li>
                    <li className='list-disc pt-3'>06-2019 : Summer School in Statistics and Data Science.</li>
                    <li className='list-disc pt-3'>09-2018 : CIMPA " Lifetime and spatial statistics " Togo.</li>
                  </ul>
                </div>
              </div>
              {/* Séminaires */}
              <div className='mt-10'>
                <span className='btn bg-slate-500 sm:text-base md:text-xl lg:text-base hover:bg-amber-700 cursor-none border-r-2 border-b-2 border-r-amber-800 border-b-amber-800 border-t-0 border-l-0'>
                  Seminars
                </span>
                <div className='mt-5'>
                  <ul className='leading-loose pl-5 sm:text-base md:text-xl lg:text-base'>
                    <li className='list-disc'>
                      12-2022 : 7th Statistics - Data Science Meeting: Environment and Climate.
                    </li>
                    <li className='list-disc pt-3'>
                      03-2022 : Statistics working group seminar at LMRS, University of Rouen.
                    </li>
                    <li className='list-disc pt-3'>
                      01-2022 : Presentation to the statistics working group at LMRS, University of Rouen.
                    </li>
                    <li className='list-disc pt-3'>05-2019 : 15th Day of Statistics in Rennes "Statistics and Data"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Séjours de recherche à l’étranger */}
          <div className='mt-16'>
            <h2 className='font-bold sm:text-lg md:text-2xl lg:text-lg uppercase'>
              Research stays abroad
            </h2>
            <hr className='bg-amber-800 h-1 lg:w-96 sm:w-64 rounded'/>
            <div className='shadow-lg p-12 rounded-lg mt-2'>
              <ul className='leading-loose sm:text-base md:text-xl lg:text-base'>
                <li className='list-disc'>
                  Erasmus+ mobility grant winner, host laboratory: Institut de Recherche des Mathématiques de Rennes (IRMAR), France from February 26 to May 31, 2021 under the supervision of Jean-François DUPUY ( Professor at INSA of Rennes)
                </li>
                <li className='list-disc pt-3'>
                  Laureate of the mobility grant of the CEAMITIC project, host laboratory: Institut de Recherche des Mathématiques de Rennes (IRMAR), France from March 11 to June 11, 2019 under the supervision of Jean-François DUPUY ( Professor at INSA of Rennes).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
