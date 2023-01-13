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
            <h2 className='font-bold sm:text-lg md:text-2xl lg:text-lg uppercase'>Conférences et séminaires</h2>
            <hr className='bg-amber-800 h-1 w-72 rounded'/>
            <div className='shadow-lg p-7 rounded-lg mt-2'>
              {/* Conférences internationales */}
              <div className=''>
                <span className='btn bg-slate-500 sm:text-base md:text-xl lg:text-base hover:bg-amber-700 cursor-none border-r-2 border-b-2 border-r-amber-800 border-b-amber-800 border-t-0 border-l-0'>Conférences internationales</span>
                <div className='mt-5'>
                  <ul className='leading-loose pl-5 sm:text-base md:text-xl lg:text-base'>
                    <li className='list-disc'>
                      03-2022 : De la Statistique à la Data Science pour l’économie et l’entreprise du futur.
                    </li>
                    <li className='list-disc pt-3'>12-2020 : Rencontres des Jeunes Chercheurs Africains en France.</li>
                    <li className='list-disc pt-3'>12-2019 : EMA « Mathématiques pour les réseaux » Madagascar.</li>
                    <li className='list-disc pt-3'>12-2019 : 3è édition des « Journées Mathématiques du Sénégal » UGB Saint-Louis</li>
                    <li className='list-disc pt-3'>06-2019 : Ecole d’été en Statistique et Sciences des Données.</li>
                    <li className='list-disc pt-3'>09-2018 : CIMPA « Statistiques des durées de vie et statistiques spatiales » Togo.</li>
                  </ul>
                </div>
              </div>
              {/* Séminaires */}
              <div className='mt-10'>
                <span className='btn bg-slate-500 sm:text-base md:text-xl lg:text-base hover:bg-amber-700 cursor-none border-r-2 border-b-2 border-r-amber-800 border-b-amber-800 border-t-0 border-l-0'>Séminaires</span>
                <div className='mt-5'>
                  <ul className='leading-loose pl-5 sm:text-base md:text-xl lg:text-base'>
                    <li className='list-disc'>
                      12-2022 : 7èmes Rencontres Statistique - Sciences des données: Environnement et climat.
                    </li>
                    <li className='list-disc pt-3'>
                      03-2022 : Séminaire de groupe de travail de statistique au LMRS, Université de Rouen.
                    </li>
                    <li className='list-disc pt-3'>
                      01-2022 : Exposé au groupe de travail de statistique au LMRS, Université de Rouen.
                    </li>
                    <li className='list-disc pt-3'>05-2019 : 15ème Journée de Statistique de Rennes « Statistique et données »</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Séjours de recherche à l’étranger */}
          <div className='mt-16'>
            <h2 className='font-bold sm:text-lg md:text-2xl lg:text-lg uppercase'>Séjours de recherche à l’étranger</h2>
            <hr className='bg-amber-800 h-1 lg:w-96 sm:w-64 rounded'/>
            <div className='shadow-lg p-12 rounded-lg mt-2'>
              <ul className='leading-loose sm:text-base md:text-xl lg:text-base'>
                <li className='list-disc'>
                  Lauréat de la bourse de mobilité Erasmus+, laboratoire d’accueil : Institut de Recherche des Mathématiques de Rennes (IRMAR), France du 26 février au 31 mai 2021 sous la supervision de Jean-François DUPUY ( Professeur à l’INSA de Rennes).
                </li>
                <li className='list-disc pt-3'>
                Lauréat de la bourse de mobilité du projet CEAMITIC, laboratoire d’accueil : Institut de Recherche des Mathématiques de Rennes (IRMAR), France du 11 mars au 11 juin 2019 sous la supervision de Jean-François DUPUY ( Professeur à l’INSA de Rennes).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
