import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useTranslation } from "../../hooks/translation.hook";
import { useTranlation } from "../hooks/translation.hook";

export default function Translation() {
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

    }
}
