import React, { Suspense } from "react";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import { MainContainer } from "./MainStyled";

const Main = ({ isAuth }) => {
  return (
    <MainContainer>
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoute {...route} key={route.path} isAuth={isAuth} />
            ) : (
              <PublicRoute {...route} key={route.path} isAuth={isAuth} />
            )
          )}
        </Switch>
      </Suspense>
    </MainContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.idToken,
  };
};
export default connect(mapStateToProps)(Main);
