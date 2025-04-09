import React from "react";
import SiteHeader from "../shared/SiteHeader";

export default function SectionResearch() {
  return (
    <>
      <div className="text-justify pb-10">
        <SiteHeader title={"Research interests"}/>
        <p className="sm:leading-relaxed lg:leading-relaxed md:leading-loose md:text-base pb-2">
        My research primarily focuses on the interface between theory and application in the modeling of zero-inflated count data, missing data mechanisms, and statistical learning. I am particularly interested in the methodological and computational challenges posed by count data, especially in the presence of zero inflation, multicollinearity, and missingness.

        </p>
        <p className="sm:leading-relaxed lg:leading-relaxed md:leading-loose md:text-base pb-2">
        More specifically, my work involves developing and studying the theoretical properties of estimation techniques tailored to zero-inflated count models affected by nonresponse, drawing on tools from statistical learning and regularization. I also explore high-dimensional settings where the number of covariates is large, further complicating inference and variable selection. My ultimate goal is to contribute robust and interpretable solutions that are applicable to real-world problems, particularly in health economics, environmental science, and social data.
        </p>
      </div>
    </>
  );
}
