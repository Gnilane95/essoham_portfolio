import React from 'react'
import Layout from "../components/layout/Layout";
import NavbarPages from '../components/navigation/NavbarPages';

export default function teaching() {
  return (
    <Layout title = 'Teaching' metaContent ='Bienvenue sur ma page web, Je suis Essoham ALI, Ph.D. in Mathematics Applied' >
      <NavbarPages/>
      <div className='my-16'>
        <h1 className='uppercase text-center font-black underline sm:text-3xl lg:text-3xl md:text-4xl text-amber-700'>
          Teaching
        </h1>
        <div className='lg:mx-28 xl:mx-44 sm:mx-10 md:mx-20'>
          <div className='shadow-lg p-7 rounded-lg mt-16'>
            <p className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none sm:mb-3 lg:mb-0 sm:text-base lg:text-base md:text-xl'>
              2022-2023
            </p>
            <p className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none md:ml-5 sm:text-base lg:text-base md:text-xl'>
              Université Bretagne Sud (UBS)
            </p>
            <div className='mt-5'>
              <ul className='leading-loose sm:text-base lg:text-base md:text-xl'>
                <li className='list-disc'>Courses/tutorials of Elements of Statistics L1 (Mathematics)</li>
                <li className='list-disc'>Courses/tutorials in Linear Models and Applications L2 (Mathematics)</li>
                <li className='list-disc'>Courses/tutorials in Programming and statistical software with R (L3 Mathematics)</li>
                <li className='list-disc'>Courses/tutorials in Discriminant analysis and logistic regression (L3 Mathematics)</li>
                <li className='list-disc'>Courses/tutorials in Python and Machine Learning (L3 Mathematics)</li>
              </ul>
            </div>
          </div>
          <div className='shadow-lg p-7 rounded-lg mt-16'>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none sm:mb-3 lg:mb-0 sm:text-base lg:text-base md:text-xl'>2021-2022</span>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none md:ml-5 sm:text-base lg:text-base md:text-xl'>
              Université de Rouen
            </span>
            <div className='mt-5 sm:text-base lg:text-base md:text-xl'>
              <ul className='leading-loose'>
                <li className='list-disc'>Tutorials on Statistics and probability (L2 computer science, 32h)</li>
                <li className='list-disc'>Tutorials on Randomness Management with Python (L2 Informatique, 24 h)</li>
              </ul>
            </div>
          </div>
          <div className='shadow-lg p-7 rounded-lg mt-16'>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none sm:mb-3 lg:mb-0 sm:text-base lg:text-base md:text-xl'>2019-2020</span>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none md:ml-5 sm:text-base lg:text-base md:text-xl'>
              Université Gaston Berger (Sénégal)
            </span>
            <div className='mt-5'>
              <ul className='leading-loose sm:text-base lg:text-base md:text-xl'>
                <li className='list-disc'>Tutorials in Analysis 1 (L1 Mathematics-Physics-Computer Science, 36 h)</li>
                <li className='list-disc'>Tutorials/practical work in Numerical Computation (L2 Applied Mathematics, 24 h)</li>
                <li className='list-disc'>Tutorials in Statistical Probability (L1 Mathematics-Physics-Computer Science, 32 h)</li>
                <li className='list-disc'>Tutorials data analysis with R</li>
              </ul>
            </div>
          </div>
          <div className='shadow-lg p-7 rounded-lg mt-16'>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none sm:mb-3 lg:mb-0 sm:text-base lg:text-base md:text-xl'>2019-2020</span>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none md:ml-5 sm:text-base lg:text-base md:text-xl'>
             MIT University (Sénégal)
            </span>
            <div className='mt-5'>
              <ul className='leading-loose sm:text-base lg:text-base md:text-xl'>
                <li className='list-disc'>Courses/tutorials in Inferential Statistics (L3 Computer Science course, 30 h)</li>
                <li className='list-disc'>Courses/tutorials in operations Research (Master of Computer Science, 30 h)</li>
                <li className='list-disc'>Courses/tutorials in data statistics: implementation of statistical methods (L3, 42 hrs)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
