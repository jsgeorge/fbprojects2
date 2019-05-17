import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/header";
import HomePage from "./components/homepage";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Listing from "./components/posts/listing";
import Settings from "./components/pages/settings";
import AddProject from "./components/posts/add";
import Detail from "./components/posts/detail";
import EditProject from "./components/posts/edit";
import User from "./components/user";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="firePROJECTS" />

          <div className="pages">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/auth/login" component={Login} />
              <Route exact path="/auth/register" component={Register} />
              <Route exact path="/projects" component={Listing} />
              <Route exact path="/projects/add" component={AddProject} />
              <Route exact path="/projects/:id" component={Detail} />
              <Route exact path="/projects/:id/edit" component={EditProject} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/user" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
