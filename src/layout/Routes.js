import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import NotFound from "../components/NotFound";

function Routes() {
    return (
        <Switch>
            <Route exact={true} path="/about">
                <About />
            </Route>

            <Route exact={true} path="/">
                <Home />
            </Route>

            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default Routes;