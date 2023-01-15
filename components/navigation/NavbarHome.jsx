import Link from "next/link";
import Typical from "react-typical";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import FullscreenNavbar from "../FullscreenNavbar";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useTranslation } from "../../hooks/translation.hook";

export default function NavbarHome() {
  const [currentLang, setCurrentLang] = useState("");
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  useEffect(() => {
    setCurrentLang(locale);
  }, [locale]);

  const changeLocale = () => {
    debugger;
    const locale = currentLang === "en" ? "fr" : "en";
    setCurrentLang(locale);
    router.push("/", "/", { locale });
  };
  return (
    <div className="">
      <div className="bg-[url('../public/assets/bg.jpg')] h-[82%] w-full xl:px-44 lg:px-20 sm:px-5 md:px-24 lg:pb-36 sm:pb-16 relative text-white ">
        <nav className="flex justify-between items-center lg:py-10">
          <Link
            href="/"
            className="font-bold sm:text-2xl md:text-4xl lg:text-2xl sm:mt-10 lg:mt-0 lg:uppercase"
          >
            <span className="text-amber-700 lg:pl-40 xl:pl-48">
              Essoham<span className="text-white">.ALI</span>
            </span>
          </Link>
          <FullscreenNavbar />
          <div className="lg:flex lg:space-x-7 text-xl font-semibold sm:hidden">
            <div className="w-24 font-light underline cursor-pointer" onClick={changeLocale}>
              {currentLang === "en" ? "Francais" : "English"}
            </div>
            <Link href="/research" className="hover:text-amber-600">
              {t.menu.research}
            </Link>
            <Link href="/publications" className="hover:text-amber-600">
              {t.menu.publications}
            </Link>
            <Link href="/teaching" className="hover:text-amber-600">
              {t.menu.teaching}
            </Link>
            <Link href="/talks" className="hover:text-amber-600">
              {t.menu.talks}
            </Link>
          </div>
        </nav>
        {/* hero */}
        <div className="">
          <div className="lg:flex lg:justify-between lg:space-x-7 lg:items-center pt-10">
            <div className="flex flex-col items-center">
              {/* img for sm */}
              <div className=" rounded-full flex shadow-lg pb-3 px-2 border-b-2 mb-5 lg:hidden">
                <img
                  src="../assets/essoham.jpg"
                  alt=""
                  className="rounded-full h-48 w-48 md:w-72 md:h-72"
                />
              </div>{" "}
              <div className="flex text-3xl gap-2 mb-5">
                <Link href="https://scholar.google.com/citations?hl=fr&user=eUeEmdAAAAAJ&view_op=list_works&sortby=pubdate">
                  <SiGooglescholar />
                </Link>
                <Link href="#">
                  <AiFillLinkedin />
                </Link>
                <Link href="#">
                  <AiFillTwitterSquare />
                </Link>
              </div>
              <p className="text-xl md:text-2xl lg:text-xl">Hello, I'm Essoham ALI</p>
              <h1 className="lg:text-lg sm:text-sm md:text-2xl pt-5 sm:text-center h-12 font-semibold">
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ph.D. in Applied Mathematics",
                    2000,
                    "Attaché Temporaire à la recherche et à l'enseignement",
                    2000,
                  ]}
                />
              </h1>
              <p className="pt-5 sm:text-center md:text-2xl lg:text-xl">
                I am, actually, an temporary Research and Teaching Attached (ATER).
              </p>
              <div className="mt-10 flex justify-center">
                <Link
                  href="cv_EA.pdf"
                  download="CV Essoham ALI"
                  className="btn bg-amber-900 border-white px-16 rounded-2xl hover:bg-slate-50 hover:text-slate-900"
                >
                  Resume
                </Link>
              </div>
            </div>
            {/* img for lg */}
            <div className=" lg:rounded-full lg:flex lg:shadow-lg lg:pb-3 lg:px-2 lg:border-b-2 sm:hidden">
              <img src="../assets/essoham.jpg" alt="" className="lg:rounded-full lg:h-64 lg:w-64" />
            </div>
          </div>
        </div>
        <img
          src="../assets/shape-bg.png"
          alt=""
          className="absolute bottom-0 z-50 lg:h-32 w-screen left-0 shadow-md"
        />
      </div>
    </div>
  );
}
