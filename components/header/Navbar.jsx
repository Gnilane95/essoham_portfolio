import Link from "next/link";
import FullscreenNavbar from "../FullscreenNavbar";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useTranslation } from "../../hooks/translation.hook";
import { cvlink } from "../../data/siteData";

export default function Navbar() {
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
        <nav className="bg-slate-800g text-gray-500 flex justify-evenlyj  items-center space-x-44 pb-10g lg:pb- lg:py-10 sm:px-10 md:px-20 lg:px-40 xl:px-48">
          <Link
            href="/"
            className="font-bold sm:text-2xl md:text-4xl lg:text-2xl sm:mt-10 lg:mt-0 lg:uppercase">
            {/* <span className="text-amber-700"> */}
            <span className="text-gray-700"> Essoham ALI</span>
            {/* </span> */}
          </Link>
          <FullscreenNavbar />
          <div className="lg:flex lg:items-center lg:space-x-7 text-xl font-semibold sm:hidden">
            <Link href="/research" className="hover:text-amber-600">
              {t.menu.research}
            </Link>
            <Link href="/teaching" className="hover:text-amber-600">
              {t.menu.teaching}
            </Link>
            <Link href="/talks" className="hover:text-amber-600">
              {t.menu.talks}
            </Link>
            <Link 
              href={cvlink}
              target="_blank"
              rel="noreferrer" 
              className="btn rounded-full px-4 bg-amber-700 hover:bg-slate-50 hover:text-slate-900"
              >
              Donwload CV
            </Link>
            {/* <div className="btn bg-amber-700 ml-10 w-24 font-light cursor-pointer" onClick={changeLocale}>
              {currentLang === "en" ? "Francais" : "English"}
            </div> */}
          </div>
        </nav>
        <hr class="border-gray-100 border-t-2"></hr>
    </div>
  );
}
