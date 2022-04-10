import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../components/About";

function Routes() {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
        </Switch>
    );
}

export default Routes;