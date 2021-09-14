import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllPagesLayout from "./layout/AllPages.Layout";
import LandingPage from "./features/landingPage/LandingPage";
import HomePage from "./features/homePage/HomePage";
import ActivatePage from "./features/activationPage/ActivatePage";
import ForgotPwPage from "./features/forgotPwPage/ForgotPwPage";

function App() {
  return (
    <AllPagesLayout>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return <LandingPage></LandingPage>;
            }}
          ></Route>
          <Route
            exact
            path="/home"
            component={() => {
              return <HomePage></HomePage>;
            }}
          ></Route>
          <Route
            exact
            path="/activate/:token"
            component={() => {
              return <ActivatePage></ActivatePage>;
            }}
          ></Route>
          <Route
            exact
            path="/forgotPw/:token"
            component={() => {
              return <ForgotPwPage></ForgotPwPage>;
            }}
          ></Route>
        </Switch>
      </Router>
    </AllPagesLayout>
  );
}

export default App;
