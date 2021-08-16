import React from "react";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import Navigation from "../navigation/Navigation";
import { HeaderContainer } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderContainer>
      <LanguageSwitcher />
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
