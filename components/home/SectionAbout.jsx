import React from 'react'
import SiteHeader from '../shared/SiteHeader'

export default function SectionPosition() {
  return (
    <div className='xl:px-56f lg:px-28f sm:px-7f md:px-16f text-justify pb-20'>
      <SiteHeader title={"About me"}/>
        <p className='sm:leading-relaxed lg:leading-relaxed md:leading-loose md:text-2xl lg:text-base'>
          Currently, I am an Temporary Research and Teaching Attached (ATER)  in Statistics in Laboratoire de Matématique at Bretagne Atlantique (LMBA, UMR CNRS 6205) at Université Bretagne Sud (UBS, Campus of Vannes), since September 2022.  Before, I was a Statistics postdoctoral researcher at Laboratoire de Mathématiques Raphael Salem at Rouen University, France. I received a Ph.D. in Statistic applied from Gaston Berger University (UGB) of Saint-Louis, Senegal in july 2021, a thesis directed by Aliou Diop ( UGB, Saint-Louis) and Jean-François Dupuy ( INSA of Rennes, France)
        </p>
        <p className='pt-5 sm:leading-relaxed lg:leading-relaxed md:leading-loose md:text-2xl lg:text-base'>
        My research interests are motivated by the Zero Inflated (ZI) problems in count data commonly encountered in many fields such as health economics, environment and insurance. My current favorite research focuses on statistical inference (mathematical study: asymptotic properties in these models). I am interested in both theoretical results and practical methods and their application to count data.
        </p>
    </div>
  )
}
