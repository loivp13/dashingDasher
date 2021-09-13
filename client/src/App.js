import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./features/landingPage/LandingPage";
import HomePage from "./features/homePage/HomePage";
import AllPagesLayout from "./layout/AllPages.Layout";
import ActivatePage from "./features/activationPage/ActivatePage";

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
            path="/activate/:to"
            component={() => {
              return <ActivatePage></ActivatePage>;
            }}
          ></Route>
        </Switch>
      </Router>
    </AllPagesLayout>
  );
}

export default App;
