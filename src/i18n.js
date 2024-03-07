import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./assets/Locale/En.json"
import translationAr from "./assets/Locale/Ar.json"
import languagedetector from "i18next-browser-languagedetector"


const resources = {
  en: {
    translation:translationEn
  },
  ar: {
    translation:translationAr
  }
};

i18n
  .use(languagedetector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false // react already safes from xss
    },react:{
        useSuspense:false
    }
  });

  export default i18n;