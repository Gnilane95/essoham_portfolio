import Link from 'next/link';
import React from 'react'
import Layout from "../components/layout/Layout";
import NavbarPages from '../components/navigation/NavbarPages';

export default function publications() {
  const publications =[
    {
      title : 'Statistical inference in a Zero-Inflated Bell regression model.',
      journal : 'Mathematical Methods of Statistics',
      authors :'Essoham Ali, Mamadou Lamine Diop, Aliou Diop',
      year : '2022',
      id : 1,
    },
    {
      title : 'A simulation-based study of ZIP regression with various zero-inflated submodels.',
      journal : 'Communications in Statistics - Simulation and Computation',
      authors :'Essoham Ali',
      year : '2022',
      id : 2,
    },
    {
      title : 'A constrained marginal zero-inflated binomial regression.',
      journal : 'Communications in Statistics - Theory and Methods',
      authors :'Ali E., Diop A., Dupuy J.-F',
      year : '2022',
      id : 3,
    },
    {
      title : '16S metagenomic comparison of Plasmo-dium falciparum infected and non-infected Anopheles gambiae and Anopheles funestus Microbiota from Senegal',
      journal : 'American Journal of Tropical Medicine Hygiene',
      authors :'Hubert Bassene, El Hadji Amadou Niang, Florence Fenollar, Dipankar Bachar, Souleymane Doucouré, Essoham Ali, Caroline Michelle, Didier Raoult, Cheickh Sokhna and Oleg Mediannikov',
      year : '2018',
      id : 4,
    }
  ]
  return (
    <Layout title = 'Publications' metaContent ='Bienvenue sur ma page web, Je suis Essoham ALI, Ph.D. in Mathematics Applied' >
      <NavbarPages/>
      <div className='my-16'>
        <h1 className='uppercase text-center font-black underline sm:text-3xl md:text-4xl lg:text-3xl text-amber-700 pb-16'>
          Publications
        </h1>
        <div className='lg:mx-28 xl:mx-44 sm:mx-10 md:mx-24'>
          <div className='shadow-lg p-7 mb-16'>
            <h2 className='sm:text-xl md:text-2xl lg:text-xl'>
              A simulation-based study of Zero-inflated Bernoulli model with various models for the susceptible probability
            </h2>
            <p className='sm:text-base md:text-xl lg:text-base font-bold text-amber-800 pb-5'>In progress</p>
            <p className='sm:text-base md:text-xl lg:text-base'>Essoham Ali, Kim-Hung Pho | 2022</p>
          </div>
          {publications.map((publication) =>(
            <div className='shadow-lg p-7 mb-16' key={publication.id}>
              <h2 className='sm:text-xl md:text-2xl lg:text-xl'>
                {publication.title}
              </h2>
              <p className='sm:text-base md:text-xl lg:text-base font-bold text-amber-800 pb-5'>
                {publication.journal}
              </p>
              <div className='lg:flex lg:justify-between lg:items-center'>
                <p className='sm:text-base md:text-xl lg:text-base'>
                  {publication.authors} | {publication.year}
                </p>
                <Link href='https://link.springer.com/article/10.3103/S1066530722030012' className='btn sm:btn-sm lg:btn-sm md:btn-md border-none bg-amber-700 sm:mt-5 lg:mt-0 px-5 hover:bg-slate-100 hover:text-gray-800'>
                  Click to see
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
