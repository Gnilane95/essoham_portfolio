import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import en from "../locales/en";
import fr from "../locales/fr";


export function useTranslation() {
  
  const router = useRouter();
  const { locale } = router;
  const [t, setT] = useState(fr);

  useEffect(() => {
    const val = locale === "fr" ? fr : en;
    setT(val);
  }, [locale]);

  return {
    t,
  };
}
