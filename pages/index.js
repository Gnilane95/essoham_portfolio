import Layout from "../components/layout/Layout";
import SectionAbout from '../components/home/SectionAbout';
import SectionContact from "../components/home/SectionContact";
import Navbar from '../components/header/Navbar';
import Hero from "../components/header/Hero";
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <Layout>
      <NextSeo
        title="Essoham ALI | Home"
        description="Welcome to my portfolio, I'm Essoham ALI, Ph.D. in Applied Mathematics."
      />
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
