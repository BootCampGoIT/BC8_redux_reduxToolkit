import { useState, useEffect } from "react";
import languages from "../languages";

const useLanguagePersistor = () => {
  const getLocalSTLanguage = () => {
    const lang = JSON.parse(localStorage.getItem("language"));
    return lang || languages.ukrainian.title; //"english"
  };

  const [language, setLanguage] = useState(getLocalSTLanguage());

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
  }, [language]);

  return [language, setLanguage];
};

export default useLanguagePersistor;
