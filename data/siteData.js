const publicationsData = [
  {
    title: "Statistical inference in a Zero-Inflated Bell regression model",
    slug: "statistical-inference-in-a-zero-inflated-bell-regression-model",
    journal: "Mathematical Methods of Statistics",
    authors: ["Essoham Ali", "Mamadou Lamine Diop", "Aliou Diop"],
    publishAt: "31, 91–104 (2022)",
    year: "2022",
    to: "https://link.springer.com/article/10.3103/S1066530722030012",
    id: 2,
  },
  {
    title:
      "A simulation-based study of ZIP regression with various zero-inflated submodels.",
    suld: "a-simulation-based-study-of-zip-regression-with-various-zero-inflated-submodels",
    journal: "Communications in Statistics - Simulation and Computation",
    authors: ["Essoham Ali"],
    year: "2022",
    publishAt: "DOI :10.1080/03610918.2022.2025840",
    to: "https://www.tandfonline.com/doi/abs/10.1080/03610918.2022.2025840",
    id: 3,
  },
  {
    title: "A constrained marginal zero-inflated binomial regression model.",
    journal: "Communications in Statistics - Theory and Methods",
    sulg: "trained-marginal-zero-inflated-binomial-regression",
    authors: ["Essoham Ali", "Diop A.", "Dupuy J.-F"],
    year: "2022",
    publishAt: "51:18, 6396-6422 (2022)",
    to: "https://www.tandfonline.com/doi/abs/10.1080/03610926.2020.1861296",
    id: 4,
  },
  {
    title:
      "16S metagenomic comparison of Plasmo-dium falciparum infected and non-infected Anopheles gambiae and Anopheles funestus Microbiota from Senegal",
    slug: "16s-metagenomic-comparison-of-plasmo-dium-falciparum-infected-and-non-infected-anopheles-gambiae-and-anopheles-funestus-microbiota-from-senegal",
    journal: "American Journal of Tropical Medicine Hygiene",
    authors: [
      "Hubert Bassene",
      "El Hadji Amadou Niang",
      "Florence Fenollar ",
      "Dipankar Bachar",
      "Souleymane Doucouré",
      "Essoham Ali",
      "Caroline Michelle",
      "Didier Raoult",
      "Cheickh Sokhna",
      "Oleg Mediannikov",
    ],
    year: "2018",
    publishAt: "99(6): 1489–1498",
    to: "https://pubmed.ncbi.nlm.nih.gov/30350766/",
    id: 5,
  },
];

const researchs = [
  {
    id: 1,
    topic: "Count data models, regressions, excess zeros",
  },
  {
    id: 2,
    topic: "Mixing models, marginal models, missing data",
  },
  {
    id: 3,
    topic: "Machine Learning Techniques for Count data",
  },
  {
    id: 4,
    topic:
      "Computational statistics, applied statistics, statistical learning, data science",
  },
  {
    id: 5,
    topic: "Analysis of health economics, medicine, insurance data",
  },
];

const topicOfSearch = [
  {
    id: 1,
    topic: "Marginal models, Zero-inflated models.",
  },
  {
    id: 2,
    topic: "Statistical learning.",
  },
  {
    id: 3,
    topic: "Advanced statistics.",
  },
  {
    id: 4,
    topic: "Applications: health economics, medicine.",
  },
];

const supervisings = [
  {
    name: "Ibrahim LAWANI",
    year: "2022-2023",
    location: "UGB Saint-Louis, Sénégal.",
    co_supervisor: "Aliou DIOP (UGB)",
    soutenance_at: "03-09-2023",
    title:
      "Comparison between the zero inflated Poisson and the hurdle model for the modeling of count data",
    id: 1,
  },
  {
    name: "Gnon Siya AGNONDJI",
    year: "2022-2023",
    location: "UGB Saint-Louis, Sénégal.",
    co_supervisor: "Aliou DIOP (UGB)",
    soutenance_at: "03-09-2023",
    title: "Zero inflated Poisson-Gamma regression model with applications",
    id: 2,
  },
  {
    name: "Maël QUATREVAUX",
    year: "2022-2023",
    location: "UBS Vannes, France.",
    soutenance_at: "28-09-2023",
    co_supervisor: "Aurélien RAGOT (Micropole Nord Ouest)",
    title: "Internship Consultant Buisines Intelligence",
    id: 3,
  },
];

const teachings = [
  {
    id: 1,
    year: "2023-2024",
    university: "Catholic University of the West, Angers",
    comments: null,
    courses: [
      {
        type: "Courses/TD",
        id: 1,
        topic: "Probabilities ( Bachelor 1, Business Data Science)",
      },
      {
        type: "Courses/TD",
        id: 2,
        topic: "Linear models (Bachelor 2, Business Data Science)",
      },
      {
        type: "Courses/TD",
        id: 3,
        topic:
          "Statistical programming with R and SAS (Bachelor 2, Business Data Science )",
      },
      {
        type: "Courses/TD",
        id: 4,
        topic: "Factorial methods (Bachelor 2, Business Data Science )",
      },
      {
        type: "Courses/TD",
        id: 5,
        topic: "Survival analysis (Bachelor 2, Business Data Science )",
      },
      {
        type: "Courses/TD",
        id: 5,
        topic: "Chronological series (Bachelor 2, Business Data Science )",
      },
      {
        type: "Courses/TD",
        id: 5,
        topic: "Stochastic process (L3 MIASHS)",
      },
    ],
  },
  {
    id: 1,
    year: "2022-2023",
    university: "South Brittany University (UBS)",
    comments: null,
    courses: [
      {
        type: "Courses/TD",
        id: 1,
        topic: "Elements of Statistics L1 (Mathematics)",
      },
      {
        type: "Courses/TD",
        id: 2,
        topic: "Linear Models and Applications L2 (Mathematics)",
      },
      {
        type: "Courses/TD",
        id: 3,
        topic: "Programming and statistical software with R (L3 Mathematics)",
      },
      {
        type: "Courses/TD",
        id: 4,
        topic: "Discriminant analysis and logistic regression (L3 Mathematics)",
      },
      {
        type: "Courses/TD",
        id: 5,
        topic: "Python and Machine Learning (L3 Mathematics)",
      },
    ],
  },
  {
    id: 2,
    year: "2021-2022",
    university: "University of Rouen",
    comments: "The following teachings were carried out during my post-doc",
    courses: [
      {
        type: "TD",
        id: 1,
        topic: "Statistics and probability (L2 Informatique, 32 hrs)",
      },
      {
        type: "TD",
        id: 2,
        topic: "Statistics with Python (L2 Informatique, 24 hrs)",
      },
    ],
  },
  {
    id: 3,
    year: "2019-2020",
    university: "Gaston Berger University (Senegal)",
    comments: null,
    courses: [
      {
        type: "TD",
        id: 1,
        topic:
          "Elements ofAnalysis 1 (L1 Mathematics-Physics-Computer Science, 36 hrs)",
      },
      {
        type: "TD/TP",
        id: 2,
        topic: "Numerical Computation (L2 Applied Mathematics, 24 hrs)",
      },
      {
        type: "TD",
        id: 3,
        topic:
          "Statistical Probability (L1 Mathematics-Physics-Computer Science, 32 hrs)",
      },
      {
        type: "TD",
        id: 4,
        topic: "Data analysis with R",
      },
    ],
  },
  {
    id: 4,
    year: "2019-2020",
    university: "MIT University (Senegal)",
    comments: null,
    courses: [
      {
        type: "Courses/TD",
        topic: "Inferential Statistics (L3 Computer Science)",
      },
      {
        type: "Courses/TD",
        topic: "Operations Research (Master of Computer Science)",
      },
      {
        type: "Courses/TD",
        topic:
          "Statistical Probability (L1 Mathematics-Physics-Computer Science, 32 hrs)",
      },
      {
        type: "Courses/TD",
        topic: "data statistics: implementation of statistical methods(L3)",
      },
    ],
  },
];

const conferences = {
  title: "International Conferences",
  talks: [
    {
      id: 1,
      year: "09-2022",
      subject:
        "De la Statistique à la Data Science pour l’économie et l’entreprise du futur.",
      location: null,
    },
    {
      id: 2,
      year: "12-2020",
      subject: "Rencontres des Jeunes Chercheurs Africains en France.",
      location: "France",
    },
    {
      id: 3,
      year: "12-2020",
      subject: "EMA « Mathématiques pour les réseaux » ",
      location: "Madagascar",
    },
    {
      id: 4,
      year: "12-2019",
      subject:
        '3rd edition of "Journées Mathématiques du Sénégal" UGB Saint-Louis.',
      location: "Sénégal",
    },
    {
      id: 5,
      year: "06-2019",
      subject: "Summer School in Statistics and Data Science",
      location: null,
    },
    {
      id: 6,
      year: "09-2018",
      subject:
        'CIMPA " Statistiques des durées de vie et statistiques spatiales " Togo',
      location: "Togo",
    },
  ],
};

const seminaires = {
  title: "Seminars",
  talks: [
    {
      year: "04-2023",
      subject: "A constrained marginal zero-inflated binomial regression model",
      location: "Brest",
    },
    {
      year: "12-2022",
      subject:
        "7èmes Rencontres Statistique - Sciences des données: Environnement et climat",
      location: "Vannes",
    },
    {
      year: "03-2022",
      subject: "Séminaire de groupe de travail de statistique au LMRS",
      location: "Université de Rouen",
    },
    {
      year: "01-2022",
      subject: "Exposé au groupe de travail de statistique au LMRS",
      location: "Université de Rouen",
    },
    {
      year: "05-2019",
      subject:
        "15ème Journée de Statistique de Rennes « Statistique et données »",
      location: null,
    },
  ],
};

const researchAbroad = {
  title: "Research stays abroad",
  talks: [
    {
      id: 1,
      topic: "Erasmus+ mobility grant winner, host laboratory",
      from: "26-02-2021",
      to: "31-05-2021",
      supervisor: "Jean-François DUPUY ( Professor at INSA of Rennes)",
      location: "Institut de Recherche des Mathématiques de Rennes (IRMAR)",
      town: " France",
      full: "Erasmus+ mobility grant winner, host laboratory: Institut de Recherche des Mathématiques de Rennes (IRMAR), France from February 26 to May 31, 2021 under the supervision of Jean-François DUPUY ( Professor at INSA of Rennes)",
    },
    {
      id: 2,
      topic:
        "Laureate of the mobility grant of the CEAMITIC project, host laboratory",
      from: "11-03-2019",
      to: "11-06-2019",
      supervisor: "Jean-François DUPUY ( Professor at INSA of Rennes)",
      location: "stitut de Recherche des Mathématiques de Rennes (IRMAR)",
      town: "France",
      full: "aureate of the mobility grant of the CEAMITIC project, host laboratory: Institut de Recherche des Mathématiques de Rennes (IRMAR), France from March 11 to June 11, 2019 under the supervision of Jean-François DUPUY ( Professor at INSA of Rennes)",
    },
  ],
};

const curentPositionTextOne =
  "Since September 2023, I am a lecturer and researcher in Applied Mathematics and Statistics at the Université Catholique de l'Ouest (UCO), Angers France.  I give lectures in the Institute of Applied Mathematics (IMA). My research work is carried out within the probability and statistics team of the Laboratoire de Mathématiques de Bretagne Atlantique (LMBA), where I am an associate member.";

const curentPositionTextTwo =
  "I obtained my PhD in July 2021 at the Université Gaston Berger de Saint-Louis, Senegal, under the supervision of Aliou Diop and Jean-François Dupuy.";

const oldAboutMeTextOne =
  "Currently, I am an Temporary Research and Teaching Attached (ATER) in Statistics in Laboratoire de Matématique at Bretagne Atlantique (LMBA, UMR CNRS 6205) at Université Bretagne Sud (UBS, Campus of Vannes), since September 2022. Before, I was a Statistics postdoctoral researcher at Laboratoire de Mathématiques Raphael Salem at Rouen University, France. I received a Ph.D. in Statistic applied from Gaston Berger University (UGB) of Saint-Louis, Senegal in july 2021, a thesis directed by Aliou Diop ( UGB, Saint-Louis) and Jean-François Dupuy ( INSA of Rennes, France)";

const oldAboutMeTextTwo =
  "My research interests are motivated by the Zero Inflated (ZI) problems in count data commonly encountered in many fields such as health economics, environment and insurance. My current favorite research focuses on statistical inference (mathematical study: asymptotic properties in these models). I am interested in both theoretical results and practical methods and their application to count data.";

const domainOfResearchText =
  "I am broadly interested in statistical inference in count data models. I am interested both in theoretical results using several estimation methods, the comparison and application of these models on overdispersed data using machine learning algorithms. Below is a (non-exhaustive) list of more specific topics I have worked on:";

const lmba = "http://web.univ-ubs.fr/lmba/index.html";

const uco = "https://www.uco.fr/fr";

const memberOfMAPP = "https://ima.uco.fr/l-ima/";

const univgastonBerger = "https://www.ugb.sn/";

const aliouDiopPortfolio = "http://mai2000.chez.com/ens1/aliou.html";

const jeanFrancoisDupy = "https://dupuy.perso.math.cnrs.fr/";

const personalData = {
  Tel: "(+33) 2 32 95 52 35",
  Bureau: "A 202 (pôle scientifique)",
  Adresse:
    "Université Catholique de l’Ouest, Angers Institut de Mathématiques Appliquée 3 Place André Leroy, 49000 Angers",
  googleScholar:
    "https://scholar.google.com/citations?hl=fr&user=eUeEmdAAAAAJ&view_op=list_works&sortby=pubdate",
  email: "eali@uco.fr",
  twitter: "https://twitter.com/Twitter",
  linkedin: "https://www.linkedin.com/in/essoham-ali-ph-d-285214102/",
};

const curentResearch = [
  {
    id: 1,
    topic:
      "Statistical inference and machine learning in count data modeling on regression performance: An analysis of Mortality of Djallonke Lambs in Senegal",
    town: null,
    contributors: ["Essohan Ali", "Aliou Diop"],
  },
  {
    id: 2,
    topic:
      "Density power divergence estimator for Zero-inflated Bell regression model.",
    town: null,
    contributors: ["Essohan Ali", "Mamadou Lamine Diop", "Aliou Diop"],
  },
  {
    id: 3,
    topic:
      "Count regression and IPW techniques for zero-inflated overdispersed count data with missing covariates",
    town: null,
    contributors: ["Konan Jean Geoffroy Kouakou", "Essoham Ali"],
  },
];

const submitJounalPaPer = [
  {
    id: 1,
    title:
      "Zero-inflated Gamma regression and its inference and applications in semicontinuous data.",
    authors: ["Essoham Ali", "Kim-Hung Pho"],
  },
  {
    id: 2,
    title:
      "A novel model for count data: Zero-Inflated Probit Bell model with applications",
    authors: ["Essoham ali", "Kim-Hung Pho"],
  },
  {
    id: 3,
    title:
      "A simulation-based study of Zero-inflated Bernoulli model with various models for the susceptible probability",
    authors: ["Essoham Ali", "Kim-Hung Pho"],
  },
];

const cvlink = "cv_eali.pdf";

module.exports = {
  cvlink,

  univgastonBerger,
  aliouDiopPortfolio,
  jeanFrancoisDupy,

  uco,
  lmba,
  memberOfMAPP,

  publicationsData,
  supervisings,
  teachings,
  conferences,
  seminaires,
  researchAbroad,
  researchs,
  curentResearch,
  topicOfSearch,
  submitJounalPaPer,

  curentPositionTextOne,
  curentPositionTextTwo,
  oldAboutMeTextOne,
  oldAboutMeTextTwo,
  domainOfResearchText,
  personalData,
};
