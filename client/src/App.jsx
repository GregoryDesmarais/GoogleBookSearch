import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
function App(){
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/Saved/" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
