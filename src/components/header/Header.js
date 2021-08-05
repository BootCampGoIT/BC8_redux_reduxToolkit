import React from "react";
import Navigation from "../navigation/Navigation";
import LanguageSwitcher from "../switchers/LanguageSwitcher";

const Header = () => {
  return (
    <>
      <header>
        <h2>Test</h2>
        <LanguageSwitcher />
        <Navigation />
      </header>
    </>
  );
};

export default Header;
