import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Login } from "./pages/login/components/presentation/Login";
import { Home } from "./pages/home/components/Home";
import { isAuthenticated } from "../src/services/auth";

interface PrivateRouteProps {
  component: any;
  exact: any;
  path: any;
}
export function Routes() {
  const PrivateRoute = ({
    component: Component,
    ...rest
  }: PrivateRouteProps) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />

        <Route
          path="/app-store"
          component={() => {
            window.location.href = "https://play.google.com/store/";
            return null;
          }}
        />
      </Switch>
    </Router>
  );
}
