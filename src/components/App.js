import React from "react";
import Header from "./Header";
import Control from "./Control";

import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <Control />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
