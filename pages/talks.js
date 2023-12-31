import React from "react";
import Layout from "../components/layout/Layout";
import Navbar from "../components/header/Navbar";
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
      <div className="xl:px-56 lg:px-28 sm:px-7 md:px-16 text-justify my-16">
        <SiteHeader title={" My Talks"} />
        <div className="mt-20">
          <Conference/>
        </div>
      </div>
      <div className="my-16"></div>
    </Layout>
  );
}
