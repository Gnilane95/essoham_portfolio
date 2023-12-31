import React from "react";
import Layout from "../components/layout/Layout";
import Navbar from "../components/header/Navbar";
import { NextSeo } from "next-seo";
import SiteHeader from "../components/shared/SiteHeader";
import Teach from "../components/shared/Teach";

export default function teaching() {
  return (
    <Layout>
      <NextSeo
        title="Essoham ALI | Teaching"
        titleTemplate="Essoham ALI"
        defaultTitle="Essoham ALI"
        description="Welcome to my portfolio, I'm Essoham ALI, Ph.D. in Applied Mathematics. In this page, you will see my teaching."
        canonical="https://www.aliessoham-maths.fr/teaching"
        openGraph={{
          url: "https://www.aliessoham-maths.fr/teaching",
          title: "Essoham ALI | Teaching",
          description:
            "Welcome to my portfolio, I'm Essoham ALI, Ph.D. in Applied Mathematics. In this page, you will see my teaching.",
          site_name: "Essoham ALI",
        }}
      />
      <Navbar />
      <div className="xl:px-56 lg:px-28 sm:px-7 md:px-16 text-justify my-16">
        <SiteHeader title={"My Teaching"} />
        <div className="">
          <Teach />
        </div>
      </div>
    </Layout>
  );
}
