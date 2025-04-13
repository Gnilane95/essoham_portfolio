import React from "react";
import Layout from "../components/layout/Layout";
import Navbar from "../components/header/Navbar";
import Hero from "../components/header/Hero";
import { NextSeo } from "next-seo";
import SubmittedOrToBesubmitted from "../components/home/SubmittedOrToBesubmitted";
import PeerReviewedPublications from "../components/home/PeerReviewedPublications";
import InterdisciplinaryArticles from "../components/home/InterdisciplinaryArticles";
import ArticlesInprogress from "../components/home/ArticlesInProgress";

export default function publications() {
  return (
    <Layout>
      <NextSeo
        title="Essoham ALI | Publications"
        titleTemplate="Essoham ALI"
        defaultTitle="Essoham ALI"
        description="Welcome to my portfolio, I'm Essoham ALI, Ph.D. in Applied Mathematics. In this page, you will see my publications."
        canonical="https://www.aliessoham-maths.fr/publications"
        openGraph={{
          url: "https://www.aliessoham-maths.fr/publications",
          title: "Essoham ALI | Publications",
          description:
            "Welcome to my portfolio, I'm Essoham ALI, Ph.D. in Applied Mathematics.In this page, you will see my publications.",
          site_name: "Essoham ALI",
        }}
      />
      <Navbar />
      <div className="md:flex md:space-x-6">
        <div className="md:w-1/3 md:pl-4">
          <Hero />
        </div>
        <div className="md:flex-1 md:mt-10 pr-5 pl-5 md:pl-10 md:pr-28">
          <ArticlesInprogress/>
          <SubmittedOrToBesubmitted/>
          <PeerReviewedPublications/>
          <InterdisciplinaryArticles/>
        </div>
      </div>
      
    </Layout>
  );
}
