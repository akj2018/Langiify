import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import DashboardPage from "./pages/dashboard-page/dashboard.component";
import SoloModePage from "./pages/solo-mode-page/solo-mode-page.component";
import DualModePage from "./pages/dual-mode-page/dual-mode-page.component";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/solo-mode" component={SoloModePage} />
        <Route exact path="/dual-mode" component={DualModePage} />
      </Switch>
    </div>
  );
}

export default App;
