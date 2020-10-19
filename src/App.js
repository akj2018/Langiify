import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import SoloModePage from "./pages/solo-mode-page/solo-mode-page.component";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/dashboard" component={HomePage} />
        <Route exact path="/solo-mode" component={SoloModePage} />
      </Switch>
    </div>
  );
}

export default App;
