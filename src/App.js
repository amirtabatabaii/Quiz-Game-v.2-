import React from "react";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/home' component={Home} />
        {/* <Redirect from='/' to='/home' /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
