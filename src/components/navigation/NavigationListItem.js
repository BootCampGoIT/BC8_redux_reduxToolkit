import React, { useContext } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import languages from "../../languages";
import { LanguageContext } from "../App";

const NavigationListItem = ({
  isAuth,
  path,
  exact,
  name,
  isPrivate,
  restricted,
  displayName,
}) => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      {!isPrivate && !restricted && (
        <li className='navListItem' key={path}>
          <NavLink
            to={path}
            exact={exact}
            className='navLink'
            activeClassName='navLinkActive'>
            {languages[language].header.navigation[name].toUpperCase()}
          </NavLink>
        </li>
      )}
      {isPrivate && !restricted && isAuth && (
        <li className='navListItem' key={path}>
          <NavLink
            to={path}
            exact={exact}
            className='navLink'
            activeClassName='navLinkActive'>
            {path === "/profile"
              ? displayName.toUpperCase() +
                languages[language].header.navigation[name].toUpperCase()
              : languages[language].header.navigation[name].toUpperCase()}
          </NavLink>
        </li>
      )}
      {!isPrivate && restricted && !isAuth && (
        <li className='navListItem' key={path}>
          <NavLink
            to={path}
            exact={exact}
            className='navLink'
            activeClassName='navLinkActive'>
            {languages[language].header.navigation[name].toUpperCase()}
          </NavLink>
        </li>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    displayName: state.user.displayName,
  };
};

export default connect(mapStateToProps)(NavigationListItem);
