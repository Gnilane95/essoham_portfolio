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
    <div className="pl-9">
        <nav className="bg-slate-800g text-gray-500 flex justify-evenlyj  items-center space-x-44 pb-10g lg:pb- lg:py-10 sm:px-10 md:px-20 lg:px-40 xl:px-48">
          {/* Link for home */}
          <Link
            href="/"
            className="font-bold sm:text-xl md:text-xl lg:text-xl sm:mt-10 lg:mt-0">
            <span className="text-gray-600 border-b-4 border-transparent hover:border-gray-600"> Essoham ALI</span>
          </Link>
          <FullscreenNavbar />
          {/* Nav Items */}
          <div className="lg:flex lg:items-center lg:space-x-7 text-xl font-semibold sm:hidden pl-9">
            <Link href="/publications" className="border-b-4 border-transparent hover:border-gray-500 transition-all duration-300">
              {t.menu.publications} Publications
            </Link>
            <Link href="/teaching" className="border-b-4 border-transparent hover:border-gray-500 transition-all duration-300">
              {t.menu.teaching}
            </Link>
            <Link href="/talks" className="border-b-4 border-transparent hover:border-gray-500 transition-all duration-300">
              {t.menu.talks}
            </Link>
            <Link href="/students" className="border-b-4 border-transparent hover:border-gray-500 transition-all duration-300">
              {t.menu.students} Students
            </Link>
          </div>
        </nav>
        <hr class="border-gray-100 border-t-2"></hr>
    </div>
  );
}
