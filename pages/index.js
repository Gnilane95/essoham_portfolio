import Layout from "../components/layout/Layout";
import SectionAbout from '../components/home/SectionAbout';
import SectionContact from "../components/home/SectionContact";
import Navbar from '../components/header/Navbar';
import Hero from "../components/header/Hero";

export default function Home() {
  return (
    <Layout title = 'Home' metaContent ="Welcome to my website, I'm Essoham ALI, Ph.D. in Applied Mathematics" >
      <Navbar />
      <Hero/>
      {/* Home section */}
      <div className='my-28'>
        <SectionAbout/>
        <SectionContact/>
      </div>
    </Layout>
  )
}
