import React from "react";
import mainRoutes from "../../routes/mainRoutes";
import { NavLink } from "react-router-dom";
import contextLangHoc from "../hoc/contextLangHoc";

const Navigation = ({ language }) => {
  return (
    <nav>
      <ul className='navList'>
        {mainRoutes.map(({ name, path, exact }) => (
          <li key={path}>
            <NavLink to={path} exact={exact}>
              {language.navigation[name]}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default contextLangHoc(Navigation);
