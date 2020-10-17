import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/dashboard" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
