import Link from 'next/link';
import React from 'react'
import Layout from "../components/layout/Layout";
import NavbarPages from '../components/navigation/NavbarPages';

export default function publications() {
  return (
    <Layout title = 'Publications' metaContent ='Bienvenue sur ma page web, Je suis Essoham ALI, Ph.D. in Mathematics Applied' >
      <NavbarPages/>
      <div className='my-16'>
        <h1 className='uppercase text-center font-black underline text-3xl text-amber-700 pb-16'>
          Publications
        </h1>
        <div className='mx-36'>
          <div className='shadow-lg p-7 mb-16'>
            <h2 className='text-xl'>
              A simulation-based study of Zero-inflated Bernoulli model with various models for the susceptible probability
            </h2>
            <p className='text-md font-bold text-amber-800 pb-5'>In progress</p>
            <p className='text-md'>Essoham Ali, Kim-Hung Pho | 2022</p>
          </div>
          <div className='shadow-lg p-7 mb-16'>
            <h2 className='text-xl'>
            Statistical inference in a Zero-Inflated Bell regression model.
            </h2>
            <p className='text-md font-bold text-amber-800 pb-5'>Mathematical Methods of Statistics</p>
            <div className='flex justify-between items-center'>
              <p className='text-md'>Essoham Ali, Mamadou Lamine Diop, Aliou Diop | 2022</p>
              <Link href='https://link.springer.com/article/10.3103/S1066530722030012' className='btn btn-sm border-none bg-amber-700 px-5 hover:bg-slate-100 hover:text-gray-800'>Click to see</Link>
            </div>
          </div>
          <div className='shadow-lg p-7 mb-16'>
            <h2 className='text-xl'>
            A simulation-based study of ZIP regression with various zero-inflated submodels
            </h2>
            <p className='text-md font-bold text-amber-800 pb-5'>
              Communications in Statistics - Simulation and Computation
            </p>
            <div className='flex justify-between items-center'>
              <p className='text-md'>Essoham Ali | 2022</p>
              <Link href='https://www.tandfonline.com/doi/abs/10.1080/03610918.2022.2025840' className='btn btn-sm border-none bg-amber-700 px-5 hover:bg-slate-100 hover:text-gray-800'>Click to see</Link>
            </div>
          </div>
          <div className='shadow-lg p-7 mb-16'>
            <h2 className='text-xl'>
              A constrained marginal zero-inflated binomial regression
            </h2>
            <p className='text-md font-bold text-amber-800 pb-5'>
              Communications in Statistics - Theory and Methods
            </p>
            <div className='flex justify-between items-center'>
              <p className='text-md'>Ali E., Diop A., Dupuy J.-F | 2022</p>
              <Link href='https://www.tandfonline.com/doi/abs/10.1080/03610926.2020.1861296' className='btn btn-sm border-none bg-amber-700 px-5 hover:bg-slate-100 hover:text-gray-800'>Click to see</Link>
            </div>
          </div>
          <div className='shadow-lg p-7'>
            <h2 className='text-xl'>
              16S metagenomic comparison of Plasmo-dium falciparum infected and non-infected Anopheles gambiae <br/>and Anopheles funestus Microbiota from Senegal
            </h2>
            <p className='text-md font-bold text-amber-800 pb-5'>
              American Journal of Tropical Medicine Hygiene
            </p>
            <div className='flex justify-between items-center'>
              <p className='text-md'>
              Hubert Bassene, El Hadji Amadou Niang, Florence Fenollar, Dipankar Bachar, Souleymane Doucouré, <br/> Essoham Ali, Caroline Michelle, Didier Raoult, Cheickh Sokhna and Oleg Mediannikov | 2018
              </p>
              <Link href='https://pubmed.ncbi.nlm.nih.gov/30350766/' className='btn btn-sm border-none bg-amber-700 px-5 hover:bg-slate-100 hover:text-gray-800'>Click to see</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
