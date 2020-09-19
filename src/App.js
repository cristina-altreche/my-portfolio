import React from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
// import Contacts from "./components/Contacts";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      {/* <Route path="/contacts" component={Contacts} /> */}
      <Route path="/resume" component={Resume}/>
    </>
  );
}

export default App;
