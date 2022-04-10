import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../components/About";
import NotFound from "../components/NotFound";

function Routes() {
    return (
        <Switch>
            <Route exact={true} path="/about">
                <About />
            </Route>

            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default Routes;