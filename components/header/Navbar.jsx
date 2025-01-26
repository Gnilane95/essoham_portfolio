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
    <div className="px-9">
        <nav className="text-gray-500 flex items-center justify-between md:justify-normal md:gap-52 py-3 md:py-10 md:mx-6">
          {/* Link for home */}
          <Link
            href="/"
            className="font-bold text-xl sm:mt-10 md:mt-0 md:ml-44">
            <span className="text-gray-600 border-b-4 border-transparent hover:border-gray-600"> Essoham ALI</span>
          </Link>
          <FullscreenNavbar />
          {/* Nav Items */}
          <div className="md:flex md:items-center md:space-x-7 text-xl font-semibold sm:hidden ml-9h">
            <Link href="/publications" className="border-b-4 border-transparent hover:border-gray-500 transition-all duration-300">
              {t.menu.publications}Publications
            </Link>
            <Link href="/teaching" className="border-b-4 border-transparent hover:border-gray-500 transition-all duration-300">
              {t.menu.teaching}
            </Link>
            <Link href="/talks" className="border-b-4 border-transparent hover:border-gray-500 transition-all duration-300">
              {t.menu.talks}
            </Link>
            <Link href="/students" className="border-b-4 border-transparent hover:border-gray-500 transition-all duration-300">
              {t.menu.students}Students
            </Link>
          </div>
        </nav>
        <hr class="border-gray-100 border-t-2"></hr>
    </div>
  );
}
