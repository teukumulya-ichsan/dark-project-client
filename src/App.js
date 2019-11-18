import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import AuthPage from "./pages/Auth";
import Menu from "./pages/Menu";
import About from "./pages/About";

import MainNavigation from "./components/Navigation/MainNavigation";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainNavigation />
        <React.Fragment>
          <main className="main-content">
            <Switch>
              <Redirect from="/" to="/auth" exact />
              <Route path="/auth" component={AuthPage} />
              <Route path="/menu" component={Menu} />
              <Route path="/about" component={About} />
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
