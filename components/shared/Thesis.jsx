import React from "react";
import SiteHeader from "./SiteHeader";

export default function Thesis() {
  return (
    <div className="mt-20">
      <SiteHeader title={"My Ph.D.thesis and its perspectives"} />
      <div className="my-10">
        My Ph.D thesis in applied mathematics, specializing in statistics, is
        entitled "Marginal regression models for count data with excess zeros".
        It deals with estimation problems in statistical regression models for
        count data known as "zero-inflated ". This type of problem has many
        applications in public health, insurance and engineering.
      </div>

      <div className="my-10">
        In a first work, published in <span className="font-bold">"Communications in Statistics - Theory and
        Methods"</span>, I have studied the theoretical and numerical aspects of
        statistical inference in the marginal binomial zero-inflated regression
        model (a mixture type model). I proposed original estimators of the
        parameters of this model and rigorously established their convergence
        properties (convergence in probability, convergence in law, convergence
        of an asymptotic variance estimator). Then I carried out an exhaustive
        simulation study using the R software, after which he was able to
        confirm the good properties at finite distance of the proposed
        estimators. Finally, I applied the proposed model and inference to the
        study of the problem of non-use of medical care in the USA.
      </div>

      <div className="my-10">
        In a second work, published in <span className="font-bold">"Communications in Statistics -
        Simulation and Computation"</span>, I was interested in the robustness of the
        estimation in zero-inflated regression models, when varying the class
        membership model of the underlying mixture. From this work, I drew some
        very interesting practical conclusions about the degree of robustness of
        zero-inflated models to various deviations from their assumptions.
      </div>

      <div className="my-10">
        Among the different perspectives of my PhD work, I am working on <span className="font-bold">the
        marginal ZIB model</span> in order to extend the field of use of this new model
        by increasing its complexity, in order to better account for the
        complexity of the data encountered (presence of non-linear effects, high
        dimension /Big Data). This model will have to take into account
        non-linear effects closer to the reality of the observed phenomena than
        the linear approximation between the explanatory variables and the
        observed counts (these effects could be introduced through the unknown
        functions, to be estimated). This model will also have to take into
        account the imperfect nature of the observed counts, and in particular,
        the presence of censoring. I should propose one or two estimation
        methods adapted to the proposed models, have implemented them ("R
        package development project") and conducted simulation studies to
        evaluate the performance of the allowing to evaluate the performances of
        the built models.
      </div>
    </div>
  );
}
