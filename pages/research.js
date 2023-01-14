import React from 'react'
import Layout from "../components/layout/Layout";
import NavbarPages from '../components/navigation/NavbarPages';


export default function research() {
  const supervisings = [
    {
      name : 'Ibrahim LAWANI',
      year : '2022-2023',
      location : 'UGB Saint-Louis, Sénégal.',
      co_supervisor : 'Aliou DIOP (UGB)',
      title : 'Comparison between the zero inflated Poisson and the hurdle model for the modeling of count data',
      id : 1,
    },
    {
      name : 'Gnon Siya AGNONDJI',
      year : '2022-2023',
      location : 'UGB Saint-Louis, Sénégal.',
      co_supervisor : 'Aliou DIOP (UGB)',
      title : 'Zero inflated Poisson-Gamma regression model with applications',
      id : 2,
    },
    {
      name : 'Maël QUATREVAUX',
      year : '2022-2023',
      location : 'UBS Vannes, France.',
      co_supervisor : 'Aurélien RAGOT (Micropole Nord Ouest)',
      title : 'Internship Consultant Buisines Intelligence',
      id : 3,
    },
  ]
  return (
    <Layout title = 'Research' metaContent ="Welcome to my website, I'm Essoham ALI, Ph.D. in Applied Mathematics" >
      <NavbarPages />
      <div className='my-28'>
        <h1 className='uppercase text-center font-black underline sm:text-3xl lg:text-3xl md:text-4xl text-amber-700'>
          Research
        </h1>
        <div className='xl:mx-44 sm:px-10 md:px-24 lg:mx-20 mt-20 lg:flex lg:justify-between lg:space-x-32'>
          <div className='lg:w-1/2'>
            <div className='pb-10'>
              <h2 className='sm:text-2xl lg:text-2xl md:text-3xl font-bold pb-2'>My researcher work</h2>
              <hr className='mb-5'/>
              <p className='sm:leading-relaxed lg:leading-relaxed md:leading-loose text-justify sm:text-base md:text-2xl lg:text-base'>
              In my research, I am motivated by statistical inference problems on zero-inflated models (mixture type models) and their applications.
              </p>
            </div>
            <div className='pb-10'>
              <h2 className='sm:text-2xl lg:text-2xl md:text-3xl font-bold pb-2'>My postdoc work</h2>
              <hr className='mb-5'/>
              <p className='sm:leading-relaxed lg:leading-relaxed md:leading-loose text-justify sm:text-base md:text-2xl lg:text-base'>
                In my post doc I worked on stochastic processes applied to eye tracking problems. The objective of the work is to model the sequence of 2D coordinates of the point of gaze of a climber and the scan path of his/her visual intake during ascension on an artificial climbing wall, proposing different probabilistic/statistical techniques for comparing different learning and developing a statistical methodology for analysing climbing (modelling, estimation).
              </p>
            </div>
            <div>
              <h2 className='sm:text-2xl lg:text-2xl md:text-3xl font-bold pb-2'>My Ph.D.thesis and its perspectives</h2>
              <hr className='mb-5'/>
              <p className='sm:leading-relaxed lg:leading-relaxed md:leading-loose text-justify sm:text-base    md:text-2xl lg:text-base'>
                <span>
                  My Ph.D thesis in applied mathematics, specializing in statistics, is entitled &quot;Marginal regression models for count data with excess zeros&quot;. It deals with estimation problems in statistical regression models for count data known as &quot;zeros inflated &quot;. This type of problem has many applications in public health, insurance, socialsciences and engineering.
                </span>
                <span className='pt-5 block text-justify'>
                  In a first work, published in &quot;Communications in Statistics - Theory and Methods&quot;, I have studied the theoretical and numerical aspects of statistical inference in the marginal binomial zero-inflated regression model (a mixture type model). I proposed original estimators of the parameters of this model and rigorously established their convergence properties (convergence in probability, convergence in law, convergence of an asymptotic variance estimator). Then I carried out an exhaustive simulation study using the R software, after which he was able to confirm the good properties at finite distance of the proposed estimators. Finally, I applied the proposed model and inference to the study of the problem of non-use of medical care in the USA.
                </span>
                <span className='pt-5 block text-justify'>
                In a second work, published in &quot;Communications in Statistics - Simulation and Computation&quot;, I was interested in the robustness of the estimation in zero-inflated regression models, when varying the class membership model of the underlying mixture. From this work, I drew some very interesting practical conclusions about the degree of robustness of zero-inflated models to various deviations from their assumptions.
                </span>
                <span className='pt-5 block text-justify'>
                  Among the different perspectives of my PhD work, I am working on the marginal ZIB model in order to extend the field of use of this new model by increasing its complexity, in order to better account for the complexity of the data encountered (presence of non-linear effects, high dimension /Big Data). This model will have to take into account non-linear effects closer to the reality of the observed phenomena than the linear approximation between the explanatory variables and the observed counts (these effects could be introduced through the unknown functions, to be estimated). This model will also have to take into account the imperfect nature of the observed counts, and in particular, the presence of censoring. I should propose one or two estimation methods adapted to the proposed models, have implemented them (&quot;R package development project&quot;) and conducted simulation studies to evaluate the performance of the allowing to evaluate the performances of the built models.
                </span>
              </p>
            </div>
          </div>
          <div className='lg:w-1/2 sm:pt-20 lg:pt-0'>
            <h2 className='sm:text-2xl lg:text-2xl md:text-3xl font-bold pb-2 text-center'>Research topics</h2>
            <hr className='mb-5'/>
            <ul>
              <li className='shadow-lg p-5 mb-5 border-l-8 border-l-amber-800 sm:text-base md:text-2xl lg:text-base'>
                Marginal models, count data models, regressions, zero inflation.
              </li>
              <li className='shadow-lg p-5 mb-5 border-l-8 border-l-amber-800 sm:text-base md:text-2xl lg:text-base'>Statistical learning.</li>
              <li className='shadow-lg p-5 mb-5 border-l-8 border-l-amber-800 sm:text-base md:text-2xl lg:text-base'>
                Applications: health economics, medicine.
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-20 '>
          <h2 className='sm:text-2xl lg:text-2xl md:text-3xl text-center font-bold pb-2'>Supervising</h2>
          <hr className='mb-5 mx-28'/>
          <div className=''>
            <h3 className='text-center sm:text-xl lg:text-xl md:text-2xl underline'>Master students :</h3>
            <div className='xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 gap-7 xl:mx-44 sm:px-10 md:px-24 lg:mx-20 sm:flex sm:flex-col sm:space-y-3 md:space-y-7 lg:space-y-0 mt-10'>
              {supervisings.map((supervising)=>(
                <div className='shadow-md shadow-amber-600 lg:p-7 sm:p-4 rounded-xl sm:text-base md:text-xl lg:text-base' key={supervising.id}>
                  <p className='font-black pb-2'>{supervising.name}</p>
                  <p className='pb-5 sm:text-sm md:text-xl lg:text-sm'>
                    <span>{supervising.year} | </span>
                    <span>{supervising.location}</span>
                  </p>
                  <p className='pb-2'>
                    <span className='font-semibold'>Co-supervisor :</span> <span>{supervising.co_supervisor}</span>
                  </p>
                  <p>
                  <span className='font-semibold'>Title :</span> <span className=''>
                      {supervising.title}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}
