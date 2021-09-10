import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./features/landingPage/LandingPage";
import HomePage from "./features/homePage/HomePage";
import AllPages from "./layout/AllPages.layout";

function App() {
  return (
    <AllPages>
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
        </Switch>
      </Router>
    </AllPages>
  );
}

export default App;
