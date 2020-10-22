import React from "react";
import Math from "./Pages/Math";
import Count from "./Pages/Count";
import Match from "./Pages/Match";
import Main from "./Pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/math" component={Math} />
            <Route path="/match" component={Match} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
