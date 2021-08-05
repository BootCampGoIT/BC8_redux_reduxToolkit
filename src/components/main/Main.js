import React from "react";
import { Switch, Route } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";
import contextLangHoc from "../hoc/contextLangHoc";
import Section from "../section/Section";

const Main = ({ language }) => {
  return (
    <Switch>
      {mainRoutes.map(({ path, exact, component: MyComponent, name }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={(props) => (
            <Section title={language.navigation[name]}>
              <MyComponent {...props} />
            </Section>
          )}
        />
      ))}
    </Switch>
  );
};

export default contextLangHoc(Main);
