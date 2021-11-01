import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signUp">
          <SignUp />
        </Route>

        <Route exact path="/">
          <Login />
        </Route>

        {/* <Route exact path="/signup-address">
          <Address />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
