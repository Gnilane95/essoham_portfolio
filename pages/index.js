import Layout from "../components/layout/Layout";
import SectionAbout from '../components/home/SectionAbout';
import SectionContact from "../components/home/SectionContact";

export default function Home() {
  return (
    <Layout title = 'Accueil' metaContent ='Bienvenue sur ma page web, Je suis Essoham ALI, Ph.D. in Mathematics Applied' >
      {/* Home section */}
      <div className='my-28'>
        <SectionAbout/>
        <SectionContact/>
      </div>
    </Layout>
  )
}
