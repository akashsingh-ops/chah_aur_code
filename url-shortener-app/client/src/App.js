// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UrlShortener from "./components/UrlShortener";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>URL Shortener App</h1>
        <Switch>
          <Route exact path="/" component={UrlShortener} />
          <Route path="/login" component={AuthForm} />
          <Route path="/register" component={AuthForm} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
