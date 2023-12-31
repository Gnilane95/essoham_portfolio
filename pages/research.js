import React from "react";
import Layout from "../components/layout/Layout";
import Navbar from "../components/header/Navbar";
import { NextSeo } from "next-seo";
import Supervising from "../components/shared/Supervising";
import SectionSearchInProgress from "../components/home/SectionSearchInProgress";
import { Publication } from "../components/shared/Publication";
import Preprints from "../components/shared/Preprints";

export default function research() {
  return (
    <Layout>
      <NextSeo
        title="Essoham ALI | Research"
        titleTemplate="Essoham ALI"
        defaultTitle="Essoham ALI"
        description="Welcome to my portfolio, I'm Essoham ALI, Ph.D. in Applied Mathematics. In this page, you will see my researches, my research topics and my supervisings."
        canonical="https://www.aliessoham-maths.fr/research"
        openGraph={{
          url: "https://www.aliessoham-maths.fr/research",
          title: "Essoham ALI | Research",
          description:
            "Welcome to my portfolio, I'm Essoham ALI, Ph.D. in Applied Mathematics.",
          site_name: "Essoham ALI",
        }}
      />
      <Navbar />
      <SectionSearchInProgress/> 
      <Preprints/>
      <Publication/>
      <Supervising/>
      
    </Layout>
  );
}
