import React from "react";
import Layout from "../components/layout/Layout";
import Navbar from "../components/header/Navbar";
import Hero from "../components/header/Hero";
import { NextSeo } from "next-seo";
import SiteHeader from "../components/shared/SiteHeader";
import Conference from "../components/shared/Conference";

export default function talks() {
  return (
    <Layout>
      <NextSeo
        title="Essoham ALI | Talks"
        titleTemplate="Essoham ALI"
        defaultTitle="Essoham ALI"
        description="Welcome to my portfolio, I'm Essoham ALI, Ph.D. in Applied Mathematics. In this page, you will see my conferences, seminars and my research stays abroad."
        canonical="https://www.aliessoham-maths.fr/talks"
        openGraph={{
          url: "https://www.aliessoham-maths.fr/talks",
          title: "Essoham ALI | Talks",
          description:
            "Welcome to my portfolio, I'm Essoham ALI, Ph.D. in Applied Mathematics. In this page, you will see my conferences, seminars and my research stays abroad.",
          site_name: "Essoham ALI",
        }}
      />
      <Navbar />
      <div className="flex space-x-8">
        <div className="w-1/3">
          <Hero />
        </div>
        <div className="xl:px-56j lg:px-28j sm:px-7h md:px-16j text-justify my-14">
        <SiteHeader title={" My Talks"} />
        <div className="mt-20">
          <Conference/>
        </div>
        </div>
      </div>
    </Layout>
  );
}
