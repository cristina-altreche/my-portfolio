import React from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components";
import Portfolio from "./components/Portfolio";
// import Resume from "./components/Resume";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      {/* <Route path="/resume" component={Resume} /> */}
      <Route path="/contacts" component={Contacts} />
    </>
  );
}

export default App;
