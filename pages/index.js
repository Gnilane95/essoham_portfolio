import Layout from "../components/layout/Layout";
import SectionAboutme from "../components/home/SectionAboutme";
import Navbar from "../components/header/Navbar";
import Hero from "../components/header/Hero";
import { NextSeo } from "next-seo";
import SectionResearch from "../components/home/SectionResearch";

export default function Home() {
  return (
    <Layout>
      <NextSeo
        title="Essoham ALI | Home"
        titleTemplate="Essoham ALI"
        defaultTitle="Essoham ALI"
        description="Welcome to my portfolio, I'm Essoham ALI, Ph.D. in Applied Mathematics."
        canonical="https://www.aliessoham-maths.fr"
        openGraph={{
          url: "https://www.aliessoham-maths.fr",
          title: "Essoham ALI",
          description:
            "Welcome to my portfolio, I'm Essoham ALI, Ph.D. in Applied Mathematics.",
          site_name: "Essoham ALI",
        }}
      />
      <Navbar />
      <div className="md:flex md:space-x-6">
        <div className="md:w-1/3 md:pl-4">
          <Hero />
        </div>
        {/* Home section */}
        <div className=" md:flex-1 md:mt-10 pr-5 pl-5 md:pr-28 md:pl-10 text-gray-600">
          <SectionAboutme/>
          <SectionResearch />
        </div>
      </div>
    </Layout>
  );
}
