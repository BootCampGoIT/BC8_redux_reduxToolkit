import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const NavigationListItem = ({
  isAuth,
  path,
  exact,
  name,
  isPrivate,
  restricted,
  displayName,
}) => {
  return (
    <>
      {!isPrivate && !restricted && (
        <li className='navListItem' key={path}>
          <NavLink
            to={path}
            exact={exact}
            className='navLink'
            activeClassName='navLinkActive'>
            {name.toUpperCase()}
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
              ? displayName.toUpperCase() + name.toUpperCase()
              : name.toUpperCase()}
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
            {name.toUpperCase()}
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
