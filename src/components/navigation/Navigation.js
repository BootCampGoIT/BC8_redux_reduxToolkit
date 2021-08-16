import React, { useContext } from "react";
import { connect } from "react-redux";
import languages from "../../languages";
import { signOut } from "../../redux/auth/authActions";
import { mainRoutes } from "../../routes/mainRoutes";
import { LanguageContext } from "../App";
import NavigationListItem from "./NavigationListItem";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = ({ isAuth, signOut }) => {
  const language = useContext(LanguageContext);
  return (
    <NavigationContainer>
      <ul className='navList'>
        {mainRoutes.map((route) => (
          <NavigationListItem {...route} key={route.path} isAuth={isAuth} />
        ))}
        {isAuth && (
          <li className='navLink' onClick={() => signOut()}>
            {languages[language].header.navigation.logout}
          </li>
        )}
      </ul>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.idToken, 
  };
};

export default connect(mapStateToProps, { signOut })(Navigation);
