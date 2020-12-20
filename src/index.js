import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";

import "./index.css";

import Nav from "./components/Nav";
import HomePage from "/src/pages/HomePage";
import AuthorPage from "/src/pages/AuthorPage";
import PostHerePage from "/src/pages/PostHerePage";
import PostPage from "/src/pages/PostPage";
import Footer from "/src/components/Footer.js";

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exaxt path="/authors" component={AuthorPage} />
      <Route exact path="/contact" component={PostHerePage} />
      <Route exact path="/posts/:id" component={PostPage} />
    </Switch>
    <Footer />
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
