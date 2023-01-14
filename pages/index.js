import Layout from "../components/layout/Layout";
import SectionAbout from '../components/home/SectionAbout';
import SectionContact from "../components/home/SectionContact";
import NavbarHome from '../components/navigation/NavbarHome';

export default function Home() {
  return (
    <Layout title = 'Home' metaContent ="Welcome to my website, I'm Essoham ALI, Ph.D. in Applied Mathematics" >
      <NavbarHome />
      {/* Home section */}
      <div className='my-28'>
        <SectionAbout/>
        <SectionContact/>
      </div>
    </Layout>
  )
}
