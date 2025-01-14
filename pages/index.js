import Layout from "../components/layout/Layout";
import SectionContact from "../components/home/SectionContact";
import Navbar from "../components/header/Navbar";
import Hero from "../components/header/Hero";
import { NextSeo } from "next-seo";
import SectionResearch from "../components/home/SectionResearch";
import SectionContactInformation from "../components/home/SectionContactInformation";

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
      <div className="flex space-x-16">
        <Hero />
        {/* Home section */}
        <div className="mt-10 pr-28 text-gray-600">
          <SectionContact />
          <SectionResearch />
        </div>
      </div>
    </Layout>
  );
}
