import React from 'react'
import Layout from "../components/layout/Layout";

export default function teaching() {
  return (
    <Layout title = 'Teaching' metaContent ='Bienvenue sur ma page web, Je suis Essoham ALI, Ph.D. in Mathematics Applied' >
      <div className='my-16'>
        <h1 className='uppercase text-center font-black underline text-3xl text-amber-700'>
          Teaching
        </h1>
        <div className='grid grid-cols-2 mx-20 gap-7'>
          <div className='shadow-lg p-7 rounded-lg mt-16'>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none'>2022-2023</span>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none ml-5'>Université Bretagne Sud (UBS)</span>
            <div className='mt-5'>
              <ul className='leading-loose'>
                <li>- Cours/TD d’Elements de Statistique L1 (Mathématique)</li>
                <li>- Cours/TD de Modèles linéaires et applications L2 (Mathématique)</li>
                <li>- Cours/TD de Programmation et logiciels statistiques avec R (L3 Mathématique)</li>
                <li>- Cours/TD de Analyse discriminante et régression logistique (L3 Mathématique)</li>
                <li>- Cours/TP de Python et Machine Learning (L3 Mathématique)</li>
              </ul>
            </div>
          </div>
          <div className='shadow-lg p-7 rounded-lg mt-16'>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none'>2021-2022</span>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none ml-5'>
              Université de Rouen
            </span>
            <div className='mt-5'>
              <ul className='leading-loose'>
                <li>- TD de statistique et probabilité (L2 informatique, 32h)</li>
                <li>- TP de Gestion de l’aléatoire avec Python (L2 Informatique, 24 h)</li>
              </ul>
            </div>
          </div>
          <div className='shadow-lg p-7 rounded-lg mt-16'>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none'>2019-2020</span>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none ml-5'>
              Université Gaston Berger (Sénégal)
            </span>
            <div className='mt-5'>
              <ul className='leading-loose'>
                <li>- TD d’Analyse 1 ( L1 Mathématique-Physique-Informatique, 36 h)</li>
                <li>- TD/TP de Calcul numérique ( L2 Mathématique Appliquée, 24 h)</li>
                <li>- TD de Probabilité Statistique (L1 Mathématique-Physique-Informatique, 32 h)</li>
                <li>- TP analyse des données avec R</li>
              </ul>
            </div>
          </div>
          <div className='shadow-lg p-7 rounded-lg mt-16'>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none'>2019-2020</span>
            <span className='btn bg-slate-800 hover:bg-amber-700 cursor-none border-none ml-5'>
             MIT University (Sénégal)
            </span>
            <div className='mt-5'>
              <ul className='leading-loose'>
                <li>- Cours/TD de Statistique inférentielle ( L3 Parcours informatique, 30 h)</li>
                <li>- Cours/TD de Recherche opérationnelle ( Master d’Informatique, 30 h)</li>
                <li>- Cours/TP de statistique des données: mise en oeuvre de méthodes statistiques (L3, 42 h)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
