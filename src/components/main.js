/* eslint-disable no-unused-expressions */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Resume from "./resume";
import landingPage from "./landingpage";
import About from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";


const Main = () => (
    <Switch>
        <Route exact path="/" component={landingPage} />
        <Route path="/aboutme" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Main;