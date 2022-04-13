import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import NotFound from "../pages/NotFound";

function Routes() {
    return (
        <Switch>
            <Route exact={true} path="/">
                <Home />
            </Route>

            <Route exact={true} path="/about">
                <About />
            </Route>

            <Route exact={true} path="/projects">
                <Projects />
            </Route>

            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default Routes;