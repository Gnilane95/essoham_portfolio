import React from 'react'
import Layout from "../components/layout/Layout";

export default function research() {
  return (
    <Layout title = 'Research' metaContent ='Bienvenue sur ma page web, Je suis Essoham ALI, Ph.D. in Mathematics Applied' >
      <div className='my-28'>
        <h1 className='uppercase text-center font-black underline text-3xl text-amber-700'>
          Research
        </h1>
        <div className='mx-56 mt-20 flex justify-between'>
          <div className='w-1/2'>
            <div className='pb-10'>
              <h2 className='text-2xl font-bold pb-2'>My researcher work</h2>
              <hr className='mb-5'/>
              <p className='leading-relaxed'>
              In my research, I am motivated by statistical inference problems on zero-inflated models (mixture type models) and their applications.
              </p>
            </div>
            <div className='pb-10'>
              <h2 className='text-2xl font-bold pb-2'>My postdoc work</h2>
              <hr className='mb-5'/>
              <p className='leading-relaxed'>
                In my post doc I worked on stochastic processes applied to eye tracking problems. The objective of the work is to model the sequence of 2D coordinates of the point of gaze of a climber and the scan path of his/her visual intake during ascension on an artificial climbing wall, proposing different probabilistic/statistical techniques for comparing different learning and developing a statistical methodology for analysing climbing (modelling, estimation).
              </p>
            </div>
            <div>
              <h2 className='text-2xl font-bold pb-2'>My Ph.D.thesis and its perspectives</h2>
              <hr className='mb-5'/>
              <p className='leading-relaxed'>
                <span>
                  My Ph.D thesis in applied mathematics, specializing in statistics, is entitled &quot;Marginal regression models for count data with excess zeros&quot;. It deals with estimation problems in statistical regression models for count data known as &quot;zeros inflated &quot;. This type of problem has many applications in public health, insurance, socialsciences and engineering.
                </span>
                <span className='pt-5 block'>
                  In a first work, published in &quot;Communications in Statistics - Theory and Methods&quot;, I have studied the theoretical and numerical aspects of statistical inference in the marginal binomial zero-inflated regression model (a mixture type model). I proposed original estimators of the parameters of this model and rigorously established their convergence properties (convergence in probability, convergence in law, convergence of an asymptotic variance estimator). Then I carried out an exhaustive simulation study using the R software, after which he was able to confirm the good properties at finite distance of the proposed estimators. Finally, I applied the proposed model and inference to the study of the problem of non-use of medical care in the USA.
                </span>
                <span className='pt-5 block'>
                In a second work, published in &quot;Communications in Statistics - Simulation and Computation&quot;, I was interested in the robustness of the estimation in zero-inflated regression models, when varying the class membership model of the underlying mixture. From this work, I drew some very interesting practical conclusions about the degree of robustness of zero-inflated models to various deviations from their assumptions.
                </span>
                <span className='pt-5 block'>
                  Among the different perspectives of my PhD work, I am working on the marginal ZIB model in order to extend the field of use of this new model by increasing its complexity, in order to better account for the complexity of the data encountered (presence of non-linear effects, high dimension /Big Data). This model will have to take into account non-linear effects closer to the reality of the observed phenomena than the linear approximation between the explanatory variables and the observed counts (these effects could be introduced through the unknown functions, to be estimated). This model will also have to take into account the imperfect nature of the observed counts, and in particular, the presence of censoring. I should propose one or two estimation methods adapted to the proposed models, have implemented them (&quot;R package development project&quot;) and conducted simulation studies to evaluate the performance of the allowing to evaluate the performances of the built models.
                </span>
              </p>
            </div>
          </div>
          <div className='w-1/3'>
            <h2 className='text-2xl font-bold pb-2 text-center'>Research topics</h2>
            <hr className='mb-5'/>
            <ul>
              <li className='shadow-lg p-5 mb-5 border-l-8 border-l-amber-800'>
                Modèles marginaux, modèles de données de comptage, régressions, inflation de zéros.
              </li>
              <li className='shadow-lg p-5 mb-5 border-l-8 border-l-amber-800'>Apprentissage statistique</li>
              <li className='shadow-lg p-5 mb-5 border-l-8 border-l-amber-800'>
                Applications : économie de la santé, médecine
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-20'>
          <h2 className='text-2xl text-center font-bold pb-2'>Supervising</h2>
          <hr className='mb-5 mx-28'/>
          <div className=''>
            <h3 className='text-center text-xl underline'>Master students :</h3>
            <div className='grid grid-cols-3 gap-7 mx-56 mt-10'>
              <div className='shadow-md shadow-amber-600 p-7 rounded-xl'>
                <p className='font-black pb-2'>Ibrahim LAWANI</p>
                <p className='pb-5 text-sm'>
                  <span>2021 | </span>
                  <span>UGB Saint-Louis, Sénégal.</span>
                </p>
                <p className='pb-2'><span className='font-semibold'>Co-encadrant :</span> <span>Aliou DIOP (UGB)</span></p>
                <p>
                 <span className='font-semibold'>Titre :</span> <span>
                    Comparaison entre le modèle de Poisson à inflation zéros et <br/> modèle de hurdle pour la modélisation des données de comptage
                  </span>
                </p>
              </div>
              <div className='shadow-md shadow-amber-600 p-7 rounded-xl'>
                <p className='font-black pb-2'>Gnon Siya AGNONDJI</p>
                <p className='pb-5 text-sm'>
                  <span>2021 | </span>
                  <span>UGB Saint-Louis, Sénégal.</span>
                </p>
                <p className='pb-2'><span className='font-semibold'>Co-encadrant :</span> <span>Aliou DIOP (UGB)</span></p>
                <p>
                 <span className='font-semibold'>Titre :</span> <span>
                 Modèle de régression Poisson-Gamma à inflation de zéros et applications
                  </span>
                </p>
              </div>
              <div className='shadow-md shadow-amber-600 p-7 rounded-xl'>
                <p className='font-black pb-2'>Maël QUATREVAUX</p>
                <p className='pb-5 text-sm'>
                  <span>2021 | </span>
                  <span>UBS Vannes, France.</span>
                </p>
                <p className='pb-2'><span className='font-semibold'>Co-encadrant :</span> <span>Aurélien RAGOT (Micropole Nord Ouest)</span></p>
                <p>
                 <span className='font-semibold'>Titre :</span> <span>
                  Stage Consultant Buisines Intelligence
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}
