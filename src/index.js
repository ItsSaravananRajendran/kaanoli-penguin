import React from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import ComingSoon from "./Components/ComingSoon";

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" render={() => <ComingSoon />} />
                </Switch>
            </div>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById("index"));
