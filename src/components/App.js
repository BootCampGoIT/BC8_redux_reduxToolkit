import React, { createContext } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import useLanguagePersistor from "../hooks/useLanguagePersistor";

export const LanguageContext = createContext();

const App = () => {
  const [language, setLanguage] = useLanguagePersistor();
  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Header />
        <Main />
      </LanguageContext.Provider>
    </>
  );
};

export default App;
