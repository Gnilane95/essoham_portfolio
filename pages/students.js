import React from "react";
import Layout from "../components/layout/Layout";
import Navbar from "../components/header/Navbar";
import Hero from "../components/header/Hero";
import { NextSeo } from "next-seo";
import SiteHeader from "../components/shared/SiteHeader";
import PhDStudent from "../components/shared/PhDStudent";
import MScStudent from "../components/shared/MScStudent";

export default function students() {
  return (
    <Layout>
      <NextSeo
        title="Essoham ALI | Students"
        titleTemplate="Essoham ALI"
        defaultTitle="Essoham ALI"
        description="Welcome to my portfolio, I'm Essoham ALI, Ph.D. in Applied Mathematics. In this page, you will see my students."
        canonical="https://www.aliessoham-maths.fr/students"
        openGraph={{
          url: "https://www.aliessoham-maths.fr/students",
          title: "Essoham ALI | Students",
          description:
            "Welcome to my portfolio, I'm Essoham ALI, Ph.D. in Applied Mathematics. In this page, you will see my .",
          site_name: "Essoham ALI",
        }}
      />
      <Navbar />
      <div className="md:flex md:space-x-6">
        <div className="md:w-1/3 md:pl-4">
          <Hero />
        </div>
        <div className="md:flex-1 md:mt-10 pr-5 pl-5 md:pr-28 md:pl-10">
          <div className="">
            <SiteHeader title={"Students"} />
            <div className="">
              <PhDStudent />
              <MScStudent />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
