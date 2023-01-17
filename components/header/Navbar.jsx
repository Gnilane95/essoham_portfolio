import Link from "next/link";
import FullscreenNavbar from "../FullscreenNavbar";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useTranslation } from "../../hooks/translation.hook";

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
        <nav className="bg-slate-800 text-white flex justify-between items-center pb-10 lg:pb- lg:py-10 sm:px-10 md:px-20 lg:px-40 xl:px-48">
          <Link
            href="/"
            className="font-bold sm:text-2xl md:text-4xl lg:text-2xl sm:mt-10 lg:mt-0 lg:uppercase">
            <span className="text-amber-700">
              Essoham<span className="text-white">.ALI</span>
            </span>
          </Link>
          <FullscreenNavbar />
          <div className="lg:flex lg:items-center lg:space-x-7 text-xl font-semibold sm:hidden">
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
            <div className="btn bg-amber-700 ml-10 w-24 font-light cursor-pointer" onClick={changeLocale}>
              {currentLang === "en" ? "Francais" : "English"}
            </div>
          </div>
        </nav>
    </div>
  );
}
