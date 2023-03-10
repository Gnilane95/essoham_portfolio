import React from 'react'
import Layout from "../components/layout/Layout";
import Navbar from '../components/header/Navbar';
import { NextSeo } from 'next-seo';

export default function teaching() {
  return (
    <Layout>
      <NextSeo
        title="Essoham ALI | Teaching"
        description="Welcome to my portfolio, I'm Essoham ALI, Ph.D. in Applied Mathematics. In this page, you will see my teaching."
      />
      <Navbar/>
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
              Universit√© Bretagne Sud (UBS)
            </p>
            <div className='mt-5'>
              <ul className='leading-loose sm:text-base lg:text-base md:text-xl'>
                <li className='list-disc'>Courses/TD : Elements of Statistics L1 (Mathematics)</li>
                <li className='list-disc'>Courses/TD : Linear Models and Applications L2 (Mathematics)</li>
                <li className='list-disc'>Courses/TD : Programming and statistical software with R (L3 Mathematics)</li>
                <li className='list-disc'>Courses/TD : Discriminant analysis and logistic regression (L3 Mathematics)</li>
                <li className='list-disc'>Courses/TD : Python and Machine Learning (L3 Mathematics)</li>
              </ul>
            </div>
          </div>
          <div className='shadow-lg p-7 rounded-lg mt-16'>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none sm:mb-3 lg:mb-0 sm:text-base lg:text-base md:text-xl'>2021-2022</span>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none md:ml-5 sm:text-base lg:text-base md:text-xl'>
              Universit√© de Rouen
            </span>
            <p className='text-amber-700 italic pt-5'>The following teachings were carried out during my post-doc</p>
            <div className='mt-5 sm:text-base lg:text-base md:text-xl'>
              <ul className='leading-loose'>
                <li className='list-disc'>TD : Statistics and probability (L2 Informatique, 32 hrs)</li>
                <li className='list-disc'>TD : Statistics with Python (L2 Informatique, 24 hrs)</li>
              </ul>
            </div>
          </div>
          <div className='shadow-lg p-7 rounded-lg mt-16'>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none sm:mb-3 lg:mb-0 sm:text-base lg:text-base md:text-xl'>2019-2020</span>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none md:ml-5 sm:text-base lg:text-base md:text-xl'>
              Universit√© Gaston Berger (S√©n√©gal)
            </span>
            <div className='mt-5'>
              <ul className='leading-loose sm:text-base lg:text-base md:text-xl'>
                <li className='list-disc'>TD : Analysis 1 (L1 Mathematics-Physics-Computer Science, 36 hrs)</li>
                <li className='list-disc'>TD/TP : Numerical Computation (L2 Applied Mathematics, 24 hrs)</li>
                <li className='list-disc'>TD : Statistical Probability (L1 Mathematics-Physics-Computer Science, 32 hrs)</li>
                <li className='list-disc'>TD : Data analysis with R</li>
              </ul>
            </div>
          </div>
          <div className='shadow-lg p-7 rounded-lg mt-16'>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none sm:mb-3 lg:mb-0 sm:text-base lg:text-base md:text-xl'>2019-2020</span>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none md:ml-5 sm:text-base lg:text-base md:text-xl'>
             MIT University (S√©n√©gal)
            </span>
            <div className='mt-5'>
              <ul className='leading-loose sm:text-base lg:text-base md:text-xl'>
                <li className='list-disc'>Courses/TD : Inferential Statistics (L3 Computer Science)</li>
                <li className='list-disc'>Courses/TD : operations Research (Master of Computer Science)</li>
                <li className='list-disc'>Courses/TD : data statistics: implementation of statistical methods(L3)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
